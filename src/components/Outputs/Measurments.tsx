import ArrowIcon from "../UI/ArrowIcon";
import Card from "../UI/Card";

const Measurements = (props: any) => {
  return (
    <Card className="w-2/3">
      <div>
        <h3 className=" text-xl">Start here: </h3>
        <div className="flex gap-2">
          <p>Measure this many inches from the left</p>
          <ArrowIcon />
          {props.topCorner[0]}
        </div>

        <div className="flex gap-2">
          <p>Measure this many inches from the top</p>
          <ArrowIcon />

          {props.topCorner[1]}
        </div>
      </div>
    </Card>
  );
};
export default Measurements;
