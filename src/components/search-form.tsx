"use client";

import { useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";

export default function SearchForm() {
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [guests, setGuests] = useState("1 Guest 1 Room");

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-6xl mx-auto mt-12">
      <form className="grid grid-cols-4 gap-4 items-center">
        <div className="flex items-center border rounded-lg px-4 py-2">
          <FaMapMarkerAlt className="text-red-500" />
          <div className="ml-4">
            <label className="text-sm font-semibold">Location</label>
            <input
              type="text"
              placeholder="Where are you going?"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="block text-gray-500 mt-1 outline-none bg-transparent"
            />
          </div>
        </div>

        <div className="flex items-center border rounded-lg px-4 py-2">
          <FaCalendarAlt className="text-red-500" />
          <div className="ml-4">
            <label className="text-sm font-semibold">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="block text-gray-500 mt-1 outline-none bg-transparent"
            />
          </div>
        </div>

        <div className="flex items-center border rounded-lg px-4 py-2">
          <FaCalendarAlt className="text-red-500" />
          <div className="ml-4">
            <label className="text-sm font-semibold">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="block text-gray-500 mt-1 outline-none bg-transparent"
            />
          </div>
        </div>

        <div className="flex items-center border rounded-lg px-4 py-2">
          <FaUser className="text-red-500" />
          <div className="ml-4">
            <label className="text-sm font-semibold">Guest</label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="block text-gray-500 mt-1 outline-none bg-transparent"
            >
              <option>1 Guest 1 Room</option>
              <option>2 Guests 1 Room</option>
              <option>3 Guests 2 Rooms</option>
            </select>
          </div>
        </div>

        <div className="col-span-4 flex justify-center mt-4">
          <button
            type="submit"
            className="bg-red-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-600"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
