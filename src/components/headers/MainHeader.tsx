/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const MainHeader = () => {
  return (
    <>
     <div className="navbar navbar-dark navbar-expand-lg navbar-static border-bottom border-bottom-white border-opacity-10">
        <div className="container-fluid">
          <div className="d-flex d-lg-none me-2">
            <button
              type="button"
              className="navbar-toggler sidebar-mobile-main-toggle rounded-pill"
            >
              <i className="ph-list" />
            </button>
          </div>
          <div className="navbar-brand flex-1 flex-lg-0">
            <a href="index.html" className="d-inline-flex align-items-center">
              <img src="assets/images/logo_icon.svg" alt="" />
              <img
                src="assets/images/logo_text_light.svg"
                className="d-none d-sm-inline-block h-16px ms-3"
                alt=""
              />
            </a>
          </div>
          <ul className="nav flex-row">
            <li className="nav-item d-lg-none">
              <a
                href="#navbar_search"
                className="navbar-nav-link navbar-nav-link-icon rounded-pill"
                data-bs-toggle="collapse"
              >
                <i className="ph-magnifying-glass" />
              </a>
            </li>
            <li className="nav-item nav-item-dropdown-lg dropdown">
              <a
                href="#"
                className="navbar-nav-link navbar-nav-link-icon rounded-pill"
                data-bs-toggle="dropdown"
              >
                <i className="ph-squares-four" />
              </a>
              <div className="dropdown-menu dropdown-menu-scrollable-sm wmin-lg-600 p-0">
                <div className="d-flex align-items-center border-bottom p-3">
                  <h6 className="mb-0">Browse apps</h6>
                  <a href="#" className="ms-auto">
                    View all
                    <i className="ph-arrow-circle-right ms-1" />
                  </a>
                </div>
                <div className="row row-cols-1 row-cols-sm-2 g-0">
                  <div className="col">
                    <button
                      type="button"
                      className="dropdown-item text-wrap h-100 align-items-start border-end-sm border-bottom p-3"
                    >
                      <div>
                        <img
                          src="assets/images/demo/logos/1.svg"
                          className="h-40px mb-2"
                          alt=""
                        />
                        <div className="fw-semibold my-1">Customer data platform</div>
                        <div className="text-muted">
                          Unify customer data from multiple sources
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="col">
                    <button
                      type="button"
                      className="dropdown-item text-wrap h-100 align-items-start border-bottom p-3"
                    >
                      <div>
                        <img
                          src="assets/images/demo/logos/2.svg"
                          className="h-40px mb-2"
                          alt=""
                        />
                        <div className="fw-semibold my-1">Data catalog</div>
                        <div className="text-muted">
                          Discover, inventory, and organize data assets
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="col">
                    <button
                      type="button"
                      className="dropdown-item text-wrap h-100 align-items-start border-end-sm border-bottom border-bottom-sm-0 rounded-bottom-start p-3"
                    >
                      <div>
                        <img
                          src="assets/images/demo/logos/3.svg"
                          className="h-40px mb-2"
                          alt=""
                        />
                        <div className="fw-semibold my-1">Data governance</div>
                        <div className="text-muted">
                          The collaboration hub and data marketplace
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="col">
                    <button
                      type="button"
                      className="dropdown-item text-wrap h-100 align-items-start rounded-bottom-end p-3"
                    >
                      <div>
                        <img
                          src="assets/images/demo/logos/4.svg"
                          className="h-40px mb-2"
                          alt=""
                        />
                        <div className="fw-semibold my-1">Data privacy</div>
                        <div className="text-muted">
                          Automated provisioning of non-production datasets
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item nav-item-dropdown-lg dropdown ms-lg-2">
              <a
                href="#"
                className="navbar-nav-link navbar-nav-link-icon rounded-pill"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                <i className="ph-chats" />
                <span className="badge bg-yellow text-black position-absolute top-0 end-0 translate-middle-top zindex-1 rounded-pill mt-1 me-1">
                  8
                </span>
              </a>
              <div className="dropdown-menu wmin-lg-400 p-0">
                <div className="d-flex align-items-center p-3">
                  <h6 className="mb-0">Messages</h6>
                  <div className="ms-auto">
                    <a href="#" className="text-body">
                      <i className="ph-plus-circle" />
                    </a>
                    <a
                      href="#search_messages"
                      className="collapsed text-body ms-2"
                      data-bs-toggle="collapse"
                    >
                      <i className="ph-magnifying-glass" />
                    </a>
                  </div>
                </div>
                <div className="collapse" id="search_messages">
                  <div className="px-3 mb-2">
                    <div className="form-control-feedback form-control-feedback-start">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search messages"
                      />
                      <div className="form-control-feedback-icon">
                        <i className="ph-magnifying-glass" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dropdown-menu-scrollable pb-2">
                  <a
                    href="#"
                    className="dropdown-item align-items-start text-wrap py-2"
                  >
                    <div className="status-indicator-container me-3">
                      <img
                        src="assets/images/demo/users/face10.jpg"
                        className="w-40px h-40px rounded-pill"
                        alt=""
                      />
                      <span className="status-indicator bg-warning" />
                    </div>
                    <div className="flex-1">
                      <span className="fw-semibold">James Alexander</span>
                      <span className="text-muted float-end fs-sm">04:58</span>
                      <div className="text-muted">
                        who knows, maybe that would be the best thing for me...
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="dropdown-item align-items-start text-wrap py-2"
                  >
                    <div className="status-indicator-container me-3">
                      <img
                        src="assets/images/demo/users/face3.jpg"
                        className="w-40px h-40px rounded-pill"
                        alt=""
                      />
                      <span className="status-indicator bg-success" />
                    </div>
                    <div className="flex-1">
                      <span className="fw-semibold">Margo Baker</span>
                      <span className="text-muted float-end fs-sm">12:16</span>
                      <div className="text-muted">
                        That was something he was unable to do because...
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="dropdown-item align-items-start text-wrap py-2"
                  >
                    <div className="status-indicator-container me-3">
                      <img
                        src="assets/images/demo/users/face24.jpg"
                        className="w-40px h-40px rounded-pill"
                        alt=""
                      />
                      <span className="status-indicator bg-success" />
                    </div>
                    <div className="flex-1">
                      <span className="fw-semibold">Jeremy Victorino</span>
                      <span className="text-muted float-end fs-sm">22:48</span>
                      <div className="text-muted">
                        But that would be extremely strained and suspicious...
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="dropdown-item align-items-start text-wrap py-2"
                  >
                    <div className="status-indicator-container me-3">
                      <img
                        src="assets/images/demo/users/face4.jpg"
                        className="w-40px h-40px rounded-pill"
                        alt=""
                      />
                      <span className="status-indicator bg-grey" />
                    </div>
                    <div className="flex-1">
                      <span className="fw-semibold">Beatrix Diaz</span>
                      <span className="text-muted float-end fs-sm">Tue</span>
                      <div className="text-muted">
                        What a strenuous career it is that I have chosen...
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="dropdown-item align-items-start text-wrap py-2"
                  >
                    <div className="status-indicator-container me-3">
                      <img
                        src="assets/images/demo/users/face25.jpg"
                        className="w-40px h-40px rounded-pill"
                        alt=""
                      />
                      <span className="status-indicator bg-danger" />
                    </div>
                    <div className="flex-1">
                      <span className="fw-semibold">Richard Vango</span>
                      <span className="text-muted float-end fs-sm">Mon</span>
                      <div className="text-muted">
                        Other travelling salesmen live a life of luxury...
                      </div>
                    </div>
                  </a>
                </div>
                <div className="d-flex border-top py-2 px-3">
                  <a href="#" className="text-body">
                    <i className="ph-checks me-1" />
                    Dismiss all
                  </a>
                  <a href="#" className="text-body ms-auto">
                    View all
                    <i className="ph-arrow-circle-right ms-1" />
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <div
            className="navbar-collapse justify-content-center flex-lg-1 order-2 order-lg-1 collapse"
            id="navbar_search"
          >
            <div className="navbar-search flex-fill position-relative mt-2 mt-lg-0 mx-lg-3">
              <div
                className="form-control-feedback form-control-feedback-start flex-grow-1"
                data-color-theme="dark"
              >
                <input
                  type="text"
                  className="form-control bg-transparent rounded-pill"
                  placeholder="Search"
                  data-bs-toggle="dropdown"
                />
                <div className="form-control-feedback-icon">
                  <i className="ph-magnifying-glass" />
                </div>
                <div className="dropdown-menu w-100" data-color-theme="light">
                  <button type="button" className="dropdown-item">
                    <div className="text-center w-32px me-3">
                      <i className="ph-magnifying-glass" />
                    </div>
                    <span>
                      Search <span className="fw-bold">in</span> everywhere
                    </span>
                  </button>
                  <div className="dropdown-divider" />
                  <div className="dropdown-menu-scrollable-lg">
                    <div className="dropdown-header">
                      Contacts
                      <a href="#" className="float-end">
                        See all
                        <i className="ph-arrow-circle-right ms-1" />
                      </a>
                    </div>
                    <div className="dropdown-item cursor-pointer">
                      <div className="me-3">
                        <img
                          src="assets/images/demo/users/face3.jpg"
                          className="w-32px h-32px rounded-pill"
                          alt=""
                        />
                      </div>
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="fw-semibold">
                          Christ<mark>in</mark>e Johnson
                        </div>
                        <span className="fs-sm text-muted">
                          c.johnson@awesomecorp.com
                        </span>
                      </div>
                      <div className="d-inline-flex">
                        <a href="#" className="text-body ms-2">
                          <i className="ph-user-circle" />
                        </a>
                      </div>
                    </div>
                    <div className="dropdown-item cursor-pointer">
                      <div className="me-3">
                        <img
                          src="assets/images/demo/users/face24.jpg"
                          className="w-32px h-32px rounded-pill"
                          alt=""
                        />
                      </div>
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="fw-semibold">
                          Cl<mark>in</mark>ton Sparks
                        </div>
                        <span className="fs-sm text-muted">
                          c.sparks@awesomecorp.com
                        </span>
                      </div>
                      <div className="d-inline-flex">
                        <a href="#" className="text-body ms-2">
                          <i className="ph-user-circle" />
                        </a>
                      </div>
                    </div>
                    <div className="dropdown-divider" />
                    <div className="dropdown-header">
                      Clients
                      <a href="#" className="float-end">
                        See all
                        <i className="ph-arrow-circle-right ms-1" />
                      </a>
                    </div>
                    <div className="dropdown-item cursor-pointer">
                      <div className="me-3">
                        <img
                          src="assets/images/brands/adobe.svg"
                          className="w-32px h-32px rounded-pill"
                          alt=""
                        />
                      </div>
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="fw-semibold">
                          Adobe <mark>In</mark>c.
                        </div>
                        <span className="fs-sm text-muted">Enterprise license</span>
                      </div>
                      <div className="d-inline-flex">
                        <a href="#" className="text-body ms-2">
                          <i className="ph-briefcase" />
                        </a>
                      </div>
                    </div>
                    <div className="dropdown-item cursor-pointer">
                      <div className="me-3">
                        <img
                          src="assets/images/brands/holiday-inn.svg"
                          className="w-32px h-32px rounded-pill"
                          alt=""
                        />
                      </div>
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="fw-semibold">
                          Holiday-<mark>In</mark>n
                        </div>
                        <span className="fs-sm text-muted">On-premise license</span>
                      </div>
                      <div className="d-inline-flex">
                        <a href="#" className="text-body ms-2">
                          <i className="ph-briefcase" />
                        </a>
                      </div>
                    </div>
                    <div className="dropdown-item cursor-pointer">
                      <div className="me-3">
                        <img
                          src="assets/images/brands/ing.svg"
                          className="w-32px h-32px rounded-pill"
                          alt=""
                        />
                      </div>
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="fw-semibold">
                          <mark>IN</mark>G Group
                        </div>
                        <span className="fs-sm text-muted">Perpetual license</span>
                      </div>
                      <div className="d-inline-flex">
                        <a href="#" className="text-body ms-2">
                          <i className="ph-briefcase" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="navbar-nav-link align-items-center justify-content-center w-40px h-32px rounded-pill position-absolute end-0 top-50 translate-middle-y p-0 me-1"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                <i className="ph-faders-horizontal" />
              </a>
              <div className="dropdown-menu w-100 p-3">
                <div className="d-flex align-items-center mb-3">
                  <h6 className="mb-0">Search options</h6>
                  <a href="#" className="text-body rounded-pill ms-auto">
                    <i className="ph-clock-counter-clockwise" />
                  </a>
                </div>
                <div className="mb-3">
                  <label className="d-block form-label">Category</label>
                  <label className="form-check form-check-inline">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      defaultChecked={false}
                    />
                    <span className="form-check-label">Invoices</span>
                  </label>
                  <label className="form-check form-check-inline">
                    <input type="checkbox" className="form-check-input" />
                    <span className="form-check-label">Files</span>
                  </label>
                  <label className="form-check form-check-inline">
                    <input type="checkbox" className="form-check-input" />
                    <span className="form-check-label">Users</span>
                  </label>
                </div>
                <div className="mb-3">
                  <label className="form-label">Addition</label>
                  <div className="input-group">
                    <select className="form-select w-auto flex-grow-0">
                      <option value={1} selected={false}>
                        has
                      </option>
                      <option value={2}>has not</option>
                    </select>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the word(s)"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <div className="input-group">
                    <select className="form-select w-auto flex-grow-0">
                      <option value={1} selected={true}>
                        is
                      </option>
                      <option value={2}>is not</option>
                    </select>
                    <select className="form-select">
                      <option value={1} selected={true}>
                        Active
                      </option>
                      <option value={2}>Inactive</option>
                      <option value={3}>New</option>
                      <option value={4}>Expired</option>
                      <option value={5}>Pending</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex">
                  <button type="button" className="btn btn-light">
                    Reset
                  </button>
                  <div className="ms-auto">
                    <button type="button" className="btn btn-light">
                      Cancel
                    </button>
                    <button type="button" className="btn btn-primary ms-2">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="nav flex-row justify-content-end order-1 order-lg-2">
            <li className="nav-item ms-lg-2">
              <a
                href="#"
                className="navbar-nav-link navbar-nav-link-icon rounded-pill"
                data-bs-toggle="offcanvas"
                data-bs-target="#notifications"
              >
                <i className="ph-bell" />
                <span className="badge bg-yellow text-black position-absolute top-0 end-0 translate-middle-top zindex-1 rounded-pill mt-1 me-1">
                  2
                </span>
              </a>
            </li>
            <li className="nav-item nav-item-dropdown-lg dropdown ms-lg-2">
              <a
                href="#"
                className="navbar-nav-link align-items-center rounded-pill p-1"
                data-bs-toggle="dropdown"
              >
                <div className="status-indicator-container">
                  <img
                    src="assets/images/demo/users/face11.jpg"
                    className="w-32px h-32px rounded-pill"
                    alt=""
                  />
                  <span className="status-indicator bg-success" />
                </div>
                <span className="d-none d-lg-inline-block mx-lg-2">Victoria</span>
              </a>
              <div className="dropdown-menu dropdown-menu-end">
                <a href="#" className="dropdown-item">
                  <i className="ph-user-circle me-2" />
                  My profile
                </a>
                <a href="#" className="dropdown-item">
                  <i className="ph-currency-circle-dollar me-2" />
                  My subscription
                </a>
                <a href="#" className="dropdown-item">
                  <i className="ph-shopping-cart me-2" />
                  My orders
                </a>
                <a href="#" className="dropdown-item">
                  <i className="ph-envelope-open me-2" />
                  My inbox
                  <span className="badge bg-primary rounded-pill ms-auto">26</span>
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <i className="ph-gear me-2" />
                  Account settings
                </a>
                <a href="#" className="dropdown-item">
                  <i className="ph-sign-out me-2" />
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}