import React from "react";

export const Gallery = () => {
  return (
    <div
      className="glightbox-container glightbox-clean"
      tabIndex={-1}
      role="dialog"
      aria-hidden="false"
    >
      <div className="gloader visible" style={{ display: "none" }}></div>
      <div className="goverlay"></div>
      <div className="gcontainer">
        <div className="gslider">
          <div className="gslide loaded current">
            <div className="gslide-inner-content">
              <div className="ginner-container desc-bottom">
                <div className="gslide-media gslide-image">
                  <img
                    src="https://bootstrapmade.com/demo/templates/Laura/assets/img/portfolio/portfolio-1.jpg"
                    alt=""
                    aria-labelledby="gSlideTitle_0"
                    style="max-height: calc(100vh - 85px)"
                  />
                </div>
                <div
                  className="gslide-description description-bottom"
                  style={{ maxWidth: "873px" }}
                >
                  <div className="gdesc-inner">
                    <h4 class="gslide-title" id="gSlideTitle_0">
                      App 1
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gslide loaded">
            <div className="gslide-inner-content">
              <div className="ginner-container desc-bottom">
                <div className="gslide-media gslide-image">
                  <img
                    src="https://bootstrapmade.com/demo/templates/Laura/assets/img/portfolio/portfolio-1.jpg"
                    alt=""
                    aria-labelledby="gSlideTitle_0"
                    style="max-height: calc(100vh - 85px)"
                  />
                </div>
                <div
                  className="gslide-description description-bottom"
                  style={{ maxWidth: "873px" }}
                >
                  <div className="gdesc-inner">
                    <h4 class="gslide-title" id="gSlideTitle_0">
                      App 1
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gslide">
            <div className="gslide-inner-content">
              <div className="ginner-container desc-bottom">
                <div className="gslide-media gslide-image">
                  <img
                    src="https://bootstrapmade.com/demo/templates/Laura/assets/img/portfolio/portfolio-1.jpg"
                    alt=""
                    aria-labelledby="gSlideTitle_0"
                    style="max-height: calc(100vh - 85px)"
                  />
                </div>
                <div
                  className="gslide-description description-bottom"
                  style={{ maxWidth: "873px" }}
                >
                  <div className="gdesc-inner">
                    <h4 class="gslide-title" id="gSlideTitle_0">
                      App 1
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
