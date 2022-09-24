import { useReducer } from "react";
import { Button } from "../UI/Button";
import Card from "../UI/Card";

const initialState = {
  frameCount: "",
  frameHeight: "",
  frameWidth: "",
  wallHeight: "",
  wallWidth: "",
  layout: "",
  gap: "",
  gridRows: "",
  gridColumns: "",
};

const formReducer = (curVals: any, newVals: any) => {
  return { ...curVals, ...newVals };
};
export const InputsForm = () => {
  const [formState, dispatchForm] = useReducer(formReducer, initialState);

  const {
    frameCount,
    frameHeight,
    frameWidth,
    wallHeight,
    wallWidth,
    gap,
    layout,
    gridRows,
    gridColumns,
  } = formState;

  const inputChangeHandler = (event: any) => {
    const { id, value } = event.target;
    dispatchForm({ [id]: value });
  };
  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    console.log(formState);
  };

  const dimensionsInputs = (
    <>
      <div className="flex flex-col">
        <label htmlFor="gridRows">Grid Rows</label>
        <input
          className=""
          type="number"
          step="0.5"
          id="gridRows"
          value={gridRows}
          onChange={inputChangeHandler}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="gridColumns"> Grid Columns</label>
        <input
          className=""
          type="number"
          step="1"
          id="gridColumns"
          value={gridColumns}
          onChange={inputChangeHandler}
        />
      </div>
    </>
  );

  return (
    <Card className=" p-5 rounded-2xl bg-gray-900 w-2/3">
      <form onSubmit={onSubmitHandler}>
        <div className="my-3 grid grid-cols-3 justify-evenly gap-2 text-lg">
          <div className="flex flex-col">
            <label htmlFor="frameCount">Number of Frames </label>
            <input
              className=""
              type="number"
              id="frameCount"
              value={frameCount}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="frameHeight">Frame Height </label>
            <input
              className=""
              type="number"
              step="0.5"
              id="frameHeight"
              value={frameHeight}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="frameWidth">Frame Width </label>
            <input
              className=""
              type="number"
              step="0.5"
              id="frameWidth"
              value={frameWidth}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="wallHeight">Wall Height </label>
            <input
              className=""
              type="number"
              step="0.5"
              id="wallHeight"
              value={wallHeight}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="wallWidth">Wall Width </label>
            <input
              className=""
              type="number"
              step="0.5"
              id="wallWidth"
              value={wallWidth}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="gap">Gap </label>
            <input
              className=""
              type="number"
              step="0.5"
              id="gap"
              value={gap}
              onChange={inputChangeHandler}
            />
          </div> 
          <div className="flex flex-col">
            <label htmlFor="layout">Layout </label>
            <select id="layout" value={layout} onChange={inputChangeHandler}>
              <option value="row">Row</option>
              <option value="column">Column</option>
              <option value="grid">Grid</option>
            </select>
          </div>
          <div>{layout === "grid" && dimensionsInputs}</div>
        </div>
        <div className="text-right">
          <Button />
        </div>
      </form>
    </Card>
  );
};
