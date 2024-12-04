// Used code from module 12 activitiy 8

export default function Card(props) {
  const randomWidth = () => {
    const number = Math.random() * (300 - 200) + 200;
    return number.toString().split(".")[0];
  };

  return (
    <div>
      <div className="card-body">
        <img className="card-img" src={props.img}></img>
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.link} className="btn btn-primary">
          View Application
        </a>
        <a href={props.code} className="btn btn-primary">
          View Code
        </a>
      </div>
    </div>
  );
}
