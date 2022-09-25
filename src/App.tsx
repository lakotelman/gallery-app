import { useState } from "react";
import "./index.css";
import { InputsForm } from "./components/UserInputs/InputsForm";
import Card from "./components/UI/Card";
import Measurements from "./components/Outputs/Measurments";
import { getDots } from "./utils/operations";

function App() {
  const [topCorner, setTopCorner] = useState<number[]>([]);

  const getCalculation = (data: any) => {
    let itemsArr = [];
    for (let i = 0; i < data.frameCount; i++) {
      itemsArr.push({ width: data.frameWidth, height: data.frameHeight });
    }
    if (data.layout === "row") {
      setTopCorner(
        getDots(
          itemsArr,
          data.gap,
          { rows: 1, columns: data.frameCount },
          { width: data.wallWidth, height: data.wallHeight }
        )
      );
    } else if (data.layout === "column") {
      setTopCorner(
        getDots(
          itemsArr,
          data.gap,
          { rows: data.frameCount, columns: 1 },
          { width: data.wallWidth, height: data.wallHeight }
        )
      );
    } else {
      setTopCorner(
        getDots(
          itemsArr,
          data.gap,
          { rows: data.gridRows, columns: data.gridColumns },
          { width: data.wallWidth, height: data.wallHeight }
        )
      );
    }
  };

  return (
    <div className="p-10">
      <Card className="w-1/2">
        <div>
          <h2 className=" font-bold text-3xl">Make a Gallery</h2>
          <p>
            This application will create a gallery wall for your same-size
            pieces. Simply enter the quantity of your pieces and respective
            dimensions in inches. Currently the layout options are for a single
            row, a single column, or a simple grid.
          </p>
        </div>
      </Card>
      <InputsForm calculate={getCalculation} />
      <Measurements topCorner={topCorner} />
    </div>
  );
}

export default App;
