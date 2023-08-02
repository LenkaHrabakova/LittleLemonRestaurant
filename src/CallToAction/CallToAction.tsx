import './CallToAction.css';

import { ReactNode } from 'react';

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
      <h1 className="jumbotron-title">{title}</h1>
      <h2 className="jumbotron-subtitle">{location}</h2>
      <div className="jumbotron-info">
        <div className="jumbotron-text">
          <p>{text}</p>
          {children}
        </div>

        <img className="jumbotron-image" src={imgSrc} alt={imgAlt} />
      </div>
    </div>
  );
}
