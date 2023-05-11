import Toggle from "react-toggle";
import "react-toggle/style.css";

interface Props {
  onChange: (value: boolean) => void;
  className?: string;
  defaultIsChecked?: boolean;
}

const ToggleButton: React.FC<Props> = ({
  className,
  onChange,
  defaultIsChecked = false,
}) => {
  const btnClassName = className ?? "";

  return (
      <Toggle
        defaultChecked={defaultIsChecked}
        icons={false}
        onChange={e => onChange(e.target.checked)}
        className={`toggle ${btnClassName}`}
      />
  );
};

export default ToggleButton;
