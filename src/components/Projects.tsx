import { personalProjects } from "@/data/profile";
import { Section } from "./Section";
import { Tags } from "./Tags";
import styles from "./Projects.module.css";

export function Projects() {
  if (personalProjects.length === 0) return null;

  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built on my own">
      <div className={styles.grid}>
        {personalProjects.map((p) => (
          <article key={p.name} className={styles.card}>
            <h3>{p.name}</h3>
            <p>{p.summary}</p>
            <Tags items={p.stack} label={`${p.name} tech stack`} />
            {p.links.length > 0 && (
              <ul className={styles.links}>
                {p.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.label} →<span className="visually-hidden"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
