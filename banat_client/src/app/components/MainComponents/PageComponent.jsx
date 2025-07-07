import React from 'react'

const PageComponent = () => {
  return (
    <div id="page-nav" className="move-nav-onload">
  <div className="page-nav-wrap">
    <div className="page-nav-caption nav-full-caption content-full-width text-align-center">
      <div className="inner">
        <a
          className="next-ajax-link-page"
          data-type="page-transition"
          data-centerline="GO TO"
          href="about.html"
        >
          <div
            className="next-hero-title caption-timeline"
            data-infotextbefore="Go Ahead"
            data-infotextafter="Next Page"
          >
            <span>studio</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>

  )
}

export default PageComponent