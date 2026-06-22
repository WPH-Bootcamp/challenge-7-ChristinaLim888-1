// components/layout/container.tsx

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`
        px-32 py-18 mx-auto border-2 border-amber-600
        ${className}
      `}
    >
      {children}
    </div>
  );
}