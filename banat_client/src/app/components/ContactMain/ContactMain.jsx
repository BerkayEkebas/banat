import React from 'react'

const ContactMain = () => {
  return (
    <div id="main-content">
  {/* Main Page Content */}
  <div id="main-page-content" style={{ opacity: 1 }}>
    {/* Fit Thumb Screen Effects */}
    <div id="itemsWrapperLinks">
      <div id="itemsWrapper" className="webgl-fitthumbs fx-one">
        {/* Row */}
        {/*/Row */}
        {/* Row */}
        <div
          className="dark-section-wrapper"
          style={{ backgroundColor: "rgb(12, 12, 12)" }}
        >
          <div className="dark-section-container content-max-width">
            <div
              className="content-row row_padding_top row_padding_bottom dark-section text-align-center"
              data-bgcolor="#0c0c0c"
              style={{ opacity: 1 }}
            >
              <h2 className="has-shuffle animated">
                <span
                  className="shuffle-word"
                  data-text="Let's"
                  style={{ opacity: 1 }}
                >
                  Let's
                </span>{" "}
                <span
                  className="shuffle-word"
                  data-text="Talk"
                  style={{ opacity: 1 }}
                >
                  Talk
                </span>
              </h2>
              <hr />
              <hr />
              {/* Contact Formular */}
              <div id="contact-formular">
                <div id="message" />
                <form
                  method="post"
                  action="contact.php"
                  name="contactform"
                  id="contactform"
                >
                  <div className="name-box">
                    <input
                      name="name"
                      type="text"
                      id="name"
                      size={30}
                      defaultValue=""
                      placeholder="What's Your Name"
                    />
                    <label className="input_label" />
                  </div>
                  <div className="email-box">
                    <input
                      name="email"
                      type="text"
                      id="email"
                      size={30}
                      defaultValue=""
                      placeholder="Your Email"
                    />
                    <label className="input_label" />
                  </div>
                  <div className="message-box">
                    <textarea
                      name="comments"
                      cols={40}
                      rows={4}
                      id="comments"
                      placeholder="Tell Us About Your Project"
                      defaultValue={""}
                    />
                    <label className="input_label slow" />
                  </div>
                  <div className="verify-box">
                    <ul className="verify-sum">
                      <li>1</li>
                      <li>+</li>
                      <li>3</li>
                      <li>=</li>
                    </ul>
                    <input
                      name="verify"
                      type="text"
                      id="verify"
                      size={4}
                      defaultValue=""
                    />
                    <p className="required">
                      <span>*</span> Captcha Validation
                    </p>
                  </div>
                  <div
                    className="button-box has-animation animated"
                    data-delay={100}
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    <div
                      className="clapat-button-wrap parallax-wrap hide-ball"
                      style={{
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0px)"
                      }}
                    >
                      <div
                        className="clapat-button parallax-element"
                        style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transform: "translate(0px, 0px)"
                        }}
                      >
                        <div
                          className="button-border rounded animated"
                          style={{ width: "auto", opacity: 1 }}
                        >
                          <input
                            type="submit"
                            className="send_message"
                            id="submit"
                            defaultValue="Send Mail"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {/*/Contact Formular */}
            </div>
          </div>
        </div>
        {/*/Row */}
        {/* Row */}
        <div
          className="dark-section-wrapper"
          style={{ backgroundColor: "rgb(12, 12, 12)" }}
        >
          <div className="dark-section-container content-max-width">
            <div
              className="content-row dark-section text-align-center"
              data-bgcolor="#0c0c0c"
              style={{ opacity: 1 }}
            >
              <div
                className="one_third has-animation animated"
                data-delay={100}
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                  opacity: 1
                }}
              >
                <div className="box-icon-wrapper block-boxes">
                  <div className="box-icon">
                    <i className="fa fa-map-marker fa-2x" aria-hidden="true" />
                  </div>
                  <div className="box-icon-content">
                    <h6 className="no-margins">35 M Str, New York, USA</h6>
                    <p>Address</p>
                  </div>
                </div>
              </div>
              <div
                className="one_third has-animation animated"
                data-delay={200}
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                  opacity: 1
                }}
              >
                <hr />
                <p className="bigger">. . .</p>
              </div>
              <div
                className="one_third last has-animation animated"
                data-delay={300}
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                  opacity: 1
                }}
              >
                <div className="box-icon-wrapper block-boxes">
                  <div className="box-icon">
                    <i className="fa fa-phone fa-2x" aria-hidden="true" />
                  </div>
                  <div className="box-icon-content">
                    <h6 className="no-margins">0040 (7763) 574-8901</h6>
                    <p>Phone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/Row */}
        {/* Row */}
        <div
          className="dark-section-wrapper"
          style={{ backgroundColor: "rgb(12, 12, 12)" }}
        >
          <div className="dark-section-container content-max-width">
            <div
              className="content-row full row_padding_top row_padding_bottom dark-section text-align-center"
              data-bgcolor="#0c0c0c"
              style={{ opacity: 1 }}
            >
              <p className="bigger has-shuffle no-margins secondary-font animated">
                <span
                  className="shuffle-word"
                  data-text="Ready"
                  style={{ opacity: 1 }}
                >
                  Ready
                </span>{" "}
                <span
                  className="shuffle-word"
                  data-text="to"
                  style={{ opacity: 1 }}
                >
                  to
                </span>{" "}
                <span
                  className="shuffle-word"
                  data-text="work"
                  style={{ opacity: 1 }}
                >
                  work
                </span>{" "}
                <span
                  className="shuffle-word"
                  data-text="together?"
                  style={{ opacity: 1 }}
                >
                  together?
                </span>
              </p>
              <div
                id="copy-email"
                data-hover-message="Copy Mail"
                data-clicked-message="Copied"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)"
                }}
              >
                <span>office@bennet.com</span>
              </div>
            </div>
          </div>
        </div>
        {/*/Row */}
      </div>
    </div>
    {/* Fit Thumb Screen Effects */}
  </div>
  {/*/Main Page Content */}
</div>

  )
}

export default ContactMain