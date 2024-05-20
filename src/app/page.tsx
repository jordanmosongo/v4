/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Main nav bar */}
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
      {/* Page content */}
      <div className="page-content">
        {/* Main sidebar */}
        <div className="sidebar sidebar-dark sidebar-main sidebar-expand-lg">
          {/* Sidebar content */}
          <div className="sidebar-content">
            {/* Sidebar header */}
            <div className="sidebar-section">
              <div className="sidebar-section-body d-flex justify-content-center">
                <h5 className="sidebar-resize-hide flex-grow-1 my-auto">
                  Navigation
                </h5>
                <div>
                  <button
                    type="button"
                    className="btn btn-flat-white btn-icon btn-sm rounded-pill border-transparent sidebar-control sidebar-main-resize d-none d-lg-inline-flex"
                  >
                    <i className="ph-arrows-left-right" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-flat-white btn-icon btn-sm rounded-pill border-transparent sidebar-mobile-main-toggle d-lg-none"
                  >
                    <i className="ph-x" />
                  </button>
                </div>
              </div>
            </div>
            {/* /sidebar header */}
            {/* Main navigation */}
            <div className="sidebar-section">
              <ul className="nav nav-sidebar" data-nav-type="accordion">
                {/* Main */}
                <li className="nav-item-header pt-0">
                  <div className="text-uppercase fs-sm lh-sm opacity-50 sidebar-resize-hide">
                    Main
                  </div>
                  <i className="ph-dots-three sidebar-resize-show" />
                </li>
                <li className="nav-item">
                  <a href="index.html" className="nav-link active">
                    <i className="ph-house" />
                    <span>
                      Dashboard
                      <span className="d-block fw-normal opacity-50">
                        No pending orders
                      </span>
                    </span>
                  </a>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-layout" />
                    <span>Layouts</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="index.html" className="nav-link active">
                        Default layout
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../../layout_2/full/index.html" className="nav-link">
                        Layout 2
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../../layout_3/full/index.html" className="nav-link">
                        Layout 3
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../../layout_4/full/index.html" className="nav-link">
                        Layout 4
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../../layout_5/full/index.html" className="nav-link">
                        Layout 5
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../../layout_6/full/index.html" className="nav-link">
                        Layout 6
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="../../layout_7/full/index.html"
                        className="nav-link disabled"
                      >
                        Layout 7{" "}
                        <span className="badge align-self-center ms-auto">
                          Coming soon
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-swatches" />
                    <span>Themes</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="index.html" className="nav-link active">
                        Default
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="../../../LTR/material/full/index.html"
                        className="nav-link disabled"
                      >
                        Material{" "}
                        <span className="badge align-self-center ms-auto">
                          Coming soon
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="../../../LTR/clean/full/index.html"
                        className="nav-link disabled"
                      >
                        Clean{" "}
                        <span className="badge align-self-center ms-auto">
                          Coming soon
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-note-blank" />
                    <span>Starter kit</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="../seed/layout_static.html" className="nav-link">
                        Static layout
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../seed/layout_no_header.html" className="nav-link">
                        No header
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../seed/layout_no_footer.html" className="nav-link">
                        No footer
                      </a>
                    </li>
                    <li className="nav-item-divider" />
                    <li className="nav-item">
                      <a
                        href="../seed/layout_fixed_header.html"
                        className="nav-link"
                      >
                        Fixed header
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="../seed/layout_fixed_footer.html"
                        className="nav-link"
                      >
                        Fixed footer
                      </a>
                    </li>
                    <li className="nav-item-divider" />
                    <li className="nav-item">
                      <a
                        href="../seed/layout_2_sidebars_1_side.html"
                        className="nav-link"
                      >
                        2 sidebars on 1 side
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="../seed/layout_2_sidebars_2_sides.html"
                        className="nav-link"
                      >
                        2 sidebars on 2 sides
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="../seed/layout_3_sidebars.html" className="nav-link">
                        3 sidebars
                      </a>
                    </li>
                    <li className="nav-item-divider" />
                    <li className="nav-item">
                      <a href="../seed/layout_boxed_page.html" className="nav-link">
                        Boxed page
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="../seed/layout_boxed_content.html"
                        className="nav-link"
                      >
                        Boxed content
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    href="../../../../docs/other_changelog.html"
                    className="nav-link"
                  >
                    <i className="ph-list-numbers" />
                    <span>Changelog</span>
                    <span className="badge bg-primary align-self-center rounded-pill ms-auto">
                      4.0
                    </span>
                  </a>
                </li>
                {/* Forms */}
                <li className="nav-item-header">
                  <div className="text-uppercase fs-sm lh-sm opacity-50 sidebar-resize-hide">
                    Forms
                  </div>
                  <i className="ph-dots-three sidebar-resize-show" />
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-note-pencil" />
                    <span>Form components</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="form_autocomplete.html" className="nav-link">
                        Autocomplete
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="form_checkboxes_radios.html" className="nav-link">
                        Checkboxes &amp; radios
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="form_dual_listboxes.html" className="nav-link">
                        Dual Listboxes
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="form_controls_extended.html" className="nav-link">
                        Extended controls
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="form_floating_labels.html" className="nav-link">
                        Floating labels
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="form_actions.html" className="nav-link">
                        Form actions
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="form_wizard.html" className="nav-link">
                        Form wizard
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="form_inputs.html" className="nav-link">
                        Input fields
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="form_input_groups.html" className="nav-link">
                        Input groups
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="form_multiselect.html" className="nav-link">
                        Multiselect
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="form_select2.html" className="nav-link">
                        Select2 selects
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="form_tags.html" className="nav-link">
                        Tags
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="form_validation_styles.html" className="nav-link">
                        Validation styles
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="form_validation_library.html" className="nav-link">
                        Validation library
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-text-aa" />
                    <span>Text editors</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        CKEditor
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a
                            href="editor_ckeditor_classic.html"
                            className="nav-link"
                          >
                            Classic
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="editor_ckeditor_document.html"
                            className="nav-link"
                          >
                            Document
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="editor_ckeditor_balloon.html"
                            className="nav-link"
                          >
                            Balloon
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="editor_quill.html" className="nav-link">
                        Quill
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="editor_trumbowyg.html" className="nav-link">
                        Trumbowyg
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="editor_code.html" className="nav-link">
                        Code
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-hand-pointing" />
                    <span>Pickers</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="picker_color.html" className="nav-link">
                        Color pickers
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="picker_date.html" className="nav-link">
                        Date &amp; time pickers
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-browser" />
                    <span>Form layouts</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="form_layout_horizontal.html" className="nav-link">
                        Horizontal form
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="form_layout_vertical.html" className="nav-link">
                        Vertical form
                      </a>
                    </li>
                    <li className="nav-item-divider" />
                    <li className="nav-item">
                      <a href="form_layout_grid.html" className="nav-link">
                        Input grid
                      </a>
                    </li>
                  </ul>
                </li>
                {/* /forms */}
                {/* Components */}
                <li className="nav-item-header">
                  <div className="text-uppercase fs-sm lh-sm opacity-50 sidebar-resize-hide">
                    Components
                  </div>
                  <i className="ph-dots-three sidebar-resize-show" />
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-squares-four" />
                    <span>Basic components</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="components_accordion.html" className="nav-link">
                        Accordion
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_alerts.html" className="nav-link">
                        Alerts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_badges.html" className="nav-link">
                        Badges
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_breadcrumbs.html" className="nav-link">
                        Breadcrumbs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_buttons.html" className="nav-link">
                        Buttons
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_carousel.html" className="nav-link">
                        Carousel
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_collapsible.html" className="nav-link">
                        Collapsible
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_dropdowns.html" className="nav-link">
                        Dropdown menus
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_list_group.html" className="nav-link">
                        List group
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_media.html" className="nav-link">
                        Media objects
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_modals.html" className="nav-link">
                        Modals
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_offcanvas.html" className="nav-link">
                        Offcanvas
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_pagination.html" className="nav-link">
                        Pagination
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_pills.html" className="nav-link">
                        Pills
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_placeholder.html" className="nav-link">
                        Placeholder
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_popovers.html" className="nav-link">
                        Popovers
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_progress.html" className="nav-link">
                        Progress
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_scrollspy.html" className="nav-link">
                        Scrollspy
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_tabs.html" className="nav-link">
                        Tabs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_toasts.html" className="nav-link">
                        Toasts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="components_tooltips.html" className="nav-link">
                        Tooltips
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-article" />
                    <span>Content styling</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="content_page_header.html" className="nav-link">
                        Page header
                      </a>
                    </li>
                    <li className="nav-item-divider" />
                    <li className="nav-item">
                      <a href="content_cards.html" className="nav-link">
                        Cards
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="content_cards_header.html" className="nav-link">
                        Card header elements
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="content_cards_footer.html" className="nav-link">
                        Card footer elements
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="content_cards_content.html" className="nav-link">
                        Card content
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="content_cards_layouts.html" className="nav-link">
                        Card layouts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="content_cards_draggable.html" className="nav-link">
                        Draggable cards
                      </a>
                    </li>
                    <li className="nav-item-divider" />
                    <li className="nav-item">
                      <a href="content_helpers_flex.html" className="nav-link">
                        Flex utilities
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="content_helpers.html" className="nav-link">
                        Helper classes
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="content_grid.html" className="nav-link">
                        Grid system
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="content_syntax_highlighter.html"
                        className="nav-link"
                      >
                        Syntax highlighter
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="content_text_styling.html" className="nav-link">
                        Text styling
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="content_typography.html" className="nav-link">
                        Typography
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-dots-three-circle" />
                    <span>Extra components</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="extra_noty.html" className="nav-link">
                        Noty notifications
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="extra_sweetalert.html" className="nav-link">
                        Sweet alert
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="extra_sliders_noui.html" className="nav-link">
                        NoUI sliders
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="extra_sliders_ion.html" className="nav-link">
                        Ion range sliders
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="extra_trees.html" className="nav-link">
                        Dynamic tree views
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="extra_fab.html" className="nav-link">
                        Floating action buttons
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="extra_session_timeout.html" className="nav-link">
                        Session timeout
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="extra_idle_timeout.html" className="nav-link">
                        Idle timeout
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-drop" />
                    <span>Color system</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="colors_primary.html" className="nav-link">
                        Primary palette
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="colors_secondary.html" className="nav-link">
                        Secondary palette
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="colors_danger.html" className="nav-link">
                        Danger palette
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="colors_success.html" className="nav-link">
                        Success palette
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="colors_warning.html" className="nav-link">
                        Warning palette
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="colors_info.html" className="nav-link">
                        Info palette
                      </a>
                    </li>
                    <li className="nav-item-divider" />
                    <li className="nav-item">
                      <a href="colors_pink.html" className="nav-link">
                        Pink palette
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="colors_purple.html" className="nav-link">
                        Purple palette
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="colors_indigo.html" className="nav-link">
                        Indigo palette
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="colors_teal.html" className="nav-link">
                        Teal palette
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="colors_yellow.html" className="nav-link">
                        Yellow palette
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-spinner spinner" />
                    <span>Animations</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="animations_css3.html" className="nav-link">
                        CSS3 animations
                      </a>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Velocity animations
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a
                            href="animations_velocity_basic.html"
                            className="nav-link"
                          >
                            Basic usage
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="animations_velocity_ui.html"
                            className="nav-link"
                          >
                            UI pack effects
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="animations_velocity_examples.html"
                            className="nav-link"
                          >
                            Advanced examples
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-smiley-wink" />
                    <span>Icons</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="icons_phosphor.html" className="nav-link">
                        Phosphor
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="icons_icomoon.html" className="nav-link">
                        Icomoon
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="icons_material.html" className="nav-link">
                        Material
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="icons_fontawesome.html" className="nav-link">
                        Font awesome
                      </a>
                    </li>
                  </ul>
                </li>
                {/* /components */}
                {/* Layout */}
                <li className="nav-item-header">
                  <div className="text-uppercase fs-sm lh-sm opacity-50 sidebar-resize-hide">
                    Layout
                  </div>
                  <i className="ph-dots-three sidebar-resize-show" />
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-layout" />
                    <span>Page layouts</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="layout_static.html" className="nav-link">
                        Static layout
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="layout_no_header.html" className="nav-link">
                        No header
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="layout_no_footer.html" className="nav-link">
                        No footer
                      </a>
                    </li>
                    <li className="nav-item-divider" />
                    <li className="nav-item">
                      <a href="layout_fixed_header.html" className="nav-link">
                        Fixed header
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="layout_fixed_footer.html" className="nav-link">
                        Fixed footer
                      </a>
                    </li>
                    <li className="nav-item-divider" />
                    <li className="nav-item">
                      <a href="layout_2_sidebars_1_side.html" className="nav-link">
                        2 sidebars on 1 side
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="layout_2_sidebars_2_sides.html" className="nav-link">
                        2 sidebars on 2 sides
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="layout_3_sidebars.html" className="nav-link">
                        3 sidebars
                      </a>
                    </li>
                    <li className="nav-item-divider" />
                    <li className="nav-item">
                      <a href="layout_boxed_page.html" className="nav-link">
                        Boxed page
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="layout_boxed_content.html" className="nav-link">
                        Boxed content
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-columns" />
                    <span>Sidebars</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Main sidebar
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a
                            href="sidebar_default_resizable.html"
                            className="nav-link"
                          >
                            Resizable
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="sidebar_default_resized.html"
                            className="nav-link"
                          >
                            Resized
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="sidebar_default_collapsible.html"
                            className="nav-link"
                          >
                            Collapsible
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="sidebar_default_collapsed.html"
                            className="nav-link"
                          >
                            Collapsed
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="sidebar_default_hideable.html"
                            className="nav-link"
                          >
                            Hideable
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="sidebar_default_hidden.html"
                            className="nav-link"
                          >
                            Hidden
                          </a>
                        </li>
                        <li className="nav-item-divider" />
                        <li className="nav-item">
                          <a
                            href="sidebar_default_color_light.html"
                            className="nav-link"
                          >
                            Light color
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Secondary sidebar
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a
                            href="sidebar_secondary_collapsible.html"
                            className="nav-link"
                          >
                            Collapsible
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="sidebar_secondary_collapsed.html"
                            className="nav-link"
                          >
                            Collapsed
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="sidebar_secondary_hideable.html"
                            className="nav-link"
                          >
                            Hideable
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="sidebar_secondary_hidden.html"
                            className="nav-link"
                          >
                            Hidden
                          </a>
                        </li>
                        <li className="nav-item-divider" />
                        <li className="nav-item">
                          <a
                            href="sidebar_secondary_color_dark.html"
                            className="nav-link"
                          >
                            Dark color
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Right sidebar
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a
                            href="sidebar_right_collapsible.html"
                            className="nav-link"
                          >
                            Collapsible
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="sidebar_right_collapsed.html"
                            className="nav-link"
                          >
                            Collapsed
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="sidebar_right_hideable.html"
                            className="nav-link"
                          >
                            Hideable
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="sidebar_right_hidden.html" className="nav-link">
                            Hidden
                          </a>
                        </li>
                        <li className="nav-item-divider" />
                        <li className="nav-item">
                          <a
                            href="sidebar_right_color_dark.html"
                            className="nav-link"
                          >
                            Dark color
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Content sidebar
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a href="sidebar_content_left.html" className="nav-link">
                            Left aligned
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="sidebar_content_left_stretch.html"
                            className="nav-link"
                          >
                            Left stretched
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="sidebar_content_left_sections.html"
                            className="nav-link"
                          >
                            Left sectioned
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="sidebar_content_right.html" className="nav-link">
                            Right aligned
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="sidebar_content_right_stretch.html"
                            className="nav-link"
                          >
                            Right stretched
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="sidebar_content_right_sections.html"
                            className="nav-link"
                          >
                            Right sectioned
                          </a>
                        </li>
                        <li className="nav-item-divider" />
                        <li className="nav-item">
                          <a
                            href="sidebar_content_color_dark.html"
                            className="nav-link"
                          >
                            Dark color
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item-divider" />
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Sticky areas
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a href="sidebar_sticky_header.html" className="nav-link">
                            Header
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="sidebar_sticky_footer.html" className="nav-link">
                            Footer
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="sidebar_sticky_header_footer.html"
                            className="nav-link"
                          >
                            Header and footer
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="sidebar_sticky_custom.html" className="nav-link">
                            Custom elements
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="sidebar_components.html" className="nav-link">
                        Sidebar components
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-rows" />
                    <span>Navbars</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Single navbar
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a
                            href="navbar_single_bottom_fixed.html"
                            className="nav-link"
                          >
                            Bottom fixed
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="navbar_single_header_before.html"
                            className="nav-link"
                          >
                            Before page header
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="navbar_single_header_before_fixed.html"
                            className="nav-link"
                          >
                            Before page header fixed
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="navbar_single_header_after.html"
                            className="nav-link"
                          >
                            After page header
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="navbar_single_header_after_sticky.html"
                            className="nav-link"
                          >
                            After page header sticky
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Multiple navbars
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a href="navbar_multiple_top.html" className="nav-link">
                            Multiple top
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="navbar_multiple_bottom_static.html"
                            className="nav-link"
                          >
                            Multiple bottom static
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="navbar_multiple_bottom_fixed.html"
                            className="nav-link"
                          >
                            Multiple bottom fixed
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="navbar_multiple_top_bottom_fixed.html"
                            className="nav-link"
                          >
                            Top and bottom fixed
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Content navbar
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a
                            href="navbar_component_single.html"
                            className="nav-link"
                          >
                            Single navbar
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="navbar_component_multiple.html"
                            className="nav-link"
                          >
                            Multiple navbars
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item-divider" />
                    <li className="nav-item">
                      <a href="navbar_colors.html" className="nav-link">
                        Color options
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="navbar_sizes.html" className="nav-link">
                        Sizing options
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="navbar_components.html" className="nav-link">
                        Navbar components
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-arrow-fat-lines-down" />
                    <span>Vertical navigation</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a
                        href="navigation_vertical_styles.html"
                        className="nav-link"
                      >
                        Navigation styles
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="navigation_vertical_collapsible.html"
                        className="nav-link"
                      >
                        Collapsible menu
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="navigation_vertical_accordion.html"
                        className="nav-link"
                      >
                        Accordion menu
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="navigation_vertical_bordered.html"
                        className="nav-link"
                      >
                        Bordered navigation
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="navigation_vertical_right_icons.html"
                        className="nav-link"
                      >
                        Right icons
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="navigation_vertical_badges.html"
                        className="nav-link"
                      >
                        Badges
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="navigation_vertical_disabled.html"
                        className="nav-link"
                      >
                        Disabled items
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-arrow-fat-lines-right" />
                    <span>Horizontal navigation</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a
                        href="navigation_horizontal_styles.html"
                        className="nav-link"
                      >
                        Navigation styles
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="navigation_horizontal_elements.html"
                        className="nav-link"
                      >
                        Navigation elements
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="navigation_horizontal_tabs.html"
                        className="nav-link"
                      >
                        Tabbed navigation
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="navigation_horizontal_disabled.html"
                        className="nav-link"
                      >
                        Disabled navigation links
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="navigation_horizontal_mega.html"
                        className="nav-link"
                      >
                        Horizontal mega menu
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-arrow-elbow-down-right" />{" "}
                    <span>Menu levels</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Second level
                      </a>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Second level with child
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            Third level
                          </a>
                        </li>
                        <li className="nav-item nav-item-submenu">
                          <a href="#" className="nav-link">
                            Third level with child
                          </a>
                          <ul className="nav-group-sub collapse">
                            <li className="nav-item">
                              <a href="#" className="nav-link">
                                Fourth level
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#" className="nav-link">
                                Fourth level
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            Third level
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Second level
                      </a>
                    </li>
                  </ul>
                </li>
                {/* /layout */}
                {/* Data visualization */}
                <li className="nav-item-header">
                  <div className="text-uppercase fs-sm lh-sm opacity-50 sidebar-resize-hide">
                    Data visualization
                  </div>
                  <i className="ph-dots-three sidebar-resize-show" />
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-chart-line" />
                    <span>Echarts library</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="echarts_lines.html" className="nav-link">
                        Line charts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="echarts_areas.html" className="nav-link">
                        Area charts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="echarts_columns_waterfalls.html"
                        className="nav-link"
                      >
                        Columns and waterfalls
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="echarts_bars_tornados.html" className="nav-link">
                        Bars and tornados
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="echarts_scatter.html" className="nav-link">
                        Scatter charts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="echarts_pies_donuts.html" className="nav-link">
                        Pies and donuts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="echarts_funnels_calendars.html" className="nav-link">
                        Funnels and calendars
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="echarts_candlesticks_others.html"
                        className="nav-link"
                      >
                        Candlesticks and others
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-chart-bar" />
                    <span>D3 library</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="d3_lines_basic.html" className="nav-link">
                        Simple lines
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="d3_lines_advanced.html" className="nav-link">
                        Advanced lines
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="d3_bars_basic.html" className="nav-link">
                        Simple bars
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="d3_bars_advanced.html" className="nav-link">
                        Advanced bars
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="d3_pies.html" className="nav-link">
                        Pie charts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="d3_circle_diagrams.html" className="nav-link">
                        Circle diagrams
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="d3_tree.html" className="nav-link">
                        Tree layout
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="d3_other.html" className="nav-link">
                        Other charts
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-chart-pie-slice" />
                    <span>C3 library</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="c3_lines_areas.html" className="nav-link">
                        Lines and areas
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="c3_bars_pies.html" className="nav-link">
                        Bars and pies
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="c3_advanced.html" className="nav-link">
                        Advanced examples
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="c3_axis.html" className="nav-link">
                        Chart axis
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="c3_grid.html" className="nav-link">
                        Grid options
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-google-logo" />
                    <span>Google charts</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="google_lines.html" className="nav-link">
                        Line charts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="google_bars.html" className="nav-link">
                        Bar charts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="google_pies.html" className="nav-link">
                        Pie charts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="google_scatter_bubble.html" className="nav-link">
                        Bubble &amp; scatter charts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="google_other.html" className="nav-link">
                        Other charts
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-map-pin" />
                    <span>Maps integration</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="maps_leaflet.html" className="nav-link">
                        Leaflet maps
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="maps_echarts.html" className="nav-link">
                        ECharts maps
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="maps_vector.html" className="nav-link disabled">
                        D3.js maps{" "}
                        <span className="badge bg-transparent align-self-center ms-auto">
                          Coming soon
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* /data visualization */}
                {/* Extensions */}
                <li className="nav-item-header">
                  <div className="text-uppercase fs-sm lh-sm opacity-50 sidebar-resize-hide">
                    Extensions
                  </div>
                  <i className="ph-dots-three sidebar-resize-show" />
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-circles-three" />
                    <span>Extensions</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="extension_image_cropper.html" className="nav-link">
                        Image cropper
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="extension_mark.html" className="nav-link">
                        Mark
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="extension_dnd.html" className="nav-link">
                        Drag and drop
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-cloud-arrow-up" />
                    <span>File uploaders</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="uploader_plupload.html" className="nav-link">
                        Plupload
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="uploader_bootstrap.html" className="nav-link">
                        Bootstrap file uploader
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="uploader_dropzone.html" className="nav-link">
                        Dropzone
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-calendar-check" />
                    <span>Event calendars</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="fullcalendar_views.html" className="nav-link">
                        Basic views
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="fullcalendar_styling.html" className="nav-link">
                        Event styling
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="fullcalendar_formats.html" className="nav-link">
                        Language and time
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="fullcalendar_advanced.html" className="nav-link">
                        Advanced usage
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-globe" />
                    <span>Internationalization</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a
                        href="internationalization_switch_direct.html"
                        className="nav-link"
                      >
                        Direct translation
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="internationalization_switch_query.html"
                        className="nav-link"
                      >
                        Querystring parameter
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="internationalization_fallback.html"
                        className="nav-link"
                      >
                        Language fallback
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="internationalization_callbacks.html"
                        className="nav-link"
                      >
                        Callbacks
                      </a>
                    </li>
                  </ul>
                </li>
                {/* /extensions */}
                {/* Tables */}
                <li className="nav-item-header">
                  <div className="text-uppercase fs-sm lh-sm opacity-50 sidebar-resize-hide">
                    Tables
                  </div>
                  <i className="ph-dots-three sidebar-resize-show" />
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-table" />
                    <span>Basic tables</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="table_basic.html" className="nav-link">
                        Basic examples
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="table_sizing.html" className="nav-link">
                        Table sizing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="table_borders.html" className="nav-link">
                        Table borders
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="table_styling.html" className="nav-link">
                        Table styling
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="table_elements.html" className="nav-link">
                        Table elements
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-square-half-bottom" />
                    <span>Grid.js tables</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="gridjs_basic.html" className="nav-link">
                        Basic
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="gridjs_data_source.html" className="nav-link">
                        Data source
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="gridjs_server_side.html" className="nav-link">
                        Server side
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="gridjs_customizing.html" className="nav-link">
                        Customizing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="gridjs_advanced.html" className="nav-link">
                        Advanced
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-square-half" />
                    <span>Data tables</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="datatable_basic.html" className="nav-link">
                        Basic initialization
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="datatable_styling.html" className="nav-link">
                        Basic styling
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="datatable_advanced.html" className="nav-link">
                        Advanced examples
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="datatable_sorting.html" className="nav-link">
                        Sorting options
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="datatable_api.html" className="nav-link">
                        Using API
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="datatable_data_sources.html" className="nav-link">
                        Data sources
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-puzzle-piece" />
                    <span>Data tables extensions</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a
                        href="datatable_extension_reorder.html"
                        className="nav-link"
                      >
                        Columns reorder
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="datatable_extension_row_reorder.html"
                        className="nav-link"
                      >
                        Row reorder
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="datatable_extension_fixed_columns.html"
                        className="nav-link"
                      >
                        Fixed columns
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="datatable_extension_autofill.html"
                        className="nav-link"
                      >
                        Auto fill
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="datatable_extension_key_table.html"
                        className="nav-link"
                      >
                        Key table
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="datatable_extension_scroller.html"
                        className="nav-link"
                      >
                        Scroller
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="datatable_extension_select.html"
                        className="nav-link"
                      >
                        Select
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="datatable_extension_responsive.html"
                        className="nav-link"
                      >
                        Responsive
                      </a>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Buttons
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a
                            href="datatable_extension_buttons_init.html"
                            className="nav-link"
                          >
                            Initialization
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="datatable_extension_buttons_pdf.html"
                            className="nav-link"
                          >
                            PDF buttons
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="datatable_extension_buttons_excel.html"
                            className="nav-link"
                          >
                            Excel buttons
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="datatable_extension_buttons_print.html"
                            className="nav-link"
                          >
                            Print buttons
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="datatable_extension_buttons_html5.html"
                            className="nav-link"
                          >
                            HTML5 buttons
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a
                        href="datatable_extension_colvis.html"
                        className="nav-link"
                      >
                        Columns visibility
                      </a>
                    </li>
                  </ul>
                </li>
                {/* /tables */}
                {/* Page kits */}
                <li className="nav-item-header">
                  <div className="text-uppercase fs-sm lh-sm opacity-50 sidebar-resize-hide">
                    Page kits
                  </div>
                  <i className="ph-dots-three sidebar-resize-show" />
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-cards" />
                    <span>General pages</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="general_feed.html" className="nav-link">
                        Feed
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="general_embeds.html" className="nav-link">
                        Embeds
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="general_faq.html" className="nav-link">
                        FAQ page
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="general_knowledgebase.html" className="nav-link">
                        Knowledgebase
                      </a>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Blog
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a href="blog_classic_v.html" className="nav-link">
                            Classic vertical
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="blog_classic_h.html" className="nav-link">
                            Classic horizontal
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="blog_grid.html" className="nav-link">
                            Grid
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="blog_single.html" className="nav-link">
                            Single post
                          </a>
                        </li>
                        <li className="nav-item-divider" />
                        <li className="nav-item">
                          <a href="blog_sidebar_left.html" className="nav-link">
                            Left sidebar
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="blog_sidebar_right.html" className="nav-link">
                            Right sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Timelines
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a href="timelines_left.html" className="nav-link">
                            Left timeline
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="timelines_right.html" className="nav-link">
                            Right timeline
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="timelines_center.html" className="nav-link">
                            Centered timeline
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Gallery
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a href="gallery_grid.html" className="nav-link">
                            Media grid
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="gallery_titles.html" className="nav-link">
                            Media with titles
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="gallery_description.html" className="nav-link">
                            Media with description
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="gallery_library.html" className="nav-link">
                            Media library
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-wrench" />
                    <span>Service pages</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="service_sitemap.html" className="nav-link">
                        Sitemap
                      </a>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Invoicing
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a href="invoice_template.html" className="nav-link">
                            Invoice template
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="invoice_grid.html" className="nav-link">
                            Invoice grid
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="invoice_archive.html" className="nav-link">
                            Invoice archive
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Authentication
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a href="login_simple.html" className="nav-link">
                            Simple login
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="login_advanced.html" className="nav-link">
                            More login info
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="login_registration.html" className="nav-link">
                            Simple registration
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="login_registration_advanced.html"
                            className="nav-link"
                          >
                            More registration info
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="login_unlock.html" className="nav-link">
                            Unlock user
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="login_password_recover.html"
                            className="nav-link"
                          >
                            Reset password
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="login_hide_navbar.html" className="nav-link">
                            Hide navbar
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="login_transparent.html" className="nav-link">
                            Transparent box
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="login_background.html" className="nav-link">
                            Background option
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="login_validation.html" className="nav-link">
                            With validation
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="login_tabbed.html" className="nav-link">
                            Tabbed form
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="login_modals.html" className="nav-link">
                            Inside modals
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Error pages
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a href="error_403.html" className="nav-link">
                            Error 403
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="error_404.html" className="nav-link">
                            Error 404
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="error_405.html" className="nav-link">
                            Error 405
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="error_500.html" className="nav-link">
                            Error 500
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="error_503.html" className="nav-link">
                            Error 503
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="error_offline.html" className="nav-link">
                            Offline page
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-user-focus" />
                    <span>User pages</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="user_pages_list.html" className="nav-link">
                        User list
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="user_pages_cards.html" className="nav-link">
                        User cards
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="user_pages_profile.html" className="nav-link">
                        Simple profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="user_pages_profile_tabbed.html" className="nav-link">
                        Tabbed profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="user_pages_profile_cover.html" className="nav-link">
                        Profile with cover
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-circles-four" />
                    <span>Application pages</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Task manager
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a href="task_manager_grid.html" className="nav-link">
                            Task grid
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="task_manager_list.html" className="nav-link">
                            Task list
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="task_manager_detailed.html" className="nav-link">
                            Task detailed
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Inbox
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a href="mail_list.html" className="nav-link">
                            Mail list
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="mail_list_detached.html" className="nav-link">
                            Mail list (detached)
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="mail_read.html" className="nav-link">
                            Read mail
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="mail_write.html" className="nav-link">
                            Write mail
                          </a>
                        </li>
                        <li className="nav-item-divider" />
                        <li className="nav-item">
                          <a href="chat_layouts.html" className="nav-link">
                            Chat layouts
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="chat_options.html" className="nav-link">
                            Chat options
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Search
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a href="search_basic.html" className="nav-link">
                            Basic search results
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="search_users.html" className="nav-link">
                            User search results
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="search_images.html" className="nav-link">
                            Image search results
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="search_videos.html" className="nav-link">
                            Video search results
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Job search
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a href="job_list_cards.html" className="nav-link">
                            Cards view
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="job_list_list.html" className="nav-link">
                            List view
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="job_detailed.html" className="nav-link">
                            Job detailed
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="job_apply.html" className="nav-link">
                            Apply
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Learning
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a href="learning_list.html" className="nav-link">
                            List view
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="learning_grid.html" className="nav-link">
                            Grid view
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="learning_detailed.html" className="nav-link">
                            Detailed course
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item nav-item-submenu">
                      <a href="#" className="nav-link">
                        Ecommerce set
                      </a>
                      <ul className="nav-group-sub collapse">
                        <li className="nav-item">
                          <a
                            href="ecommerce_product_list.html"
                            className="nav-link"
                          >
                            Product list
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ecommerce_product_grid.html"
                            className="nav-link"
                          >
                            Product grid
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ecommerce_orders_history.html"
                            className="nav-link"
                          >
                            Orders history
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="ecommerce_customers.html" className="nav-link">
                            Customers
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="ecommerce_pricing.html" className="nav-link">
                            Pricing tables
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-submenu">
                  <a href="#" className="nav-link">
                    <i className="ph-gift" />
                    <span>Widgets</span>
                  </a>
                  <ul className="nav-group-sub collapse">
                    <li className="nav-item">
                      <a href="widgets_content.html" className="nav-link">
                        Content widgets
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="widgets_stats.html" className="nav-link">
                        Statistics widgets
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="widgets_menu.html" className="nav-link disabled">
                        Menu widgets{" "}
                        <span className="badge bg-transparent align-self-center ms-auto">
                          Coming soon
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="widgets_form.html" className="nav-link disabled">
                        Form widgets{" "}
                        <span className="badge bg-transparent align-self-center ms-auto">
                          Coming soon
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* /page kits */}
              </ul>
            </div>
            {/* /main navigation */}
          </div>
          {/* /sidebar content */}
        </div>
        {/* /main sidebar */}
        {/* Main content */}
        <div className="content-wrapper">
          {/* Inner content */}
          <div className="content-inner">
            {/* Page header */}
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
            {/* /page header */}
            {/* Content area */}
            <div className="content">
              {/* Main charts */}
              <div className="row">
                <div className="col-xl-7">
                  {/* Traffic sources */}
                  <div className="card">
                    <div className="card-header d-flex align-items-center">
                      <h5 className="mb-0">Traffic sources</h5>
                      <div className="ms-auto">
                        <label className="form-check form-switch form-check-reverse">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            defaultChecked={false}
                          />
                          <span className="form-check-label">Live update</span>
                        </label>
                      </div>
                    </div>
                    <div className="card-body pb-0">
                      <div className="row">
                        <div className="col-sm-4">
                          <div className="d-flex align-items-center justify-content-center mb-2">
                            <a
                              href="#"
                              className="bg-success bg-opacity-10 text-success lh-1 rounded-pill p-2 me-3"
                            >
                              <i className="ph-plus" />
                            </a>
                            <div>
                              <div className="fw-semibold">New visitors</div>
                              <span className="text-muted">2,349 avg</span>
                            </div>
                          </div>
                          <div className="w-75 mx-auto mb-3" id="new-visitors" />
                        </div>
                        <div className="col-sm-4">
                          <div className="d-flex align-items-center justify-content-center mb-2">
                            <a
                              href="#"
                              className="bg-warning bg-opacity-10 text-warning lh-1 rounded-pill p-2 me-3"
                            >
                              <i className="ph-clock" />
                            </a>
                            <div>
                              <div className="fw-semibold">New sessions</div>
                              <span className="text-muted">08:20 avg</span>
                            </div>
                          </div>
                          <div className="w-75 mx-auto mb-3" id="new-sessions" />
                        </div>
                        <div className="col-sm-4">
                          <div className="d-flex align-items-center justify-content-center mb-2">
                            <a
                              href="#"
                              className="bg-indigo bg-opacity-10 text-indigo lh-1 rounded-pill p-2 me-3"
                            >
                              <i className="ph-users-three" />
                            </a>
                            <div>
                              <div className="fw-semibold">Total online</div>
                              <span className="text-muted">5,378 avg</span>
                            </div>
                          </div>
                          <div className="w-75 mx-auto mb-3" id="total-online" />
                        </div>
                      </div>
                    </div>
                    <div className="chart position-relative" id="traffic-sources" />
                  </div>
                  {/* /traffic sources */}
                </div>
                <div className="col-xl-5">
                  {/* Sales stats */}
                  <div className="card">
                    <div className="card-header d-sm-flex align-items-sm-center py-sm-0">
                      <h5 className="py-sm-2 my-sm-1">Sales statistics</h5>
                      <div className="mt-2 mt-sm-0 ms-sm-auto">
                        <select className="form-select" id="select_date">
                          <option value="val1">June, 29 - July, 5</option>
                          <option value="val2">June, 22 - June 28</option>
                          <option value="val3" selected={false}>
                            June, 15 - June, 21
                          </option>
                          <option value="val4">June, 8 - June, 14</option>
                        </select>
                      </div>
                    </div>
                    <div className="card-body pb-0">
                      <div className="row text-center">
                        <div className="col-4">
                          <div className="mb-3">
                            <h5 className="mb-0">5,689</h5>
                            <div className="text-muted fs-sm">new orders</div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="mb-3">
                            <h5 className="mb-0">32,568</h5>
                            <div className="text-muted fs-sm">this month</div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="mb-3">
                            <h5 className="mb-0">$23,464</h5>
                            <div className="text-muted fs-sm">expected profit</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chart mb-2" id="app_sales" />
                    <div className="chart" id="monthly-sales-stats" />
                  </div>
                  {/* /sales stats */}
                </div>
              </div>
              {/* /main charts */}
              {/* Dashboard content */}
              <div className="row">
                <div className="col-xl-8">
                  {/* Marketing campaigns */}
                  <div className="card">
                    <div className="card-header d-flex align-items-center">
                      <h5 className="mb-0">Marketing campaigns</h5>
                      <div className="d-inline-flex ms-auto">
                        <span className="badge bg-success rounded-pill">
                          28 active
                        </span>
                        <div className="dropdown d-inline-flex ms-3">
                          <a
                            href="#"
                            className="text-body d-inline-flex align-items-center dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            <i className="ph-gear" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="#" className="dropdown-item">
                              <i className="ph-arrows-clockwise me-2" />
                              Update data
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="ph-list-dashes me-2" />
                              Detailed log
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="ph-chart-line me-2" />
                              Statistics
                            </a>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                              <i className="ph-eraser me-2" />
                              Clear list
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body d-sm-flex align-items-sm-center justify-content-sm-between flex-sm-wrap">
                      <div className="d-flex align-items-center mb-3 mb-sm-0">
                        <div id="campaigns-donut" />
                        <div className="ms-3">
                          <div className="d-flex align-items-center">
                            <h5 className="mb-0">38,289</h5>
                            <span className="text-success ms-2">
                              <i className="ph-arrow-up fs-base lh-base align-top" />
                              (+16.2%)
                            </span>
                          </div>
                          <span className="d-inline-block bg-success rounded-pill p-1 me-1" />
                          <span className="text-muted">May 12, 12:30 am</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-3 mb-sm-0">
                        <div id="campaign-status-pie" />
                        <div className="ms-3">
                          <div className="d-flex align-items-center">
                            <h5 className="mb-0">2,458</h5>
                            <span className="text-danger ms-2">
                              <i className="ph-arrow-down fs-base lh-base align-top" />
                              (-4.9%)
                            </span>
                          </div>
                          <span className="d-inline-block bg-danger rounded-pill p-1 me-1" />
                          <span className="text-muted">Jun 4, 4:00 am</span>
                        </div>
                      </div>
                      <div>
                        <a href="#" className="btn btn-indigo">
                          <i className="ph-file-pdf me-2" />
                          View report
                        </a>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table text-nowrap">
                        <thead>
                          <tr>
                            <th>Campaign</th>
                            <th>Client</th>
                            <th>Changes</th>
                            <th>Budget</th>
                            <th>Status</th>
                            <th className="text-center" style={{ width: 20 }}>
                              <i className="ph-dots-three" />
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="table-light">
                            <td colSpan={5}>Today</td>
                            <td className="text-end">
                              <span
                                className="progress-meter"
                                id="today-progress"
                                data-progress={30}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <a href="#" className="d-block me-3">
                                  <img
                                    src="assets/images/brands/facebook.svg"
                                    className="rounded-circle"
                                    width={36}
                                    height={36}
                                    alt=""
                                  />
                                </a>
                                <div>
                                  <a href="#" className="text-body fw-semibold">
                                    Facebook
                                  </a>
                                  <div className="text-muted fs-sm">
                                    <span className="d-inline-block bg-primary rounded-pill p-1 me-1" />
                                    02:00 - 03:00
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="text-muted">Mintlime</span>
                            </td>
                            <td>
                              <span className="text-success">
                                <i className="ph-trend-up me-2" /> 2.43%
                              </span>
                            </td>
                            <td>
                              <h6 className="mb-0">$5,489</h6>
                            </td>
                            <td>
                              <span className="badge bg-primary bg-opacity-10 text-primary">
                                Active
                              </span>
                            </td>
                            <td className="text-center">
                              <div className="dropdown">
                                <a
                                  href="#"
                                  className="text-body"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="ph-list" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-chart-line me-2" />
                                    View statement
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-pencil me-2" />
                                    Edit campaign
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-lock-key me-2" />
                                    Disable campaign
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-gear me-2" />
                                    Settings
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <a href="#" className="d-block me-3">
                                  <img
                                    src="assets/images/brands/youtube.svg"
                                    className="rounded-circle"
                                    width={36}
                                    height={36}
                                    alt=""
                                  />
                                </a>
                                <div>
                                  <a href="#" className="text-body fw-semibold">
                                    Youtube videos
                                  </a>
                                  <div className="text-muted fs-sm">
                                    <span className="d-inline-block bg-danger rounded-pill p-1 me-1" />
                                    13:00 - 14:00
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="text-muted">CDsoft</span>
                            </td>
                            <td>
                              <span className="text-success">
                                <i className="ph-trend-up me-2" /> 3.12%
                              </span>
                            </td>
                            <td>
                              <h6 className="mb-0">$2,592</h6>
                            </td>
                            <td>
                              <span className="badge bg-danger bg-opacity-10 text-danger">
                                Closed
                              </span>
                            </td>
                            <td className="text-center">
                              <div className="dropdown">
                                <a
                                  href="#"
                                  className="text-body"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="ph-list" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-chart-line me-2" />
                                    View statement
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-pencil me-2" />
                                    Edit campaign
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-lock-key me-2" />
                                    Disable campaign
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-gear me-2" />
                                    Settings
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <a href="#" className="d-block me-3">
                                  <img
                                    src="assets/images/brands/spotify.svg"
                                    className="rounded-circle"
                                    width={36}
                                    height={36}
                                    alt=""
                                  />
                                </a>
                                <div>
                                  <a href="#" className="text-body fw-semibold">
                                    Spotify ads
                                  </a>
                                  <div className="text-muted fs-sm">
                                    <span className="d-inline-block bg-secondary rounded-pill p-1 me-1" />
                                    10:00 - 11:00
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="text-muted">Diligence</span>
                            </td>
                            <td>
                              <span className="text-danger">
                                <i className="ph-trend-down me-2" /> 8.02%
                              </span>
                            </td>
                            <td>
                              <h6 className="mb-0">$1,268</h6>
                            </td>
                            <td>
                              <span className="badge bg-secondary bg-opacity-10 text-secondary">
                                On hold
                              </span>
                            </td>
                            <td className="text-center">
                              <div className="dropdown">
                                <a
                                  href="#"
                                  className="text-body"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="ph-list" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-chart-line me-2" />
                                    View statement
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-pencil me-2" />
                                    Edit campaign
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-lock-key me-2" />
                                    Disable campaign
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-gear me-2" />
                                    Settings
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <a href="#" className="d-block me-3">
                                  <img
                                    src="assets/images/brands/twitter.svg"
                                    className="rounded-circle"
                                    width={36}
                                    height={36}
                                    alt=""
                                  />
                                </a>
                                <div>
                                  <a href="#" className="text-body fw-semibold">
                                    Twitter ads
                                  </a>
                                  <div className="text-muted fs-sm">
                                    <span className="d-inline-block bg-secondary rounded-pill p-1 me-1" />
                                    04:00 - 05:00
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="text-muted">Deluxe</span>
                            </td>
                            <td>
                              <span className="text-success">
                                <i className="ph-trend-up me-2" /> 2.78%
                              </span>
                            </td>
                            <td>
                              <h6 className="mb-0">$7,467</h6>
                            </td>
                            <td>
                              <span className="badge bg-secondary bg-opacity-10 text-secondary">
                                On hold
                              </span>
                            </td>
                            <td className="text-center">
                              <div className="dropdown">
                                <a
                                  href="#"
                                  className="text-body"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="ph-list" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-chart-line me-2" />
                                    View statement
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-pencil me-2" />
                                    Edit campaign
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-lock-key me-2" />
                                    Disable campaign
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-gear me-2" />
                                    Settings
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="table-light">
                            <td colSpan={5}>Yesterday</td>
                            <td className="text-end">
                              <span
                                className="progress-meter"
                                id="yesterday-progress"
                                data-progress={65}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <a href="#" className="d-block me-3">
                                  <img
                                    src="assets/images/brands/bing.svg"
                                    className="rounded-circle"
                                    width={36}
                                    height={36}
                                    alt=""
                                  />
                                </a>
                                <div>
                                  <a href="#" className="text-body fw-semibold">
                                    Bing campaign
                                  </a>
                                  <div className="text-muted fs-sm">
                                    <span className="d-inline-block bg-success rounded-pill p-1 me-1" />
                                    15:00 - 16:00
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="text-muted">Metrics</span>
                            </td>
                            <td>
                              <span className="text-danger">
                                <i className="ph-trend-down me-2" /> 5.78%
                              </span>
                            </td>
                            <td>
                              <h6 className="mb-0">$970</h6>
                            </td>
                            <td>
                              <span className="badge bg-success bg-opacity-10 text-success">
                                Pending
                              </span>
                            </td>
                            <td className="text-center">
                              <div className="dropdown">
                                <a
                                  href="#"
                                  className="text-body"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="ph-list" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-chart-line me-2" />
                                    View statement
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-pencil me-2" />
                                    Edit campaign
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-lock-key me-2" />
                                    Disable campaign
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-gear me-2" />
                                    Settings
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <a href="#" className="d-block me-3">
                                  <img
                                    src="assets/images/brands/amazon.svg"
                                    className="rounded-circle"
                                    width={36}
                                    height={36}
                                    alt=""
                                  />
                                </a>
                                <div>
                                  <a href="#" className="text-body fw-semibold">
                                    Amazon ads
                                  </a>
                                  <div className="text-muted fs-sm">
                                    <span className="d-inline-block bg-danger rounded-pill p-1 me-1" />
                                    18:00 - 19:00
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="text-muted">Blueish</span>
                            </td>
                            <td>
                              <span className="text-success">
                                <i className="ph-trend-up me-2" /> 6.79%
                              </span>
                            </td>
                            <td>
                              <h6 className="mb-0">$1,540</h6>
                            </td>
                            <td>
                              <span className="badge bg-primary bg-opacity-10 text-primary">
                                Active
                              </span>
                            </td>
                            <td className="text-center">
                              <div className="dropdown">
                                <a
                                  href="#"
                                  className="text-body"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="ph-list" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-chart-line me-2" />
                                    View statement
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-pencil me-2" />
                                    Edit campaign
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-lock-key me-2" />
                                    Disable campaign
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-gear me-2" />
                                    Settings
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <a href="#" className="d-block me-3">
                                  <img
                                    src="assets/images/brands/dribbble.svg"
                                    className="rounded-circle"
                                    width={36}
                                    height={36}
                                    alt=""
                                  />
                                </a>
                                <div>
                                  <a href="#" className="text-body fw-semibold">
                                    Dribbble ads
                                  </a>
                                  <div className="text-muted fs-sm">
                                    <span className="d-inline-block bg-primary rounded-pill p-1 me-1" />
                                    20:00 - 21:00
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="text-muted">Teamable</span>
                            </td>
                            <td>
                              <span className="text-danger">
                                <i className="ph-trend-down me-2" /> 9.83%
                              </span>
                            </td>
                            <td>
                              <h6 className="mb-0">$8,350</h6>
                            </td>
                            <td>
                              <span className="badge bg-danger bg-opacity-10 text-danger">
                                Closed
                              </span>
                            </td>
                            <td className="text-center">
                              <div className="dropdown">
                                <a
                                  href="#"
                                  className="text-body"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="ph-list" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-chart-line me-2" />
                                    View statement
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-pencil me-2" />
                                    Edit campaign
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-lock-key me-2" />
                                    Disable campaign
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-gear me-2" />
                                    Settings
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* /marketing campaigns */}
                  {/* Quick stats boxes */}
                  <div className="row">
                    <div className="col-lg-4">
                      {/* Members online */}
                      <div className="card bg-teal text-white">
                        <div className="card-body">
                          <div className="d-flex">
                            <h3 className="mb-0">3,450</h3>
                            <span className="badge bg-black bg-opacity-50 rounded-pill align-self-center ms-auto">
                              +53,6%
                            </span>
                          </div>
                          <div>
                            Members online
                            <div className="fs-sm opacity-75">489 avg</div>
                          </div>
                        </div>
                        <div
                          className="rounded-bottom overflow-hidden mx-3"
                          id="members-online"
                        />
                      </div>
                      {/* /members online */}
                    </div>
                    <div className="col-lg-4">
                      {/* Current server load */}
                      <div className="card bg-pink text-white">
                        <div className="card-body">
                          <div className="d-flex align-items-center">
                            <h3 className="mb-0">49.4%</h3>
                            <div className="dropdown d-inline-flex ms-auto">
                              <a
                                href="#"
                                className="text-white d-inline-flex align-items-center dropdown-toggle"
                                data-bs-toggle="dropdown"
                              >
                                <i className="ph-gear" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a href="#" className="dropdown-item">
                                  <i className="ph-arrows-clockwise me-2" />
                                  Update data
                                </a>
                                <a href="#" className="dropdown-item">
                                  <i className="ph-list-dashes me-2" />
                                  Detailed log
                                </a>
                                <a href="#" className="dropdown-item">
                                  <i className="ph-chart-line me-2" />
                                  Statistics
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                  <i className="ph-eraser me-2" />
                                  Clear list
                                </a>
                              </div>
                            </div>
                          </div>
                          <div>
                            Current server load
                            <div className="fs-sm opacity-75">34.6% avg</div>
                          </div>
                        </div>
                        <div
                          className="rounded-bottom overflow-hidden"
                          id="server-load"
                        />
                      </div>
                      {/* /current server load */}
                    </div>
                    <div className="col-lg-4">
                      {/* Today's revenue */}
                      <div className="card bg-primary text-white">
                        <div className="card-body">
                          <div className="d-flex align-items-center">
                            <h3 className="mb-0">$18,390</h3>
                            <div className="ms-auto">
                              <a className="text-white" data-card-action="reload">
                                <i className="ph-arrows-clockwise" />
                              </a>
                            </div>
                          </div>
                          <div>
                            Today revenue
                            <div className="fs-sm opacity-75">$37,578 avg</div>
                          </div>
                        </div>
                        <div
                          className="rounded-bottom overflow-hidden"
                          id="today-revenue"
                        />
                      </div>
                      {/* /today's revenue */}
                    </div>
                  </div>
                  {/* /quick stats boxes */}
                  {/* Support tickets */}
                  <div className="card">
                    <div className="card-header d-sm-flex align-items-sm-center py-sm-0">
                      <h5 className="py-sm-2 my-sm-1">Support tickets</h5>
                      <div className="mt-2 mt-sm-0 ms-sm-auto">
                        <select className="form-select">
                          <option value="val1" selected={false}>
                            June, 29 - July, 5
                          </option>
                          <option value="val2">June, 22 - June 28</option>
                          <option value="val3">June, 15 - June, 21</option>
                          <option value="val4">June, 8 - June, 14</option>
                        </select>
                      </div>
                    </div>
                    <div className="card-body d-lg-flex align-items-lg-center justify-content-lg-between flex-lg-wrap">
                      <div className="d-flex align-items-center mb-3 mb-lg-0">
                        <div id="tickets-status" />
                        <div className="ms-3">
                          <div className="d-flex align-items-center">
                            <h5 className="mb-0">14,327</h5>
                            <span className="text-success ms-2">
                              <i className="ph-arrow-up fs-base lh-base align-top" />
                              (+2.9%)
                            </span>
                          </div>
                          <span className="d-inline-block bg-success rounded-pill p-1 me-1" />
                          <span className="text-muted">Jun 16, 10:00 am</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-3 mb-lg-0">
                        <a
                          href="#"
                          className="bg-primary bg-opacity-10 text-primary lh-1 rounded-pill p-2"
                        >
                          <i className="ph-folders" />
                        </a>
                        <div className="ms-3">
                          <h5 className="mb-0">1,132</h5>
                          <span className="text-muted">total tickets</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-3 mb-lg-0">
                        <a
                          href="#"
                          className="bg-primary bg-opacity-10 text-primary lh-1 rounded-pill p-2"
                        >
                          <i className="ph-arrow-arc-left" />
                        </a>
                        <div className="ms-3">
                          <h5 className="mb-0">06:25:00</h5>
                          <span className="text-muted">response time</span>
                        </div>
                      </div>
                      <button type="button" className="btn btn-light">
                        <i className="ph-file-pdf me-2" />
                        Report
                      </button>
                    </div>
                    <div className="table-responsive">
                      <table className="table text-nowrap">
                        <thead>
                          <tr>
                            <th style={{ width: 50 }}>Due</th>
                            <th style={{ width: 300 }}>User</th>
                            <th>Description</th>
                            <th className="text-center" style={{ width: 20 }}>
                              <i className="ph-dots-three" />
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="table-light">
                            <td colSpan={3}>Active tickets</td>
                            <td className="text-end">
                              <span className="badge bg-primary rounded-pill">
                                24
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <h6 className="mb-0">12</h6>
                              <div className="fs-sm text-muted lh-1">hours</div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <a
                                  href="#"
                                  className="d-inline-flex align-items-center justify-content-center bg-teal text-white lh-1 rounded-pill w-40px h-40px me-3"
                                >
                                  <span className="letter-icon" />
                                </a>
                                <div>
                                  <a
                                    href="#"
                                    className="text-body fw-semibold letter-icon-title"
                                  >
                                    Annabelle Doney
                                  </a>
                                  <div className="d-flex align-items-center text-muted fs-sm">
                                    <span className="bg-danger rounded-pill p-1 me-2" />
                                    Blocker
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-body">
                                <div className="fw-semibold">
                                  [#1183] Workaround for OS X selects printing bug
                                </div>
                                <span className="text-muted">
                                  Chrome fixed the bug several versions ago, thus
                                  rendering this...
                                </span>
                              </a>
                            </td>
                            <td className="text-center">
                              <div className="dropdown">
                                <a
                                  href="#"
                                  className="text-body"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="ph-list" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-arrow-bend-up-left me-2" />
                                    Quick reply
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-clock-counter-clockwise me-2" />
                                    Full history
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-checks text-success me-2" />
                                    Resolve issue
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-x text-danger me-2" />
                                    Close issue
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <h6 className="mb-0">16</h6>
                              <div className="fs-sm text-muted lh-1">hours</div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <a href="#" className="d-inline-block me-3">
                                  <img
                                    src="assets/images/demo/users/face15.jpg"
                                    className="rounded-circle"
                                    width={40}
                                    height={40}
                                    alt=""
                                  />
                                </a>
                                <div>
                                  <a href="#" className="text-body fw-semibold">
                                    Chris Macintyre
                                  </a>
                                  <div className="d-flex align-items-center text-muted fs-sm">
                                    <span className="bg-primary rounded-pill p-1 me-2" />
                                    Medium
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-body">
                                <div className="fw-semibold">
                                  [#1249] Vertically center carousel controls
                                </div>
                                <span className="text-muted">
                                  Try any carousel control and reduce the screen
                                  width below...
                                </span>
                              </a>
                            </td>
                            <td className="text-center">
                              <div className="dropdown">
                                <a
                                  href="#"
                                  className="text-body"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="ph-list" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-arrow-bend-up-left me-2" />
                                    Quick reply
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-clock-counter-clockwise me-2" />
                                    Full history
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-checks text-success me-2" />
                                    Resolve issue
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-x text-danger me-2" />
                                    Close issue
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <h6 className="mb-0">20</h6>
                              <div className="fs-sm text-muted lh-1">hours</div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <a
                                  href="#"
                                  className="d-inline-flex align-items-center justify-content-center bg-primary text-white lh-1 rounded-pill w-40px h-40px me-3"
                                >
                                  <span className="letter-icon" />
                                </a>
                                <div>
                                  <a
                                    href="#"
                                    className="text-body fw-semibold letter-icon-title"
                                  >
                                    Robert Hauber
                                  </a>
                                  <div className="d-flex align-items-center text-muted fs-sm">
                                    <span className="bg-primary rounded-pill p-1 me-2" />
                                    Medium
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-body">
                                <div className="fw-semibold">
                                  [#1254] Inaccurate small pagination height
                                </div>
                                <span className="text-muted">
                                  The height of pagination elements is not
                                  consistent with...
                                </span>
                              </a>
                            </td>
                            <td className="text-center">
                              <div className="dropdown">
                                <a
                                  href="#"
                                  className="text-body"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="ph-list" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-arrow-bend-up-left me-2" />
                                    Quick reply
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-clock-counter-clockwise me-2" />
                                    Full history
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-checks text-success me-2" />
                                    Resolve issue
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-x text-danger me-2" />
                                    Close issue
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <h6 className="mb-0">40</h6>
                              <div className="fs-sm text-muted lh-1">hours</div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <a
                                  href="#"
                                  className="d-inline-flex align-items-center justify-content-center bg-warning text-white lh-1 rounded-pill w-40px h-40px me-3"
                                >
                                  <span className="letter-icon" />
                                </a>
                                <div>
                                  <a
                                    href="#"
                                    className="text-body fw-semibold letter-icon-title"
                                  >
                                    Robert Hauber
                                  </a>
                                  <div className="d-flex align-items-center text-muted fs-sm">
                                    <span className="bg-warning rounded-pill p-1 me-2" />
                                    High
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-body">
                                <div className="fw-semibold">
                                  [#1184] Round grid column gutter operations
                                </div>
                                <span className="text-muted">
                                  Left rounds up, right rounds down. should keep
                                  everything...
                                </span>
                              </a>
                            </td>
                            <td className="text-center">
                              <div className="dropdown">
                                <a
                                  href="#"
                                  className="text-body"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="ph-list" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-arrow-bend-up-left me-2" />
                                    Quick reply
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-clock-counter-clockwise me-2" />
                                    Full history
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-checks text-success me-2" />
                                    Resolve issue
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-x text-danger me-2" />
                                    Close issue
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="table-light">
                            <td colSpan={3}>Resolved tickets</td>
                            <td className="text-end">
                              <span className="badge bg-success rounded-pill">
                                42
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <i className="ph-check text-success" />
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <a
                                  href="#"
                                  className="d-inline-flex align-items-center justify-content-center bg-success text-white lh-1 rounded-pill w-40px h-40px me-3"
                                >
                                  <span className="letter-icon" />
                                </a>
                                <div>
                                  <a
                                    href="#"
                                    className="text-body fw-semibold letter-icon-title"
                                  >
                                    Alan Macedo
                                  </a>
                                  <div className="d-flex align-items-center text-muted fs-sm">
                                    <span className="bg-danger rounded-pill p-1 me-2" />
                                    Blocker
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-body">
                                <div>
                                  [#1046] Avoid some unnecessary HTML string
                                </div>
                                <span className="text-muted">
                                  Rather than building a string of HTML and then
                                  parsing it...
                                </span>
                              </a>
                            </td>
                            <td className="text-center">
                              <div className="dropdown">
                                <a
                                  href="#"
                                  className="text-body"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="ph-list" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-arrow-bend-up-left me-2" />
                                    Quick reply
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-clock-counter-clockwise me-2" />
                                    Full history
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-checks text-success me-2" />
                                    Resolve issue
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-x text-danger me-2" />
                                    Close issue
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <i className="ph-check text-success" />
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <a
                                  href="#"
                                  className="d-inline-flex align-items-center justify-content-center bg-pink text-white lh-1 rounded-pill w-40px h-40px me-3"
                                >
                                  <span className="letter-icon" />
                                </a>
                                <div>
                                  <a
                                    href="#"
                                    className="text-body fw-semibold letter-icon-title"
                                  >
                                    Brett Castellano
                                  </a>
                                  <div className="d-flex align-items-center text-muted fs-sm">
                                    <span className="bg-success rounded-pill p-1 me-2" />
                                    Low
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-body">
                                <div>[#1038] Update json configuration</div>
                                <span className="text-muted">
                                  The <code>files</code> property is necessary to
                                  override the files property...
                                </span>
                              </a>
                            </td>
                            <td className="text-center">
                              <div className="dropdown">
                                <a
                                  href="#"
                                  className="text-body"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="ph-list" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-arrow-bend-up-left me-2" />
                                    Quick reply
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-clock-counter-clockwise me-2" />
                                    Full history
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-checks text-success me-2" />
                                    Resolve issue
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-x text-danger me-2" />
                                    Close issue
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <i className="ph-check text-success" />
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <a href="#" className="d-inline-block me-3">
                                  <img
                                    src="assets/images/demo/users/face3.jpg"
                                    className="rounded-circle"
                                    width={40}
                                    height={40}
                                    alt=""
                                  />
                                </a>
                                <div>
                                  <a href="#" className="text-body fw-semibold">
                                    Roxanne Forbes
                                  </a>
                                  <div className="d-flex align-items-center text-muted fs-sm">
                                    <span className="bg-success rounded-pill p-1 me-2" />
                                    Low
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-body">
                                <div>[#1034] Tooltip multiple event</div>
                                <span className="text-muted">
                                  Fix behavior when using tooltips and popovers that
                                  are...
                                </span>
                              </a>
                            </td>
                            <td className="text-center">
                              <div className="dropdown">
                                <a
                                  href="#"
                                  className="text-body"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="ph-list" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-arrow-bend-up-left me-2" />
                                    Quick reply
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-clock-counter-clockwise me-2" />
                                    Full history
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-checks text-success me-2" />
                                    Resolve issue
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-x text-danger me-2" />
                                    Close issue
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="table-light">
                            <td colSpan={3}>Closed tickets</td>
                            <td className="text-end">
                              <span className="badge bg-danger rounded-pill">
                                37
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <i className="ph-checks text-danger" />
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <a href="#" className="d-inline-block me-3">
                                  <img
                                    src="assets/images/demo/users/face8.jpg"
                                    className="rounded-circle"
                                    width={40}
                                    height={40}
                                    alt=""
                                  />
                                </a>
                                <div>
                                  <a href="#" className="text-body fw-semibold">
                                    Mitchell Sitkin
                                  </a>
                                  <div className="d-flex align-items-center text-muted fs-sm">
                                    <span className="bg-warning rounded-pill p-1 me-2" />
                                    High
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-body">
                                <div>
                                  [#1040] Account for static form controls in form
                                  group
                                </div>
                                <span className="text-muted">
                                  Resizes control labels font-size and account for
                                  the standard...
                                </span>
                              </a>
                            </td>
                            <td className="text-center">
                              <div className="dropdown">
                                <a
                                  href="#"
                                  className="text-body"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="ph-list" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-arrow-bend-up-left me-2" />
                                    Quick reply
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-clock-counter-clockwise me-2" />
                                    Full history
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-checks text-success me-2" />
                                    Resolve issue
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-x text-danger me-2" />
                                    Close issue
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <i className="ph-checks text-danger" />
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <a
                                  href="#"
                                  className="d-inline-flex align-items-center justify-content-center bg-indigo text-white lh-1 rounded-pill w-40px h-40px me-3"
                                >
                                  <span className="letter-icon" />
                                </a>
                                <div>
                                  <a
                                    href="#"
                                    className="text-body fw-semibold letter-icon-title"
                                  >
                                    Katleen Jensen
                                  </a>
                                  <div className="d-flex align-items-center text-muted fs-sm">
                                    <span className="bg-primary rounded-pill p-1 me-2" />
                                    Medium
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-body">
                                <div>
                                  [#1038] Proper sizing of form control feedback
                                </div>
                                <span className="text-muted">
                                  Feedback icon sizing inside a larger/smaller
                                  form-group...
                                </span>
                              </a>
                            </td>
                            <td className="text-center">
                              <div className="dropdown">
                                <a
                                  href="#"
                                  className="text-body"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="ph-list" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-arrow-bend-up-left me-2" />
                                    Quick reply
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-clock-counter-clockwise me-2" />
                                    Full history
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-checks text-success me-2" />
                                    Resolve issue
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    <i className="ph-x text-danger me-2" />
                                    Close issue
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* /support tickets */}
                  {/* Latest posts */}
                  <div className="card">
                    <div className="card-header">
                      <h5 className="mb-0">Latest posts</h5>
                    </div>
                    <div className="card-body pb-0">
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="d-sm-flex align-items-sm-start mb-3">
                            <a
                              href="#"
                              className="d-inline-block position-relative me-sm-3 mb-3 mb-sm-0"
                            >
                              <img
                                src="assets/images/demo/flat/1.png"
                                className="flex-shrink-0 rounded"
                                height={100}
                                alt=""
                              />
                              <div className="d-inline-flex bg-dark bg-opacity-50 text-white position-absolute start-50 top-50 translate-middle rounded-pill p-2">
                                <i className="ph-play" />
                              </div>
                              <span className="bg-dark bg-opacity-50 text-white fs-xs lh-1 rounded-1 position-absolute bottom-0 start-0 p-1 ms-2 mb-2">
                                12:25
                              </span>
                            </a>
                            <div className="flex-fill">
                              <h6 className="mb-1">
                                <a href="#">Up unpacked friendly</a>
                              </h6>
                              <ul className="list-inline list-inline-bullet text-muted mb-2">
                                <li className="list-inline-item">
                                  <a href="#" className="text-body">
                                    Video tutorials
                                  </a>
                                </li>
                              </ul>
                              The him father parish looked has sooner. Attachment
                              frequently terminated son hello...
                            </div>
                          </div>
                          <div className="d-sm-flex align-items-sm-start mb-3">
                            <a
                              href="#"
                              className="d-inline-block position-relative me-sm-3 mb-3 mb-sm-0"
                            >
                              <img
                                src="assets/images/demo/flat/21.png"
                                className="flex-shrink-0 rounded"
                                height={100}
                                alt=""
                              />
                              <div className="d-inline-flex bg-dark bg-opacity-50 text-white position-absolute start-50 top-50 translate-middle rounded-pill p-2">
                                <i className="ph-play" />
                              </div>
                              <span className="bg-dark bg-opacity-50 text-white fs-xs lh-1 rounded-1 position-absolute bottom-0 start-0 p-1 ms-2 mb-2">
                                47:25
                              </span>
                            </a>
                            <div className="flex-fill">
                              <h6 className="mb-1">
                                <a href="#">It allowance prevailed</a>
                              </h6>
                              <ul className="list-inline list-inline-bullet text-muted mb-2">
                                <li className="list-inline-item">
                                  <a href="#" className="text-body">
                                    Video tutorials
                                  </a>
                                </li>
                              </ul>
                              Alteration literature to or an sympathize mr
                              imprudence. Of is ferrars subject enjoyed...
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="d-sm-flex align-items-sm-start mb-3">
                            <a
                              href="#"
                              className="d-inline-block position-relative me-sm-3 mb-3 mb-sm-0"
                            >
                              <img
                                src="assets/images/demo/flat/12.png"
                                className="flex-shrink-0 rounded"
                                height={100}
                                alt=""
                              />
                              <div className="d-inline-flex bg-dark bg-opacity-50 text-white position-absolute start-50 top-50 translate-middle rounded-pill p-2">
                                <i className="ph-play" />
                              </div>
                              <span className="bg-dark bg-opacity-50 text-white fs-xs lh-1 rounded-1 position-absolute bottom-0 start-0 p-1 ms-2 mb-2">
                                48:40
                              </span>
                            </a>
                            <div className="flex-fill">
                              <h6 className="mb-1">
                                <a href="#">Case read they must</a>
                              </h6>
                              <ul className="list-inline list-inline-bullet text-muted mb-2">
                                <li className="list-inline-item">
                                  <a href="#" className="text-body">
                                    Video tutorials
                                  </a>
                                </li>
                              </ul>
                              On it differed repeated wandered required in. Then
                              girl neat why yet knew rose spot...
                            </div>
                          </div>
                          <div className="d-sm-flex align-items-sm-start mb-3">
                            <a
                              href="#"
                              className="d-inline-block position-relative me-sm-3 mb-3 mb-sm-0"
                            >
                              <img
                                src="assets/images/demo/flat/18.png"
                                className="flex-shrink-0 rounded"
                                height={100}
                                alt=""
                              />
                              <div className="d-inline-flex bg-dark bg-opacity-50 text-white position-absolute start-50 top-50 translate-middle rounded-pill p-2">
                                <i className="ph-play" />
                              </div>
                              <span className="bg-dark bg-opacity-50 text-white fs-xs lh-1 rounded-1 position-absolute bottom-0 start-0 p-1 ms-2 mb-2">
                                22:14
                              </span>
                            </a>
                            <div className="flex-fill">
                              <h6 className="mb-1">
                                <a href="#">Consider now provided</a>
                              </h6>
                              <ul className="list-inline list-inline-bullet text-muted mb-2">
                                <li className="list-inline-item">
                                  <a href="#" className="text-body">
                                    Video tutorials
                                  </a>
                                </li>
                              </ul>
                              Marianne or husbands if at stronger ye. Considered is
                              as middletons uncommonly...
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /latest posts */}
                </div>
                <div className="col-xl-4">
                  {/* Progress counters */}
                  <div className="row">
                    <div className="col-sm-6">
                      {/* Available hours */}
                      <div className="card text-center">
                        <div className="card-body">
                          {/* Progress counter */}
                          <div
                            className="svg-center"
                            id="hours-available-progress"
                          />
                          {/* /progress counter */}
                          {/* Bars */}
                          <div id="hours-available-bars" />
                          {/* /bars */}
                        </div>
                      </div>
                      {/* /available hours */}
                    </div>
                    <div className="col-sm-6">
                      {/* Productivity goal */}
                      <div className="card text-center">
                        <div className="card-body">
                          {/* Progress counter */}
                          <div className="svg-center" id="goal-progress" />
                          {/* /progress counter */}
                          {/* Bars */}
                          <div id="goal-bars" />
                          {/* /bars */}
                        </div>
                      </div>
                      {/* /productivity goal */}
                    </div>
                  </div>
                  {/* /progress counters */}
                  {/* Daily sales */}
                  <div className="card">
                    <div className="card-header d-flex align-items-center">
                      <h5 className="mb-0">Daily sales stats</h5>
                      <div className="d-flex align-items-center ms-auto">
                        <span className="fw-bold text-success">$4,378</span>
                        <div className="dropdown d-inline-flex ms-3">
                          <a
                            href="#"
                            className="text-body d-inline-flex align-items-center dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            <i className="ph-gear" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="#" className="dropdown-item">
                              <i className="ph-arrows-clockwise me-2" />
                              Update data
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="ph-list-dashes me-2" />
                              Detailed log
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="ph-chart-line me-2" />
                              Statistics
                            </a>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                              <i className="ph-eraser me-2" />
                              Clear list
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="chart" id="sales-heatmap" />
                    </div>
                    <div className="table-responsive">
                      <table className="table text-nowrap">
                        <thead>
                          <tr>
                            <th className="w-100">Application</th>
                            <th>Time</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <a href="#" className="d-inline-block me-3">
                                  <img
                                    src="assets/images/demo/logos/1.svg"
                                    alt=""
                                    height={36}
                                  />
                                </a>
                                <div>
                                  <a
                                    href="#"
                                    className="text-body fw-semibold letter-icon-title"
                                  >
                                    Sigma application
                                  </a>
                                  <div className="text-muted fs-sm">New order</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="text-muted">06:28 pm</span>
                            </td>
                            <td>
                              <strong>$49.90</strong>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <a href="#" className="d-inline-block me-3">
                                  <img
                                    src="assets/images/demo/logos/2.svg"
                                    alt=""
                                    height={36}
                                  />
                                </a>
                                <div>
                                  <a
                                    href="#"
                                    className="text-body fw-semibold letter-icon-title"
                                  >
                                    Alpha application
                                  </a>
                                  <div className="text-muted fs-sm">Renewal</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="text-muted">04:52 pm</span>
                            </td>
                            <td>
                              <strong>$90.50</strong>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <a href="#" className="d-inline-block me-3">
                                  <img
                                    src="assets/images/demo/logos/3.svg"
                                    alt=""
                                    height={36}
                                  />
                                </a>
                                <div>
                                  <a
                                    href="#"
                                    className="text-body fw-semibold letter-icon-title"
                                  >
                                    Delta application
                                  </a>
                                  <div className="text-muted fs-sm">Support</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="text-muted">01:26 pm</span>
                            </td>
                            <td>
                              <strong>$60.00</strong>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <a href="#" className="d-inline-block me-3">
                                  <img
                                    src="assets/images/demo/logos/4.svg"
                                    alt=""
                                    height={36}
                                  />
                                </a>
                                <div>
                                  <a
                                    href="#"
                                    className="text-body fw-semibold letter-icon-title"
                                  >
                                    Omega application
                                  </a>
                                  <div className="text-muted fs-sm">Support</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="text-muted">11:46 am</span>
                            </td>
                            <td>
                              <strong>$55.00</strong>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <a href="#" className="d-inline-block me-3">
                                  <img
                                    src="assets/images/demo/logos/2.svg"
                                    alt=""
                                    height={36}
                                  />
                                </a>
                                <div>
                                  <a
                                    href="#"
                                    className="text-body fw-semibold letter-icon-title"
                                  >
                                    Alpha application
                                  </a>
                                  <div className="text-muted fs-sm">Renewal</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="text-muted">10:29 am</span>
                            </td>
                            <td>
                              <strong>$90.50</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* /daily sales */}
                  {/* My messages */}
                  <div className="card">
                    <div className="card-header d-flex align-items-center">
                      <h5 className="mb-0">My messages</h5>
                      <div className="ms-auto">
                        <span>
                          <i className="ph-clock-counter-clockwise me-1" /> Jul 7,
                          10:30
                        </span>
                        <span className="badge bg-success ms-3">Online</span>
                      </div>
                    </div>
                    {/* Numbers */}
                    <div className="card-body pb-0">
                      <div className="row text-center">
                        <div className="col-4">
                          <div className="mb-3">
                            <h5 className="mb-0">2,345</h5>
                            <span className="text-muted fs-sm">this week</span>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="mb-3">
                            <h5 className="mb-0">3,568</h5>
                            <span className="text-muted fs-sm">this month</span>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="mb-3">
                            <h5 className="mb-0">32,693</h5>
                            <span className="text-muted fs-sm">all messages</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /numbers */}
                    {/* Area chart */}
                    <div id="messages-stats" />
                    {/* /area chart */}
                    {/* Tabs */}
                    <ul className="nav nav-tabs nav-tabs-underline nav-justified">
                      <li className="nav-item">
                        <a
                          href="#messages-tue"
                          className="nav-link active"
                          data-bs-toggle="tab"
                        >
                          Tuesday
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#messages-mon"
                          className="nav-link"
                          data-bs-toggle="tab"
                        >
                          Monday
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#messages-fri"
                          className="nav-link"
                          data-bs-toggle="tab"
                        >
                          Friday
                        </a>
                      </li>
                    </ul>
                    {/* /tabs */}
                    {/* Tabs content */}
                    <div className="tab-content card-body">
                      <div className="tab-pane active fade show" id="messages-tue">
                        <div className="d-flex align-items-start mb-3">
                          <div className="status-indicator-container me-3">
                            <img
                              src="assets/images/demo/users/face10.jpg"
                              className="rounded-circle"
                              width={40}
                              height={40}
                              alt=""
                            />
                            <span className="status-indicator bg-success" />
                            <span className="badge bg-yellow text-black position-absolute top-0 start-100 translate-middle rounded-pill">
                              5
                            </span>
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="fw-semibold">
                                <a href="#">James Alexander</a>
                              </div>
                              <span className="fs-sm text-muted">14:58</span>
                            </div>
                            Who knows, maybe that would be the best thing for me...
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-3">
                          <div className="status-indicator-container me-3">
                            <img
                              src="assets/images/demo/users/face3.jpg"
                              className="rounded-circle"
                              width={40}
                              height={40}
                              alt=""
                            />
                            <span className="status-indicator bg-danger" />
                            <span className="badge bg-yellow text-black position-absolute top-0 start-100 translate-middle rounded-pill">
                              4
                            </span>
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="fw-semibold">
                                <a href="#">Margo Baker</a>
                              </div>
                              <span className="fs-sm text-muted">12:16</span>
                            </div>
                            That was something he was unable to do because...
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-3">
                          <div className="status-indicator-container me-3">
                            <img
                              src="assets/images/demo/users/face24.jpg"
                              className="rounded-circle"
                              width={40}
                              height={40}
                              alt=""
                            />
                            <span className="status-indicator bg-danger" />
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="fw-semibold">
                                <a href="#">Jeremy Victorino</a>
                              </div>
                              <span className="fs-sm text-muted">22:48</span>
                            </div>
                            But that would be extremely strained and suspicious...
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-3">
                          <div className="status-indicator-container me-3">
                            <img
                              src="assets/images/demo/users/face4.jpg"
                              className="rounded-circle"
                              width={40}
                              height={40}
                              alt=""
                            />
                            <span className="status-indicator bg-danger" />
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="fw-semibold">
                                <a href="#">Beatrix Diaz</a>
                              </div>
                              <span className="fs-sm text-muted">Tue</span>
                            </div>
                            What a strenuous career it is that I have chosen...
                          </div>
                        </div>
                        <div className="d-flex align-items-start">
                          <div className="status-indicator-container me-3">
                            <img
                              src="assets/images/demo/users/face25.jpg"
                              className="rounded-circle"
                              width={40}
                              height={40}
                              alt=""
                            />
                            <span className="status-indicator bg-success" />
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="fw-semibold">
                                <a href="#">Beatrix Diaz</a>
                              </div>
                              <span className="fs-sm text-muted">Tue</span>
                            </div>
                            Amidst roadrunner distantly pompously where...
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="messages-mon">
                        <div className="d-flex align-items-start mb-3">
                          <div className="status-indicator-container me-3">
                            <img
                              src="assets/images/demo/users/face2.jpg"
                              className="rounded-circle"
                              width={40}
                              height={40}
                              alt=""
                            />
                            <span className="status-indicator bg-success" />
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="fw-semibold">
                                <a href="#">Isak Temes</a>
                              </div>
                              <span className="fs-sm text-muted">Tue, 19:58</span>
                            </div>
                            Reasonable palpably rankly expressly grimy...
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-3">
                          <div className="status-indicator-container me-3">
                            <img
                              src="assets/images/demo/users/face7.jpg"
                              className="rounded-circle"
                              width={40}
                              height={40}
                              alt=""
                            />
                            <span className="status-indicator bg-warning" />
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="fw-semibold">
                                <a href="#">Vittorio Cosgrove</a>
                              </div>
                              <span className="fs-sm text-muted">Tue, 16:35</span>
                            </div>
                            Arguably therefore more unexplainable fumed...
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-3">
                          <div className="status-indicator-container me-3">
                            <img
                              src="assets/images/demo/users/face18.jpg"
                              className="rounded-circle"
                              width={40}
                              height={40}
                              alt=""
                            />
                            <span className="status-indicator bg-warning" />
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="fw-semibold">
                                <a href="#">Hilary Talaugon</a>
                              </div>
                              <span className="fs-sm text-muted">Tue, 12:16</span>
                            </div>
                            Nicely unlike porpoise a kookaburra past more...
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-3">
                          <div className="status-indicator-container me-3">
                            <img
                              src="assets/images/demo/users/face14.jpg"
                              className="rounded-circle"
                              width={40}
                              height={40}
                              alt=""
                            />
                            <span className="status-indicator bg-success" />
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="fw-semibold">
                                <a href="#">Bobbie Seber</a>
                              </div>
                              <span className="fs-sm text-muted">Tue, 09:20</span>
                            </div>
                            Before visual vigilantly fortuitous tortoise...
                          </div>
                        </div>
                        <div className="d-flex align-items-start">
                          <div className="status-indicator-container me-3">
                            <img
                              src="assets/images/demo/users/face8.jpg"
                              className="rounded-circle"
                              width={40}
                              height={40}
                              alt=""
                            />
                            <span className="status-indicator bg-success" />
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="fw-semibold">
                                <a href="#">Walther Laws</a>
                              </div>
                              <span className="fs-sm text-muted">Tue, 03:29</span>
                            </div>
                            Far affecting more leered unerringly dishonest...
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="messages-fri">
                        <div className="d-flex align-items-start mb-3">
                          <div className="status-indicator-container me-3">
                            <img
                              src="assets/images/demo/users/face15.jpg"
                              className="rounded-circle"
                              width={40}
                              height={40}
                              alt=""
                            />
                            <span className="status-indicator bg-danger" />
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="fw-semibold">
                                <a href="#">Owen Stretch</a>
                              </div>
                              <span className="fs-sm text-muted">Fri, 18:12</span>
                            </div>
                            Tardy rattlesnake seal raptly earthworm...
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-3">
                          <div className="status-indicator-container me-3">
                            <img
                              src="assets/images/demo/users/face12.jpg"
                              className="rounded-circle"
                              width={40}
                              height={40}
                              alt=""
                            />
                            <span className="status-indicator bg-warning" />
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="fw-semibold">
                                <a href="#">Jenilee Mcnair</a>
                              </div>
                              <span className="fs-sm text-muted">Fri, 14:03</span>
                            </div>
                            Since hello dear pushed amid darn trite...
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-3">
                          <div className="status-indicator-container me-3">
                            <img
                              src="assets/images/demo/users/face22.jpg"
                              className="rounded-circle"
                              width={40}
                              height={40}
                              alt=""
                            />
                            <span className="status-indicator bg-danger" />
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="fw-semibold">
                                <a href="#">Alaster Jain</a>
                              </div>
                              <span className="fs-sm text-muted">Fri, 13:59</span>
                            </div>
                            Dachshund cardinal dear next jeepers well...
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-3">
                          <div className="status-indicator-container me-3">
                            <img
                              src="assets/images/demo/users/face24.jpg"
                              className="rounded-circle"
                              width={40}
                              height={40}
                              alt=""
                            />
                            <span className="status-indicator bg-secondary" />
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="fw-semibold">
                                <a href="#">Sigfrid Thisted</a>
                              </div>
                              <span className="fs-sm text-muted">Fri, 09:26</span>
                            </div>
                            Lighted wolf yikes less lemur crud grunted...
                          </div>
                        </div>
                        <div className="d-flex align-items-start">
                          <div className="status-indicator-container me-3">
                            <img
                              src="assets/images/demo/users/face17.jpg"
                              className="rounded-circle"
                              width={40}
                              height={40}
                              alt=""
                            />
                            <span className="status-indicator bg-secondary" />
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="fw-semibold">
                                <a href="#">Sherilyn Mckee</a>
                              </div>
                              <span className="fs-sm text-muted">Fri, 06:38</span>
                            </div>
                            Less unicorn a however careless husky...
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /tabs content */}
                  </div>
                  {/* /my messages */}
                  {/* Daily financials */}
                  <div className="card">
                    <div className="card-header d-flex align-items-center">
                      <h5 className="mb-0">Daily financials</h5>
                      <div className="ms-auto">
                        <label className="form-check form-switch form-check-reverse">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="realtime"
                            defaultChecked={false}
                          />
                          <span className="form-check-label">Realtime</span>
                        </label>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="chart mb-3" id="bullets" />
                      <div className="d-flex mb-3">
                        <div className="me-3">
                          <div className="bg-pink bg-opacity-10 text-pink lh-1 rounded-pill p-2">
                            <i className="ph-chart-line" />
                          </div>
                        </div>
                        <div className="flex-fill">
                          Stats for July, 6:{" "}
                          <span className="fw-semibold">1938</span> orders, $4220
                          revenue
                          <div className="text-muted fs-sm">2 hours ago</div>
                        </div>
                      </div>
                      <div className="d-flex mb-3">
                        <div className="me-3">
                          <div className="bg-success bg-opacity-10 text-success lh-1 rounded-pill p-2">
                            <i className="ph-check" />
                          </div>
                        </div>
                        <div className="flex-fill">
                          Invoices <a href="#">#4732</a> and <a href="#">#4734</a>{" "}
                          have been paid
                          <div className="text-muted fs-sm">Dec 18, 18:36</div>
                        </div>
                      </div>
                      <div className="d-flex mb-3">
                        <div className="me-3">
                          <div className="bg-primary bg-opacity-10 text-primary lh-1 rounded-pill p-2">
                            <i className="ph-users" />
                          </div>
                        </div>
                        <div className="flex-fill">
                          Affiliate commission for June has been paid
                          <div className="text-muted fs-sm">36 minutes ago</div>
                        </div>
                      </div>
                      <div className="d-flex mb-3">
                        <div className="me-3">
                          <div className="bg-warning bg-opacity-10 text-warning lh-1 rounded-pill p-2">
                            <i className="ph-arrow-counter-clockwise" />
                          </div>
                        </div>
                        <div className="flex-fill">
                          Order <a href="#">#37745</a> from July, 1st has been
                          refunded
                          <div className="text-muted fs-sm">4 minutes ago</div>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="me-3">
                          <div className="bg-teal bg-opacity-10 text-teal lh-1 rounded-pill p-2">
                            <i className="ph-arrow-bend-double-up-right" />
                          </div>
                        </div>
                        <div className="flex-fill">
                          Invoice <a href="#">#4769</a> has been sent to{" "}
                          <a href="#">Robert Smith</a>
                          <div className="text-muted fs-sm">Dec 12, 05:46</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /daily financials */}
                </div>
              </div>
              {/* /dashboard content */}
            </div>
            {/* /content area */}
            {/* Footer */}
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
          </div>
        </div>
      </div>
      {/* Notifications */}
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="notifications">
        <div className="offcanvas-header py-0">
          <h5 className="offcanvas-title py-3">Activity</h5>
          <button
            type="button"
            className="btn btn-light btn-sm btn-icon border-transparent rounded-pill"
            data-bs-dismiss="offcanvas"
          >
            <i className="ph-x" />
          </button>
        </div>
        <div className="offcanvas-body p-0">
          <div className="bg-light fw-medium py-2 px-3">New notifications</div>
          <div className="p-3">
            <div className="d-flex align-items-start mb-3">
              <a href="#" className="status-indicator-container me-3">
                <img
                  src="assets/images/demo/users/face1.jpg"
                  className="w-40px h-40px rounded-pill"
                  alt=""
                />
                <span className="status-indicator bg-success" />
              </a>
              <div className="flex-fill">
                <a href="#" className="fw-semibold">
                  James
                </a>{" "}
                has completed the task <a href="#">Submit documents</a> from{" "}
                <a href="#">Onboarding</a> list
                <div className="bg-light rounded p-2 my-2">
                  <label className="form-check ms-1">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      defaultChecked={false}
                      disabled={false}
                    />
                    <del className="form-check-label">
                      Submit personal documents
                    </del>
                  </label>
                </div>
                <div className="fs-sm text-muted mt-1">2 hours ago</div>
              </div>
            </div>
            <div className="d-flex align-items-start mb-3">
              <a href="#" className="status-indicator-container me-3">
                <img
                  src="assets/images/demo/users/face3.jpg"
                  className="w-40px h-40px rounded-pill"
                  alt=""
                />
                <span className="status-indicator bg-warning" />
              </a>
              <div className="flex-fill">
                <a href="#" className="fw-semibold">
                  Margo
                </a>{" "}
                has added 4 users to{" "}
                <span className="fw-semibold">Customer enablement</span> channel
                <div className="d-flex my-2">
                  <a href="#" className="status-indicator-container me-1">
                    <img
                      src="assets/images/demo/users/face10.jpg"
                      className="w-32px h-32px rounded-pill"
                      alt=""
                    />
                    <span className="status-indicator bg-danger" />
                  </a>
                  <a href="#" className="status-indicator-container me-1">
                    <img
                      src="assets/images/demo/users/face11.jpg"
                      className="w-32px h-32px rounded-pill"
                      alt=""
                    />
                    <span className="status-indicator bg-success" />
                  </a>
                  <a href="#" className="status-indicator-container me-1">
                    <img
                      src="assets/images/demo/users/face12.jpg"
                      className="w-32px h-32px rounded-pill"
                      alt=""
                    />
                    <span className="status-indicator bg-success" />
                  </a>
                  <a href="#" className="status-indicator-container me-1">
                    <img
                      src="assets/images/demo/users/face13.jpg"
                      className="w-32px h-32px rounded-pill"
                      alt=""
                    />
                    <span className="status-indicator bg-success" />
                  </a>
                  <button
                    type="button"
                    className="btn btn-light btn-icon d-inline-flex align-items-center justify-content-center w-32px h-32px rounded-pill p-0"
                  >
                    <i className="ph-plus ph-sm" />
                  </button>
                </div>
                <div className="fs-sm text-muted mt-1">3 hours ago</div>
              </div>
            </div>
            <div className="d-flex align-items-start">
              <div className="me-3">
                <div className="bg-warning bg-opacity-10 text-warning rounded-pill">
                  <i className="ph-warning p-2" />
                </div>
              </div>
              <div className="flex-1">
                Subscription <a href="#">#466573</a> from 10.12.2021 has been
                cancelled. Refund case <a href="#">#4492</a> created
                <div className="fs-sm text-muted mt-1">4 hours ago</div>
              </div>
            </div>
          </div>
          <div className="bg-light fw-medium py-2 px-3">Older notifications</div>
          <div className="p-3">
            <div className="d-flex align-items-start mb-3">
              <a href="#" className="status-indicator-container me-3">
                <img
                  src="assets/images/demo/users/face25.jpg"
                  className="w-40px h-40px rounded-pill"
                  alt=""
                />
                <span className="status-indicator bg-success" />
              </a>
              <div className="flex-fill">
                <a href="#" className="fw-semibold">
                  Nick
                </a>{" "}
                requested your feedback and approval in support request{" "}
                <a href="#">#458</a>
                <div className="my-2">
                  <a href="#" className="btn btn-success btn-sm me-1">
                    <i className="ph-checks ph-sm me-1" />
                    Approve
                  </a>
                  <a href="#" className="btn btn-light btn-sm">
                    Review
                  </a>
                </div>
                <div className="fs-sm text-muted mt-1">3 days ago</div>
              </div>
            </div>
            <div className="d-flex align-items-start mb-3">
              <a href="#" className="status-indicator-container me-3">
                <img
                  src="assets/images/demo/users/face24.jpg"
                  className="w-40px h-40px rounded-pill"
                  alt=""
                />
                <span className="status-indicator bg-grey" />
              </a>
              <div className="flex-fill">
                <a href="#" className="fw-semibold">
                  Mike
                </a>{" "}
                added 1 new file(s) to <a href="#">Product management</a> project
                <div className="bg-light rounded p-2 my-2">
                  <div className="d-flex align-items-center">
                    <div className="me-2">
                      <img
                        src="assets/images/icons/pdf.svg"
                        width={34}
                        height={34}
                        alt=""
                      />
                    </div>
                    <div className="flex-fill">
                      new_contract.pdf
                      <div className="fs-sm text-muted">112KB</div>
                    </div>
                    <div className="ms-2">
                      <button
                        type="button"
                        className="btn btn-flat-dark text-body btn-icon btn-sm border-transparent rounded-pill"
                      >
                        <i className="ph-arrow-down" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="fs-sm text-muted mt-1">1 day ago</div>
              </div>
            </div>
            <div className="d-flex align-items-start mb-3">
              <div className="me-3">
                <div className="bg-success bg-opacity-10 text-success rounded-pill">
                  <i className="ph-calendar-plus p-2" />
                </div>
              </div>
              <div className="flex-fill">
                All hands meeting will take place coming Thursday at 13:45.
                <div className="my-2">
                  <a href="#" className="btn btn-primary btn-sm">
                    <i className="ph-calendar-plus ph-sm me-1" />
                    Add to calendar
                  </a>
                </div>
                <div className="fs-sm text-muted mt-1">2 days ago</div>
              </div>
            </div>
            <div className="d-flex align-items-start mb-3">
              <a href="#" className="status-indicator-container me-3">
                <img
                  src="assets/images/demo/users/face4.jpg"
                  className="w-40px h-40px rounded-pill"
                  alt=""
                />
                <span className="status-indicator bg-danger" />
              </a>
              <div className="flex-fill">
                <a href="#" className="fw-semibold">
                  Christine
                </a>{" "}
                commented on your community <a href="#">post</a> from 10.12.2021
                <div className="fs-sm text-muted mt-1">2 days ago</div>
              </div>
            </div>
            <div className="d-flex align-items-start mb-3">
              <div className="me-3">
                <div className="bg-primary bg-opacity-10 text-primary rounded-pill">
                  <i className="ph-users-four p-2" />
                </div>
              </div>
              <div className="flex-fill">
                <span className="fw-semibold">HR department</span> requested you to
                complete internal survey by Friday
                <div className="fs-sm text-muted mt-1">3 days ago</div>
              </div>
            </div>
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
