import "../CSS/pedazos.css";

export function Block(props) {
  return (
    <>
      <article className="column-card">
        <img
          className="imagen-card"
          src={require(`../img/card-${props.img}.jpeg`)}
          alt="descripcion"
        />
        <div className="container">
          <h4>{props.title}</h4>
          <p className="text">{props.text}</p>
        </div>
      </article>
    </>
  );
}
