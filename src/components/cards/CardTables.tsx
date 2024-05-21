/* eslint-disable @next/next/no-img-element */
import React from "react";

export const CardTable = () => {
  return (
    <>
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
    </>
  );
}