import { profile } from "@/data/profile";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <p className={styles.hello}>Hi, I&apos;m</p>
          <h1 id="hero-title" className={styles.name}>
            {profile.name}
          </h1>
          <p className={styles.pill}>{profile.title}</p>
          <p className={styles.lead}>
            I build fast, reliable web applications with React and TypeScript, and I&apos;m comfortable going into
            the backend when a feature needs it. Currently building banking systems at Galaxy Finx.
          </p>

          <div className={styles.actions}>
            <a className={styles.primary} href="#experience">
              View experience
            </a>
            <a className={styles.secondary} href="#contact">
              Get in touch
            </a>
          </div>

          <ul className={styles.socials} aria-label="Social profiles">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${profile.email}`}>Email</a>
            </li>
          </ul>
        </div>

        <div className={styles.window} aria-hidden="true">
          <div className={styles.windowBar}>
            <span />
            <span />
            <span />
            <em>profile.ts</em>
          </div>
          <pre className={styles.code}>
            <code>
              <span className={styles.kw}>const</span> <span className={styles.var}>developer</span> = {"{"}
              {"\n"}  name: <span className={styles.str}>&quot;{profile.nameAscii}&quot;</span>,
              {"\n"}  role: <span className={styles.str}>&quot;{profile.title}&quot;</span>,
              {"\n"}  experience: <span className={styles.num}>6</span>, <span className={styles.cm}>{"// years"}</span>
              {"\n"}  stack: [
              {profile.headlineStack.map((t, i) => (
                <span key={t}>
                  {"\n"}    <span className={styles.str}>&quot;{t}&quot;</span>
                  {i < profile.headlineStack.length - 1 ? "," : ""}
                </span>
              ))}
              {"\n"}  ],
              {"\n"}  domain: <span className={styles.str}>&quot;Banking &amp; Fintech&quot;</span>,
              {"\n"}  openToWork: <span className={styles.kw}>true</span>,
              {"\n"}{"}"};
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
