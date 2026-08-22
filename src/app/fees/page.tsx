export default function FeesPage() {
  return (
    <>
      <section className="bg-gradient-hero text-white py-16 md:py-24 relative overflow-hidden">
        <div className="container-main relative z-10">
          <span className="badge-sky mb-4 inline-block">Fees & Payment</span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">School Fees & Payment Information</h1>
          <p className="text-lg text-white/90 max-w-2xl">Transparent, termly fee schedules and clear payment instructions for parents and guardians.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-main max-w-4xl">
          <h2 className="section-title">Fee Schedule (Sample — NGN)</h2>
          <p className="section-subtitle">Below is a suggested static fee schedule. Replace these numbers with your official fees before publishing.</p>

          <div className="overflow-x-auto mt-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[var(--accent-pale)]">
                  <th className="p-3">Fee Item</th>
                  <th className="p-3">Nursery / KG</th>
                  <th className="p-3">Primary (P1–P6)</th>
                  <th className="p-3">Junior Sec (JSS1–JSS3)</th>
                  <th className="p-3">Senior Sec (SSS1–SSS3)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Registration Fee (one-time)</td>
                  <td className="p-3">₦5,000</td>
                  <td className="p-3">₦5,000</td>
                  <td className="p-3">₦5,000</td>
                  <td className="p-3">₦5,000</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Acceptance Deposit (one-time)</td>
                  <td className="p-3">₦20,000</td>
                  <td className="p-3">₦25,000</td>
                  <td className="p-3">₦30,000</td>
                  <td className="p-3">₦35,000</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Tuition (Per Term)</td>
                  <td className="p-3">₦50,000</td>
                  <td className="p-3">₦60,000</td>
                  <td className="p-3">₦75,000</td>
                  <td className="p-3">₦95,000</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Exam & Registration (WAEC/NECO preparation)</td>
                  <td className="p-3">—</td>
                  <td className="p-3">—</td>
                  <td className="p-3">₦8,000</td>
                  <td className="p-3">₦12,000</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Uniform & Miscellaneous (estimate)</td>
                  <td className="p-3">₦15,000</td>
                  <td className="p-3">₦20,000</td>
                  <td className="p-3">₦25,000</td>
                  <td className="p-3">₦30,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold text-[var(--deep-blue)] mb-2">Payment Methods</h3>
            <ul className="list-disc pl-5 text-[var(--muted)] space-y-2">
              <li>Bank Transfer — use the school account details provided below.</li>
              <li>POS/Card payments at the school office.</li>
              <li>Online payments via Paystack or Flutterwave (integration available on request).</li>
              <li>Cash payments at the school office.</li>
            </ul>

            <div className="card border-accent-top mt-6">
              <div className="card-body">
                <h4 className="font-semibold text-[var(--deep-blue)] mb-2">School Bank Details (Placeholder)</h4>
                <p className="text-sm text-[var(--muted)]">Account Name: Calculus Comprehensive School</p>
                <p className="text-sm text-[var(--muted)]">Bank: &lt;Your Bank Name&gt;</p>
                <p className="text-sm text-[var(--muted)]">Account Number: &lt;Replace with school account&gt;</p>
                <p className="text-sm text-[var(--muted)] mt-2"><strong>Important:</strong> Replace the placeholder bank details above with your official account information before accepting transfers.</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-[var(--muted)]">
              For fee questions, discounts, or scholarship inquiries, contact the school finance office via the <a href="/contact" className="text-[var(--deep-blue)] underline">Contact</a> page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
