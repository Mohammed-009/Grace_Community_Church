import React from "react";
import "../styles/bootstrap-icon.css";

const homeData = [
  {
    id: 1,
    icon: "bi bi-clock",
    title: " Sunday services",
    description: "9:00 AM & 11:00 AM",
  },
  {
    id: 2,
    icon: "bi bi-book",
    title: "Bible Study",
    description: "Wednesdays 7:00 PM",
  },
  {
    id: 3,
    icon: "bi bi-geo-alt",
    title: "Location",
    description: "123 Faith Street, Hope City",
  },
];

export default function AppHome() {
  return (
    <div className="container-fluid background-img">
      <section id="home" className="text-center pt-5">
        <div className="container pt-5">
          <div className="row justify-content-center">
            <div className="text-center">
              <h1 className="text-capitalize text-white fw-bold display-1">
                Welcome to
              </h1>
              <h1 className="text-capitalize text-warning fw-bold display-1">
                grace community church
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center mt-3">
        <div className="container py-2">
          <div className="row justify-content-center">
            <div className="text-center">
              <p className="lead text-white fw-bolder">
                Join our loving community where faith grows, hope thrives, and
                <br />
                lives are transformed through God's grace.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center mt-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="d-lg-flex align-items-center justify-content-center gap-3 px-4 mb-3">
              <div>
                <a
                  href="#contacts"
                  className="btn btn-primary text-capitalize fw-bold m-3"
                >
                  Plan Your Visit
                </a>
              </div>
              <div>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  className="btn btn-outline-light text-capitalize fw-bold"
                >
                  watch online
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center mt-3 pb-4">
        <div className="container py-2">
          <div className="row justify-content-center">
            {homeData.map((home) => {
              return (
                <div className="col-12 col-lg-4" key={home.id}>
                  <div className="card mt-2 p-0 gap-3 home-page-cards">
                    <div className="card-header m-0">
                      <span className="fs-3 fw-bolder text-warning">
                        <i className={home.icon}></i>
                      </span>
                    </div>
                    <div className="card-body">
                      <h5 className="text-capitalize text-white fw-bold">
                        {home.title}
                      </h5>
                      <span className="text-white">{home.description}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
    // <section className="background-img text-center pt-5">
    //   <div className="row">
    //     <div className="container justify-content-center pt-4">
    //       <div className="text-center">
    //         <h1 className="text-capitalize text-dark fw-bold display-5">
    //           Welcome to
    //         </h1>
    //         <h1 className="text-capitalize text-warning fw-bold">
    //           grace community church
    //         </h1>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="row">

    //   </div>
    //   {/* <h1 className="text-capitalize text-dark fw-bold display-4">
    //     Welcome to
    //   </h1> */}
    //   {/* <div className="container m-0 p-0">
    //     <div className="text-center">
    //       <h1 className="text-capitalize text-dark fw-bold display-1">
    //         Welcome to
    //       </h1>
    //       <h1 className="text-capitalize text-warning fw-bold">
    //         grace community church
    //       </h1>
    //     </div>
    //   </div> */}
    // </section>
  );
}
