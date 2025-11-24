import "./options.css";
import { FcSearch } from "react-icons/fc";
const Options = () => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-base text-neutral-600 font-bold">option</h2>
      <div className="flex justify-between">
        <div className="">
          <form
            action=""
            method="get"
            className=" focus-within:border bg-amber-100  p-4  rounded-[100px]  active:border-neutral-600 flex gap-2"
          >
            <input
              className="search focus:outline-0 w-[400px]"
              type=" text"
              placeholder="search note"
              required
            />
            <button>
              <FcSearch />
            </button>
          </form>
        </div>
        <div className=" flex  gap-8">
          <button className=" p-4 bg-amber-200 rounded-mdl ">
            Order by date
          </button>
          <button className="p-4 bg-amber-200 rounded-md">
            {" "}
            Order by priority
          </button>
          <button className="p-4 bg-red-700 text-neutral-50 font-semibold rounded-md">
            Delete all
          </button>
        </div>
      </div>
    </div>
  );
};

export default Options;
