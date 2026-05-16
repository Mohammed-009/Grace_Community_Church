import React from "react";
import { useForm } from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";

const contactData1 = [
  {
    id: 1,
    icon: "bi bi-geo-alt",
    title: "Address",
    description1: "123 Faith Street",
    description2: "Hope City, HC 12345",
  },
  {
    id: 2,
    icon: "bi bi-telephone",
    title: "Phone",
    description1: "(555) 123-HOPE",
    description2: "(555) 123-4673",
  },
];

const contactData2 = [
  {
    id: 1,
    icon: "bi bi-envelope",
    title: "Email",
    description1: "info@gracecommunity.org",
    description2: "pastor@gracecommunity.org",
  },
  {
    id: 2,
    icon: "bi bi-clock",
    title: "Office Hours",
    description1: "Monday - Friday",
    description2: "9:00 AM - 4:00 PM",
  },
];

export default function AppContacts() {
  // Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  // Formspree hook ID
  const [state, handleFormspreeSubmit] = useFormspree("mzzypeja");

  const onSubmit = async (data) => {
    // Send data to Formspree
    const result = await handleFormspreeSubmit(data);

    if (result?.response?.ok) {
      alert("Message sent successfully!");
      reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contacts" className="text-center pt-4">
      <div className="container-fluid pt-3">
        <div className="row justify-content-center">
          <h1 className="text-capitalize fw-bold display-5 services-head-color">
            Get In Touch
          </h1>
          <p className="lead paragraph-services-color">
            We'd love to hear from you! Whether you have questions, need prayer,
            or want to <br /> learn more about our church, we're here to help.
          </p>
        </div>
      </div>
      <div className="container-fluid pt-3">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6">
            <h3 className="text-start services-head-color">
              Contact Information
            </h3>
            <div className="row justify-content-center">
              {contactData1.map((contact) => {
                return (
                  <div className="col-12 col-lg-6" key={contact.id}>
                    <div className="card gap-2 p-3 mt-3 card-contact">
                      <div className="card-body">
                        <div className="fs-4 fw-bold mb-3">
                          <i className={contact.icon}></i>
                        </div>
                        <h6 className="services-title-color fw-bold mb-2">
                          {contact.title}
                        </h6>
                        <p className="paragraph-services-color">
                          {contact.description1}
                        </p>
                        <p className="paragraph-services-color">
                          {contact.description2}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="row justify-content-center mt-3">
              {contactData2.map((contact) => {
                return (
                  <div className="col-12 col-lg-6 mb-3" key={contact.id}>
                    <div className="card gap-2 p-3 mt-3 card-contact">
                      <div className="card-body">
                        <div className="fs-4 fw-bold mb-3">
                          <i className={contact.icon}></i>
                        </div>
                        <h6 className="services-title-color fw-bold mb-2">
                          {contact.title}
                        </h6>
                        <p className="paragraph-services-color">
                          {contact.description1}
                        </p>
                        <p className="paragraph-services-color">
                          {contact.description2}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="py-4 px-3 background-gradient-div">
              <div>
                <h3 className="text-white">Visit Us This Sunday</h3>
              </div>
              <div>
                <p className="text-white text-start">
                  Experience the warmth of our community and the power of
                  worship. Come as you are - you'll always be welcome here.
                </p>
              </div>
              <div className="text-start">
                <i className="bi bi-p-circle p-2 text-danger"></i>
                <span className="text-white">Free parking available</span>
              </div>
              <div className="text-start">
                <i className="bi bi-person-wheelchair p-2 text-primary"></i>
                <span className="text-white">Wheelchair accessible</span>
              </div>
              <div className="text-start">
                <i className="bi bi-emoji-grin p-2 text-warning"></i>
                <span className="text-white">
                  Nursery & children's programs
                </span>
              </div>
              <div className="text-start">
                <i className="bi bi-cup-hot p-2 text-white"></i>
                <span className="text-white">
                  Coffee & fellowship after service
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="card p-2">
              <div className="card-body">
                <h4 className="mt-2 mb-3 text-center services-head-color">
                  Send Us a Message
                </h4>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group text-start mb-3">
                        <label htmlFor="firstname">First Name *</label>
                        <input
                          type="text"
                          className="form-control bg-light"
                          {...register("firstname", {
                            required: "First name is required",
                          })}
                        />
                        {errors.firstname && (
                          <small className="text-danger">
                            {errors.firstname.message}
                          </small>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group text-start mb-3">
                        <label htmlFor="lastname">Last Name *</label>
                        <input
                          type="text"
                          className="form-control bg-light"
                          {...register("lastname", {
                            required: "Last name is required",
                          })}
                        />
                        {errors.lastname && (
                          <small className="text-danger">
                            {errors.lastname.message}
                          </small>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="form-group text-start mb-3">
                    <label htmlFor="EmailAddress">Email Address *</label>
                    <input
                      type="email"
                      className="form-control bg-light"
                      {...register("EmailAddress", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                          message: "Invalid email format",
                        },
                      })}
                    />
                    {errors.EmailAddress && (
                      <small className="text-danger">
                        {errors.EmailAddress.message}
                      </small>
                    )}
                  </div>

                  <div className="form-group text-start mb-3">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="text"
                      className="form-control bg-light"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10,15}$/,
                          message: "Enter a valid phone number",
                        },
                      })}
                    />
                    {errors.phone && (
                      <small className="text-danger">
                        {errors.phone.message}
                      </small>
                    )}
                  </div>

                  <div className="form-group mb-3 text-start">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      className="form-control bg-light"
                      {...register("subject", {
                        required: "Subject is required",
                      })}
                    />
                    {errors.subject && (
                      <small className="text-danger">
                        {errors.subject.message}
                      </small>
                    )}
                  </div>

                  <div className="form-group text-start">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      className="form-control bg-light"
                      cols="15"
                      rows="5"
                      placeholder="Tell us how we can help you...?"
                      {...register("message", {
                        required: "Message is required",
                        minLength: {
                          value: 10,
                          message: "Message should be at least 10 characters",
                        },
                      })}
                    ></textarea>
                    {errors.message && (
                      <small className="text-danger">
                        {errors.message.message}
                      </small>
                    )}
                  </div>

                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-primary px-4 py-2 fw-bold mt-3 w-100 send-message-btn"
                      disabled={state.submitting}
                    >
                      {state.submitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>

                  {state.succeeded && (
                    <p className="text-success text-center mt-3">
                      ✅ Your message has been sent!
                    </p>
                  )}
                  {state.errors?.length > 0 && (
                    <p className="text-danger text-center mt-3">
                      ❌ There was an error sending your message.
                    </p>
                  )}
                </form>
                
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 mt-5 background-find-us">
          <div className="txt-center">
            <i className="bi bi-geo-alt fs-3 paragraph-services-color"></i>
          </div>
          <div className="text-center">
            <h4 className="text-capitalize paragraph-services-color">
              Find us here
            </h4>
          </div>
          <div className="text-center">
            <span>123 Faith Street, Hope City, HC 12345</span>
          </div>
          <div>
            <a
              href="https://www.google.com/maps?q=Mombasa"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-warning mt-3 text-dark"
            >
              Get directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
