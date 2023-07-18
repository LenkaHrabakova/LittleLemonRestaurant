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
            label="Select time"
            id="time"
            value={time}
            selectOptions={availableTimes}
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
          <Button title="Make Your reservation" type="submit" />
          <button type="submit" disabled={!name || !guests}>
            Make Your reservation
          </button>
        </fieldset>
      </form>
    </>
  );
}
