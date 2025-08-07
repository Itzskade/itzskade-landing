import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;  // <-- aceptar className opcional
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-[#0d1117] rounded-xl shadow-md border border-gray-700 ${className}`}>
      {children}
    </div>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}
