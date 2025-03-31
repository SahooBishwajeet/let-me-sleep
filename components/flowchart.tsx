import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import React, { ReactNode } from "react";

export interface FlowchartStepProps {
  children: ReactNode;
  number: number;
  type?: "default" | "primary" | "secondary" | "accent";
  isLast?: boolean;
}

export const FlowchartStep = ({
  children,
  number,
  type = "default",
  isLast = false,
}: FlowchartStepProps) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={cn(
          "w-full max-w-md rounded-lg p-4 border shadow-sm relative",
          {
            "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700": type === "default",
            "bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800": type === "primary",
            "bg-purple-50 dark:bg-purple-900/30 border-purple-200 dark:border-purple-800": type === "secondary",
            "bg-amber-50 dark:bg-amber-900/30 border-amber-200 dark:border-amber-800": type === "accent",
          }
        )}
      >
        <div className="absolute -left-3 -top-3 flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 dark:bg-slate-700 text-white font-medium">
          {number}
        </div>
        <div className="ml-6">{children}</div>
      </div>

      {!isLast && (
        <div className="py-2">
          <ArrowDown className="w-8 h-8 text-slate-400 dark:text-slate-500" />
        </div>
      )}
    </div>
  );
};

export interface FlowchartProps {
  children: ReactNode;
}

export const Flowchart = ({ children }: FlowchartProps) => {
  // Automatically number the steps and mark the last one
  const childrenArray = React.Children.toArray(children);

  const numberedChildren = childrenArray.map((child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        number: index + 1,
        isLast: index === childrenArray.length - 1,
      });
    }
    return child;
  });

  return (
    <div className="flex flex-col gap-1 my-6 w-full">
      {numberedChildren}
    </div>
  );
};
