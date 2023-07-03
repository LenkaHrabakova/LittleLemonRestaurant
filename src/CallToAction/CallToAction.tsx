import "./CallToAction.css";

import { ReactNode } from "react";

export function CallToAction({
  title,
  location,
  text,
  children,
  imgSrc,
  imgAlt,
}: {
  title: string;
  location: string;
  text: string;
  children: ReactNode;
  imgSrc: string;
  imgAlt: string;
}) {
  return (
    <div className="jumbotron">
      <div className="jumbotron-text">
        <h1>{title}</h1>
        <h2>{location}</h2>
        <p>{text}</p>
        {children}
      </div>
      <div className="jumbotron-image">
        <img src={imgSrc} alt={imgAlt} />
      </div>
    </div>
  );
}
