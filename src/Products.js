import React, { useState, createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
 
  const [Items, setItems] = useState([
      { key: 1,
        name: "White Bike",
        filter: 'bike',
        src: "https://i1.adis.ws/i/washford/348606/Carrera-Zelos-Womens-Road-Bike-2020---Silver---S-M-L-Frames.webp?$sfcc_tile$&w=680",
        price:800,
        inBasket: false,},
      { key: 2,
        name: "Dolan Titanium",
        filter: 'frame',
        src: "https://dolan-images.s3.eu-west-2.amazonaws.com/product-images/1000-1000/adx-disc-frameset-2020-5.jpg",
        price:2000,
        inBasket: false,},
      { key: 3,
        name: "Blue frame",
        filter: 'frame',
        src: "https://m.media-amazon.com/images/I/51dJAbs2cGL.jpg",
        price:1500,
        inBasket: false,},
      { key: 4,
        name: "bit much",
        filter: 'wheel',
        src: "https://mk0completetrid5cejy.kinstacdn.com/wp-content/uploads/superteam-wheel.jpg",
        price:2800,
        inBasket: false,},
      { key: 5,
        name: "Green Bike",
        filter: 'bike',
        src: "https://www.balfesbikes.co.uk/images/giant/my20tcradpro2_colora.jpg",
        price:1500,
        inBasket: false,},
      { key: 6,
        name: "mad Bike",
        filter: 'bike',
        src: "https://images-na.ssl-images-amazon.com/images/I/71xHK6CyspL._AC_SL1500_.jpg",
        price:7500,
        inBasket: false,},
      { key: 7,
        name: "Trek Bike",
        filter: 'bike',
        src: "https://bicyclechain.co.uk/content/products/trek-madone-slr-6-disc-2019_45738.jpg",
        price:8500,
        inBasket: false,},
      { key: 8,
        name: "Specialized bike",
        filter: 'bike',
        src: "https://www.cyclesuk.com/images/spec/94420-55_roubaix-comp-udi2-hyp-char_hero.jpg",
        price:8000,
        inBasket: false,},
      { key: 9,
        name: "Blue Bike",
        filter: 'bike',
        src: "https://www.cyclesuk.com/images/specializedroubaixsportdovegrey.jpg",
        price:3500,
        inBasket: false,},
      { key: 10,
        name: "Grey Bike",
        filter: 'bike',
        src: "https://bicyclechain.co.uk/content/products/specialized-roubaix-pro-etap-axs-road-bike_52784.jpg",
        price:4500,
        inBasket: false,},
      { key: 11,
        name: "Donald",
        filter: 'bike',
        src: "https://d2yn9m4p3q9iyv.cloudfront.net/rose/2019/x-lite-four-disc-team-ultegra-di2-aero/thumbs/400/4f286.jpeg",
        price:1500,
        inBasket: false,},
      { key: 12,
        name: "ali express special",
        filter: 'frame',
        src: "https://images-na.ssl-images-amazon.com/images/I/510j4TvXTsL._AC_SX466_.jpg",
        price:15,
        inBasket: false,},
      { key: 13,
        name: "silver Frameset",
        filter: 'frame',
        src: "https://www.westbrookcycles.co.uk/images/kinesis-uk-aithein-disc-road-bike-frameset-dazzling-silver-p349461-568164_thumb.jpg",
        price:1850,
        inBasket: false,},
      { key: 20,
        name: "slippery Blue",
        filter: 'frame',
        src: "https://www.wigglestatic.com/product-media/105777587/De-Rosa-SK-Pininfarina-Road-Frame-2020-Road-Bike-Frames-Blue-2019-DA-GR-093-A-GR-100.jpg",
        price:2860,
        inBasket: false,},
      { key: 14,
        name: "silky silver",
        filter: 'frame',
        src: "https://www.wigglestatic.com/product-media/105777601/DeRosa-SK-Pininfarina-Disc-Road-Frame-nero-bronzo-brown-01.jpg?w=430&h=430&a=7",
        price:2300,
        inBasket: false,},
      { key: 15,
        name: "bedroom wall color",
        filter: 'frame',
        src: "https://intheknowcycling.com/wp-content/uploads/2019/10/Bianchi-Oltre-XR4-Disc-Road-Bike-Frameset.jpg",
        price:4800,
        inBasket: false,},
      { key: 16,
        name: "italian jobby",
        filter: 'frame',
        src: "https://images-na.ssl-images-amazon.com/images/I/51gWtl%2BVEwL._AC_SX466_.jpg",
        price:2800,
        inBasket: false,},
      { key: 17,
        name: "fancy Zipp wheels",
        filter: 'wheel',
        src: "https://cdn.mantel.com/images/product.php?image_id=112993&w=760&h=570",
        price:2500,
        inBasket: false,},
      { key: 18,
        name: "Bontrager specials",
        filter: 'wheel',
        src: "https://cdn.mantel.com/images/product.php?image_id=98789&w=760&h=570",
        price:900,
        inBasket: false,},
      { key: 19,
        name: "Hunt wheel",
        filter: 'wheel',
        src: "https://cdn1.cyclist.co.uk/sites/cyclist/files/styles/insert_main_wide_image/public/2020/06/hunt_race_aero_wide.jpg?itok=3QGdGOfF",
        price:150,
        inBasket: false,},
  ])

return <ProductContext.Provider value={[Items,setItems]}>{props.children}</ProductContext.Provider>;
};