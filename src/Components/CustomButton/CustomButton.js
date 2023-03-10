import { Button } from "antd";

const CustomButton = (props) => {
  const { title, onClick } = props;
  return (
    <Button type="primary" onClick={onClick}>
      {title}
    </Button>
  );
};

export default CustomButton;
