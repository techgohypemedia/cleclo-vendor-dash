export default function HowItWorks() {
  const steps = [
    {
      stepNo: "STEP 01",
      title: "Register as a Vendor",
      desc: "Sign up with your business details and submit basic verification information.",
    },
    {
      stepNo: "STEP 02",
      title: "Configure Outlets",
      desc: "Set up your outlets, choose the services you offer, and configure service areas.",
    },
    {
      stepNo: "STEP 03",
      title: "Start Receiving Orders",
      desc: "Once approved, your outlets go live and begin receiving orders automatically.",
    },
    {
      stepNo: "STEP 04",
      title: "Seamless Payouts",
      desc: "Track your earnings in real time and receive regular transparent settlements.",
    },
  ];

  return (
    <section className="section wrap" id="how">
      <div className="section-head" data-reveal>
        <div className="eyebrow">Getting started</div>
        <h2>How It Works</h2>
        <p className="lede">
          A streamlined process to onboard, operate and scale on Cleclo.
        </p>
      </div>
      <div className="line-wrap" data-reveal>
        <div className="line-track">
          {steps.map((step) => (
            <div className="line-step" key={step.stepNo}>
              <div className="pin"></div>
              <div className="peg"></div>
              <div className="line-card">
                <div className="step-no">{step.stepNo}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
