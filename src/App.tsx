import { useState } from "react";
import "./index.css";
import { InputsForm } from "./components/UserInputs/InputsForm";
import Card from "./components/UI/Card";
import Measurements from "./components/Outputs/Measurments";
import { getDots } from "./utils/operations";

function App() {
  let topCorner: number[] = []

  const getCalculation = (data: any) => {
    let itemsArr = [];
    for (let i = 0; i < data.frameCount; i++) {
      itemsArr.push({ width: data.frameWidth, height: data.frameHeight });

    }
    console.log(itemsArr)
    if (data.layout === "row") {
      topCorner = getDots(
        itemsArr,
        data.gap,
        [1, data.frameCount],
        [data.wallWidth, data.wallHeight]
      );
    } else if (data.layout === "column") {
      topCorner = getDots(
        itemsArr,
        data.gap,
        [data.frameCount, 1],
        [data.wallWidth, data.wallHeight]
      );
    } else {
      topCorner = getDots(
        itemsArr,
        data.gap,
        [data.gridRows, data.gridColumns],
        [data.wallWidth, data.wallHeight]
      );
    }
  };

  return (
    <div className="p-10">
      <Card className="w-1/2">
        <div>
          <h2 className=" font-bold text-3xl">Make a Gallery</h2>
          <p>
            This application will create a gallery wall for an even number of
            your same-size pieces. Simply enter the quantity of your pieces and
            respective dimensions in inches. Currently the layout options are
            for a single row, a single column, or a simple grid.
          </p>
        </div>
      </Card>
      <InputsForm calculate={getCalculation} />
      <Measurements topCorner={topCorner}/>
    </div>
  );
}

export default App;
