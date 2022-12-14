import $ from 'jquery'
import ReactDOM from 'react-dom';
import data from "./data/products.json"
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import star from "../assets/images/star.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faIndianRupee } from '@fortawesome/free-solid-svg-icons'
// import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons'
import { faRupeeSign } from '@fortawesome/fontawesome-free-solid'
import Loadercomponent from './loader';
import Loader from "react-js-loader";


export default function Productbrand() {
    const [stock, setStock] = useState(6);
    // const [more_btn, setStock] = useState(6);
    const [pd, setPd] = useState([]);
    const [onbtn, setBtn] = useState(true)
    const [complitedata, setComplitedata] = useState("")
    const [isloading, setIsloading] = useState(false)

    useEffect(() => {
        console.log(stock);
        const total_lenth = data.products.length;
        if (stock == total_lenth) {
            setBtn(false)

        }

        for (var i = 0; i < stock; i++) {
            // pd = ;
            setPd((data.products).slice(0, stock))
            // console.log(pd.length);


        }
    }, [stock]);

    // useEffect(()=>{

    //     setTimeout(() => {
    //         setIsloading(true);
    //     }, 1000);
    // })
    console.log(pd)
    function newset() {
        for (var i = 0; i < pd.length; i++) {
            console.log(pd.details.phoneBrand);
        }

    }

    return (
        <>
        
            <div className="brand">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage">
                                <h2>Our Brand</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="brand-bg">
                    <div className="container">
                        <div className="row">
                            {
                                pd.map(product => {
                                    console.log(product);
                                    return (
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">

                                            <div className="brand_box">
                                                <Link to={`/productDetails/${product.id}`}><img src={product.img} alt="img" /></Link>
                                                <p></p>
                                                <span style={{ fontSize: "16px" }}>{product.name}</span>
                                                <h3><strong className="red" style={{}}>
                                                    {/* <FontAwesomeIcon icon='indian-rupee' /> */}
                                                    <FontAwesomeIcon icon="rupee-sign" size="8px" />
                                                    {product.prize}</strong></h3>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {/* <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">
                                <div className="brand_box">
                                    {
                                        data.products.map(product => product.name)
                                    }
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">
                                <div className="brand_box">

                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">
                                <div className="brand_box">

                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                <div className="brand_box">

                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mrgn">
                                <div className="brand_box">

                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mrgn">
                                <div className="brand_box">

                                </div>
                            </div> */}
                            
                            <div className="col-md-12" >
                                {onbtn ? <button className="read-more" onClick={() => setStock(stock + 3)} id="btnp">See More</button> : '' }


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export function Productpage() {
    return (
        <>
            <div>
                <div className="brand_color">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="titlepage">
                                    <h2>Our Brand</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="brand">
                    <div className="container">
                    </div>
                    <div className="brand-bg">
                        <div className="container">
                            <div className="row">
                                {data.products.map(vale => {
                                    return (
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">
                                            <div className="brand_box">
                                                {/* <img src={vale.img} alt="img" /> */}
                                                <Link to={`/productDetails/${vale.id}`}><img src={vale.img} alt="img" /></Link>
                                                <h3><strong className="red">
                                                    <FontAwesomeIcon icon="rupee-sign" size="8px" />
                                                    {vale.prize}</strong></h3>
                                                <span>{vale.name}</span>
                                                <i><img src={star} /></i>
                                                <i><img src={star} /></i>
                                                <i><img src={star} /></i>
                                                <i><img src={star} /></i>
                                            </div>
                                        </div>

                                    )
                                })}

                                {/* <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">
                                    <div className="brand_box">
                                        <img src="images/2.png" alt="img" />
                                        <h3>$<strong className="red">100</strong></h3>
                                        <span>Mobile Phone</span>
                                        <i><img src="images/star.png" /></i>
                                        <i><img src="images/star.png" /></i>
                                        <i><img src="images/star.png" /></i>
                                        <i><img src="images/star.png" /></i>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">
                                    <div className="brand_box">
                                        <img src="images/3.png" alt="img" />
                                        <h3>$<strong className="red">100</strong></h3>
                                        <span>Mobile Phone</span>
                                        <i><img src="images/star.png" /></i>
                                        <i><img src="images/star.png" /></i>
                                        <i><img src="images/star.png" /></i>
                                        <i><img src="images/star.png" /></i>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                    <div className="brand_box">
                                        <img src="images/4.png" alt="img" />
                                        <h3>$<strong className="red">100</strong></h3>
                                        <span>Mobile Phone</span>
                                        <i><img src="images/star.png" /></i>
                                        <i><img src="images/star.png" /></i>
                                        <i><img src="images/star.png" /></i>
                                        <i><img src="images/star.png" /></i>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mrgn">
                                    <div className="brand_box">
                                        <img src="images/5.png" alt="img" />
                                        <h3>$<strong className="red">100</strong></h3>
                                        <span>Mobile Phone</span>
                                        <i><img src="images/star.png" /></i>
                                        <i><img src="images/star.png" /></i>
                                        <i><img src="images/star.png" /></i>
                                        <i><img src="images/star.png" /></i>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mrgn">
                                    <div className="brand_box">
                                        <img src="images/6.png" alt="img" />
                                        <h3>$<strong className="red">100</strong></h3>
                                        <span>Mobile Phone</span>
                                        <i><img src="images/star.png" /></i>
                                        <i><img src="images/star.png" /></i>
                                        <i><img src="images/star.png" /></i>
                                        <i><img src="images/star.png" /></i>
                                    </div>
                                </div> */}
                                <div className="col-md-12">
                                    <a className="read-more">See More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
