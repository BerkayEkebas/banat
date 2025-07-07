import React from "react";
import { FaYoutube } from 'react-icons/fa';

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
                <span>저희는</span>
                <div className="hero-title-placeholder" />
                <span>
                  은{" "}
                  <span className="text-rotator-wrapper secondary-font">
                    <span className="text-rotator">
                      <span>스타일리시한</span>
                      <span>편안한</span>
                      <span>신뢰받는</span>
                    </span>
                  </span>
                </span>
                <span>패션 브랜드입니다</span>
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
                  {/* <video loop muted playsInline className="bgvid">
                    <source src="/images/intro.mp4" type="video/mp4" />
                  </video> */}
                  <iframe
                    width="388"
                    height="238"
                    src="https://www.youtube.com/embed/b9wKipWxTt4"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <hr />
              <hr />
              <hr />
              <p className="has-opacity">
                저희 반엣은 엄마들을 위한 스타일리시하고 편안한 패션 아이템을
                제공합니다. 매주 새로운 신제품과 특별한 할인 혜택을 만나보세요.
                당신의 일상을 더욱 빛나게 할 최고의 선택입니다.
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
                    <span data-hover="Read More">자세히 보기</span>
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
                          src="/banat_background_6.png"
                          className="item-image grid__item-img"
                          alt=""
                        />
                      </div>
                      <img
                        src="/banat_background_2.png"
                        className="grid__item-img grid__item-img--large"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="snap-slide trigger-item change-header-color">
                    <div className="img-mask">
                      <div className="section-image trigger-item-link">
                        <img
                          src="/banat_background_2.png"
                          className="item-image grid__item-img"
                          alt=""
                        />
                      </div>
                      <img
                        src="/banat_background_4.png"
                        className="grid__item-img grid__item-img--large"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="snap-slide trigger-item change-header-color">
                    <div className="img-mask">
                      <div className="section-image trigger-item-link">
                        <img
                          src="/banat_background_4.png"
                          className="item-image grid__item-img"
                          alt=""
                        />
                      </div>
                      <img
                        src="/banat_background_4.png"
                        className="grid__item-img grid__item-img--large"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="snap-slide trigger-item change-header-color">
                    <div className="img-mask">
                      <div className="section-image trigger-item-link">
                        <img
                          src="/banat_background_5.png"
                          className="item-image grid__item-img"
                          alt=""
                        />
                      </div>
                      <img
                        src="/banat_background_5.png"
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
                        src="/banat_background_6.png"
                        className="item-image grid__item-img"
                        style={{ height: 500 }}
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
                        src="/banat_background_2.png"
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
                        src="/banat_background_4.png"
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
                        src="/banat_background_5.png"
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
                </div>
              </div>
              <div className="snap-slider-captions">
                <div className="snap-slider-captions-wrapper content-full-width">
                  <div className="snap-slide-caption">
                    <div className="slide-title">
                      <span>맞춤 제작 </span>
                    </div>
                    <div className="slide-current">
                      <span style={{ color: "black", fontSize: 40 }}>01</span>
                    </div>
                    <div className="slide-counter">
                      <span style={{ color: "black", fontSize: 40 }}>04</span>
                    </div>
                    <div className="slide-subtitle">
                      <span>맞춤 제작 </span>
                    </div>
                  </div>
                  <div className="snap-slide-caption">
                    <div className="slide-title">
                      <span>마스크팩 </span>
                    </div>
                    <div className="slide-current">
                      <span style={{ color: "black", fontSize: 40 }}>02</span>
                    </div>
                    <div className="slide-counter">
                      <span style={{ color: "black", fontSize: 40 }}>04</span>
                    </div>
                    <div className="slide-subtitle">
                      <span>마스크팩 </span>
                    </div>
                  </div>
                  <div
                    className="snap-slide-caption change-header1"
                    data-centerline="OPEN"
                  >
                    <div className="slide-title">
                      <span>신발</span>
                    </div>
                    <div className="slide-current">
                      <span style={{ color: "black", fontSize: 40 }}>03</span>
                    </div>
                    <div className="slide-counter">
                      <span style={{ color: "black", fontSize: 40 }}>04</span>
                    </div>
                    <div className="slide-subtitle">
                      <span>신발</span>
                    </div>
                  </div>
                  <div className="snap-slide-caption">
                    <div className="slide-title">
                      <span>액세서리</span>
                    </div>
                    <div className="slide-current">
                      <span style={{ color: "black", fontSize: 40 }}>04</span>
                    </div>
                    <div className="slide-counter">
                      <span style={{ color: "black", fontSize: 40 }}>04</span>
                    </div>
                    <div className="slide-subtitle">
                      <span>액세서리</span>
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
              저희 의류 컬렉션을 계속 둘러보세요
            </p>
            <br />
            <div className="button-box">
              <div className="clapat-button-wrap parallax-wrap hide-ball">
                <div className="clapat-button parallax-element">
                  <div className="button-border outline rounded parallax-element-second">
                    <a
                      className="ajax-link"
                      data-type="page-transition"
                      href="https://bibpo.com/"
                    >
                      <span data-hover="모든 의류">모든 의류</span>
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
              <p>필요하세요? 저희가 해드립니다.</p>
              <ul className="pinned-lists">
                <li>패션 디자인</li>
                <li data-infotextafter="스타일을 완성하다">스타일링</li>
                <li>신제품 출시</li>
                <a style={{cursor:"pointer"}} href="https://bibpo.com/product/list.html?cate_no=99"><li data-infotextafter="브랜드 방송">방송 판매</li></a>
                <a style={{cursor:"pointer"}} href="https://www.youtube.com/@banpodress"><li data-infotextafter="YouTube 채널"> <FaYoutube/>유튜브 채널</li></a> 
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
                  <h6 className="no-margins">
                    서울 성동구 옥수동 365-6 덕성빌딩 비 104호 (옥수동)
                  </h6>
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
              <a href="/contact">
                <span>alicecamping@naver.com</span>
              </a>
            </div>
            <a href="/contact">
              <i
                style={{
                  fontSize: 80,
                  color: "black",
                  marginTop: 10,
                  marginBottom: -50,
                  cursor: "pointer",
                }}
                className="fa-solid fa-arrow-right"
              />
            </a>
          </div>

          {/*/Row */}
        </div>
      </div>
      {/* Fit Thumb Screen Effects */}
    </div>
  );
};

export default MainContent;
