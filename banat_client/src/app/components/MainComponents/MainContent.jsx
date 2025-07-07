import React from "react";

const MainContent = () => {
  return (
    <div id="main-page-content">
      {/* Fit Thumb Screen Effects */}
      <div id="itemsWrapperLinks">
        <div id="itemsWrapper" className="webgl-fitthumbs fx-one">
          {/* Row */}
          <div
            className="content-row full row_padding_top row_padding_left row_padding_right light-section fadeout-element"
            data-bgcolor="transparent"
          >
            <div className="landing-intro-wrapper">
              <h2 className="new-hero-title">
                <span>We’re</span>
                <div className="hero-title-placeholder" />
                <span>
                  a{" "}
                  <span className="text-rotator-wrapper secondary-font">
                    <span className="text-rotator">
                      <span>creative</span>
                      <span>visionary</span>
                      <span>digital</span>
                    </span>
                  </span>
                </span>
                <span>agency</span>
              </h2>
            </div>
          </div>
          {/*/Row */}
          {/* Row */}
          <div
            className="content-row full light-section row_padding_left row_padding_right row_padding_bottom fadeout-element"
            data-bgcolor="transparent"
          >
            <hr />
            <div className="three_fourth" />
            <div
              className="one_fourth last vertical-parallax"
              data-startparallax={0}
              data-endparallax={0}
            >
              <div className="landing-video content-timeline">
                <div className="content-video-wrapper">
                  <video loop muted playsInline className="bgvid">
                    <source src="/images/intro.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <hr />
              <hr />
              <hr />
              <p className="has-opacity">
                Crafting exceptional websites tailored to your vision, we blend
                creativity with functionality to deliver stunning digital
                experiences.
              </p>
              <div className="button-wrap right button-link has-animation">
                <div className="icon-wrap parallax-wrap">
                  <div className="button-icon parallax-element">
                    <i className="fa-solid fa-arrow-right" />
                  </div>
                </div>
                <a
                  className="ajax-link"
                  data-type="page-transition"
                  href="about.html"
                >
                  <div className="button-text sticky right">
                    <span data-hover="Read More">Read More</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/*/Row */}
          {/* Row */}
          <div
            className="content-row full text-align-center dark-section disable-header-gradient"
            data-bgcolor="#c8c8c8"
          >
            <div className="snap-slider-holder">
              <div className="snap-slider-images">
                <div className="snap-slider-images-wrapper">
                  <div className="snap-slide trigger-item change-header-color">
                    <div className="img-mask">
                      <div className="section-image trigger-item-link">
                        <img
                          src="images/01hero.jpg"
                          className="item-image grid__item-img"
                          alt=""
                        />
                      </div>
                      <img
                        src="images/01hero.jpg"
                        className="grid__item-img grid__item-img--large"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="snap-slide trigger-item change-header-color">
                    <div className="img-mask">
                      <div className="section-image trigger-item-link">
                        <img
                          src="images/02hero.jpg"
                          className="item-image grid__item-img"
                          alt=""
                        />
                      </div>
                      <img
                        src="images/02hero.jpg"
                        className="grid__item-img grid__item-img--large"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="snap-slide trigger-item change-header-color">
                    <div className="img-mask">
                      <div className="section-image trigger-item-link">
                        <img
                          src="images/03hero.jpg"
                          className="item-image grid__item-img"
                          alt=""
                        />
                      </div>
                      <img
                        src="images/03hero.jpg"
                        className="grid__item-img grid__item-img--large"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="snap-slide trigger-item change-header-color">
                    <div className="img-mask">
                      <div className="section-image trigger-item-link">
                        <img
                          src="images/04hero.jpg"
                          className="item-image grid__item-img"
                          alt=""
                        />
                        <div className="hero-video-wrapper">
                          <video loop muted playsInline className="bgvid">
                            <source src="/images/04hero.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                      <img
                        src="images/04hero.jpg"
                        className="grid__item-img grid__item-img--large"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="snap-slider-thumbs">
                <div className="snap-slider-thumbs-wrapper">
                  <div className="thumb-slide" data-centerline="OPEN">
                    <div className="thumb-slide-img">
                      <img
                        src="images/01hero1.jpg"
                        className="item-image grid__item-img"
                        alt=""
                      />
                    </div>
                    <a
                      className="slide-link"
                      data-type="page-transition"
                      href="project01.html"
                    />
                  </div>
                  <div className="thumb-slide" data-centerline="OPEN">
                    <div className="thumb-slide-img">
                      <img
                        src="images/02hero1.jpg"
                        className="item-image grid__item-img"
                        alt=""
                      />
                    </div>
                    <a
                      className="slide-link"
                      data-type="page-transition"
                      href="project02.html"
                    />
                  </div>
                  <div className="thumb-slide" data-centerline="OPEN">
                    <div className="thumb-slide-img">
                      <img
                        src="images/03hero1.jpg"
                        className="item-image grid__item-img"
                        alt=""
                      />
                    </div>
                    <a
                      className="slide-link"
                      data-type="page-transition"
                      href="project03.html"
                    />
                  </div>
                  <div className="thumb-slide" data-centerline="OPEN">
                    <div className="thumb-slide-img">
                      <img
                        src="images/04hero.jpg"
                        className="item-image grid__item-img"
                        alt=""
                      />
                    </div>
                    <a
                      className="slide-link"
                      data-type="page-transition"
                      href="project04.html"
                    />
                  </div>
                </div>
              </div>
              <div className="snap-slider-captions">
                <div className="snap-slider-captions-wrapper content-full-width">
                  <div className="snap-slide-caption">
                    <div className="slide-title">
                      <span>Son of a Tailor</span>
                    </div>
                    <div className="slide-current">
                      <span>01</span>
                    </div>
                    <div className="slide-counter">
                      <span>04</span>
                    </div>
                    <div className="slide-subtitle">
                      <span>Brand Identity</span>
                    </div>
                  </div>
                  <div className="snap-slide-caption">
                    <div className="slide-title">
                      <span>Stena Air</span>
                    </div>
                    <div className="slide-current">
                      <span>02</span>
                    </div>
                    <div className="slide-counter">
                      <span>04</span>
                    </div>
                    <div className="slide-subtitle">
                      <span>Graphic Design</span>
                    </div>
                  </div>
                  <div
                    className="snap-slide-caption change-header1"
                    data-centerline="OPEN"
                  >
                    <div className="slide-title">
                      <span>Lounge Chair</span>
                    </div>
                    <div className="slide-current">
                      <span>03</span>
                    </div>
                    <div className="slide-counter">
                      <span>04</span>
                    </div>
                    <div className="slide-subtitle">
                      <span>Photography</span>
                    </div>
                  </div>
                  <div className="snap-slide-caption">
                    <div className="slide-title">
                      <span>Invincibles</span>
                    </div>
                    <div className="slide-current">
                      <span>04</span>
                    </div>
                    <div className="slide-counter">
                      <span>04</span>
                    </div>
                    <div className="slide-subtitle">
                      <span>Video</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/Row */}
          {/* Row */}
          <div
            className="content-row small text-align-center light-section"
            data-bgcolor="#c8c8c8"
          >
            <hr />
            <hr />
            <hr />
            <p className="has-shuffle no-margins">
              Continue exploring our work collection
            </p>
            <br />
            <div className="button-box">
              <div className="clapat-button-wrap parallax-wrap hide-ball">
                <div className="clapat-button parallax-element">
                  <div className="button-border outline rounded parallax-element-second">
                    <a
                      className="ajax-link"
                      data-type="page-transition"
                      href="index-portfolio.html"
                    >
                      <span data-hover="All Projects">All Projects</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/Row */}
          {/* Row */}
          <div
            className="content-row row_padding_top text-align-center light-section"
            data-bgcolor="#c8c8c8"
          >
            <div className="pinned-lists-wrapper font-mode" data-duration="3x">
              <p>You need it? We do it</p>
              <ul className="pinned-lists">
                <li>branding</li>
                <li data-infotextafter="Inspire">web design</li>
                <li>motion</li>
                <li data-infotextafter="Create">development</li>
                <li>marketing</li>
              </ul>
            </div>
          </div>
          {/*/Row */}
          {/* Row */}
          <div
            className="content-row row_padding_top light-section text-align-center"
            data-bgcolor="#c8c8c8"
          >
            <div className="one_third has-animation" data-delay={100}>
              <div className="box-icon-wrapper block-boxes">
                <div className="box-icon">
                  <i className="fa fa-map-marker fa-2x" aria-hidden="true" />
                </div>
                <div className="box-icon-content">
                  <h6 className="no-margins">서울 성동구 옥수동 365-6 덕성빌딩 비 104호 (옥수동)</h6>
                  <p>주소</p>
                </div>
              </div>
            </div>
            <div className="one_third has-animation" data-delay={200}>
              <hr />
              <p className="bigger">. . .</p>
            </div>
            <div className=" one_third last has-animation" data-delay={300}>
              <div className="box-icon-wrapper block-boxes">
                <div className="box-icon">
                  <i className="fa fa-phone fa-2x" aria-hidden="true" />
                </div>
                <div className="box-icon-content">
                  <h6 className="no-margins">010-7523-1950</h6>
                  <p>고객센터 문의</p>
                </div>
              </div>
            </div>
          </div>
          {/*/Row */}
          {/* Row */}
          <div
            className="content-row full row_padding_top light-section text-align-center"
            data-bgcolor="#c8c8c8"
          >
            <p className="bigger has-shuffle no-margins secondary-font">
              문의하기
            </p>
            <div
              id="copy-email"
              data-hover-message="Copy Mail"
              data-clicked-message="Copied"
            >
              <a href="/contact"><span>alicecamping@naver.com</span></a>
              
              
            </div>
            <a href="/contact"><i style={{fontSize:80, color:"black" , marginTop:10, marginBottom:-50, cursor:"pointer" }} class="fa-solid fa-arrow-right"/></a>
             
          </div>
         
          {/*/Row */}
        </div>
      </div>
      {/* Fit Thumb Screen Effects */}
    </div>
  );
};

export default MainContent;
