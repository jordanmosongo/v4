/* eslint-disable @next/next/no-img-element */
import React from "react";

export const CardSales = () => {
  return (
    <>
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
    </>
  );
}