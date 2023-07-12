import { useState } from "react";
import "./BookingForm.css";
import { TextInput } from "../Inputs/TextInput/TextInput";
import { DateInput } from "../Inputs/DateInput/DateInput";
import { NumberInput } from "../Inputs/NumberInput/NumberInput";
import { Select } from "../Inputs/Select/Select";

export function BookingForm() {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [occasion, setOccasion] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName("");
    setGuests("");
    setDate("");
    setTime("");
    setOccasion("");
  };
  return (
    <>
      <form className="booking-form" onSubmit={handleSubmit}>
        <fieldset className="booking-form-fieldset">
          <TextInput
            id="name"
            placeholder="name"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <DateInput
            label="Select date"
            id="day"
            value={date}
            min="2023-07-12"
            onChange={(e) => setDate(e.target.value)}
          />

          <Select
            label="Select time"
            id="time"
            value={time}
            selectOptions={[
              { name: "17:00", value: "17:00" },
              { name: "18:00", value: "18:00" },
              { name: "19:00", value: "19:00" },
              { name: "20:00", value: "20:00" },
              { name: "21:00", value: "21:00" },
              { name: "22:00", value: "22:00" },
            ]}
            onChange={(e) => setTime(e.target.value)}
          />
          <NumberInput
            label="Number of guests"
            id="guests"
            placeholder="1"
            value={guests}
            min={1}
            max={10}
            onChange={(e) => setGuests(e.target.value)}
          />
          <Select
            label="Occasion"
            id="occasion"
            value={occasion}
            selectOptions={[
              { name: "Birthday", value: "birthday" },
              { name: "Anniversary", value: "anniversary" },
            ]}
            onChange={(e) => setOccasion(e.target.value)}
          />

          <input type="submit" value="Make Your reservation" />
          <button type="submit" disabled={!name || !guests}>
            Submit
          </button>
        </fieldset>
      </form>
    </>
  );
}
