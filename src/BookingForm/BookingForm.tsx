import { useState } from "react";
import "./BookingForm.css";
import { TextInput } from "../Inputs/TextInput/TextInput";
import { DateInput } from "../Inputs/DateInput/DateInput";
import { NumberInput } from "../Inputs/NumberInput/NumberInput";
import { Select } from "../Inputs/Select/Select";
import { AvailableTime } from "../AvailableTime";
import { UpdateAvailableTimes } from "../updateTimes";
import { Button } from "../Button/Button";

export function BookingForm({
  availableTimes,
  updateAvailableTimes,
}: {
  availableTimes: AvailableTime[];
  updateAvailableTimes: UpdateAvailableTimes;
}) {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setTel("");
    setGuests("");
    setDate("");
    setTime("");
    setOccasion("");
  };
  return (
    <>
      <form className="booking-form" onSubmit={handleSubmit}>
        <fieldset className="booking-form-fieldset">
          <DateInput
            label="Select date for your reservation"
            id="day"
            value={date}
            min={new Date().toISOString().substring(0, 10)}
            onChange={(e) => {
              setDate(e.target.value);
              updateAvailableTimes({
                type: "date-changed",
                value: e.target.value,
              });
            }}
          />

          <Select
            label="Select time for your reservation"
            id="time"
            value={time}
            selectOptions={availableTimes}
            onChange={(e) => setTime(e.target.value)}
          />
          <NumberInput
            label="Please, fill in number of guests"
            id="guests"
            placeholder="1"
            value={guests}
            min={1}
            max={10}
            onChange={(e) => setGuests(e.target.value)}
          />
          <Select
            label="Please, select occasion"
            id="occasion"
            value={occasion}
            selectOptions={[
              { name: "Birthday", value: "birthday" },
              { name: "Anniversary", value: "anniversary" },
            ]}
            onChange={(e) => setOccasion(e.target.value)}
          />
          <TextInput
            id="name"
            placeholder="Your name"
            label="Please, fill in your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
          <TextInput
            id="tel"
            placeholder="Your phone number"
            label="Please, fill in your phone number"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            type="tel"
          />
          <TextInput
            id="email"
            placeholder="Your email"
            label="Please, fill in your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <Button title="Make Your reservation" type="submit" />
        </fieldset>
      </form>
    </>
  );
}
