/* eslint-disable @next/next/no-img-element */
import React from "react";

export const CardMessages = () => {
  return (
    <>
       <div className="card">
                    <div className="card-header d-flex align-items-center">
                      <h5 className="mb-0">My messages</h5>
                      <div className="ms-auto">
                        <span>
                          <i className="ph-clock-counter-clockwise me-1" /> Jul 7,
                          10:30
                        </span>
                        <span className="badge bg-success ms-3">Online</span>
                      </div>
                    </div>
                    <div className="card-body pb-0">
                      <div className="row text-center">
                        <div className="col-4">
                          <div className="mb-3">
                            <h5 className="mb-0">2,345</h5>
                            <span className="text-muted fs-sm">this week</span>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="mb-3">
                            <h5 className="mb-0">3,568</h5>
                            <span className="text-muted fs-sm">this month</span>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="mb-3">
                            <h5 className="mb-0">32,693</h5>
                            <span className="text-muted fs-sm">all messages</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="messages-stats" />
                    <ul className="nav nav-tabs nav-tabs-underline nav-justified">
                      <li className="nav-item">
                        <a
                          href="#messages-tue"
                          className="nav-link active"
                          data-bs-toggle="tab"
                        >
                          Tuesday
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#messages-mon"
                          className="nav-link"
                          data-bs-toggle="tab"
                        >
                          Monday
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#messages-fri"
                          className="nav-link"
                          data-bs-toggle="tab"
                        >
                          Friday
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content card-body">
                      <div className="tab-pane active fade show" id="messages-tue">
                        <div className="d-flex align-items-start mb-3">
                          <div className="status-indicator-container me-3">
                            <img
                              src="assets/images/demo/users/face10.jpg"
                              className="rounded-circle"
                              width={40}
                              height={40}
                              alt=""
                            />
                            <span className="status-indicator bg-success" />
                            <span className="badge bg-yellow text-black position-absolute top-0 start-100 translate-middle rounded-pill">
                              5
                            </span>
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="fw-semibold">
                                <a href="#">James Alexander</a>
                              </div>
                              <span className="fs-sm text-muted">14:58</span>
                            </div>
                            Who knows, maybe that would be the best thing for me...
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-3">
                          <div className="status-indicator-container me-3">
                            <img
                              src="assets/images/demo/users/face3.jpg"
                              className="rounded-circle"
                              width={40}
                              height={40}
                              alt=""
                            />
                            <span className="status-indicator bg-danger" />
                            <span className="badge bg-yellow text-black position-absolute top-0 start-100 translate-middle rounded-pill">
                              4
                            </span>
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="fw-semibold">
                                <a href="#">Margo Baker</a>
                              </div>
                              <span className="fs-sm text-muted">12:16</span>
                            </div>
                            That was something he was unable to do because...
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-3">
                          <div className="status-indicator-container me-3">
                            <img
                              src="assets/images/demo/users/face24.jpg"
                              className="rounded-circle"
                              width={40}
                              height={40}
                              alt=""
                            />
                            <span className="status-indicator bg-danger" />
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="fw-semibold">
                                <a href="#">Jeremy Victorino</a>
                              </div>
                              <span className="fs-sm text-muted">22:48</span>
                            </div>
                            But that would be extremely strained and suspicious...
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-3">
                          <div className="status-indicator-container me-3">
                            <img
                              src="assets/images/demo/users/face4.jpg"
                              className="rounded-circle"
                              width={40}
                              height={40}
                              alt=""
                            />
                            <span className="status-indicator bg-danger" />
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="fw-semibold">
                                <a href="#">Beatrix Diaz</a>
                              </div>
                              <span className="fs-sm text-muted">Tue</span>
                            </div>
                            What a strenuous career it is that I have chosen...
                          </div>
                        </div>
                        <div className="d-flex align-items-start">
                          <div className="status-indicator-container me-3">
                            <img
                              src="assets/images/demo/users/face25.jpg"
                              className="rounded-circle"
                              width={40}
                              height={40}
                              alt=""
                            />
                            <span className="status-indicator bg-success" />
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="fw-semibold">
                                <a href="#">Beatrix Diaz</a>
                              </div>
                              <span className="fs-sm text-muted">Tue</span>
                            </div>
                            Amidst roadrunner distantly pompously where...
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="messages-mon">
                        <div className="d-flex align-items-start mb-3">
                          <div className="status-indicator-container me-3">
                            <img
                              src="assets/images/demo/users/face2.jpg"
                              className="rounded-circle"
                              width={40}
                              height={40}
                              alt=""
                            />
                            <span className="status-indicator bg-success" />
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="fw-semibold">
                                <a href="#">Isak Temes</a>
                              </div>
                              <span className="fs-sm text-muted">Tue, 19:58</span>
                            </div>
                            Reasonable palpably rankly expressly grimy...
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-3">
                          <div className="status-indicator-container me-3">
                            <img
                              src="assets/images/demo/users/face7.jpg"
                              className="rounded-circle"
                              width={40}
                              height={40}
                              alt=""
                            />
                            <span className="status-indicator bg-warning" />
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="fw-semibold">
                                <a href="#">Vittorio Cosgrove</a>
                              </div>
                              <span className="fs-sm text-muted">Tue, 16:35</span>
                            </div>
                            Arguably therefore more unexplainable fumed...
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-3">
                          <div className="status-indicator-container me-3">
                            <img
                              src="assets/images/demo/users/face18.jpg"
                              className="rounded-circle"
                              width={40}
                              height={40}
                              alt=""
                            />
                            <span className="status-indicator bg-warning" />
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="fw-semibold">
                                <a href="#">Hilary Talaugon</a>
                              </div>
                              <span className="fs-sm text-muted">Tue, 12:16</span>
                            </div>
                            Nicely unlike porpoise a kookaburra past more...
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-3">
                          <div className="status-indicator-container me-3">
                            <img
                              src="assets/images/demo/users/face14.jpg"
                              className="rounded-circle"
                              width={40}
                              height={40}
                              alt=""
                            />
                            <span className="status-indicator bg-success" />
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="fw-semibold">
                                <a href="#">Bobbie Seber</a>
                              </div>
                              <span className="fs-sm text-muted">Tue, 09:20</span>
                            </div>
                            Before visual vigilantly fortuitous tortoise...
                          </div>
                        </div>
                        <div className="d-flex align-items-start">
                          <div className="status-indicator-container me-3">
                            <img
                              src="assets/images/demo/users/face8.jpg"
                              className="rounded-circle"
                              width={40}
                              height={40}
                              alt=""
                            />
                            <span className="status-indicator bg-success" />
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="fw-semibold">
                                <a href="#">Walther Laws</a>
                              </div>
                              <span className="fs-sm text-muted">Tue, 03:29</span>
                            </div>
                            Far affecting more leered unerringly dishonest...
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="messages-fri">
                        <div className="d-flex align-items-start mb-3">
                          <div className="status-indicator-container me-3">
                            <img
                              src="assets/images/demo/users/face15.jpg"
                              className="rounded-circle"
                              width={40}
                              height={40}
                              alt=""
                            />
                            <span className="status-indicator bg-danger" />
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="fw-semibold">
                                <a href="#">Owen Stretch</a>
                              </div>
                              <span className="fs-sm text-muted">Fri, 18:12</span>
                            </div>
                            Tardy rattlesnake seal raptly earthworm...
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-3">
                          <div className="status-indicator-container me-3">
                            <img
                              src="assets/images/demo/users/face12.jpg"
                              className="rounded-circle"
                              width={40}
                              height={40}
                              alt=""
                            />
                            <span className="status-indicator bg-warning" />
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="fw-semibold">
                                <a href="#">Jenilee Mcnair</a>
                              </div>
                              <span className="fs-sm text-muted">Fri, 14:03</span>
                            </div>
                            Since hello dear pushed amid darn trite...
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-3">
                          <div className="status-indicator-container me-3">
                            <img
                              src="assets/images/demo/users/face22.jpg"
                              className="rounded-circle"
                              width={40}
                              height={40}
                              alt=""
                            />
                            <span className="status-indicator bg-danger" />
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="fw-semibold">
                                <a href="#">Alaster Jain</a>
                              </div>
                              <span className="fs-sm text-muted">Fri, 13:59</span>
                            </div>
                            Dachshund cardinal dear next jeepers well...
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-3">
                          <div className="status-indicator-container me-3">
                            <img
                              src="assets/images/demo/users/face24.jpg"
                              className="rounded-circle"
                              width={40}
                              height={40}
                              alt=""
                            />
                            <span className="status-indicator bg-secondary" />
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="fw-semibold">
                                <a href="#">Sigfrid Thisted</a>
                              </div>
                              <span className="fs-sm text-muted">Fri, 09:26</span>
                            </div>
                            Lighted wolf yikes less lemur crud grunted...
                          </div>
                        </div>
                        <div className="d-flex align-items-start">
                          <div className="status-indicator-container me-3">
                            <img
                              src="assets/images/demo/users/face17.jpg"
                              className="rounded-circle"
                              width={40}
                              height={40}
                              alt=""
                            />
                            <span className="status-indicator bg-secondary" />
                          </div>
                          <div className="flex-fill">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="fw-semibold">
                                <a href="#">Sherilyn Mckee</a>
                              </div>
                              <span className="fs-sm text-muted">Fri, 06:38</span>
                            </div>
                            Less unicorn a however careless husky...
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
    </>
  )
}