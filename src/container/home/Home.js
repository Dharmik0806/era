import React from 'react';
import Slider from "react-slick";

// For theme

import { useContext } from 'react';
import ThemeContext from '../../redux/context/ThemeContext';

function SampleNextArrow(props) {

    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "grey",
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey" }}
            onClick={onClick}
        />
    );
}

function Home(props) {


    // For theme
    const themeData = useContext(ThemeContext)
    //  

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SamplePrevArrow />,
        prevArrow: <SampleNextArrow />
        // variableWidth: true
    };

    return (
        <>
            <div className={`${(themeData.themeStyle) === "dark" ? "light" : "dark"}`} >
                {/* ***** Main Banner Area Start ***** */}
                <div className="main-banner"
                // className={`main-banner ${(themeData.themeStyle) === "dark" ? "light" : "dark"}`} 
                id="top">

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="left-content">
                                    <div className="thumb">
                                        <div className="inner-content">
                                            <h4>We Are Hexashop</h4>
                                            <span>Awesome, clean &amp; creative HTML5 Template</span>
                                            <div className="main-border-button">
                                                <a href="#">Purchase Now!</a>
                                            </div>
                                        </div>
                                        <img src="assets/images/left-banner-image.jpg" alt />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right-content">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="right-first-image">
                                                <div className="thumb">
                                                    <div className="inner-content">
                                                        <h4>Women</h4>
                                                        <span>Best Clothes For Women</span>
                                                    </div>
                                                    <div className="hover-content">
                                                        <div className="inner">
                                                            <h4>Women</h4>
                                                            <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                            <div className="main-border-button">
                                                                <a href="#">Discover More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <img src="assets/images/baner-right-image-01.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="right-first-image">
                                                <div className="thumb">
                                                    <div className="inner-content">
                                                        <h4>Men</h4>
                                                        <span>Best Clothes For Men</span>
                                                    </div>
                                                    <div className="hover-content">
                                                        <div className="inner">
                                                            <h4>Men</h4>
                                                            <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                            <div className="main-border-button">
                                                                <a href="#">Discover More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <img src="assets/images/baner-right-image-02.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="right-first-image">
                                                <div className="thumb">
                                                    <div className="inner-content">
                                                        <h4>Kids</h4>
                                                        <span>Best Clothes For Kids</span>
                                                    </div>
                                                    <div className="hover-content">
                                                        <div className="inner">
                                                            <h4>Kids</h4>
                                                            <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                            <div className="main-border-button">
                                                                <a href="#">Discover More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <img src="assets/images/baner-right-image-03.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="right-first-image">
                                                <div className="thumb">
                                                    <div className="inner-content">
                                                        <h4>Accessories</h4>
                                                        <span>Best Trend Accessories</span>
                                                    </div>
                                                    <div className="hover-content">
                                                        <div className="inner">
                                                            <h4>Accessories</h4>
                                                            <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                            <div className="main-border-button">
                                                                <a href="#">Discover More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <img src="assets/images/baner-right-image-04.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ***** Main Banner Area End ***** */}
                {/* ***** Men Area Starts ***** */}
                <section className="section" id="men">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-heading">
                                    <h2>Men's Latest</h2>
                                    <span>Details to details is what makes Hexashop different from the other themes.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* <div className="men-item-carousel">
                                    <div className="owl-men-item owl-carousel"> */}
                                <Slider {...settings}>
                                    <div className="item">
                                        <div className="thumb">
                                            <div className="hover-content">
                                                <ul>
                                                    <li><a href="single-product.html"><i className="fa fa-eye" /></a></li>
                                                    <li><a href="single-product.html"><i className="fa fa-star" /></a></li>
                                                    <li><a href="single-product.html"><i className="fa fa-shopping-cart" /></a></li>
                                                </ul>
                                            </div>
                                            <img src="assets/images/men-01.jpg" alt />
                                        </div>
                                        <div className="down-content">
                                            <h4>Classic Spring</h4>
                                            <span>$120.00</span>
                                            <ul className="stars">
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="thumb">
                                            <div className="hover-content">
                                                <ul>
                                                    <li><a href="single-product.html"><i className="fa fa-eye" /></a></li>
                                                    <li><a href="single-product.html"><i className="fa fa-star" /></a></li>
                                                    <li><a href="single-product.html"><i className="fa fa-shopping-cart" /></a></li>
                                                </ul>
                                            </div>
                                            <img src="assets/images/men-02.jpg" alt />
                                        </div>
                                        <div className="down-content">
                                            <h4>Air Force 1 X</h4>
                                            <span>$90.00</span>
                                            <ul className="stars">
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="thumb">
                                            <div className="hover-content">
                                                <ul>
                                                    <li><a href="single-product.html"><i className="fa fa-eye" /></a></li>
                                                    <li><a href="single-product.html"><i className="fa fa-star" /></a></li>
                                                    <li><a href="single-product.html"><i className="fa fa-shopping-cart" /></a></li>
                                                </ul>
                                            </div>
                                            <img src="assets/images/men-03.jpg" alt />
                                        </div>
                                        <div className="down-content">
                                            <h4>Love Nana ‘20</h4>
                                            <span>$150.00</span>
                                            <ul className="stars">
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="thumb">
                                            <div className="hover-content">
                                                <ul>
                                                    <li><a href="single-product.html"><i className="fa fa-eye" /></a></li>
                                                    <li><a href="single-product.html"><i className="fa fa-star" /></a></li>
                                                    <li><a href="single-product.html"><i className="fa fa-shopping-cart" /></a></li>
                                                </ul>
                                            </div>
                                            <img src="assets/images/men-01.jpg" alt />
                                        </div>
                                        <div className="down-content">
                                            <h4>Classic Spring</h4>
                                            <span>$120.00</span>
                                            <ul className="stars">
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Slider>
                                {/* </div> */}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* ***** Men Area Ends ***** */}
                {/* ***** Women Area Starts ***** */}
                <section className="section" id="women">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-heading">
                                    <h2>Women's Latest</h2>
                                    <span>Details to details is what makes Hexashop different from the other themes.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* <div className="women-item-carousel"> */}
                                {/* <div className="owl-women-item owl-carousel"> */}
                                <Slider {...settings}>
                                    <div className="item">
                                        <div className="thumb">
                                            <div className="hover-content">
                                                <ul>
                                                    <li><a href="single-product.html"><i className="fa fa-eye" /></a></li>
                                                    <li><a href="single-product.html"><i className="fa fa-star" /></a></li>
                                                    <li><a href="single-product.html"><i className="fa fa-shopping-cart" /></a></li>
                                                </ul>
                                            </div>
                                            <img src="assets/images/women-01.jpg" alt />
                                        </div>
                                        <div className="down-content">
                                            <h4>New Green Jacket</h4>
                                            <span>$75.00</span>
                                            <ul className="stars">
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="thumb">
                                            <div className="hover-content">
                                                <ul>
                                                    <li><a href="single-product.html"><i className="fa fa-eye" /></a></li>
                                                    <li><a href="single-product.html"><i className="fa fa-star" /></a></li>
                                                    <li><a href="single-product.html"><i className="fa fa-shopping-cart" /></a></li>
                                                </ul>
                                            </div>
                                            <img src="assets/images/women-02.jpg" alt />
                                        </div>
                                        <div className="down-content">
                                            <h4>Classic Dress</h4>
                                            <span>$45.00</span>
                                            <ul className="stars">
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="thumb">
                                            <div className="hover-content">
                                                <ul>
                                                    <li><a href="single-product.html"><i className="fa fa-eye" /></a></li>
                                                    <li><a href="single-product.html"><i className="fa fa-star" /></a></li>
                                                    <li><a href="single-product.html"><i className="fa fa-shopping-cart" /></a></li>
                                                </ul>
                                            </div>
                                            <img src="assets/images/women-03.jpg" alt />
                                        </div>
                                        <div className="down-content">
                                            <h4>Spring Collection</h4>
                                            <span>$130.00</span>
                                            <ul className="stars">
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="thumb">
                                            <div className="hover-content">
                                                <ul>
                                                    <li><a href="single-product.html"><i className="fa fa-eye" /></a></li>
                                                    <li><a href="single-product.html"><i className="fa fa-star" /></a></li>
                                                    <li><a href="single-product.html"><i className="fa fa-shopping-cart" /></a></li>
                                                </ul>
                                            </div>
                                            <img src="assets/images/women-01.jpg" alt />
                                        </div>
                                        <div className="down-content">
                                            <h4>Classic Spring</h4>
                                            <span>$120.00</span>
                                            <ul className="stars">
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Slider>
                                {/* </div> */}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </section >
                {/* ***** Women Area Ends ***** */}
                {/* ***** Kids Area Starts ***** */}
                <section className="section" id="kids">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-heading">
                                    <h2>Kid's Latest</h2>
                                    <span>Details to details is what makes Hexashop different from the other themes.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* <div className="kid-item-carousel"> */}
                                {/* <div className="owl-kid-item owl-carousel"> */}
                                <Slider {...settings}>

                                    <div className="item">
                                        <div className="thumb">
                                            <div className="hover-content">
                                                <ul>
                                                    <li><a href="single-product.html"><i className="fa fa-eye" /></a></li>
                                                    <li><a href="single-product.html"><i className="fa fa-star" /></a></li>
                                                    <li><a href="single-product.html"><i className="fa fa-shopping-cart" /></a></li>
                                                </ul>
                                            </div>
                                            <img src="assets/images/kid-01.jpg" alt />
                                        </div>
                                        <div className="down-content">
                                            <h4>School Collection</h4>
                                            <span>$80.00</span>
                                            <ul className="stars">
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="thumb">
                                            <div className="hover-content">
                                                <ul>
                                                    <li><a href="single-product.html"><i className="fa fa-eye" /></a></li>
                                                    <li><a href="single-product.html"><i className="fa fa-star" /></a></li>
                                                    <li><a href="single-product.html"><i className="fa fa-shopping-cart" /></a></li>
                                                </ul>
                                            </div>
                                            <img src="assets/images/kid-02.jpg" alt />
                                        </div>
                                        <div className="down-content">
                                            <h4>Summer Cap</h4>
                                            <span>$12.00</span>
                                            <ul className="stars">
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="thumb">
                                            <div className="hover-content">
                                                <ul>
                                                    <li><a href="single-product.html"><i className="fa fa-eye" /></a></li>
                                                    <li><a href="single-product.html"><i className="fa fa-star" /></a></li>
                                                    <li><a href="single-product.html"><i className="fa fa-shopping-cart" /></a></li>
                                                </ul>
                                            </div>
                                            <img src="assets/images/kid-03.jpg" alt />
                                        </div>
                                        <div className="down-content">
                                            <h4>Classic Kid</h4>
                                            <span>$30.00</span>
                                            <ul className="stars">
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="thumb">
                                            <div className="hover-content">
                                                <ul>
                                                    <li><a href="single-product.html"><i className="fa fa-eye" /></a></li>
                                                    <li><a href="single-product.html"><i className="fa fa-star" /></a></li>
                                                    <li><a href="single-product.html"><i className="fa fa-shopping-cart" /></a></li>
                                                </ul>
                                            </div>
                                            <img src="assets/images/kid-01.jpg" alt />
                                        </div>
                                        <div className="down-content">
                                            <h4>Classic Spring</h4>
                                            <span>$120.00</span>
                                            <ul className="stars">
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                                <li><i className="fa fa-star" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Slider>
                                {/* </div> */}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* ***** Kids Area Ends ***** */}
                {/* ***** Explore Area Starts ***** */}
                <section className="section" id="explore">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="left-content">
                                    <h2>Explore Our Products</h2>
                                    <span>You are allowed to use this HexaShop HTML CSS template. You can feel free to modify or edit this layout. You can convert this template as any kind of ecommerce CMS theme as you wish.</span>
                                    <div className="quote">
                                        <i className="fa fa-quote-left" /><p>You are not allowed to redistribute this template ZIP file on any other website.</p>
                                    </div>
                                    <p>There are 5 pages included in this HexaShop Template and we are providing it to you for absolutely free of charge at our TemplateMo website. There are web development costs for us.</p>
                                    <p>If this template is beneficial for your website or business, please kindly <a rel="nofollow" href="https://paypal.me/templatemo" target="_blank">support us</a> a little via PayPal. Please also tell your friends about our great website. Thank you.</p>
                                    <div className="main-border-button">
                                        <a href="products.html">Discover More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right-content">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="leather">
                                                <h4>Leather Bags</h4>
                                                <span>Latest Collection</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="first-image">
                                                <img src="assets/images/explore-image-01.jpg" alt />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="second-image">
                                                <img src="assets/images/explore-image-02.jpg" alt />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="types">
                                                <h4>Different Types</h4>
                                                <span>Over 304 Products</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ***** Explore Area Ends ***** */}
                {/* ***** Social Area Starts ***** */}
                <section className="section" id="social">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-heading">
                                    <h2>Social Media</h2>
                                    <span>Details to details is what makes Hexashop different from the other themes.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row images">
                            <div className="col-2">
                                <div className="thumb">
                                    <div className="icon">
                                        <a href="http://instagram.com">
                                            <h6>Fashion</h6>
                                            <i className="fa fa-instagram" />
                                        </a>
                                    </div>
                                    <img src="assets/images/instagram-01.jpg" alt />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="thumb">
                                    <div className="icon">
                                        <a href="http://instagram.com">
                                            <h6>New</h6>
                                            <i className="fa fa-instagram" />
                                        </a>
                                    </div>
                                    <img src="assets/images/instagram-02.jpg" alt />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="thumb">
                                    <div className="icon">
                                        <a href="http://instagram.com">
                                            <h6>Brand</h6>
                                            <i className="fa fa-instagram" />
                                        </a>
                                    </div>
                                    <img src="assets/images/instagram-03.jpg" alt />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="thumb">
                                    <div className="icon">
                                        <a href="http://instagram.com">
                                            <h6>Makeup</h6>
                                            <i className="fa fa-instagram" />
                                        </a>
                                    </div>
                                    <img src="assets/images/instagram-04.jpg" alt />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="thumb">
                                    <div className="icon">
                                        <a href="http://instagram.com">
                                            <h6>Leather</h6>
                                            <i className="fa fa-instagram" />
                                        </a>
                                    </div>
                                    <img src="assets/images/instagram-05.jpg" alt />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="thumb">
                                    <div className="icon">
                                        <a href="http://instagram.com">
                                            <h6>Bag</h6>
                                            <i className="fa fa-instagram" />
                                        </a>
                                    </div>
                                    <img src="assets/images/instagram-06.jpg" alt />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ***** Social Area Ends ***** */}
                {/* ***** Subscribe Area Starts ***** */}
                <div className="subscribe">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="section-heading">
                                    <h2>By Subscribing To Our Newsletter You Can Get 30% Off</h2>
                                    <span>Details to details is what makes Hexashop different from the other themes.</span>
                                </div>
                                <form id="subscribe" action method="get">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <fieldset>
                                                <input name="name" type="text" id="name" placeholder="Your Name" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-5">
                                            <fieldset>
                                                <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email Address" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-2">
                                            <fieldset>
                                                <button type="submit" id="form-submit" className="main-dark-button"><i className="fa fa-paper-plane" /></button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-4">
                                <div className="row">
                                    <div className="col-6">
                                        <ul>
                                            <li>Store Location:<br /><span>Sunny Isles Beach, FL 33160, United States</span></li>
                                            <li>Phone:<br /><span>010-020-0340</span></li>
                                            <li>Office Location:<br /><span>North Miami Beach</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul>
                                            <li>Work Hours:<br /><span>07:30 AM - 9:30 PM Daily</span></li>
                                            <li>Email:<br /><span>info@company.com</span></li>
                                            <li>Social Media:<br /><span><a href="#">Facebook</a>, <a href="#">Instagram</a>, <a href="#">Behance</a>, <a href="#">Linkedin</a></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ***** Subscribe Area Ends ***** */}
            </div >

        </>
    );
}

export default Home;