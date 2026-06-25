import { styles } from "@/components/constants/styles";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;

  titleAlign?: "left" | "center" | "right";

  subtitleAlign?: "left" | "center" | "right";
}

export default function SectionHeader({
  title,
  subtitle,
  titleAlign = "center",
  subtitleAlign = "center",
}: SectionHeaderProps) {
  return (
    <>
      <h2
        className={`
          ${styles.typography.title}
          ${styles.align[titleAlign]}
        `}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`
            ${styles.typography.subtitle}
            ${styles.align[subtitleAlign]}
          `}
        >
          {subtitle}
        </p>
      )}
    </>
  );
}