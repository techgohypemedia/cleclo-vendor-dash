import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      stepNo: "01",
      tag: "STEP 01",
      title: "Register as a Vendor",
      desc: "Sign up with your business details and submit basic verification information.",
    },
    {
      stepNo: "02",
      tag: "STEP 02",
      title: "Configure Outlets & Services",
      desc: "Set up your outlets, select the services you offer (Drycleaning, Washing, Ironing etc.) and configure serviceable areas.",
    },
    {
      stepNo: "03",
      tag: "STEP 03",
      title: "Start Receiving Orders",
      desc: "Once approved, your outlets go live and begin receiving orders automatically.",
    },
    {
      stepNo: "04",
      tag: "STEP 04",
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

      <div className="timeline-alt-wrap">
        <div className="timeline-alt-line"></div>
        <div className="timeline-alt-items">
          {steps.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <React.Fragment key={step.stepNo}>
                <div
                  className={`timeline-alt-row ${isLeft ? "left-side" : "right-side"}`}
                  data-reveal
                >
                  {isLeft ? (
                    <>
                      <div className="timeline-alt-card-box">
                        <div className="timeline-alt-card">
                          <div className="step-no">{step.tag}</div>
                          <h4>{step.title}</h4>
                          <p>{step.desc}</p>
                        </div>
                      </div>
                      <div className="timeline-alt-node">
                        <span>{step.stepNo}</span>
                      </div>
                      <div className="timeline-alt-spacer"></div>
                    </>
                  ) : (
                    <>
                      <div className="timeline-alt-spacer"></div>
                      <div className="timeline-alt-node">
                        <span>{step.stepNo}</span>
                      </div>
                      <div className="timeline-alt-card-box">
                        <div className="timeline-alt-card">
                          <div className="step-no">{step.tag}</div>
                          <h4>{step.title}</h4>
                          <p>{step.desc}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {idx === 1 && (
                  <div className="timeline-connector-callout" data-reveal>
                    <div className="connector-pill">
                      <span className="connector-dot"></span>
                      <span className="connector-text">
                        Cleclo handles order routing, notifications and tracking automatically.
                      </span>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
