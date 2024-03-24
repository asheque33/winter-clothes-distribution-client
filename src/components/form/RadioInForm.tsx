import { Radio, RadioChangeEvent } from "antd";

interface RadioInFormProps {
  value?: string;
  onChange?: (value: string) => void;
}

const RadioInForm = ({ value, onChange }: RadioInFormProps) => {
  const radioButtonChange = (e: RadioChangeEvent) => {
    onChange?.(e.target.value);
  };
  return (
    <Radio.Group onChange={radioButtonChange} value={value}>
      <Radio value="S">S</Radio>
      <Radio value="M">M</Radio>
      <Radio value="L">L</Radio>
      <Radio value="XL">XL</Radio>
      <Radio value="XXL">XXL</Radio>
    </Radio.Group>
  );
};

export default RadioInForm;
