import React from "react";

export const CardFinancialDetail = () => {
  return (
    <>
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
    </>
  )
}