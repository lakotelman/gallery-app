type Props = {
  children: JSX.Element;
  className?: string
};
const Card = (props: Props) => {
  return <div className={`mx-auto my-3 ${props.className}`}>{props.children}</div>;
};

export default Card;
