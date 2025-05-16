const Card = ({ id, title, price, image }) => {
  return (
    <article dataId={id} className="card">
      <img src={image ? image : null} alt="" />
      <h3>{title}</h3>
      <p>{price}</p>
    </article>
  );
};

export default Card;
