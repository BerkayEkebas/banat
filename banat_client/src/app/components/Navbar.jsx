import React from "react";

const Navbar = () => {
  return (
    <header
      className="clapat-header classic-menu invert-header"
      data-menucolor="#0c0c0c"
      style={{
        translate: "none",
        rotate: "none",
        scale: "none",
        opacity: 1,
        transform: "translate(0px, 0px)",
      }}
    >
      {/* Graidient */}
      <div
        className="header-gradient"
        style={{
          backgroundColor: "rgb(200, 200, 200)",
          maskImage: "linear-gradient(rgb(200, 200, 200), transparent)",
        }}
      />
      {/*/Graidient */}
      <div id="header-container">
        {/* Logo */}
        <div id="clapat-logo" className="hide-ball">
          <a
            className="ajax-link"
            data-type="page-transition"
            href="/"
          >
            <img className="black-logo" src="/banatpng.png" alt="ClaPat Logo" />
            <img className="white-logo" src="/banatpng.png" alt="ClaPat Logo" />
          </a>
        </div>
        {/*/Logo */}
        {/* Navigation */}
        <nav
          className="clapat-nav-wrapper"
          style={{ backgroundColor: "rgb(12, 12, 12)" }}
        >
          <div className="nav-height">
            <ul
              data-breakpoint={1025}
              className="flexnav with-js opacity sm-screen"
            >
              <li className="menu-timeline link">
                <a
                  className="ajax-link active"
                  data-type="page-transition"
                  href="/"
                >
                  <div
                    className="before-span"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      opacity: 0,
                      transform: "translate(0px, 100%)",
                    }}
                  >
                    <span data-hover="홈페이지">홈페이지</span>
                  </div>
                </a>
              </li>
              <li className="menu-timeline link item-with-ul">
                <a className="ajax-link" data-type="page-transition" href="#">
                  <div
                    className="before-span"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      opacity: 0,
                      transform: "translate(0px, 100%)",
                    }}
                  >
                    <span data-hover="전체 카테고리">전체 카테고리</span>
                  </div>
                </a>
                <ul style={{ display: "none" }} className="">
                  <li className="">
                    <a
                      className="ajax-link"
                      href="index-highlights.html"
                      data-type="page-transition"
                    >
                      브랜드 샵
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="ajax-link"
                      href="index-portfolio.html"
                      data-type="page-transition"
                    >
                      베스트
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="ajax-link"
                      href="index-playground.html"
                      data-type="page-transition"
                    >
                      라이브 방송
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="ajax-link"
                      href="index-playground.html"
                      data-type="page-transition"
                    >
                      핫딜
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="ajax-link"
                      href="index-playground.html"
                      data-type="page-transition"
                    >
                      무료 반품
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="ajax-link"
                      href="index-playground.html"
                      data-type="page-transition"
                    >
                      오늘 출발
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="ajax-link"
                      href="index-playground.html"
                      data-type="page-transition"
                    >
                      자체제작
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="ajax-link"
                      href="index-playground.html"
                      data-type="page-transition"
                    >
                      반포맘 꿀템
                    </a>
                  </li>
                </ul>
                <span className="touch-button">
                  <i className="navicon">▼</i>
                </span>
              </li>
              <li className="menu-timeline link">
                <a
                  className="ajax-link"
                  data-type="page-transition"
                  href="about.html"
                >
                  <div
                    className="before-span"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      opacity: 0,
                      transform: "translate(0px, 100%)",
                    }}
                  >
                    <span data-hover="회원가입">회원가입</span>
                  </div>
                </a>
              </li>
              <li className="menu-timeline link">
                <a
                  className="ajax-link"
                  data-type="page-transition"
                  href="/contact"
                >
                  <div
                    className="before-span"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      opacity: 0,
                      transform: "translate(0px, 100%)",
                    }}
                  >
                    <span data-hover="고객센터">고객센터</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/*/Navigation */}
        {/* Header Button */}
        <a
          className="header-button ajax-link"
          data-type="page-transition"
          href="/contact"
        >
          <div className="button-icon-link right">
            <div className="icon-wrap-scale">
              <div className="icon-wrap parallax-wrap">
                <div
                  className="button-icon parallax-element"
                  style={{ backgroundColor: "rgb(250, 130, 29)" }}
                >
                  <i className="fa-solid fa-arrow-right" />
                </div>
              </div>
            </div>
            <div className="button-text sticky right">
              <span data-hover="고객센터">고객센터</span>
            </div>
          </div>
        </a>
        {/*/Header Button */}
        {/* Menu Burger */}
        <div className="button-wrap right menu burger-lines">
          <div className="icon-wrap parallax-wrap">
            <div className="button-icon parallax-element">
              <div id="burger-wrapper">
                <div id="menu-burger">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="touch-button">
                  <i className="navicon">▼</i>
                </span>
              </div>
            </div>
          </div>
          <div className="button-text sticky right">
            <span data-hover="Menu">Menu</span>
          </div>
        </div>
        {/*/Menu Burger */}
      </div>
    </header>
  );
};

export default Navbar;
