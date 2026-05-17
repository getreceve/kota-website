import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    // Gracefully skip if Supabase isn't configured yet
    if (!supabaseUrl || !supabaseKey) {
      console.warn("[roi-lead] Supabase env vars not configured — skipping DB write.");
      return NextResponse.json({ ok: true });
    }

    const res = await fetch(`${supabaseUrl}/rest/v1/roi_leads`, {
      method: "POST",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        email: body.email,
        first_name: body.first_name,
        last_name: body.last_name,
        company: body.company,
        title: body.title,
        phone: body.phone ?? null,
        reps: body.reps,
        leads_per_rep: body.leads_per_rep,
        cost_per_lead: body.cost_per_lead,
        close_rate: body.close_rate,
        revenue_per_enrollment: body.revenue_per_enrollment,
        calculated_annual_upside: body.calculated_annual_upside,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("[roi-lead] Supabase error:", text);
      // Still return ok to not block UX on infra issues
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[roi-lead] Unexpected error:", err);
    return NextResponse.json({ ok: false, error: "Internal error" }, { status: 500 });
  }
}
