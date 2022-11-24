interface IProps {
  route: any;
}
const BasicLayout: React.FC<IProps> = (props) => {
  return <div>{props.children}</div>;
};
export default BasicLayout;
