import React from "react";
import Options from "./components/options/options";
import Input from "./components/input/input";
import Display_Note from "./components/display_note/display_note";

const App = () => {
  return (
    <div className="my-16 containe mx-auto">
      <h1 className="capitalize text-5xl mb-[5rem] text-neutral-700 font-semibold text-center">
        this is jotify
      </h1>
      <div className="flex flex-col gap-12">
        <Options />
        <Input />
        <Display_Note />
      </div>
    </div>
  );
};

export default App;
