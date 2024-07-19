const Card = ({ imageart, reference, designation, prix }) => {
  return (
    <div className="card">
      {imageart && <img src={imageart} alt={reference} />}
      <div className="card-content">
        <h1 className="card-title">{reference}</h1>
        <p className="card-description">{designation.substr(0, 20)}</p>
        <h1 className="card-title">Prix : {prix} TND</h1>
        <button className="card-button">
          <i className="fa-solid fa-basket-shopping"></i>Add to card
        </button>
      </div>
    </div>
  );
};

export default Card;
