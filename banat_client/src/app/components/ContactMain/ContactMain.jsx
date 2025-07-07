"use client"
import React, { useState } from "react";

const ContactMain = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comments: "",
  });

  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.comments,
      }),
    });

    if (res.ok) {
      setMessage("메시지가 성공적으로 전송되었습니다.");
      setFormData({ name: "", email: "", comments: "" });
    } else {
      setMessage("전송하지 못했습니다. 다시 시도해주세요");
    }
  };
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
                      문의해 
                    </span>{" "}
                    <span
                      className="shuffle-word"
                      data-text="Talk"
                      style={{ opacity: 1 }}
                    >
                      주세요
                    </span>
                  </h2>
                  <hr />
                  <hr />
                  {/* Contact Formular */}
                  <div id="contact-formular">
                    <div id="message" />
                    <form
                      onSubmit={handleSubmit}
                      name="contactform"
                      id="contactform"
                      method="POST"
                    >
                      <div className="name-box">
                        <input
                          name="name"
                          type="text"
                          id="name"
                          size={30}
                          value={formData.name}
                          placeholder="이름"
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>
                      <div className="email-box">
                        <input
                          name="email"
                          type="text"
                          id="email"
                          size={30}
                          value={formData.email}
                          placeholder="	이메일 주소"
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                      <div className="message-box">
                        <textarea
                          name="comments"
                          cols={40}
                          rows={4}
                          id="comments"
                          placeholder="메시지를 입력하세요"
                          value={formData.comments}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              comments: e.target.value,
                            })
                          }
                        />
                      </div>

                      {/* ... captcha kısmını istersen tutabilirsin ... */}

                      <div className="button-box">
                        <div className="clapat-button-wrap">
                          <div className="clapat-button">
                            <div className="button-border rounded animated">
                              <input
                                type="submit"
                                className="send_message"
                                id="submit"
                                value="메일 보내기"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {message && <p style={{ color: "white" }}>{message}</p>}
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
                      opacity: 1,
                    }}
                  >
                    <div className="box-icon-wrapper block-boxes">
                      <div className="box-icon">
                        <i
                          className="fa fa-map-marker fa-2x"
                          aria-hidden="true"
                        />
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
                      opacity: 1,
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
                      opacity: 1,
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
                      transform: "translate(0px, 0px)",
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
  );
};

export default ContactMain;
