import React from 'react';
import Startup from '../assets/startups.svg'
import Startup2 from '../assets/startup2.png'
import Startup3 from '../assets/investing.png'
import Startup4 from '../assets/startup3.png'
import Startup5 from '../assets/mentoring.png'
import Startup6 from '../assets/findinvestor.png'
import Startup7 from '../assets/startup4.png'
import Startup8 from '../assets/acceleration.svg'
import Startup9 from '../assets/events.png'
import Startup10 from '../assets/special.png'

import { Carousel } from 'antd';

function Main() {
      return (
            <div className='main'>
                  <section className='head'>
                        <div className="head-left">
                              <h1>
                                    O'zbekiston startaplarini <br /> butun jahon investorlariga <br /> taqdim etuvchi platforma !
                              </h1>
                              <button>Boshlash</button>
                        </div>
                        <div className="head-right">
                              <img src={Startup} alt="" />
                        </div>
                  </section>
                  <section className="stats">
                        <div className="stat">
                              <h1>100+</h1>
                              <p>Startaplar</p>
                        </div>
                        <div className="stat">
                              <h1>100+</h1>
                              <p>Investorlar</p>
                        </div>
                        <div className="stat">
                              <h1>100+</h1>
                              <p>Hamkorlar</p>
                        </div>
                  </section>
                  <section className="investors">
                        <h1 className='investors-title'>Investorlar uchun imkoniyatlar</h1>
                        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                              <div class="carousel-inner">
                                    <div class="carousel-item active" data-bs-interval="10000">
                                          <div className="chance bg-lightgray">
                                                <div className="chance-text">
                                                      <h1>Investorlarni qiziqtiruvchi startaplar</h1>
                                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Optio tempore, consectetur, voluptatibus <br /> delectus aperiam, amet nemo velit illo hic nesciunt nisi <br /> quae in minus fuga est laboriosam sunt <br /> ipsa provident!</p>
                                                </div>
                                                <img src={Startup2} alt="" />
                                          </div>
                                    </div>
                                    <div class="carousel-item" data-bs-interval="2000">
                                          <div className="chance bg-lightgray">
                                                <div className="chance-text">
                                                      <h1>Investitsiya</h1>
                                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Optio tempore, consectetur, voluptatibus <br /> delectus aperiam, amet nemo velit illo hic nesciunt nisi <br /> quae in minus fuga est laboriosam sunt <br /> ipsa provident!</p>
                                                </div>
                                                <img src={Startup3} alt="" />
                                          </div>
                                    </div>
                                    <div class="carousel-item">
                                          <div className="chance bg-lightgray">
                                                <div className="chance-text">
                                                      <h1>Hamma startaplar shu platformada</h1>
                                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Optio tempore, consectetur, voluptatibus <br /> delectus aperiam, amet nemo velit illo hic nesciunt nisi <br /> quae in minus fuga est laboriosam sunt <br /> ipsa provident!</p>
                                                </div>
                                                <img src={Startup4} alt="" />
                                          </div>
                                    </div>
                              </div>
                              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                              </button>
                              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                              </button>
                        </div>

                  </section>
                  <section className="startaps">
                        <h1 className='startaps-title'>Startaplar uchun imkoniyatlar</h1>
                        <div id="carouselExampleInterval2" class="carousel slide" data-bs-ride="carousel">
                              <div class="carousel-inner">
                                    <div class="carousel-item active" data-bs-interval="10000">
                                          <div className="chance bg-lightgray">
                                                <div className="chance-text">
                                                      <h1>Mentorlik</h1>
                                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Optio tempore, consectetur, voluptatibus <br /> delectus aperiam, amet nemo velit illo hic nesciunt nisi <br /> quae in minus fuga est laboriosam sunt <br /> ipsa provident!</p>
                                                </div>
                                                <img src={Startup5} alt="" />
                                          </div>
                                    </div>
                                    <div class="carousel-item" data-bs-interval="2000">
                                          <div className="chance bg-lightgray">
                                                <div className="chance-text">
                                                      <h1>Investor toping</h1>
                                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Optio tempore, consectetur, voluptatibus <br /> delectus aperiam, amet nemo velit illo hic nesciunt nisi <br /> quae in minus fuga est laboriosam sunt <br /> ipsa provident!</p>
                                                </div>
                                                <img src={Startup6} alt="" />
                                          </div>
                                    </div>
                                    <div class="carousel-item">
                                          <div className="chance bg-lightgray">
                                                <div className="chance-text">
                                                      <h1>Startap ekotizimi</h1>
                                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Optio tempore, consectetur, voluptatibus <br /> delectus aperiam, amet nemo velit illo hic nesciunt nisi <br /> quae in minus fuga est laboriosam sunt <br /> ipsa provident!</p>
                                                </div>
                                                <img src={Startup7} alt="" />
                                          </div>
                                    </div>
                              </div>
                              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval2" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                              </button>
                              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval2" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                              </button>
                        </div>

                  </section>
                  <section className="partners">
                        <h1 className='startaps-title'>Hamkorlar uchun imkoniyatlar</h1>
                        <div id="carouselExampleInterval3" class="carousel slide" data-bs-ride="carousel">
                              <div class="carousel-inner">
                                    <div class="carousel-item active" data-bs-interval="10000">
                                          <div className="chance bg-lightgray">
                                                <div className="chance-text">
                                                      <h1>Akseleratorlar</h1>
                                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Optio tempore, consectetur, voluptatibus <br /> delectus aperiam, amet nemo velit illo hic nesciunt nisi <br /> quae in minus fuga est laboriosam sunt <br /> ipsa provident!</p>
                                                </div>
                                                <img className='w-250' src={Startup8} alt="" />
                                          </div>
                                    </div>
                                    <div class="carousel-item" data-bs-interval="2000">
                                          <div className="chance bg-lightgray">
                                                <div className="chance-text">
                                                      <h1>Qo'shimcha tadbirlar</h1>
                                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Optio tempore, consectetur, voluptatibus <br /> delectus aperiam, amet nemo velit illo hic nesciunt nisi <br /> quae in minus fuga est laboriosam sunt <br /> ipsa provident!</p>
                                                </div>
                                                <img src={Startup9} alt="" />
                                          </div>
                                    </div>
                                    <div class="carousel-item">
                                          <div className="chance bg-lightgray">
                                                <div className="chance-text">
                                                      <h1>Maxsus takliflar</h1>
                                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Optio tempore, consectetur, voluptatibus <br /> delectus aperiam, amet nemo velit illo hic nesciunt nisi <br /> quae in minus fuga est laboriosam sunt <br /> ipsa provident!</p>
                                                </div>
                                                <img src={Startup10} alt="" />
                                          </div>
                                    </div>
                              </div>
                              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval3" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                              </button>
                              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval3" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                              </button>
                        </div>

                  </section>
            </div>
      );
}

export default Main;