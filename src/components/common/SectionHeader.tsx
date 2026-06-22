// src/components/common/section-header.tsx

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

const SectionHeader = ({
  title,
  subtitle,
  align = "left",
}: SectionHeaderProps) => {
  return (
    <div
      className={
        align === "center"
          ? "text-center"
          : "text-left"
      }
    >
      <h2 className="mb-6 text-4xl font-bold">
        {title}
      </h2>

      {subtitle && (
        <p className="mb-20 text-xl text-gray-500">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;