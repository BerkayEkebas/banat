import React from 'react'

const Hero = () => {
  return (
    <>
  {/* Hero Section */}
  <div id="hero">
    <div id="hero-styles">
      <div
        id="hero-caption"
        className="content-full-width parallax-scroll-caption text-align-center hero-full-caption"
      >
        <div className="inner">
          <h1
            className="hero-title caption-timeline"
            data-infotextbefore="Welcome"
            data-infotextafter="Est. 2025"
          >
            <div>
              <span>bennet</span>
            </div>
          </h1>
          <div className="hero-subtitle caption-timeline onload-shuffle">
            <div>
              <span>Bringing brands to life through</span>
            </div>
            <div className="secondary-font">
              <span>creative web solutions</span>
            </div>
          </div>
        </div>
      </div>
      <div id="hero-footer" className="has-border">
        <div className="hero-footer-left">
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
        <div className="hero-footer-right">
          <div id="info-text">
            <span>Featured Projects</span>
          </div>
        </div>
      </div>
    </div>
    <div id="hero-interaction">
      <div className="hero-column col-left">
        <div className="col-img-wrapper small-img">
          <img src="images/01hero1.jpg" alt="" />
        </div>
        <div className="col-img-wrapper large-img">
          <img src="images/01hero.jpg" alt="" />
        </div>
      </div>
      <div className="hero-column col-right">
        <div className="col-img-wrapper large-img">
          <img src="images/02hero.jpg" alt="" />
        </div>
        <div className="col-img-wrapper small-img">
          <img src="images/02hero1.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
  {/*/Hero Section */}
</>

  )
}

export default Hero