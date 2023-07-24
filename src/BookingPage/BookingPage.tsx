import "./BookingPage.css";

import { BookingForm } from "../BookingForm/BookingForm";
import { AvailableTime } from "../AvailableTime";
import { UpdateAvailableTimes } from "../updateTimes";
import { Main } from "../Main/Main";

export function BookingPage({
  availableTimes,
  updateAvailableTimes,
}: {
  availableTimes: AvailableTime[];
  updateAvailableTimes: UpdateAvailableTimes;
}) {
  return (
    <Main>
      <h1>Booking Form</h1>
      <BookingForm
        availableTimes={availableTimes}
        updateAvailableTimes={updateAvailableTimes}
      />
    </Main>
  );
}
