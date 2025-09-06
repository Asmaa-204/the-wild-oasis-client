"use client";

import { createContext, use, useState } from "react";

const initialState = { from: undefined, to: undefined };

const ReservationContext = createContext();

function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext>
  );
}

function useReservation() {
  const context = use(ReservationContext);
  if (context === undefined)
    throw new Error("Reservation context is used outside its provider");
  return context;
}

export { useReservation };
export default ReservationProvider;
