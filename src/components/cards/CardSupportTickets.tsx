/* eslint-disable @next/next/no-img-element */
import React from "react";

export const CardSupportTickets = () => {
    return (
      <>
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
      </>
    )
}