import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonLaunchpad/Store/shop_a_cause/GW/new/Shop_by_cause_GW_PC_1500x600_1._CB404107507_.jpg"
        />
        <div className="home__row">
          <Product
            id="1212233"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses  
            by Eric Ries  | 6 October 2011"
            price={599}
            image="https://images-na.ssl-images-amazon.com/images/I/41Um2UPO1yL._SX325_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
           id="12121211"
            title="Apple iPad Mini (Wi-Fi + Cellular, 64GB) - Space Grey"
            price={45990}
            image="https://m.media-amazon.com/images/I/71TJA+sJv2L._AC_UY218_.jpg"
            rating={4}
          />
          <Product
           key="121226"
            title="JBL T460BT Extra Bass Wireless On-Ear Headphones with 11 Hours Playtime & Mic (Black)"
            price={2999}
            image="https://m.media-amazon.com/images/I/71ynIMjwgwL._AC_UY218_.jpg"
            rating={3}
          />
         
        </div>
        <div className="home__row">
          <Product
           key="12125"
            title="Apple iPhone 11 Pro Max (256GB) - Midnight Green"
            price={121990}
            image="https://m.media-amazon.com/images/I/61ers6OzvUL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
           key="121224"
            title=" Samsung Galaxy Z Fold2 5G (Mystic Bronze, 12GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={149999}
            image="https://m.media-amazon.com/images/I/71U9nzW+XsL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
           key="121223"
            title="Apple Watch Series 5 (GPS + Cellular, 40mm) - Space Gray Aluminium Case with Black Sport Band"
            price={49999}
            image="https://m.media-amazon.com/images/I/71SFgqisjCL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
           key="121222"
            title="bEcho Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)"
            price={3499}
            image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY218_.jpg"
            rating={4}
          />
        </div>{" "}
        <div className="home__row">
          <Product
          key="121221"
            title="Samsung The Serif Series 123 cm (49 Inches) 4K Ultra HD Smart QLED TV QA49LS01TAKXXL (Cloud White) (2020 Model)"
            price={119999}
            image="https://m.media-amazon.com/images/I/81TykyxGSJL._AC_UY218_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
