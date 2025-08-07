import { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#0d1117] rounded-xl shadow-md border border-gray-700">
      {children}
    </div>
  );
}

export function CardContent({ children }: { children: ReactNode }) {
  return (
    <div className="p-5">
      {children}
    </div>
  );
}

