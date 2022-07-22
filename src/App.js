import './App.css';
import left from './img/arrow-110-128.gif';
import right from './img/arrow-11-128.gif'
import instagram from './img/icons8-instagram.svg'
import youtube from './img/icons8-youtube.svg'
import twitter from './img/twitter-128.gif'
import facebook from './img/facebook-4-128.png'
import pepsi from './img/can-pepsi.png'


function App() {
  return (
        <div className='wrapper'>
        <div className="countainer">
            <header className="header">
                <div className="header_left">
                <img className='logo' src='https://www.designyourway.net/blog/wp-content/uploads/2018/07/Pepsi-logo-1998-1.jpg' alt=''></img>
                </div>
                <div className="header_main">
                    <a href="# "><span>PRODUCTS</span></a>
                    <a href="# "><span>WHAT'S NEW</span></a>
                    <a href="# "><span>NEWSLETTER</span></a>
                    <a href="# "><span>CONTUCT US</span></a>
                </div>
                <div className="header_right">
                    <button className="btn">BUY PRODUCTS</button>
                </div>
            </header>
            <main className="main">
                <div className="main_left">
                    <div className="main_logo">
                        <div className="left">
                          <img src={ left } alt=''></img>
                        </div>
                        <div className="main_logs">
                            <img src={ instagram } alt=""></img>
                            <img src={ youtube } alt=""></img>
                            <img src={ twitter } alt=""></img>
                            <img src={ facebook } alt=""></img>
                        </div>
                    </div>
                    <div className="main_classic">
                        <div className="main_classic_top">
                            <span>Pepsi Classic</span>
                            <p>Carbonated Water, Hight Fructose, Corn Syrup, Caramel Color, Sugar, Phosphoric Acid,
                                Caffeine, Citric Acid, Natural Flavor</p>
                        </div>
                        <div className="main_classic_body">
                            <h2>NUTRITION FACTS</h2>
                            <div className="main_blocks">
                                <div className="item blue">
                                    <div className="item_top">
                                        <span className="text">Amount Per Serving</span>
                                        <span className="number">150 cl</span>
                                    </div>
                                    <div className="item_bottom">
                                        <span className="procent">7.5%</span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item_top">
                                        <span className="text">Total Fat</span>
                                        <span className="number">0g</span>
                                    </div>
                                    <div className="item_bottom">
                                        <span className="procent">0%</span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item_top">
                                        <span className="text">Sodium</span>
                                        <span className="number">30mg</span>
                                    </div>
                                    <div className="item_bottom">
                                        <span className="procent">1%</span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="item_top">
                                        <span className="text">Total Carbohydrate</span>
                                        <span className="number">41g</span>
                                    </div>
                                    <div className="item_bottom">
                                        <span className="procent">14%</span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item_top">
                                        <span className="text">Protein</span>
                                        <span className="number">0g</span>
                                    </div>
                                    <div className="item_bottom">
                                        <span className="procent">0%</span>
                                    </div>
                                </div>
                            </div>
                            <p>Not a significant source of other nutrients.</p>
                            <p>*Percent Daily Values are bassed on a 2,000 calorie diet</p>
                            <button className="btn">BUY NOW</button>
                        </div>
                    </div>
                </div>
                <div className="main_right">
                    <div className="main_right_img">
                      <img src={ pepsi } alt=''></img>
                    </div>
                    <div className="main_right_ml">
                      <img src={ right } alt=''></img>
                        <div className="block_ml">
                            <div className="block_span">
                                <span className="text_ml">330 ml</span>
                                <span className="serving_text">Serving Size</span>
                                <span className="serving_text1">1 Serving</span>
                                <span className="serving_text2">Per countainer</span>
                            </div>
                            <div className="block_color"></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
  );
}

export default App;
