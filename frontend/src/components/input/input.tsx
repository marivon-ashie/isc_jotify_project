import React from "react";
import "./input.css";
import { MdAdd } from "react-icons/md";
const Input = () => {
  return (
    <div className="flex  flex-col gap-4">
      <h2 className="text-base text-neutral-600 font-bold">input</h2>
      <form method="post" className="flex gap-8">
        <input
          type="text"
          required
          placeholder="Title"
          className="p-3 bg-amber-100 rounded-md  boder  w-60 border-neutral-50  active-amber:outlin-300 hover:outline-amber-300"
        />
        <input
          type="text"
          required
          placeholder="Description"
          className="p-3 bg-amber-100 rounded-md  boder  w-60 border-neutral-50  active-amber:outlin-300 hover:outline-amber-300"
        />
        <select
          required
          className="p-3 bg-amber-100 rounded-md  boder  w-40 border-neutral-50  active-amber:outlin-300 hover:outline-amber-300"
        >
          <option value="low">low</option>
          <option value="meduim">medium</option>
          <option value="heigh">heigh</option>
        </select>
        <input
          type="datetime-local"
          required
          placeholder="Reminder Date & Time"
          className="p-3 bg-amber-100 rounded-md  boder  w-40 border-neutral-50  active-amber:outlin-300 hover:outline-amber-300"
        />
        <button
          type="submit"
          className="bg-violet-700 text-neutral-50 flex gap-2 p-3 items-center rounded-md"
        >
          Add note <MdAdd />
        </button>
      </form>
    </div>
  );
};

export default Input;
