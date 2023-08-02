import "./style.scss";
import logoImg from "./assets/img/brand_logo.png"
import flipcart from "./assets/img/flipkart.png"
import amazon from "./assets/img/amazon.png"
import shoe from "./assets/img/shoe_image.png"
const Navigation = () => {
    return (
        <nav>
            <div className="logo">
                <img src={logoImg} alt = "Logo Image" />
            </div>
            <ul>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Location</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>

            </ul>
            <button className="btn">Login</button>
        </nav>
    )
}

const Hero = () => {

    return (
        <section>
            <div className="hero-container max-width">
                <div className="main-container">
                    <div className="left-container">
                        <div>
                            <h1>Your Feet Deserve The Trust</h1>
                        </div>
                        <div>
                            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                        </div>
                        <div className="buttons">
                            <button className="btn">Shop Now</button>
                            <button className="cat-btn">Category</button>
                        </div>
                        <div>
                            <h6>Also Availble on</h6>
                        </div>
                        <div>
                            <img src={ flipcart} alt="Flipcart" />
                            <img src={amazon} alt="Amazon" />
                        </div>
                    </div>
                    <div className="right-container">
                        <img src={ shoe} alt ="Shoe" />

                    </div>
                </div>
            </div>
        </section>
    )

}

export {
    Navigation,
    Hero,
}