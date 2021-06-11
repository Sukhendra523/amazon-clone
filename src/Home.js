import React from 'react'
import './Home.css'
import Product from './Product'

function Home(){
    return <div className="home">
        <img className="home__img" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
        <div className="home__row">
            <Product 
                id= "12321348"
                title= "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses p"
                price={11.96}
                rating= {5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            />
            <Product 
                id= "1232139"
                title= "Acer Aspire 3 A315-56 15.6-inch Laptop (Intel Core i5-1035G1/8GB/1TB HDD/Window 10, Home, 64Bit/Intel UHD Graphics), Black"
                price={46990}
                rating= {4}
                image="https://images-na.ssl-images-amazon.com/images/I/810mRHoIxML._SX466_.jpg"
            />
        </div>
        <div className="home__row">
            <Product 
                id= "1232139"
                title= "Mi Earphone Basic with Ultra deep bass and mic (Black)"
                price={ 399}
                rating= {3}
                image="https://images-na.ssl-images-amazon.com/images/I/71mQ9oKDMLL._SX522_.jpg"
            />
            <Product 
                id= "1232941"
                title= "React.js Essentials Paperback – Import, 27 August 2015"
                price={1490}
                rating= {3}
                image="https://images-na.ssl-images-amazon.com/images/I/41-HWOw--cL._SX404_BO1,204,203,200_.jpg"
            />
            <Product 
                id= "12321941"
                title= "I Too Had a Love Story Paperback – 6 November 2013"
                price={179}
                rating= {5}
                image="https://images-na.ssl-images-amazon.com/images/I/41-HWOw--cL._SX404_BO1,204,203,200_.jpg"
            />
        </div>
        <div className="home__row">
            <Product 
                id= "1232191"
                title= "Sony Bravia 138.8 cm (55 inches) 4K Ultra HD Smart LED TV KD-55X7002G (Black)"
                price={63990}
                rating= {4}
                image="https://images-na.ssl-images-amazon.com/images/I/81Nw2ifyBzL._SX569_.jpg"
            />
        </div>
        
    </div>
}

export default Home