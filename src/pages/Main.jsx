import React from 'react';
import Startup2 from '../assets/startup2.png'
import Startup3 from '../assets/investing.png'
import Startup4 from '../assets/startup3.png'
import Startup5 from '../assets/mentoring.png'
import Startup6 from '../assets/findinvestor.png'
import Startup7 from '../assets/startup4.png'
import Startup8 from '../assets/acceleration.svg'
import Startup9 from '../assets/events.png'
import Startup10 from '../assets/special.png'
import Billz from '../assets/Billz.png'
import OA from '../assets/OA.jpg'
import Tass from '../assets/tass.png'
import Royal from '../assets/Royal.png'
import Smart from '../assets/Smart.png'
import Arzon from '../assets/arzon.png'
import anvar from '../assets/anvar.png'
import amir from '../assets/amir.png'
import ulug from '../assets/ulug.png'
import dilshod from '../assets/dilshod.png'
import farrux from '../assets/farrux.png'
import qodir from '../assets/qodir.png'
import { Link } from 'react-router-dom';


function Main() {
      return (
            <div className='main'>
                  <section className='head'>
                        <h1 className='head-title'>Attract foreign investors <br /> for your Startup project</h1>
                        <p className="head-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Quasi ipsam fuga natus ad in aliquid iste quam quaerat dicta at!</p>
                        <button className="btn rounded-5">Start now!</button>
                  </section>
                  <section className="stats">
                        <div className="stats-top d-flex align-items-start">
                              <div className="top-left">
                                    <h1 className='text-light fw-bolder m-0 text-center'>Service <br /> Performance</h1>
                              </div>
                              <div className="top-right">
                                    <p className="text-light m-0 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quo, rem <br /> unde ipsam adipisci ab doloremque ipsa et vitae, inventore ex natus quia iste? <br /> unde ipsam adipisci ab doloremque ipsa et vitae, inventore ex natus quia iste? Repellat.</p>
                              </div>
                        </div>
                        <div className="stats-bottom d-flex align-items-center justify-content-around w-100 ps-5 pe-5">
                              <div className="stat">
                                    <h1 className='text-light'>300</h1>
                                    <p className='text-light'>STARTUPS</p>
                              </div>
                              <div className="stat">
                                    <h1 className='text-light'>180</h1>
                                    <p className='text-light'>INVESTORS</p>
                              </div>
                              <div className="stat">
                                    <h1 className='text-light'>130</h1>
                                    <p className='text-light'>PARTNERS</p>
                              </div>
                        </div>
                  </section>
                  <section className="investors">
                        <h1 className='investors-title'>Opportunities for Investors</h1>
                        <div className="cards d-flex align-items-center justify-content-center gap-5 p-0">
                              <div className="card shadow aa">
                                    <div className="card-image">
                                          <img src={Startup2} alt="" />
                                    </div>
                                    <div className="card-title">
                                          <h3>Interesting startups</h3>
                                    </div>
                                    <div className="card-desc">
                                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eligendi alias eos vitae accusamus earum!</p>
                                    </div>
                              </div>
                              <div className="card shadow bg-darkgreen">
                                    <div className="card-image">
                                          <img src={Startup3} alt="" />
                                    </div>
                                    <div className="card-title">
                                          <h3>Quick Investment</h3>
                                    </div>
                                    <div className="card-desc">
                                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eligendi alias eos vitae accusamus earum!</p>
                                    </div>
                              </div>
                              <div className="card shadow aa">
                                    <div className="card-image">
                                          <img src={Startup4} alt="" />
                                    </div>
                                    <div className="card-title">
                                          <h3>Startups on one platform</h3>
                                    </div>
                                    <div className="card-desc">
                                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eligendi alias eos vitae accusamus earum!</p>
                                    </div>
                              </div>
                        </div>
                  </section>
                  <section className="startaps">
                        <div className="startups-head d-flex align-items-center justify-content-between">
                              <h1>Top Startups</h1>
                              <Link>All startups</Link>
                        </div>
                        <div className="startups-cards d-flex gap-4 flex-wrap">
                              <div className="startups-card shadow d-flex flex-column gap-4">
                                    <div className="card-name d-flex align-items-center gap-3">
                                          <img src={Billz} alt="" />
                                          <h2>Billz</h2>
                                    </div>
                                    <div className="card-desc">
                                          <p className='m-0'>The program for the store, warehouse accounting of goods and trade automation in Tashkent.</p>
                                    </div>
                                    <div className="hashtag">
                                          <p className='m-0'>E-commerce</p>
                                    </div>
                              </div>
                              <div className="startups-card shadow d-flex flex-column gap-4">
                                    <div className="card-name d-flex align-items-center gap-3">
                                          <img src={Tass} alt="" />
                                          <h2>TASS VISSION</h2>
                                    </div>
                                    <div className="card-desc">
                                          <p className='m-0'>This company utilizes AI and cloud tech for computer vision. They create and implement recognition, detection, tracking, and classification t...</p>
                                    </div>
                                    <div className="hashtag">
                                          <p className='m-0'>Govtech</p>
                                    </div>
                              </div>
                              <div className="startups-card shadow d-flex flex-column gap-4">
                                    <div className="card-name d-flex align-items-center gap-3">
                                          <img src={Arzon} alt="" />
                                          <h2>Arzon Apteka</h2>
                                    </div>
                                    <div className="card-desc">
                                          <p className='m-0'>A platform for the search and purchase of medicines in anticipation for consumers.</p>
                                    </div>
                                    <div className="hashtag">
                                          <p className='m-0'>Healthtech</p>
                                    </div>
                              </div>
                              <div className="startups-card shadow d-flex flex-column gap-4">
                                    <div className="card-name d-flex align-items-center gap-3">
                                          <img src={OA} alt="" />
                                          <h2>One App</h2>
                                    </div>
                                    <div className="card-desc">
                                          <p className='m-0'>OneApply is a platform that allows citizens of Uzbekistan to apply for government jobs. The platform was launched in 2023 and has be...</p>
                                    </div>
                                    <div className="hashtags">
                                          <div className="hashtag">
                                                <p className='m-0'>HRtech</p>
                                          </div>
                                          <div className="hashtag2">
                                                <p className='m-0'>
                                                Govtech</p>
                                          </div>

                                    </div>
                              </div>
                              <div className="startups-card shadow d-flex flex-column gap-4">
                                    <div className="card-name d-flex align-items-center gap-3">
                                          <img src={Royal} alt="" />
                                          <h2>Royal Taxi</h2>
                                    </div>
                                    <div className="card-desc">
                                          <p className='m-0'>Royal Taxi is one of the leading taxi companies in Uzbekistan. The company was founded in 2016 and operates in more than 40 cities across t...</p>
                                    </div>
                                    <div className="hashtag">
                                          <p className='m-0'>Logistics</p>
                                    </div>
                              </div>
                              <div className="startups-card shadow d-flex flex-column gap-4">
                                    <div className="card-name d-flex align-items-center gap-3">
                                          <img src={Smart} alt="" />
                                          <h2>Smartup</h2>
                                    </div>
                                    <div className="card-desc">
                                          <p className='m-0'>Smartup is a cloud solution for managing distribution, trade marketing, wholesale and retail trade.</p>
                                    </div>
                                    <div className="hashtag">
                                          <p className='m-0'>Fintech</p>
                                    </div>
                              </div>
                        </div>
                  </section>
                  <section className="startups">
                        <h1 className='investors-title'>Opportunities for Startups</h1>
                        <div className="cards d-flex align-items-center justify-content-center gap-5 p-0">
                              <div className="card shadow aa">
                                    <div className="card-image">
                                          <img src={Startup5} alt="" />
                                    </div>
                                    <div className="card-title">
                                          <h3>Mentorship</h3>
                                    </div>
                                    <div className="card-desc">
                                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eligendi alias eos vitae accusamus earum!</p>
                                    </div>
                              </div>
                              <div className="card shadow bg-darkgreen">
                                    <div className="card-image">
                                          <img src={Startup6} alt="" />
                                    </div>
                                    <div className="card-title">
                                          <h3>Find an investor</h3>
                                    </div>
                                    <div className="card-desc">
                                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eligendi alias eos vitae accusamus earum!</p>
                                    </div>
                              </div>
                              <div className="card shadow aa">
                                    <div className="card-image">
                                          <img src={Startup7} alt="" />
                                    </div>
                                    <div className="card-title">
                                          <h3>The Startup Ecosystem</h3>
                                    </div>
                                    <div className="card-desc">
                                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eligendi alias eos vitae accusamus earum!</p>
                                    </div>
                              </div>
                        </div>
                  </section>
                  <section className="startaps">
                        <div className="startups-head d-flex align-items-center justify-content-between">
                              <h1>Top Investors</h1>
                              <Link>All Investors</Link>
                        </div>
                        <div className="startups-cards d-flex gap-4 flex-wrap">
                              <div className="startups-card shadow d-flex flex-column gap-4">
                                    <div className="card-name d-flex align-items-center gap-3">
                                          <img className='rounded-5' src={anvar} alt="" />
                                          <h2>Anvar Davlatov</h2>
                                    </div>
                                    <div className="card-desc">
                                          <p className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae obcaecati accusamus alias sed provident similique dolor odit minus ipsa. Qui.</p>
                                    </div>
                                    <div className="hashtag">
                                          <p className='m-0'>E-commerce</p>
                                    </div>
                              </div>
                              <div className="startups-card shadow d-flex flex-column gap-4">
                                    <div className="card-name d-flex align-items-center gap-3">
                                          <img className='rounded-5' src={amir} alt="" />
                                          <h2>Amir Davlatov</h2>
                                    </div>
                                    <div className="card-desc">
                                          <p className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consequuntur quidem ipsum incidunt tempore. Debitis facilis commodi nostrum numquam iste!</p>
                                    </div>
                                    <div className="hashtag">
                                          <p className='m-0'>Govtech</p>
                                    </div>
                              </div>
                              <div className="startups-card shadow d-flex flex-column gap-4">
                                    <div className="card-name d-flex align-items-center gap-3">
                                          <img className='rounded-5' src={ulug} alt="" />
                                          <h2>Ulug'bek Davlatov</h2>
                                    </div>
                                    <div className="card-desc">
                                          <p className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure perspiciatis quod dignissimos voluptate in, a magnam unde quo ullam quisquam.</p>
                                    </div>
                                    <div className="hashtag">
                                          <p className='m-0'>Healthtech</p>
                                    </div>
                              </div>
                              <div className="startups-card shadow d-flex flex-column gap-4">
                                    <div className="card-name d-flex align-items-center gap-3">
                                          <img className='rounded-5' src={qodir} alt="" />
                                          <h2>Qodir Davlatov</h2>
                                    </div>
                                    <div className="card-desc">
                                          <p className='m-0'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio commodi ea eveniet aperiam nulla? Labore molestiae nesciunt commodi reiciendis culpa.</p>
                                    </div>
                                    <div className="hashtags">
                                          <div className="hashtag">
                                                <p className='m-0'>HRtech</p>
                                          </div>
                                          <div className="hashtag2">
                                                <p className='m-0'>
                                                Govtech</p>
                                          </div>

                                    </div>
                              </div>
                              <div className="startups-card shadow d-flex flex-column gap-4">
                                    <div className="card-name d-flex align-items-center gap-3">
                                          <img className='rounded-5' src={farrux} alt="" />
                                          <h2>Farrux Davlatov</h2>
                                    </div>
                                    <div className="card-desc">
                                          <p className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequuntur dicta saepe rem obcaecati nisi magnam nesciunt esse quos maxime?</p>
                                    </div>
                                    <div className="hashtag">
                                          <p className='m-0'>Logistics</p>
                                    </div>
                              </div>
                              <div className="startups-card shadow d-flex flex-column gap-4">
                                    <div className="card-name d-flex align-items-center gap-3">
                                          <img className='rounded-5' src={dilshod} alt="" />
                                          <h2>Dilshod Davlatov</h2>
                                    </div>
                                    <div className="card-desc">
                                          <p className='m-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id magnam quam nihil? Voluptatibus cum voluptatem repellendus neque reiciendis assumenda distinctio.</p>
                                    </div>
                                    <div className="hashtag">
                                          <p className='m-0'>Fintech</p>
                                    </div>
                              </div>
                        </div>
                  </section>
                  <section className="partners">

                  </section>
            </div>
      );
}

export default Main;