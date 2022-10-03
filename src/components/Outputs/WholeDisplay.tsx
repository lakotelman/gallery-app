import { useEffect } from "react";
import { IGridOptions } from "../UserInputs/InputsForm";

interface Props {
  options: IGridOptions;
}

const WholeDisplay = (props: Props) => {
  const totalItems = props.options.frameCount;

  const arr: number[] = [...Array(totalItems).keys()];

  console.log(arr);

  return (
    <div
      className="border-2  grid border-solid border-white p-4"
      style={{
        gap: `${props.options.gap}px`,
        gridTemplateColumns: `repeat(${props.options.gridColumns}, minmax(0, 1fr))`,
      }}
    >
      {arr.map(() => {
        return <div className="border-2 border-white">Box</div>;
      })}
    </div>
  );
};
export default WholeDisplay;
