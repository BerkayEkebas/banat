import React from "react";

const ContactHero = () => {
  return (
    <div id="hero">
      <div id="hero-styles">
        <div
          id="hero-caption"
          className="content-full-width parallax-scroll-caption text-align-center hero-full-caption caption-animated"
          style={{ height: 945 }}
        >
          <div className="inner">
            <h1
              className="hero-title caption-timeline"
              data-infotextbefore="Reach Out"
              data-infotextafter="Say Hello"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                filter: "blur(0px)",
                opacity: "1",
                transform: "translate(0%, 20%)",
              }}
            >
              <div>
                <span
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    opacity: 1,
                    transform: "translate(0px, 0px)",
                  }}
                >
                  연락처
                </span>
              </div>
            </h1>
            <div className="hero-subtitle caption-timeline onload-shuffle animated">
              <div>
                <span
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    color: "transparent",
                    transform: "translate(0%, -30%)",
                    opacity: 1,
                  }}
                  data-text="Don't let your vision wait"
                >
                  Don't let your vision wait
                </span>
              </div>
              <div className="secondary-font">
                <span
                  data-text="Let's bring it to life"
                  style={{
                    opacity: 1,
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    color: "transparent",
                    transform: "translate(0%, -30%)",
                  }}
                >
                  Let's bring it to life
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="hero-footer" className="has-border visible">
          <div
            className="hero-footer-left"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              opacity: 1,
              transform: "translate(0px, 0px)",
            }}
          >
            <div className="button-wrap left scroll-down">
              <div className="icon-wrap parallax-wrap">
                <div className="button-icon parallax-element">
                  <i className="fa-solid fa-arrow-down" />
                </div>
              </div>
              <div className="button-text sticky left">
                <span data-hover="Scroll to Explore">Scroll to Explore</span>
              </div>
            </div>
          </div>
          <div
            className="hero-footer-right"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              opacity: 1,
              transform: "translate(0px, 0px)",
            }}
          >
            <div id="info-text">
              <span>office@bennet.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
