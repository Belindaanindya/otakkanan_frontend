import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    return(
    <div class="datepicker_mobile_full">
        <div id="page">
        
        <header class="header menu_fixed">
            <div id="preloader"><div data-loader="circle-side"></div></div>
            <div id="logo">
                <a href="index.html">
                    <img src="assets/img/logo.svg" width="150" height="36" alt="" class="logo_normal"/>
                    <img src="assets/img/logo_sticky.svg" width="150" height="36" alt="" class="logo_sticky"/> 
                </a>
            </div>
        
            <a href="#menu" class="btn_mobile">
                <div class="hamburger hamburger--spin" id="hamburger">
                    <div class="hamburger-box">
                        <div class="hamburger-inner"></div>
                    </div>
                </div>
            </a>
            <nav id="menu" class="main-menu">
                <ul>
                    <li><span><Link to="/">Home</Link></span></li>
                    <li><span><Link to="list">Room</Link></span></li>
                    <li><span><Link to="/about">About</Link></span></li>
                    <li><span><a href="#0">Sign In</a></span></li>
                    <li><span><a href="#0">Sign Up</a></span></li>
                </ul>
            </nav>
        </header>
    
        
        <div>
            <section class="hero_single version_2">
                <div class="wrapper">
                    <div class="container">
                        <h3>Book unique experiences</h3>
                        <p>Expolore top rated tours, hotels and restaurants around the world</p>
                        <form>
                            <div class="row no-gutters custom-search-input-2">
                                <div class="col-lg-4">
                                    <div class="form-group">
                                        <input class="form-control" type="text" placeholder="Hotel, City..."/>
                                        <i class="icon_pin_alt"></i>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="form-group">
                                        <input class="form-control" type="text" name="dates" placeholder="When.."/>
                                        <i class="icon_calendar"></i>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="panel-dropdown">
                                        <a href="#">Guests <span class="qtyTotal">1</span></a>
                                        <div class="panel-dropdown-content">
                                            
                                            <div class="qtyButtons">
                                                <label>Adults</label>
                                                <input type="text" name="qtyInput" value="1"/>
                                            </div>
                                            <div class="qtyButtons">
                                                <label>Childrens</label>
                                                <input type="text" name="qtyInput" value="0"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-2">
                                    <input type="submit" class="btn_search" value="Search"/>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </section>
            
    
            {/* <div class="container container-custom margin_80_0">
                <div class="main_title_2">
                    <span><em></em></span>
                    <h2>Our Popular Tours</h2>
                    <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                </div>
                <div id="reccomended" class="owl-carousel owl-theme">
                    <div class="item">
                        <div class="box_grid">
                            <figure>
                                <a href="#0" class="wish_bt"></a>
                                <a href="tour-detail.html"><img src="assets/img/tour_1.jpg" class="img-fluid" alt="" width="800" height="533"/><div class="read_more"><span>Read more</span></div></a>
                                <small>Historic</small>
                            </figure>
                            <div class="wrapper">
                                <h3><a href="tour-detail.html">Arc Triomphe</a></h3>
                                <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                <span class="price">From <strong>$54</strong> /per person</span>
                            </div>
                            <ul>
                                <li><i class="icon_clock_alt"></i> 1h 30min</li>
                                <li><div class="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="item">
                        <div class="box_grid">
                            <figure>
                                <a href="#0" class="wish_bt"></a>
                                <a href="tour-detail.html"><img src="assets/img/tour_2.jpg" class="img-fluid" alt="" width="800" height="533"/><div class="read_more"><span>Read more</span></div></a>
                                <small>Churches</small>
                            </figure>
                            <div class="wrapper">
                                <h3><a href="tour-detail.html">Notredam</a></h3>
                                <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                <span class="price">From <strong>$124</strong> /per person</span>
                            </div>
                            <ul>
                                <li><i class="icon_clock_alt"></i> 1h 30min</li>
                                <li><div class="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="item">
                        <div class="box_grid">
                            <figure>
                                <a href="#0" class="wish_bt"></a>
                                <a href="tour-detail.html"><img src="assets/img/tour_3.jpg" class="img-fluid" alt="" width="800" height="533"/><div class="read_more"><span>Read more</span></div></a>
                                <small>Historic</small>
                            </figure>
                            <div class="wrapper">
                                <h3><a href="tour-detail.html">Versailles</a></h3>
                                <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                <span class="price">From <strong>$25</strong> /per person</span>
                            </div>
                            <ul>
                                <li><i class="icon_clock_alt"></i> 1h 30min</li>
                                <li><div class="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="item">
                        <div class="box_grid">
                            <figure>
                                <a href="#0" class="wish_bt"></a>
                                <a href="tour-detail.html"><img src="assets/img/tour_3.jpg" class="img-fluid" alt="" width="800" height="533"/><div class="read_more"><span>Read more</span></div></a>
                                <small>Historic</small>
                            </figure>
                            <div class="wrapper">
                                <h3><a href="tour-detail.html">Versailles</a></h3>
                                <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                <span class="price">From <strong>$25</strong> /per person</span>
                            </div>
                            <ul>
                                <li><i class="icon_clock_alt"></i> 1h 30min</li>
                                <li><div class="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="item">
                        <div class="box_grid">
                            <figure>
                                <a href="#0" class="wish_bt"></a>
                                <a href="tour-detail.html"><img src="assets/img/tour_4.jpg" class="img-fluid" alt="" width="800" height="533"/><div class="read_more"><span>Read more</span></div></a>
                                <small>Museum</small>
                            </figure>
                            <div class="wrapper">
                                <h3><a href="tour-detail.html">Pompidue Museum</a></h3>
                                <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                <span class="price">From <strong>$45</strong> /per person</span>
                            </div>
                            <ul>
                                <li><i class="icon_clock_alt"></i> 2h 30min</li>
                                <li><div class="score"><span>Superb<em>350 Reviews</em></span><strong>9.0</strong></div></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="item">
                        <div class="box_grid">
                            <figure>
                                <a href="#0" class="wish_bt"></a>
                                <a href="tour-detail.html"><img src="assets/img/tour_5.jpg" class="img-fluid" alt="" width="800" height="533"/><div class="read_more"><span>Read more</span></div></a>
                                <small>Walking</small>
                            </figure>
                            <div class="wrapper">
                                <h3><a href="tour-detail.html">Tour Eiffel</a></h3>
                                <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                <span class="price">From <strong>$65</strong> /per person</span>
                            </div>
                            <ul>
                                <li><i class="icon_clock_alt"></i> 1h 30min</li>
                                <li><div class="score"><span>Good<em>350 Reviews</em></span><strong>7.5</strong></div></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                
                <p class="btn_home_align"><a href="tours-grid-isotope.html" class="btn_1 rounded">View all Tours</a></p>
                <hr class="large"></hr>
            </div> */}

            
            
            <div class="container container-custom margin_30_95">
                <section class="add_bottom_45">
                    <div class="main_title_3">
                        <span><em></em></span>
                        <h2>Rooms</h2>
                        <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                    </div>
                    <div class="row">
                        <div class="col-xl-3 col-lg-6 col-md-6">
                            <Link to="/detail" class="grid_item">
                                <figure>
                                    <div class="score"><strong>BOOKED</strong></div>
                                    <img src="assets/img/hotel_1.jpg" class="img-fluid" alt=""/>
                                    <div class="info">
                                        <h3>Mariott Hotel</h3>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                        
                        <div class="col-xl-3 col-lg-6 col-md-6">
                            <Link to="/detail" class="grid_item">
                                <figure>
                                    <div class="score"><strong>UNRESERVE</strong></div>
                                    <img src="assets/img/hotel_2.jpg" class="img-fluid" alt=""/>
                                    <div class="info">
                                        <h3>Concorde Hotel </h3>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                        
                        <div class="col-xl-3 col-lg-6 col-md-6">
                            <Link to="/detail" class="grid_item">
                                <figure>
                                    <div class="score"><strong>BOOKED</strong></div>
                                    <img src="assets/img/hotel_3.jpg" class="img-fluid" alt=""/>
                                    <div class="info">
                                        <h3>Louvre Hotel</h3>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                        
                        <div class="col-xl-3 col-lg-6 col-md-6">
                            <Link to="/detail" class="grid_item">
                                <figure>
                                    <div class="score"><strong>UNRESERVE</strong></div>
                                    <img src="assets/img/hotel_4.jpg" class="img-fluid" alt=""/>
                                    <div class="info">
                                        <h3>Park Yatt Hotel</h3>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                        
                    </div>
                    
                    <Link to="/list"><strong>View all (157) <i class="arrow_carrot-right"></i></strong></Link>
                </section>
                

    
                <div class="banner mb-0">
                    <div class="wrapper d-flex align-items-center opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.3)">
                        <div>
                            <small>Recoomendation</small>
                            <h3>Your Perfect<br/> Coworking Experience</h3>
                            <p>Activities and Working</p>
                            <Link to="/detail" class="btn_1">Read more</Link>
                        </div>
                    </div>
                    
                </div>
                
    
            </div>
            
    
            <div class="bg_color_1">
                <div class="container margin_80_55">
                    <div class="main_title_2">
                        <span><em></em></span>
                        <h3>Facilities</h3>
                        <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <Link to="/detail" class="box_news">
                                <figure><img src="assets/img/news_home_1.jpg" alt=""/>                                </figure>
                                &nbsp;
                                <h4>Pri oportere scribentur eu</h4>
                                <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
                            </Link>
                        </div>
                        
                        <div class="col-lg-6">
                            <Link to="/detail" class="box_news">
                                <figure><img src="assets/img/news_home_2.jpg" alt=""/>                                </figure>
                                &nbsp;
                                <h4>Duo eius postea suscipit ad</h4>
                                <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
                            </Link>
                        </div>
                        
                        <div class="col-lg-6">
                            <Link to="/detail" class="box_news">
                                <figure><img src="assets/img/news_home_3.jpg" alt=""/>                                </figure>
                                &nbsp;
                                <h4>Elitr mandamus cu has</h4>
                                <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
                            </Link>
                        </div>
                        
                        <div class="col-lg-6">
                            <Link to="/detail" class="box_news">
                                <figure><img src="assets/img/news_home_4.jpg" alt=""/>                                </figure>
                                &nbsp;
                                <h4>Id est adhuc ignota delenit</h4>
                                <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
                            </Link>
                        </div>
                        
                    </div>
                    
                    <p class="btn_home_align"><Link to="/list" class="btn_1 rounded">View all facilities</Link></p>
                </div>
                
            </div>
            
    
            {/* <div class="call_section">
                <div class="container clearfix">
                    <div class="col-lg-5 col-md-6 float-right wow" data-wow-offset="250">
                        <div class="block-reveal">
                            <div class="block-vertical"></div>
                            <div class="box_1">
                                <h3>Enjoy a GREAT travel with us</h3>
                                <p>Ius cu tamquam persequeris, eu veniam apeirian platonem qui, id aliquip voluptatibus pri. Ei mea primis ornatus disputationi. Menandri erroribus cu per, duo solet congue ut. </p>
                                <a href="#0" class="btn_1 rounded">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            
        </div>
        
    
        <footer>
            <div class="container margin_60_35">
                <div class="row">
                    <div class="col-lg-5 col-md-12 p-r-5">
                        <p><img src="assets/img/logo.svg" width="150" height="36" alt=""/></p>
                        <p>Mea nibh meis philosophia eu. Duis legimus efficiantur ea sea. Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu. Nihil facilisi indoctum an vix, ut delectus expetendis vis.</p>
                        <div class="follow_us">
                            <ul>
                                <li>Follow us</li>
                                <li><a href="#0"><i class="ti-facebook"></i></a></li>
                                <li><a href="#0"><i class="ti-twitter-alt"></i></a></li>
                                <li><a href="#0"><i class="ti-google"></i></a></li>
                                <li><a href="#0"><i class="ti-pinterest"></i></a></li>
                                <li><a href="#0"><i class="ti-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 ml-lg-auto">
                        <h5>Useful links</h5>
                        <ul class="links">
                            <li><Link to="/about">About</Link></li>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="register.html">Register</a></li>
                            <li><a href="contacts.html">Contacts</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5>Contact with Us</h5>
                        <ul class="contacts">
                            <li><a href="tel://61280932400"><i class="ti-mobile"></i> + 61 23 8093 3400</a></li>
                            <li><a href="mailto:info@Panagea.com"><i class="ti-email"></i> info@Panagea.com</a></li>
                        </ul>
                        <div id="newsletter">
                        <h6>Newsletter</h6>
                        <div id="message-newsletter"></div>
                        <form method="post" action="assets/newsletter.php" name="newsletter_form" id="newsletter_form">
                            <div class="form-group">
                                <input type="email" name="email_newsletter" id="email_newsletter" class="form-control" placeholder="Your email"/>
                                <input type="submit" value="Submit" id="submit-newsletter"/>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
                
                <hr></hr>
                <div class="row">
                    <div class="col-lg-6">
                        <ul id="footer-selector">
                            <li>
                                <div class="styled-select" id="lang-selector">
                                    <select>
                                        <option value="English" selected>English</option>
                                        <option value="French">French</option>
                                        <option value="Spanish">Spanish</option>
                                        <option value="Russian">Russian</option>
                                    </select>
                                </div>
                            </li>
                            <li>
                                <div class="styled-select" id="currency-selector">
                                    <select>
                                        <option value="US Dollars" selected>US Dollars</option>
                                        <option value="Euro">Euro</option>
                                    </select>
                                </div>
                            </li>
                            <li><img src="assets/img/cards_all.svg" alt=""/></li>
                        </ul>
                    </div>
                    <div class="col-lg-6">
                        <ul id="additional_links">
                            <li><a href="#0">Terms and conditions</a></li>
                            <li><a href="#0">Privacy</a></li>
                            <li><span>© 2019 Panagea</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        
        </div>
        
        
        
        <div id="sign-in-dialog" class="zoom-anim-dialog mfp-hide">
            <div class="small-dialog-header">
                <h3>Sign In</h3>
            </div>
            <form>
                <div class="sign-in-wrapper">
                    <a href="#0" class="social_bt facebook">Login with Facebook</a>
                    <a href="#0" class="social_bt google">Login with Google</a>
                    <div class="divider"><span>Or</span></div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" name="email" id="email"/>
                        <i class="icon_mail_alt"></i>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" name="password" id="password" value=""/>
                        <i class="icon_lock_alt"></i>
                    </div>
                    <div class="clearfix add_bottom_15">
                        <div class="checkboxes float-left">
                            <label class="container_check">Remember me
                              <input type="checkbox"/>
                              <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="float-right mt-1"><a id="forgot" href="javascript:void(0);">Forgot Password?</a></div>
                    </div>
                    <div class="text-center"><input type="submit" value="Log In" class="btn_1 full-width"/></div>
                    <div class="text-center">
                        Don’t have an account? <a href="register.html">Sign up</a>
                    </div>
                    <div id="forgot_pw">
                        <div class="form-group">
                            <label>Please confirm login email below</label>
                            <input type="email" class="form-control" name="email_forgot" id="email_forgot"/>
                            <i class="icon_mail_alt"></i>
                        </div>
                        <p>You will receive an email containing a link allowing you to reset your password to a new preferred one.</p>
                        <div class="text-center"><input type="submit" value="Reset Password" class="btn_1"/></div>
                    </div>
                </div>
            </form>
            
        </div>
        
        
        <div id="toTop"></div>
        
    </div>
    );
}


export default Dashboard;
