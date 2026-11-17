import { profile } from "@/data/profile";
import { asset } from "@/data/site";
import { Section } from "./Section";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's work together">
      <div className={styles.card}>
        <p className={styles.text}>
          I&apos;m open to frontend and full-stack roles, remote or in Ho Chi Minh City. The fastest way to reach me
          is by email.
        </p>
        <div className={styles.actions}>
          <a className={styles.primary} href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className={styles.secondary} href={asset(profile.cvPath)} download>
            Download CV (PDF)
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
        </ul>
      </div>
    </Section>
  );
}
