function Card() {
  return (
    <div className="card mb-3 my_css" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://media.famigliacristiana.it/2017/9/dio-onnipotente_2256403.jpg"
            className="img-fluid rounded-start"
            alt="DioCane"
          ></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">SuCamelo</h5>
            <p className="card-text">Succhia le palle</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
