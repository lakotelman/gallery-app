import { useState } from "react";
import "./index.css";
import { InputsForm } from "./components/UserInputs/InputsForm";
import Card from "./components/UI/Card";
import { IGridOptions } from "./components/UserInputs/InputsForm";
import Measurements from "./components/Outputs/Measurments";
import { getDots } from "./utils/operations";
import WholeDisplay from "./components/Outputs/WholeDisplay";

function App() {
  const [topCorner, setTopCorner] = useState<number[]>([]);
  const [gridOptions, setGridOptions] = useState<IGridOptions>();

  const getCalculation = (data: IGridOptions) => {
    setGridOptions(data);

    let itemsArr = [];
    for (let i = 0; i < data.frameCount; i++) {
      itemsArr.push({ width: data.frameWidth, height: data.frameHeight });
    }
    try{switch (data.layout) {
      case "row":
        setTopCorner(
          getDots(
            itemsArr,
            data.gap,
            { rows: 1, columns: data.frameCount },
            { width: data.wallWidth, height: data.wallHeight }
          )
        );
      case "column":
        setTopCorner(
          getDots(
            itemsArr,
            data.gap,
            { rows: data.frameCount, columns: 1 },
            { width: data.wallWidth, height: data.wallHeight }
          )
        );
      case "grid":
        setTopCorner(
          getDots(
            itemsArr,
            data.gap,
            { rows: data.gridRows, columns: data.gridColumns },
            { width: data.wallWidth, height: data.wallHeight }
          )
        );
    }}
    catch{ 
      alert("Whoops something went wrong")
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
      {gridOptions ? <WholeDisplay options={gridOptions} /> : "hm?"}
    </div>
  );
}

export default App;
