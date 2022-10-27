import "./card.styles.css";

const Card = function (props) {
  const { id, name, email } = props.monster;
  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`Monster ${name}`}
      />
      <h2 key={id}>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
