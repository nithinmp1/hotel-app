import React from 'react';
import '../../assets/css/style.css';
import { ReservationStep } from '../../components';
// import TemplateRenderer from './TemplateRenderer';

const Hotel = () => {
  return (
        <section className="section-reservation-page bg-white">

            <div className="container">
                <div className="reservation-page">
                    <ReservationStep />
                    <div className="row">

                        <div className="col-md-4 col-lg-3">
                            
                            <div className="reservation-sidebar">

                                <div className="reservation-room-selected bg-gray">
                                    <h2 className="reservation-heading">Select Rooms</h2>

                                    <div className="reservation-room-seleted_current bg-blue">
                                        <h6>YOU ARE BOOKING ROOM 2</h6>  
                                        <span>2 Adult, 1 Chirld</span>   
                                    </div>

                                    <div className="reservation-room-seleted_item reservation_disable">
                                        <h6>ROOM 2</h6> <span className="reservation-option">2 Adult, 1 Child</span>
                                    </div>

                                </div>
                            
                                <div className="reservation-sidebar_availability bg-gray">

                                    <h2 className="reservation-heading">YOUR RESERVATION</h2>

                                    <h6 className="check_availability_title">your stay dates</h6>
                                        
                                    <div className="check_availability-field">
                                        <label>Arrive</label>
                                        <input type="text" className="awe-calendar awe-input from" placeholder="Arrive" />
                                    </div>
                                    
                                    <div className="check_availability-field">
                                        <label>Depature</label>
                                        <input type="text" className="awe-calendar awe-input to" placeholder="Depature" />
                                    </div>
                                    
                                    <h6 className="check_availability_title">ROOMS &amp; GUest</h6>
                                    
                                    <div className="check_availability-field">
                                        <label>ROOMS</label>
                                        <select className="awe-select">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                        </select>
                                    </div>
                                    
                                    <div className="check_availability_group">
                                    
                                        <span className="label-group">ROOM 1</span>
                                    
                                        <div className="check_availability-field_group">
                                    
                                            <div className="check_availability-field">
                                                <label>Adult</label>
                                                <select className="awe-select">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                </select>
                                            </div>
                                    
                                            <div className="check_availability-field">
                                                <label>Chirld</label>
                                                <select className="awe-select">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                </select>
                                            </div>
                                    
                                        </div>
                                    
                                    </div>

                                    <div className="check_availability_group">
                                    
                                        <span className="label-group">ROOM 2</span>
                                    
                                        <div className="check_availability-field_group">
                                    
                                            <div className="check_availability-field">
                                                <label>Adult</label>
                                                <select className="awe-select">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                </select>
                                            </div>
                                    
                                            <div className="check_availability-field">
                                                <label>Chirld</label>
                                                <select className="awe-select">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                </select>
                                            </div>
                                    
                                        </div>
                                    
                                    </div>

                                    <button className="awe-btn awe-btn-13">CHECK AVAILABLE</button>

                                </div>

                            </div>

                        </div>
                        
                        <div className="col-md-8 col-lg-9">

                            <div className="reservation_content">
                                
                                <div className="reservation-room">

                                    <div className="reservation-room_item">

                                        <h2 className="reservation-room_name"><a href="#">Luxury room</a></h2>

                                        <div className="reservation-room_img">
                                            <a href="#"><img src="images/reservation/img-1.jpg" alt=""/></a>
                                        </div>

                                        <div className="reservation-room_text">

                                            <div className="reservation-room_desc">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ...</p>
                                                <ul>
                                                    <li>1 King Bed</li>
                                                    <li>Free Wi-Fi in all guest rooms</li>
                                                    <li>Separate sitting area</li>
                                                     
                                                </ul>
                                            </div>

                                            <a href="#" className="reservation-room_view-more">View More Infomation</a>

                                            <div className="clear"></div>

                                            <p className="reservation-room_price">
                                                <span className="reservation-room_amout">$260</span> / days
                                            </p>

                                            <a href="#" className="awe-btn awe-btn-default">BOOK ROOM</a>

                                        </div>

                                        <div className="reservation-room_package">

                                            <a data-toggle="collapse" href="#reservation-room_package-1" className="reservation-room_package-more collapsed" >Show more package</a>

                                            <div className="reservation-room_package-content collapse" id="reservation-room_package-1">

                                                <div className="reservation-package_item">

                                                    <div className="reservation-package_img">
                                                        <a href="#"><img src="images/reservation/package/img-1.jpg" alt=""/></a>
                                                    </div>

                                                    <div className="reservation-package_text">

                                                        <h4><a href="#">package standar</a></h4>
                                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

                                                        <div className="reservation-package_book-price">
                                                            <p class="reservation-package_price">
                                                                <span class="amout">$260</span>
                                                            </p>
                                                            <a href="#" class="awe-btn awe-btn-default">Book package</a>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div class="reservation-package_item">

                                                    <div class="reservation-package_img">
                                                        <a href="#"><img src="images/reservation/package/img-1.jpg" alt=""/></a>
                                                    </div>

                                                    <div class="reservation-package_text">

                                                        <h4><a href="#">package standar</a></h4>
                                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

                                                        <div class="reservation-package_book-price">
                                                            <p class="reservation-package_price">
                                                                <span class="amout">$260</span>
                                                            </p>
                                                            <a href="#" class="awe-btn awe-btn-default">Book package</a>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div class="reservation-package_item">

                                                    <div class="reservation-package_img">
                                                        <a href="#"><img src="images/reservation/package/img-1.jpg" alt=""/></a>
                                                    </div>

                                                    <div class="reservation-package_text">

                                                        <h4><a href="#">package standar</a></h4>
                                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

                                                        <div class="reservation-package_book-price">
                                                            <p class="reservation-package_price">
                                                                <span class="amout">$260</span>
                                                            </p>
                                                            <a href="#" class="awe-btn awe-btn-default">Book package</a>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                    <div class="reservation-room_item">

                                        <h2 class="reservation-room_name"><a href="#">COUPLE room</a></h2>

                                        <div class="reservation-room_img">
                                            <a href="#"><img src="images/reservation/img-2.jpg" alt=""/></a>
                                        </div>

                                        <div class="reservation-room_text">

                                            <div class="reservation-room_desc">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ...</p>
                                                <ul>
                                                    <li>1 King Bed</li>
                                                    <li>Free Wi-Fi in all guest rooms</li>
                                                    <li>Separate sitting area</li>
                                                     
                                                </ul>
                                            </div>

                                            <a href="#" class="reservation-room_view-more">View More Infomation</a>

                                            <div class="clear"></div>

                                            <p class="reservation-room_price">
                                                <span class="reservation-room_amout">$260</span> / days
                                            </p>

                                            <a href="#" class="awe-btn awe-btn-default">BOOK ROOM</a>

                                        </div>

                                        <div class="reservation-room_package">

                                            <a data-toggle="collapse" href="#reservation-room_package-2" class="reservation-room_package-more collapsed" >Show more package</a>

                                            <div class="reservation-room_package-content collapse" id="reservation-room_package-2">

                                                <div class="reservation-package_item">

                                                    <div class="reservation-package_img">
                                                        <a href="#"><img src="images/reservation/package/img-1.jpg" alt=""/></a>
                                                    </div>

                                                    <div class="reservation-package_text">

                                                        <h4><a href="#">package standar</a></h4>
                                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

                                                        <div class="reservation-package_book-price">
                                                            <p class="reservation-package_price">
                                                                <span class="amout">$260</span>
                                                            </p>
                                                            <a href="#" class="awe-btn awe-btn-default">Book package</a>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div class="reservation-package_item">

                                                    <div class="reservation-package_img">
                                                        <a href="#"><img src="images/reservation/package/img-1.jpg" alt=""/></a>
                                                    </div>

                                                    <div class="reservation-package_text">

                                                        <h4><a href="#">package standar</a></h4>
                                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

                                                        <div class="reservation-package_book-price">
                                                            <p class="reservation-package_price">
                                                                <span class="amout">$260</span>
                                                            </p>
                                                            <a href="#" class="awe-btn awe-btn-default">Book package</a>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div class="reservation-package_item">

                                                    <div class="reservation-package_img">
                                                        <a href="#"><img src="images/reservation/package/img-1.jpg" alt=""/></a>
                                                    </div>

                                                    <div class="reservation-package_text">

                                                        <h4><a href="#">package standar</a></h4>
                                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

                                                        <div class="reservation-package_book-price">
                                                            <p class="reservation-package_price">
                                                                <span class="amout">$260</span>
                                                            </p>
                                                            <a href="#" class="awe-btn awe-btn-default">Book package</a>
                                                        </div>
                                                        
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                    <div class="reservation-room_item  current-select">

                                        <h2 class="reservation-room_name"><a href="#">STANDARD room</a></h2>

                                        <div class="reservation-room_img">
                                            <a href="#"><img src="images/reservation/img-3.jpg" alt=""/></a>
                                        </div>

                                        <div class="reservation-room_text">

                                            <div class="reservation-room_desc">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ...</p>
                                                <ul>
                                                    <li>1 King Bed</li>
                                                    <li>Free Wi-Fi in all guest rooms</li>
                                                    <li>Separate sitting area</li>
                                                     
                                                </ul>
                                            </div>

                                            <a href="#" class="reservation-room_view-more">View More Infomation</a>

                                            <div class="clear"></div>

                                            <p class="reservation-room_price">
                                                <span class="reservation-room_amout">$260</span> / days
                                            </p>

                                            <a href="#" class="awe-btn awe-btn-default">BOOK ROOM</a>

                                        </div>

                                        <div class="reservation-room_package">

                                            <a data-toggle="collapse" href="#reservation-room_package-3" class="reservation-room_package-more collapsed" >Show more package</a>

                                            <div class="reservation-room_package-content collapse" id="reservation-room_package-3">

                                                <div class="reservation-package_item">

                                                    <div class="reservation-package_img">
                                                        <a href="#"><img src="images/reservation/package/img-1.jpg" alt=""/></a>
                                                    </div>

                                                    <div class="reservation-package_text">

                                                        <h4><a href="#">package standar</a></h4>
                                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

                                                        <div class="reservation-package_book-price">
                                                            <p class="reservation-package_price">
                                                                <span class="amout">$260</span>
                                                            </p>
                                                            <a href="#" class="awe-btn awe-btn-default">Book package</a>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div class="reservation-package_item">

                                                    <div class="reservation-package_img">
                                                        <a href="#"><img src="images/reservation/package/img-1.jpg" alt=""/></a>
                                                    </div>

                                                    <div class="reservation-package_text">

                                                        <h4><a href="#">package standar</a></h4>
                                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

                                                        <div class="reservation-package_book-price">
                                                            <p class="reservation-package_price">
                                                                <span class="amout">$260</span>
                                                            </p>
                                                            <a href="#" class="awe-btn awe-btn-default">Book package</a>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div class="reservation-package_item">

                                                    <div class="reservation-package_img">
                                                        <a href="#"><img src="images/reservation/package/img-1.jpg" alt=""/></a>
                                                    </div>

                                                    <div class="reservation-package_text">

                                                        <h4><a href="#">package standar</a></h4>
                                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

                                                        <div class="reservation-package_book-price">
                                                            <p class="reservation-package_price">
                                                                <span class="amout">$260</span>
                                                            </p>
                                                            <a href="#" class="awe-btn awe-btn-default">Book package</a>
                                                        </div>
                                                        
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                    <div class="reservation-room_item">

                                        <h2 class="reservation-room_name"><a href="#">FAMILY room</a></h2>

                                        <div class="reservation-room_img">
                                            <a href="#"><img src="images/reservation/img-4.jpg" alt=""/></a>
                                        </div>

                                        <div class="reservation-room_text">

                                            <div class="reservation-room_desc">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ...</p>
                                                <ul>
                                                    <li>1 King Bed</li>
                                                    <li>Free Wi-Fi in all guest rooms</li>
                                                    <li>Separate sitting area</li>
                                                     
                                                </ul>
                                            </div>

                                            <a href="#" class="reservation-room_view-more">View More Infomation</a>

                                            <div class="clear"></div>

                                            <p class="reservation-room_price">
                                                <span class="reservation-room_amout">$260</span> / days
                                            </p>

                                            <a href="#" class="awe-btn awe-btn-default">BOOK ROOM</a>

                                        </div>

                                        <div class="reservation-room_package">

                                            <a data-toggle="collapse" href="#reservation-room_package-4" class="reservation-room_package-more collapsed" >Show more package</a>

                                            <div class="reservation-room_package-content collapse" id="reservation-room_package-4">

                                                <div class="reservation-package_item">

                                                    <div class="reservation-package_img">
                                                        <a href="#"><img src="images/reservation/package/img-1.jpg" alt=""/></a>
                                                    </div>

                                                    <div class="reservation-package_text">

                                                        <h4><a href="#">package standar</a></h4>
                                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

                                                        <div class="reservation-package_book-price">
                                                            <p class="reservation-package_price">
                                                                <span class="amout">$260</span>
                                                            </p>
                                                            <a href="#" class="awe-btn awe-btn-default">Book package</a>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div class="reservation-package_item current-select">

                                                    <div class="reservation-package_img">
                                                        <a href="#"><img src="images/reservation/package/img-1.jpg" alt=""/></a>
                                                    </div>

                                                    <div class="reservation-package_text">

                                                        <h4><a href="#">package standar</a></h4>
                                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

                                                        <div class="reservation-package_book-price">
                                                            <p class="reservation-package_price">
                                                                <span class="amout">$260</span>
                                                            </p>
                                                            <a href="#" class="awe-btn awe-btn-default">Book package</a>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div class="reservation-package_item">

                                                    <div class="reservation-package_img">
                                                        <a href="#"><img src="images/reservation/package/img-1.jpg" alt=""/></a>
                                                    </div>

                                                    <div class="reservation-package_text">

                                                        <h4><a href="#">package standar</a></h4>
                                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

                                                        <div class="reservation-package_book-price">
                                                            <p class="reservation-package_price">
                                                                <span class="amout">$260</span>
                                                            </p>
                                                            <a href="#" class="awe-btn awe-btn-default">Book package</a>
                                                        </div>
                                                        
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>

        </section>
  )
}

export default Hotel