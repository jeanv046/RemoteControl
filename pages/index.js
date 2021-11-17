import Controller from "./components/Controller";

export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ height: "100vh" }}>
          <div className="col-md-6 col-lg-4">
            <div className="container h-100 align-items-center justify-content-center">
              <div className="row ">
                <h1>OPCIONES</h1>
              </div>
              <div className="row">
                <Controller textLabel={"Rotor"} />
              </div>
              <div className="row">
                <Controller textLabel={"Base"} />
              </div>
              <div className="row">
                <Controller textLabel={"Codo"} />
              </div>
              <div className="row">
                <Controller textLabel={"Mano"} />
              </div>
              <div className="row">
                <Controller textLabel={"Pinza"} />
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-8 d-none d-md-block"
            style={{ backgroundColor: "#EAF3FE" }}
          >
            <h1>Aqui va el robot en 3D ☺</h1>
          </div>
        </div>
      </div>
      
    </>
  );
}
