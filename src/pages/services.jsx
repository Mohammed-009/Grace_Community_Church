import React from "react";

const servicesData = [
  {
    id: 1,
    icon: "bi bi-people",
    title: " Sunday Worship",
    subtitle: "9:00 AM & 11:00 AM",
    description:
      "Join us for inspiring worship, meaningful music, and biblical teaching that speaks to your heart.",
    list1: "Contemporary & Traditional Music",
    list2: "Bible-Based Teaching",
    list3: "Children's Programs Available",
  },
  {
    id: 2,
    icon: "bi bi-emoji-frown",
    title: "Children's Ministry",
    subtitle: "During Both Services",
    description:
      "Safe, fun, and educational programs designed to help children grow in faith and friendship.",
    list1: "Ages 6 months - 12 years",
    list2: "Trained Volunteers",
    list3: "Age-Appropriate Learning",
  },
];

const servicesData2 = [
  {
    id: 1,
    icon: "bi bi-people-fill",
    title: "Youth Group",
    subtitle: "Fridays 7:00 PM",
    description:
      "A vibrant community for teens to explore faith, build friendships, and have fun together.",
    list1: "Middle & High School",
    list2: "Games & Activities",
    list3: "Mentorship Programs",
  },
  {
    id: 2,
    icon: "bi bi-book",
    title: "Bible Study",
    subtitle: "Wednesdays 7:00 PM",
    description:
      "Dive deeper into God's Word through interactive discussion and study in a small group setting.",
    list1: "Small Group Discussion",
    list2: "All Skill Levels Welcome",
    list3: "Refreshments Provided",
  },
];

export default function AppServices() {
  return (
    <section id="services" className="text-center pt-4 section-services-bg">
      <div className="container-fluid pt-3">
        <div className="row justify-content-center">
          <h1 className="text-capitalize fw-bold display-5 services-head-color">
            Our Services & Programs
          </h1>
          <p className="lead paragraph-services-color">
            We offer a variety of services and programs designed to help you
            grow in faith, <br /> connect with others, and serve our community.
          </p>
        </div>
      </div>
      
      <div className="container-fluid pt-3">
        <div className="row justify-content-center">
          {servicesData.map((services) => {
            return (
              <div className="col-12 col-lg-6" key={services.id}>
                <div className="card p-4 mb-4 gap-3 services-cards">
                  <div className="d-lg-flex">
                    <div className="card card-services-icon text-center p-2 m-2 border-0 fs-3">
                      <i className={services.icon}></i>
                    </div>
                    {/* <i className={services.icon}></i> */}
                    <div className="text-center mt-2">
                      <h5 className="text-capitalize services-title-color">
                        {services.title}
                      </h5>
                      <span className="text-warning fw-bold">
                        {services.subtitle}
                      </span>
                    </div>
                  </div>
                  <div className="text-start my-3 text-position">
                    <p className="paragraph-services-color">
                      {services.description}
                    </p>
                  </div>
                  <div className="text-start">
                    <ul className="list-services-color">
                      <li>{services.list1}</li>
                      <li>{services.list2}</li>
                      <li>{services.list3}</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <a
                      href="#about"
                      className="btn btn-outline-warning w-100 text-black border-1"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container-fluid pt-3">
      <div className="row justify-content-center">
        {servicesData2.map((services2) => {
          return (
            <div className="col-12 col-lg-6" key={services2.id}>
              <div className="card p-4 mb-4 gap-3 services-cards">
                <div className="d-lg-flex">
                  <div className="card card-services-icon text-center p-2 m-2 border-0 fs-3">
                    <i className={services2.icon}></i>
                  </div>
                  {/* <i className={services.icon}></i> */}
                  <div className="text-center mt-2">
                    <h5 className="text-capitalize services-title-color">
                      {services2.title}
                    </h5>
                    <span className="text-warning fw-bold">
                      {services2.subtitle}
                    </span>
                  </div>
                </div>
                <div className="text-start my-3 text-position">
                  <p className="paragraph-services-color">
                    {services2.description}
                  </p>
                </div>
                <div className="text-start">
                  <ul className="list-services-color">
                    <li>{services2.list1}</li>
                    <li>{services2.list2}</li>
                    <li>{services2.list3}</li>
                  </ul>
                </div>
                <div className="text-center">
                  <a
                    href="#about"
                    className="btn btn-outline-warning w-100 text-black border-1"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>

      <div className="container-fluid pt-3">
        <div className="row justify-content-center">
          <div className="text-center p-5 background-blue">
            <div>
              <h4 className="fw-bold text-capitalize text-white">
                First Time Visitor?
              </h4>
            </div>
            <span>
              <p className="m-3">
                We'd love to welcome you to our church family! Our friendly
                greeters will help you feel at <br /> home, and we have special
                programs for children of all ages.
              </p>
            </span>
            <div className="text-center m-2">
              <a href="#contacts" className="btn btn-primary text-capitalize mt-4">Plan your visit</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
