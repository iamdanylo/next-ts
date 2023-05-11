interface Props {
  onClick: () => void;
  title: string;
  className?: string;
}

const Button: React.FC<Props> = ({ className, onClick, title }) => {
  const btnClassName = className ?? "";

  return (
    <div onClick={onClick} className={`btn ${btnClassName}`}>
      <span className="btn-text">{title}</span>
    </div>
  );
};

export default Button;
