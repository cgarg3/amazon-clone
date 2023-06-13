import React from "react"
import "./Home.css"
import Product  from "./Product"

function Home() {
    return (
        <div className="home">
        <div className="home-container">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" className="home-containerImage" alt=""/>

        <div className="home_row">
            <Product 
            title='The lean startup'
            price={29.99}
            image="http://1.bp.blogspot.com/-T-d3JPMr-Uk/UPshLuidy6I/AAAAAAAAFbU/vOiHd0qgnC4/s1600/lean-startup_book-cover.jpeg"
            rating={4}
            />
            <Product
            title="kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, dough hook and whisk, 5 litre glass bowl"
            price={180}
            rating={3}
            image="https://m.media-amazon.com/images/I/41Hm9q6vlYL._SL500_.jpg"
            
            />
        </div>
        <div className="home_row">
            <Product
            title="Galaxy Watch5 Pro Bluetooth (45mm)"
            rating={4}
            price={499.99}
            image="https://images.samsung.com/is/image/samsung/p6pim/ca/2208/gallery/ca-galaxy-watch5-pro-430999-sm-r925fzkaxac-thumb-533186532?$344_344_PNG$"
            />
            <Product
            title="Apple iPad Pro 12.9' 256GB with Wi-Fi (6th Generation) - Space Grey"
            rating={5}
            price={24.99}
            image="https://multimedia.bbycastatic.ca/multimedia/products/500x500/165/16567/16567278.jpg"
            />
            <Product
            title="Echo Dot (3rd gen) - Smart speaker with Alexa - Charcoal"
            rating={4}
            price={24.99}
            image="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_SX679_.jpg"
            />
        </div>
        <div className="home_row">
            <Product
            title="49” Super Ultra-Wide Dual QHD 32:9 Gaming monitor"
            price={1499}
            rating={3}
            image="https://tse4.mm.bing.net/th?id=OIP.WWcrJ7dw61M4tByy-EjhtQHaEm&pid=Api&P=0&h=180"
            
            />
        </div>
        </div>
        </div>
    )
}

export default Home 
