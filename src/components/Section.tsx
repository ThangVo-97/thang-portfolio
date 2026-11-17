import styles from "./Section.module.css";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export function Section({ id, eyebrow, title, children }: Props) {
  const headingId = `${id}-title`;
  return (
    <section id={id} aria-labelledby={headingId} className={styles.section}>
      <div className="container">
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 id={headingId} className={styles.title}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
