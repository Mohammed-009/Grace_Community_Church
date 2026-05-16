import React from "react";

export default function AppEvents() {
  return (
    <section id="events" className="text-center pt-4 section-services-bg">
      <div className="container-fluid pt-3">
        <div className="row justify-content-center">
          <h1 className="text-capitalize fw-bold display-5 services-head-color">
            Upcoming Events
          </h1>
          <p className="lead paragraph-services-color">
            Stay connected with our church community through special events,
            celebrations, <br /> and opportunities to serve together.
          </p>
        </div>
      </div>
      <div className="container-fluid pt-3">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6">
            <div className="card p-4 mb-4 gap-3 services-cards">
              <div className="card-body text-start">
                <h3 className="services-title-color">
                  Community Harvest Festival
                </h3>
                <div>
                  <div className="d-lg-flex p-2">
                    <div className="text-warning">
                      <i className="bi bi-calendar4 p-2"></i>
                    </div>
                    <div>
                      <span className="p-2 paragraph-services-color">
                        October 28, 2024
                      </span>
                    </div>
                  </div>
                  <div className="d-lg-flex p-2">
                    <div className="text-warning">
                      <i className="bi bi-clock p-2"></i>
                    </div>
                    <div>
                      <span className="p-2 paragraph-services-color">
                        2:00 PM - 6:00 PM
                      </span>
                    </div>
                  </div>
                  <div className="d-lg-flex p-2">
                    <div className="text-warning">
                      <i className="bi bi-geo-alt p-2"></i>
                    </div>
                    <div>
                      <span className="p-2 paragraph-services-color">
                        Church Grounds
                      </span>
                    </div>
                  </div>
                  <div className="d-lg-flex p-2">
                    <div className="text-warning">
                      <i className="bi bi-people p-2"></i>
                    </div>
                    <div>
                      <span className="p-2 paragraph-services-color">
                        All Ages Welcome
                      </span>
                    </div>
                  </div>
                </div>
                <p className="pt-3 paragraph-services-color">
                  Join us for our annual harvest celebration with food, games,
                  and fellowship for the whole family.
                </p>
                <a
                  href="#"
                  className="btn btn-outline-warning btn-sm fw-bold mt-2"
                >
                  RSVP
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="card p-4 mb-4 gap-3 services-cards">
              <div className="card-body">
                <h3 className="services-title-color">Church Announcements</h3>
                <div className="text-start paragraph-services-color">
                  <ul>
                    <li className="p-2">
                      Food Drive: Collecting non-perishable items through
                      October 31st
                    </li>
                    <li className="p-2">
                      Youth Mission Trip: Applications available in the church
                      office
                    </li>
                    <li className="p-2">
                      Bible Study Break: No Wednesday sessions November 20-27
                    </li>
                    <li className="p-2">
                      Christmas Play Auditions: November 5th after morning
                      service
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="card p-4 mb-4 gap-3 services-cards">
              <div className="card-body text-start">
                <h3 className="services-title-color">Thanksgiving Service</h3>
                <div>
                  <div className="d-lg-flex p-2">
                    <div className="text-warning">
                      <i className="bi bi-calendar4 p-2"></i>
                    </div>
                    <div>
                      <span className="p-2 paragraph-services-color">
                        November 23, 2024
                      </span>
                    </div>
                  </div>
                  <div className="d-lg-flex p-2">
                    <div className="text-warning">
                      <i className="bi bi-clock p-2"></i>
                    </div>
                    <div>
                      <span className="p-2 paragraph-services-color">
                        10:00 AM
                      </span>
                    </div>
                  </div>
                  <div className="d-lg-flex p-2">
                    <div className="text-warning">
                      <i className="bi bi-geo-alt p-2"></i>
                    </div>
                    <div>
                      <span className="p-2 paragraph-services-color">
                        Main Sanctuary
                      </span>
                    </div>
                  </div>
                  <div className="d-lg-flex p-2">
                    <div className="text-warning">
                      <i className="bi bi-people p-2"></i>
                    </div>
                    <div>
                      <span className="p-2 paragraph-services-color">
                        Open to All
                      </span>
                    </div>
                  </div>
                </div>
                <p className="pt-3 paragraph-services-color">
                  A special service of gratitude and thanksgiving with
                  traditional hymns and community prayer.
                </p>
                <a
                  href="#"
                  className="btn btn-outline-warning btn-sm fw-bold mt-2"
                >
                  RSVP
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="card p-4 mb-4 gap-3 card-event-bg">
              <div className="card-body ">
                <h3 className="text-white text-start">Get Involved</h3>
                <div className="text-start text-white">
                  <p className="mt-3">
                    Looking for ways to serve and connect with our community? We
                    have many volunteer opportunities available.
                  </p>
                </div>
                <a href="#" className="btn btn-primary w-100 mt-2">
                  View Opportunities
                </a>
              </div>
            </div>
            <div className="card p-4 mb-4 gap-3">
              <div className="card-body ">
                <h3 className="text-start services-title-color">
                  Prayer Requests
                </h3>
                <div className="text-start text-white">
                  <p className="paragraph-services-color mt-3">
                    We believe in the power of prayer. Share your prayer
                    requests with our pastoral team and prayer ministry.
                  </p>
                </div>
                <a
                  href="#contacts"
                  className="btn btn-outline-warning text-black w-100 mt-2 text-capitalize"
                >
                  Submit prayer request
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="text-start">
            <div className="col-lg-6 text-start">
              <div className="card p-4 mb-4 gap-3 services-cards">
                <div className="card-body text-start">
                  <h3 className="services-title-color">
                    New Year Prayer Service
                  </h3>
                  <div>
                    <div className="d-lg-flex p-2">
                      <div className="text-warning">
                        <i className="bi bi-calendar4 p-2"></i>
                      </div>
                      <div>
                        <span className="p-2 paragraph-services-color">
                          December 31, 2024
                        </span>
                      </div>
                    </div>
                    <div className="d-lg-flex p-2">
                      <div className="text-warning">
                        <i className="bi bi-clock p-2"></i>
                      </div>
                      <div>
                        <span className="p-2 paragraph-services-color">
                          11:00 PM
                        </span>
                      </div>
                    </div>
                    <div className="d-lg-flex p-2">
                      <div className="text-warning">
                        <i className="bi bi-geo-alt p-2"></i>
                      </div>
                      <div>
                        <span className="p-2 paragraph-services-color">
                          Main Sanctuary
                        </span>
                      </div>
                    </div>
                    <div className="d-lg-flex p-2">
                      <div className="text-warning">
                        <i className="bi bi-people p-2"></i>
                      </div>
                      <div>
                        <span className="p-2 paragraph-services-color">
                          All Welcome
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="pt-3 paragraph-services-color">
                    Welcome the new year with prayer, reflection, and hope for
                    God's blessings ahead.
                  </p>
                  <a
                    href="#"
                    className="btn btn-outline-warning btn-sm fw-bold mt-2"
                  >
                    RSVP
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
