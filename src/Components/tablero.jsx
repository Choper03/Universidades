
const Card = (props) => {

    return (
      <>
        <div className="card">
          <img src={props.imagen} className="card-img-top" alt="logo" />
          <div className="card-body">
            <h2 className="card-title">{props.Nombre}</h2>
            <p className="card-text">{props.vision}</p>
          </div>
        </div>
      </> 
    );
  };
  
  export default Card;