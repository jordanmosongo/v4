import React from "react";

export const SidebarHeader = () => {
  return (
    <>
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
    </>
  )
}