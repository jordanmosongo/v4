import React from 'react';

export const SidebarContent = () => {
  return (
    <>
      <div className="sidebar-section">
        <ul className="nav nav-sidebar" data-nav-type="accordion">
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
        </ul>
      </div>
    </>
  )
}