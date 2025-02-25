import React from "react";

export const MainFooter = () => {
  return (
    <>
       <div className="navbar navbar-sm navbar-footer border-top">
              <div className="container-fluid">
                <span>
                  © 2022{" "}
                  <a href="https://themeforest.net/item/limitless-responsive-web-application-kit/13080328">
                    Limitless Web App Kit
                  </a>
                </span>
                <ul className="nav">
                  <li className="nav-item">
                    <a
                      href="https://kopyov.ticksy.com/"
                      className="navbar-nav-link navbar-nav-link-icon rounded"
                      target="_blank"
                    >
                      <div className="d-flex align-items-center mx-md-1">
                        <i className="ph-lifebuoy" />
                        <span className="d-none d-md-inline-block ms-2">
                          Support
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item ms-md-1">
                    <a
                      href="https://demo.interface.club/limitless/demo/Documentation/index.html"
                      className="navbar-nav-link navbar-nav-link-icon rounded"
                      target="_blank"
                    >
                      <div className="d-flex align-items-center mx-md-1">
                        <i className="ph-file-text" />
                        <span className="d-none d-md-inline-block ms-2">Docs</span>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item ms-md-1">
                    <a
                      href="https://themeforest.net/item/limitless-responsive-web-application-kit/13080328?ref=kopyov"
                      className="navbar-nav-link navbar-nav-link-icon text-primary bg-primary bg-opacity-10 fw-semibold rounded"
                      target="_blank"
                    >
                      <div className="d-flex align-items-center mx-md-1">
                        <i className="ph-shopping-cart" />
                        <span className="d-none d-md-inline-block ms-2">
                          Purchase
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
    </>
  );
}