export default function DownloadBand() {
  return (
    <section className="section wrap" id="download">
      <div className="download-band" data-reveal>
        <div>
          <div className="eyebrow" style={{ color: "var(--brass-dim)" }}>
            Get the app
          </div>
          <h2>Bookings live in the Cleclo app.</h2>
          <p>Live tracking, standard pricing and payments — all in one place, for every order you place.</p>
          <div className="download-ctas">
            <a href="#" className="btn btn-primary" style={{ background: "var(--brass)", color: "var(--pine)" }}>
              <span className="btn-copy">
                <small>Download on the</small>App Store
              </span>
            </a>
            <a href="#" className="btn btn-ghost">
              <span className="btn-copy">
                <small>Get it on</small>Google Play
              </span>
            </a>
          </div>
        </div>
        <div className="qr-box">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" fill="var(--steam)" />
            <g fill="var(--pine)">
              <rect x="6" y="6" width="26" height="26" />
              <rect x="12" y="12" width="14" height="14" fill="var(--steam)" />
              <rect x="17" y="17" width="4" height="4" fill="var(--pine)" />
              <rect x="68" y="6" width="26" height="26" />
              <rect x="74" y="12" width="14" height="14" fill="var(--steam)" />
              <rect x="79" y="17" width="4" height="4" fill="var(--pine)" />
              <rect x="6" y="68" width="26" height="26" />
              <rect x="12" y="74" width="14" height="14" fill="var(--steam)" />
              <rect x="17" y="79" width="4" height="4" fill="var(--pine)" />
              <rect x="40" y="6" width="6" height="6" />
              <rect x="50" y="6" width="6" height="6" />
              <rect x="40" y="16" width="6" height="6" />
              <rect x="56" y="16" width="6" height="6" />
              <rect x="40" y="40" width="6" height="6" />
              <rect x="50" y="40" width="6" height="6" />
              <rect x="60" y="40" width="6" height="6" />
              <rect x="70" y="40" width="6" height="6" />
              <rect x="80" y="40" width="6" height="6" />
              <rect x="40" y="50" width="6" height="6" />
              <rect x="60" y="50" width="6" height="6" />
              <rect x="86" y="50" width="6" height="6" />
              <rect x="46" y="60" width="6" height="6" />
              <rect x="66" y="60" width="6" height="6" />
              <rect x="80" y="60" width="6" height="6" />
              <rect x="40" y="70" width="6" height="6" />
              <rect x="56" y="70" width="6" height="6" />
              <rect x="70" y="76" width="6" height="6" />
              <rect x="86" y="76" width="6" height="6" />
              <rect x="40" y="86" width="6" height="6" />
              <rect x="56" y="86" width="6" height="6" />
              <rect x="70" y="86" width="6" height="6" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
