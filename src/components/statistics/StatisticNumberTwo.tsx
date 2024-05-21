import React from "react";

export const StatisticNumberTwo = () => {
  return (
    <>
        <div className="col-xl-5">
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
                </div>
    </>
  )
}