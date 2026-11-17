import { skills } from "@/data/profile";
import { Section } from "./Section";
import { Tags } from "./Tags";
import styles from "./Skills.module.css";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I work with">
      <div className={styles.grid}>
        {skills.map((group) => (
          <article key={group.group} className={styles.card}>
            <h3>{group.group}</h3>
            <Tags items={group.items} label={`${group.group} skills`} />
          </article>
        ))}
      </div>
    </Section>
  );
}
