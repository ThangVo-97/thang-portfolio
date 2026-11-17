import styles from "./Tags.module.css";

export function Tags({ items, label }: { items: string[]; label?: string }) {
  return (
    <ul className={styles.tags} aria-label={label}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
