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
            data-infotextbefore="어서 오세요"
            data-infotextafter="©2024 반엣 쇼핑몰"
          >
            <div>
              <span>반엣</span>
            </div>
          </h1>
          <div className="hero-subtitle caption-timeline onload-shuffle">
            <div>
              <span>반엣은 엄마들을 위한 스타일리시하고 편안한 패션 아이템을 제공하는 한국의 </span>
            </div>
            <div className="secondary-font">
              <span>대표적인 이커머스 플랫폼입니다</span>
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
              <span data-hover="Scroll to Explore">스크롤해서 탐색하기</span>
            </div>
          </div>
        </div>
        <div className="hero-footer-right">
          <div id="info-text">
            <span>신제품</span>
          </div>
        </div>
      </div>
    </div>
    <div id="hero-interaction">
      <div className="hero-column col-left">
        <div className="col-img-wrapper large-img">
          <img src="/banat_main_1.jpg" alt="" />
        </div>
        <div className="col-img-wrapper large-img">
          <img src="/banat_main_2.jpg" alt="" />
        </div>
      </div>
      <div className="hero-column col-right">
        <div className="col-img-wrapper large-img">
          <img src="/banat_main_3.jpg" alt="" />
        </div>
        <div className="col-img-wrapper large-img">
          <img src="/banat_main_4.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
  {/*/Hero Section */}
</>

  )
}

export default Hero