/* eslint-disable @next/next/no-img-element */
import React from "react";

export const SidebarNotification = () => {
  return (
    <>
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
  )
}