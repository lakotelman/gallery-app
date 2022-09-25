import Card from "../UI/Card";

const Measurements = (props: any) => {
  return (
    <Card className="w-1/2 bg-black">
      <div> Start here: {props.topCorner}</div>
    </Card>
  );
};
export default Measurements;
