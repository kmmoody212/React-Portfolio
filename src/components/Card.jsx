// Used code from module 12 activitiy 8

export default function Card(props) {
  const randomWidth = () => {
    const number = Math.random() * (300 - 200) + 200;
    return number.toString().split(".")[0];
  };

  return (
    <div className="card-container">
      <div className="card-img">
        {/* images go here, use randomWidth function to size */}
      </div>
      <div className="card-body">
        <h5 className="card-title">Name: {props.name}</h5>
        <p className="card-text">Description: {props.description}</p>
        <a href="#" className="btn btn-primary">
          View {props.name}
        </a>
      </div>
    </div>
  );
}
