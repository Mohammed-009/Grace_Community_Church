import React from "react";

const aboutData = [
  {
    id: 1,
    icon: "bi bi-heart",
    title: " Love & Compassion",
    description:
      "We believe in showing God's love through our actions and words to everyone we meet.",
  },
  {
    id: 2,
    icon: "bi bi-people",
    title: "Community",
    description:
      "Building authentic relationships and supporting one another through all of life's seasons.",
  },
  {
    id: 3,
    icon: "bi bi-book-half",
    title: "Biblical Truth",
    description:
      "Teaching and living according to God's Word with wisdom, grace, and understanding.",
  },
  {
    id: 4,
    icon: "bi bi-lightbulb-fill",
    title: "Growth",
    description:
      "Encouraging spiritual growth and personal development in a supportive environment.",
  },
];

export default function AppAbout() {
  return (
    <section id="about" className="text-center pt-3 section-about-bg">
      <div className="container-fluid pt-4">
        <div className="row justify-content-center">
          <h1 className="text-capitalize fw-bold display-5 about-title-color">
            About our church
          </h1>
          <p className="lead paragraph-about-color">
            For over 25 years, Grace Community Church has been a beacon of hope
            in our <br /> community, welcoming all who seek to grow in faith and
            fellowship.
          </p>
        </div>
      </div>
      <div className="container-fluid pt-3">
        <div className="row justify-content-center">
          <h3 className="text-capitalize fw-bold text-start p-3 about-subtitle-color">
            Our story
          </h3>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-6">
            <p className="lead text-start text-position">
              Founded in 1999 by Pastor John and Sarah Williams, Grace Community
              Church began as a small home fellowship with a vision to create a
              place where everyone could experience God's love and grace. <br />
              <br /> Today, we are a thriving community of believers committed
              to worship, discipleship, and service. Our doors are open to
              people from all walks of life, and we believe that everyone has a
              place in God's family. <br />
              <br /> Under the leadership of Pastor Michael Thompson, we
              continue to grow in faith and reach out to our community with the
              message of hope and salvation.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <div className="card p-3 m-3 about-page-card">
              <div className="card-body">
                <h4 className="text-capitalize fw-bold about-subtitle-color">
                  Meet Pastor Michael
                </h4>
                <p>
                  Pastor Michael Thompson has been serving our congregation
                  since 2018. With over 15 years of ministry experience, he
                  brings wisdom, compassion, and a heart for teaching God's
                  Word. He holds a Master of Divinity from Seminary College and
                  is passionate about helping people discover their purpose and
                  grow in their relationship with Christ.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {aboutData.map((about) => {
            return (
              <div className="col-12 col-lg-3" key={about.id}>
                <div className="card p-3 mb-4 mt-3 gap-3 about-cards-4">
                  <div className="card-body">
                    <div className="fs-1 fw-bold"><i className={about.icon}></i></div>
                    {/* <i className={about.icon}></i> */}
                    <h5 className="text-capitalize fw-bold p-2">
                      {about.title}
                    </h5>
                    <p className="lead">{about.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
