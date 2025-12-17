function Card({
  cardMediaSrc,
  cardMediaAlt = "Card Image",
  cardTitle,
  cardPrice,
  showCardPrice = true,
  signatureBite = false,
}) {
  return (
    <div className="card-container">
      <div className="card-img">
        <img src="" alt="" />
        {signatureBite && <span className="signature">Signature Bites</span>}
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title"></h3>
          {showCardPrice && <span className="card-price">{cardPrice}</span>}
        </div>
        <p className="card-info"></p>
      </div>
    </div>
  );
}

export default Card;
