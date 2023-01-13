import "./Button.scss";

interface IButtonProps {
  name: string;
  onClick: () => void;
}

const Button: React.FC<IButtonProps> = ({ name, onClick }) => {
  return (
    <button className={name} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
