import React from "react";

export const StatisticNumberOne = () => {
  return (
    <>
      <div className="col-xl-7">
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
         
                </div>
    </>
  )
}