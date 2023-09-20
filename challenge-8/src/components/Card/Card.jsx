const Card = ({ title, children }) => {
  return (
    <div className="Card">
      <span>{title}</span>
      <div className="Card__Body">{children}</div>
    </div>
  );
};

export default Card;
