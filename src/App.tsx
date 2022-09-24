import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./index.css";
import { InputsForm } from "./components/UserInputs/InputsForm";
import Card from "./components/UI/Card";

function App() {
  return (
    <div className="p-10">
      <Card className="w-1/2">
        <div>
          <h2 className=" font-bold text-3xl">Make a Gallery</h2>
          <p>This application will create a gallery wall for an even number of your same-size pieces. Simply enter the quantity of your pieces and respective dimensions in inches.
            Currently the layout options are for a single row, a single column, or a simple grid.
          </p>
        </div>
      </Card>
      <InputsForm />
    </div>
  );
}

export default App;
