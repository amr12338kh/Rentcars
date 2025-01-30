import { cn } from "@/lib/utils";

const Section = ({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section id={id} className={cn("py-16", className)}>
      {children}
    </section>
  );
};

export default Section;
