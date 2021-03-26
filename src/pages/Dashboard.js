import React from 'react';
import axios from 'axios';
import { GET_ROOMS,JWT_HEADER } from '../constants/urls';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Dashboard() {

    const [list, setRooms] = React.useState({rooms: []});
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        await axios
          .get(GET_ROOMS(), {
            headers: {},
          })
          .then((res) => {
            console.log(res.data);
            setRooms(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
        setIsLoading(false);
      };
      fetchData();
    }, []);

    return(
        
    <div class="datepicker_mobile_full">
        <Navbar currentPage='Dashboard'/>
        <div id="page">    
        
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
            
    
            <div class="container container-custom margin_80_0">
                <div class="main_title_2">
                    <span><em></em></span>
                    <h2>Our Popular Rooms</h2>
                    <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                </div>

                <div id="reccomended" class="owl-carousel owl-theme">

                    {list.rooms.map(item => (
                            // <li key={item.id}>
                            //     <p>{item.name}</p>
                            //     <Link to={`/cobadetail/${item.id}`}><button>Detail</button></Link>
                            // </li>
                        <div class="item">
                            <div class="box_grid">
                                <figure>
                                    <a href="#0" class="wish_bt"></a>
                                    <Link to={'/roomdetail/${item.id}'}><img src="assets/img/tour_1.jpg" class="img-fluid" alt="" width="800" height="533"/><div class="read_more"><span>Read more</span></div></Link>
                                    <small>Historic</small>
                                </figure>
                                <div class="wrapper">
                                    <h3><a href="tour-detail.html">Arc Triomphe</a></h3>
                                    <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                    <span class="price">Start from <strong>$54</strong> /per hour</span>
                                </div>
                                <ul>
                                    <li>Jakarta</li>
                                    <li></li>
                                    {/* <li><div class="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div></li> */}
                                </ul>
                            </div>
                        </div>
                    ))}


                    <div class="item">
                        <div class="box_grid">
                            <figure>
                                <a href="#0" class="wish_bt"></a>
                                <Link to="/roomdetail"><img src="assets/img/tour_1.jpg" class="img-fluid" alt="" width="800" height="533"/><div class="read_more"><span>Read more</span></div></Link>
                                <small>Rooms</small>
                            </figure>
                            <div class="wrapper">
                                <h3><Link to="/roomdetail">Arc Triomphe</Link></h3>
                                <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                <span class="price">Start from <strong>$54</strong> /per hour</span>
                            </div>
                            <ul>
                                <li>Surabaya</li>
                                <li></li>
                                {/* <li><div class="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div></li> */}
                            </ul>
                        </div>
                    </div>
                    
                       
                </div>
                
                <p class="btn_home_align"><Link to="/roomlist" class="btn_1 rounded">View all Tours</Link></p>
                <hr class="large"></hr>
            </div>

            
            
            <div class="container container-custom margin_30_95">

                <section class="add_bottom_45">
                    <div class="main_title_3">
                        <span><em></em></span>
                        <h2>Rooms</h2>
                        <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                    </div>
                    
                    <div class="row">

                        {/* {list.rooms.map(item => (
                            <li key={item.id}>
                                <p>{item.name}</p>
                                <Link to={`/cobadetail/${item.id}`}><button>Detail</button></Link>
                            </li>
                        ))} */}

                        {/* loop */}
                        <div class="col-xl-3 col-lg-6 col-md-6">
                            <Link to="/roomdetail" class="grid_item">
                                <figure>
                                    {/* <div class="score"><strong>BOOKED</strong></div> */}
                                    <img src="assets/img/hotel_1.jpg" class="img-fluid" alt=""/>
                                    <div class="info">
                                        <h3>Mariott Hotel</h3>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                        
                    </div>
                    
                    <Link to="/roomlist"><strong>View all (157) <i class="arrow_carrot-right"></i></strong></Link>
                </section>
                

    
                <div class="banner mb-0">
                    <div class="wrapper d-flex align-items-center opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.3)">
                        <div>
                            <small>Recommendation</small>
                            <h3>Your Perfect<br/> Coworking Experience</h3>
                            <p>Activities and Working</p>
                            {/* <Link to="/roomdetail" class="btn_1">Read more</Link> */}
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

                        {/* {list.rooms.map(item => (
                            <li key={item.id}>
                                <p>{item.name}</p>
                                <Link to={`/cobadetail/${item.id}`}><button>Detail</button></Link>
                            </li>
                        ))} */}
                        {/* loop */}
                        <div class="col-lg-6">
                            <Link to="/roomdetail" class="box_news">
                                <figure><img src="assets/img/news_home_1.jpg" alt=""/>                                </figure>
                                &nbsp;
                                <h4>Pri oportere scribentur eu</h4>
                                <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
                            </Link>
                        </div>
                        
                    </div>
                    
                    {/* <p class="btn_home_align"><Link to="/roomlist" class="btn_1 rounded">View all facilities</Link></p> */}
                </div>
                
            </div>
            
    
            
            
        </div>
        
        <Footer />
        
        </div>
        
        <div id="toTop"></div>
        
    </div>
    );
}


export default Dashboard;
