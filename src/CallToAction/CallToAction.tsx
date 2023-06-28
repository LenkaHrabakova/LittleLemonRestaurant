import "./CallToAction.css";

import { Button } from "../Button/Button";

export function CallToAction() {
  return (
    <div className="jumbotron">
      <div className="jumbotron-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served within a modern twist
        </p>
        <Button title="Reserve a table" />
      </div>
      <div className="jumbotron-image">
        <img src="/restauranfood.jpg" alt="restaurantfood" />
      </div>
    </div>
  );
}
