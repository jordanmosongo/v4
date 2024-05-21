import React from "react";

export const Cardrevenue = () => {
  return (
    <>
     <div className="row">
                    <div className="col-lg-4">
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
                    </div>
                    <div className="col-lg-4">

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
                  
                    </div>
                    <div className="col-lg-4">
           
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
                    </div>
                  </div>
    </>
  )
}