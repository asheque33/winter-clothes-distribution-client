import { cn } from "@/lib/utils";
import React from "react";
interface IContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
const Container = ({ children, style, className }: IContainerProps) => {
  return (
    <div
      className={cn("w-full max-w-[1470px]  px-4 mx-auto", style, className)}
    >
      {children}
    </div>
  );
};

export default Container;
