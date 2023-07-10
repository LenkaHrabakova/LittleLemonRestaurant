import { Button } from "../Button/Button";
import { CallToAction } from "../CallToAction/CallToAction";
import { FoodCard, FoodCards } from "../FoodCard/FoodCard";
import { Select } from "../Select/Select";
import { Specials } from "../Specials/Specials";
import { TextInput } from "../TextInput/TextInput";
import { TimeInput } from "../TimeInput/TimeInput";
import { DateInput } from "./DateInput/DateInput";

export function Homepage() {
  return (
    <>
      <CallToAction
        title="Little Lemon"
        location="Chicago"
        text="We are a family owned Mediterranean restaurant, focused on traditional
        recipes served within a modern twist."
        children={<Button title="Reserve a table" />}
        imgSrc="/restauranfood.jpg"
        imgAlt="restaurantfood"
      />
      <Specials
        title="This week specials!"
        children={<Button title="Online menu" />}
      />
      <Select placeholder="Select time" label="Select time" id="time" />

      <TimeInput label="Select time" id="timeInput" min="11:30" max="21:30" />

      <DateInput label="Select day" id="dateInput" />

      <TextInput label="Text" id="textInput" placeholder="name" />
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
    </>
  );
}
