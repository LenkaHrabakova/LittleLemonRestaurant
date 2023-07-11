import { useState } from "react";
import { TextInput } from "../TextInput/TextInput";

export function BookingPage() {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted!");
    setName("");
    console.log(name);
  };
  return (
    <>
      <h1>Booking</h1>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <TextInput
            id="name"
            placeholder="name"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* <label htmlFor="name">Name</label>
          <input
            type="text"
            className=""
            placeholder="name"
            id="name"
            value={name}
          /> */}
          <button type="submit" disabled={!name}>
            Submit
          </button>
        </fieldset>
      </form>
    </>
  );
}
