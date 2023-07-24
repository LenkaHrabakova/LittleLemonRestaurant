import { ReactNode } from "react";

import "./Main.css";

export function Main({ children }: { children: ReactNode }) {
  return <div className="main">{children}</div>;
}
