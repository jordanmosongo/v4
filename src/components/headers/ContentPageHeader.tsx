/* eslint-disable @next/next/no-img-element */
import React from "react";

export const ContentPageHeader = () => {
  return (
    <>
      <div className="page-header page-header-light shadow">
        <div className="page-header-content d-lg-flex">
          <div className="d-flex">
            <h4 className="page-title mb-0">
              Home - <span className="fw-normal">Dashboard</span>
            </h4>
            <a
              href="#page_header"
              className="btn btn-light align-self-center collapsed d-lg-none border-transparent rounded-pill p-0 ms-auto"
              data-bs-toggle="collapse"
            >
              <i className="ph-caret-down collapsible-indicator ph-sm m-1" />
            </a>
          </div>
          <div
            className="collapse d-lg-block my-lg-auto ms-lg-auto"
            id="page_header"
          >
            <div className="d-sm-flex align-items-center mb-3 mb-lg-0 ms-lg-3">
              <div className="dropdown w-100 w-sm-auto">
                <a
                  href="#"
                  className="d-flex align-items-center text-body lh-1 dropdown-toggle py-sm-2"
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                >
                  <img
                    src="assets/images/brands/tesla.svg"
                    className="w-32px h-32px me-2"
                    alt=""
                  />
                  <div className="me-auto me-lg-1">
                    <div className="fs-sm text-muted mb-1">Customer</div>
                    <div className="fw-semibold">Tesla Motors Inc</div>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-lg-end w-100 w-lg-auto wmin-300 wmin-sm-350 pt-0">
                  <div className="d-flex align-items-center p-3">
                    <h6 className="fw-semibold mb-0">Customers</h6>
                    <a href="#" className="ms-auto">
                      View all
                      <i className="ph-arrow-circle-right ms-1" />
                    </a>
                  </div>
                  <a href="#" className="dropdown-item active py-2">
                    <img
                      src="assets/images/brands/tesla.svg"
                      className="w-32px h-32px me-2"
                      alt=""
                    />
                    <div>
                      <div className="fw-semibold">Tesla Motors Inc</div>
                      <div className="fs-sm text-muted">42 users</div>
                    </div>
                  </a>
                  <a href="#" className="dropdown-item py-2">
                    <img
                      src="assets/images/brands/debijenkorf.svg"
                      className="w-32px h-32px me-2"
                      alt=""
                    />
                    <div>
                      <div className="fw-semibold">De Bijenkorf</div>
                      <div className="fs-sm text-muted">49 users</div>
                    </div>
                  </a>
                  <a href="#" className="dropdown-item py-2">
                    <img
                      src="assets/images/brands/klm.svg"
                      className="w-32px h-32px me-2"
                      alt=""
                    />
                    <div>
                      <div className="fw-semibold">Royal Dutch Airlines</div>
                      <div className="fs-sm text-muted">18 users</div>
                    </div>
                  </a>
                  <a href="#" className="dropdown-item py-2">
                    <img
                      src="assets/images/brands/shell.svg"
                      className="w-32px h-32px me-2"
                      alt=""
                    />
                    <div>
                      <div className="fw-semibold">Royal Dutch Shell</div>
                      <div className="fs-sm text-muted">54 users</div>
                    </div>
                  </a>
                  <a href="#" className="dropdown-item py-2">
                    <img
                      src="assets/images/brands/bp.svg"
                      className="w-32px h-32px me-2"
                      alt=""
                    />
                    <div>
                      <div className="fw-semibold">BP plc</div>
                      <div className="fs-sm text-muted">23 users</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="vr d-none d-sm-block flex-shrink-0 my-2 mx-3" />
              <div className="d-inline-flex mt-3 mt-sm-0">
                <a href="#" className="status-indicator-container ms-1">
                  <img
                    src="assets/images/demo/users/face24.jpg"
                    className="w-32px h-32px rounded-pill"
                    alt=""
                  />
                  <span className="status-indicator bg-warning" />
                </a>
                <a href="#" className="status-indicator-container ms-1">
                  <img
                    src="assets/images/demo/users/face1.jpg"
                    className="w-32px h-32px rounded-pill"
                    alt=""
                  />
                  <span className="status-indicator bg-success" />
                </a>
                <a href="#" className="status-indicator-container ms-1">
                  <img
                    src="assets/images/demo/users/face3.jpg"
                    className="w-32px h-32px rounded-pill"
                    alt=""
                  />
                  <span className="status-indicator bg-danger" />
                </a>
                <a
                  href="#"
                  className="btn btn-outline-primary btn-icon w-32px h-32px rounded-pill ms-3"
                >
                  <i className="ph-plus" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="page-header-content d-lg-flex border-top">
          <div className="d-flex">
            <div className="breadcrumb py-2">
              <a href="index.html" className="breadcrumb-item">
                <i className="ph-house" />
              </a>
              <a href="#" className="breadcrumb-item">
                Home
              </a>
              <span className="breadcrumb-item active">Dashboard</span>
            </div>
            <a
              href="#breadcrumb_elements"
              className="btn btn-light align-self-center collapsed d-lg-none border-transparent rounded-pill p-0 ms-auto"
              data-bs-toggle="collapse"
            >
              <i className="ph-caret-down collapsible-indicator ph-sm m-1" />
            </a>
          </div>
          <div
            className="collapse d-lg-block ms-lg-auto"
            id="breadcrumb_elements"
          >
            <div className="d-lg-flex mb-2 mb-lg-0">
              <a
                href="#"
                className="d-flex align-items-center text-body py-2"
              >
                <i className="ph-lifebuoy me-2" />
                Support
              </a>
              <div className="dropdown ms-lg-3">
                <a
                  href="#"
                  className="d-flex align-items-center text-body dropdown-toggle py-2"
                  data-bs-toggle="dropdown"
                >
                  <i className="ph-gear me-2" />
                  <span className="flex-1">Settings</span>
                </a>
                <div className="dropdown-menu dropdown-menu-end w-100 w-lg-auto">
                  <a href="#" className="dropdown-item">
                    <i className="ph-shield-warning me-2" />
                    Account security
                  </a>
                  <a href="#" className="dropdown-item">
                    <i className="ph-chart-bar me-2" />
                    Analytics
                  </a>
                  <a href="#" className="dropdown-item">
                    <i className="ph-lock-key me-2" />
                    Privacy
                  </a>
                  <div className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    <i className="ph-gear me-2" />
                    All settings
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}