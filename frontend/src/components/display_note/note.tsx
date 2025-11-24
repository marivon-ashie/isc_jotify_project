import React from "react";

import { FaExpandArrowsAlt } from "react-icons/fa";
import { MdDateRange, MdPriorityHigh } from "react-icons/md";

const Note = ({
  title,
  priority,
  description,
  reminderDate,
  dateCreated,
}: {
  title: string;
  description: string;
  priority: string;
  reminderDate: string;
  dateCreated: string;
}) => {
  return (
    <div className="flex flex-col gap-2 max-w-[360px] bg-amber-100 p-5 rounded-md">
      <div className=" flex gap-2 justify-end ">
        <button className="p-3 bg-sky-500 text-neutral-50 rounded-md">
          Edit
        </button>
        <button className="p-3 bg-red-700 text-neutral-50 rounded-md">
          Delete
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl">{title}</h2>
        <p className="text-base text-neutral-600">{description}</p>
        <div className="flex gap-4">
          <div className="flex gap-1 items-center">
            <FaExpandArrowsAlt className="fill-neutral-500 w-4 h-5" />
            <p className="text-base text-neutral-500">{priority}</p>
          </div>

          <div className="flex gap-1 items-center">
            <MdDateRange className="fill-neutral-500" />
            <p className="text-base text-neutral-500">{reminderDate}</p>
          </div>
        </div>
        <p className="text-base text-neutral-500 self-end">{dateCreated}</p>
      </div>
    </div>
  );
};

export default Note;
