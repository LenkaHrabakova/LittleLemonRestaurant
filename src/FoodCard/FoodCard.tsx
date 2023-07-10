import "./FoodCard.css";
import { ReactNode } from "react";

export function FoodCards({ children }: { children: ReactNode }) {
  return <div className="foodcards">{children}</div>;
}

export function FoodCard({
  imgSrc,
  altSrc,
  name,
  price,
  description,
  link,
}: {
  imgSrc: string;
  altSrc: string;
  name: string;
  price: number;
  description: string;
  link: string;
}) {
  return (
    <div className="foodcard">
      <img className="food-image" src={imgSrc} alt={altSrc} />

      <div className="food-info-row">
        <div className="food-name">{name}</div>
        <div className="food-price">{price}</div>
      </div>

      <p className="food-description">{description}</p>
      <a className="food-delivery" href={link}>
        Order a delivery
        <img src="./Dishicon.svg" alt="dish" />
      </a>
    </div>
  );
}
