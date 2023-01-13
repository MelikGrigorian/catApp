import "./Card.scss";


interface ICardInfoProps {
  height: number;
  id: string;
  imgUrl: string;
  onNavigate: () => void;
}

const Card: React.FC<ICardInfoProps> = ({ height, imgUrl, id, onNavigate }) => {
  return (
    <div className="Card" onClick={onNavigate}>
      <img src={imgUrl} alt={id} />
    </div>
  );
};

export default Card;
