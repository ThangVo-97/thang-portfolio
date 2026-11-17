import { education, profile } from "@/data/profile";
import { Section } from "./Section";
import styles from "./About.module.css";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Building products people use every day">
      <div className={styles.grid}>
        <div className={styles.text}>
          <p>{profile.summary}</p>
          <p>
            I&apos;ve worked across call-center tools, audit software and banking platforms, collaborating with teams in
            Vietnam and India. I care about clean component boundaries, measurable performance and code that the next
            developer can pick up easily.
          </p>
          <p className={styles.edu}>
            <strong>{education.degree}</strong>
            <br />
            {education.school} · {education.period}
          </p>
        </div>

        <dl className={styles.facts}>
          {profile.facts.map((f) => (
            <div key={f.label} className={styles.fact}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
