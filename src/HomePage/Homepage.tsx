import { Button } from "../Button/Button";
import { CallToAction } from "../CallToAction/CallToAction";
import { FoodCard, FoodCards } from "../FoodCard/FoodCard";
import { Main } from "../Main/Main";
import { Specials } from "../Specials/Specials";

export function Homepage() {
  return (
    <Main>
      <CallToAction
        title="Little Lemon"
        location="Chicago"
        text="We are a family owned Mediterranean restaurant, focused on traditional
        recipes served within a modern twist."
        children={<Button title="Reserve a table" type="submit" />}
        imgSrc="/restauranfood.jpg"
        imgAlt="restaurantfood"
      />
      <Specials
        title="This week specials!"
        children={<Button title="Online menu" type="submit" />}
      />

      <FoodCards>
        <FoodCard
          imgSrc="/greeksalad.jpg"
          altSrc="Greek salad"
          name="Greek salad"
          price={12.99}
          description="The faumous greek salad of crispy lettuce, peppers, olives and our Chicago tyle feta cheese, garnished with crunchy garlic and rosemary croutons."
          link="#/"
        />
        <FoodCard
          imgSrc="/bruchetta.svg"
          altSrc="Bruchetta"
          name="Bruchetta"
          price={5.99}
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
          link="#/"
        />
        <FoodCard
          imgSrc="/lemondessert.jpg"
          altSrc="Lemon Dessert"
          name="Lemon Dessert"
          price={5.0}
          description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
          link="#/"
        />
      </FoodCards>
    </Main>
  );
}
