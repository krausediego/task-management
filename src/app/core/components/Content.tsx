import { twMerge } from "tailwind-merge";

interface ContentProps {
  children: React.ReactNode;
  className?: string;
}

function Content({ children, className }: ContentProps) {
  return (
    <div className={twMerge(className, "w-full h-full bg-[#F5F5F7] p-10")}>
      {children}
    </div>
  );
}

export { Content };
