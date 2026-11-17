import { experience } from "@/data/profile";
import { Section } from "./Section";
import { Tags } from "./Tags";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <ol className={styles.timeline}>
        {experience.map((job) => (
          <li key={job.company} className={styles.job}>
            <div className={styles.jobHead}>
              <h3>{job.company}</h3>
              <p className={styles.jobMeta}>
                {job.title} · <time>{job.period}</time>
              </p>
            </div>

            <div className={styles.projects}>
              {job.projects.map((p) => (
                <article key={p.name} className={styles.project}>
                  <header className={styles.projectHead}>
                    <h4>{p.name}</h4>
                    <p>
                      {p.role} · {p.teamSize} · <time>{p.period}</time>
                    </p>
                  </header>
                  <p className={styles.summary}>{p.summary}</p>
                  <ul className={styles.highlights}>
                    {p.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <Tags items={p.stack} label={`${p.name} tech stack`} />
                </article>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
