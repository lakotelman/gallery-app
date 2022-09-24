interface Props {
  onSubmit?: (event: any) => void;
}

export const Button = (props: Props) => {
  return (
    <button type="submit" className=" border-solid border-2 border-blue-300" onSubmit={props.onSubmit}>
      {" "}
      Go
    </button>
  );
};
