import React, { type HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ className, children, ...props }) => {
  const defaultClasses =
    "text-[18px]/5 xl:text-[20px]/6 text-brand font-medium bg-lightgreen-1 px-5 xl:px-6 py-2 rounded-full w-fit";

  return (
    <p className={cn(defaultClasses, className)} {...props}>
      {children}
    </p>
  );
};

export default Badge;