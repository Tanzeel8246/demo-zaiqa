"use client";

import { useState } from "react";
import { SITE, TIME_SLOTS } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui";

/**
 * Backend-free reservation form: composes a WhatsApp message from the
 * booking details and opens it. No server — works on static hosting.
 */
export default function ReservationForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState(TIME_SLOTS[5]);
  const [guests, setGuests] = useState("2");
  const [notes, setNotes] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const prettyDate = date
      ? new Date(`${date}T12:00:00`).toLocaleDateString("en-GB", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : "—";
    const text =
      `Assalam-o-Alaikum Zaiqa! I would like to reserve a table.\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Date: ${prettyDate}\n` +
      `Time: ${time}\n` +
      `Guests: ${guests}` +
      (notes ? `\nNotes: ${notes}` : "");
    window.open(
      `${SITE.whatsappUrl}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener"
    );
  };

  return (
    <form className="form" onSubmit={submit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="r-name">Your name</label>
          <input
            id="r-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Ahmed Raza"
            required
            autoComplete="name"
          />
        </div>
        <div className="field">
          <label htmlFor="r-phone">Phone number</label>
          <input
            id="r-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="03xx xxxxxxx"
            required
            autoComplete="tel"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="r-date">Date</label>
          <input
            id="r-date"
            type="date"
            value={date}
            min={today}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="r-time">Time</label>
          <select
            id="r-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            {TIME_SLOTS.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
          <p className="hint">Kitchen serves 12:00 PM – 11:30 PM</p>
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="r-guests">Guests</label>
          <select
            id="r-guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          >
            {["1", "2", "3", "4", "5", "6", "8", "10", "12", "15+"].map((g) => (
              <option key={g} value={g}>
                {g} {g === "1" ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="r-notes">Special requests <span style={{ fontWeight: 400, color: "var(--muted-2)" }}>(optional)</span></label>
          <input
            id="r-notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Birthday, rooftop seat, wheelchair access…"
          />
        </div>
      </div>
      <button type="submit" className="btn btn-whatsapp btn-lg">
        <WhatsAppIcon />
        Confirm on WhatsApp
      </button>
      <p className="form-note">
        This opens WhatsApp with your reservation details ready to send — our team
        confirms your table within minutes.
      </p>
    </form>
  );
}
