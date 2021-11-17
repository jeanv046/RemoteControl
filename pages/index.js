import Controller from "./components/Controller";
import Image from "next/image";
import tech from "../public/37233.jpg";
import "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ height: "100vh" }}>
          <div className="col-md-12 col-lg-4">
            <div className="container h-100 align-items-center justify-content-center">
              <div className="row ">
                <h1 className="fw-bold mb-3">Opciones</h1>
              </div>
              <div className="row">
                <Controller textLabel={"Eje 1"} />
              </div>
              <div className="row">
                <Controller textLabel={"Eje 2"} />
              </div>
              <div className="row">
                <Controller textLabel={"Eje 3"} />
              </div>
              <div className="row">
                <Controller textLabel={"Eje 4"} />
              </div>
              <div className="row">
                <Controller textLabel={"Eje 5"} />
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-8 d-none d-lg-block px-0"
            style={{ backgroundColor: "#EAF3FE" }}
          >
            <div className="d-flex h-100 imageInnova px-3" >
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
