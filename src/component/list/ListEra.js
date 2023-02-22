import { Search } from '@mui/icons-material';
import { width } from '@mui/system';
import React from 'react';
import Slider from 'react-slick';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}

        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
}

function ListEra({ listData , section }) {

    console.log(listData);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SamplePrevArrow />,
        prevArrow: <SampleNextArrow />,
        // variableWidth: true
    };

    return (
        <div>
            {/* <section className="section" id="men"> */}

            <div className="container menbox">

                <div className="row">

                    <div className="col-lg-12">
                        <Slider {...settings}>
                            {
                                listData.map((d, i) => {

                                    return (

                                        <div className="item">
                                            <div className="thumb">
                                                <div className="hover-content">
                                                    <ul>
                                                        <li><a href="single-product.html"><i className="fa fa-eye" /></a></li>
                                                        <li><a href="single-product.html"><i className="fa fa-star" /></a></li>
                                                        <li><a href="single-product.html"><i className="fa fa-shopping-cart" /></a></li>
                                                    </ul>
                                                </div>

                                                {console.log(d.img)}
                                                {console.log(`assets/images/men-0${d.img}.jpg`)}
                                                <img src={`assets/images/${section}-0${d.img}.jpg`} alt />
                                            </div>
                                            <div className="down-content">
                                                <h4>{d.name}</h4>
                                                <span>{d.price}</span>
                                                <ul className="stars">
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                </ul>
                                            </div>
                                        </div>
                                    )

                                })
                            }
                        </Slider>



                    </div>
                </div>
            </div>
            {/* </section> */}
        </div>
    );
}

export default ListEra;