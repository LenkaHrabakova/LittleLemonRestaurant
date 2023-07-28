import { ReactNode } from "react";
import "./Specials.css";
export function Specials({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="specials">
      <h2 className="specials-title">{title}</h2>
      {children}
    </div>
  );
}
