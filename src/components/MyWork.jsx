import React, { Fragment } from 'react'
import { GrPrevious, GrNext } from 'react-icons/gr';
import { BsLaptop } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import shot from '../../src/Assets/Images/Screenshot (38).png'
import shot1 from '../../src/Assets/Images/Screenshot (8).png'
import shot2 from '../../src/Assets/Images/Screenshot (9).png'
import screen from '../../src/Assets/Images/Screenshot (13).png'
import screen1 from '../../src/Assets/Images/Screenshot (14).png'
import screen2 from '../../src/Assets/Images/Screenshot (15).png'
import port from '../../src/Assets/Images/Screenshot (16).png'
import port1 from '../../src/Assets/Images/Screenshot (17).png'
import port2 from '../../src/Assets/Images/Screenshot (18).png'
function MyWork() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2">Something I've Built</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls1" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src={shot} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src={shot1} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src={shot2} className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                            <h5 className="ff-jose my-1">E-commerce Website</h5>
                            <div className="row d-flex justify-content-center">
                                {/* <a href="https://weather-yg.herokuapp.com/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><BsLaptop/> Watch Live</a> */}
                                <a href="https://github.com/MohanRam1703/E-com" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub/> Source Code</a>
                            </div>

                    </div>
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls2" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src={screen} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src={screen1} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src={screen2} className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div>
                            <h5 className="ff-jose my-1">Js Bank Project</h5>
                            <div className="row d-flex justify-content-center">
                                {/* <a href="https://moviehunt-react.herokuapp.com/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><BsLaptop/> Watch Live</a> */}
                                <a href="https://github.com/MohanRam1703/js-bank-project" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub/> Source Code</a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls3" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src={port} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src={port1} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src={port2} className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                            <h5 className="ff-jose my-1">Simple Portfolio</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/MohanRam1703/simple-portfolio" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub/> Source Code</a>
                            </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </Fragment>
  )
}

export default MyWork