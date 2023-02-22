import React from 'react';

function List({ listdata }) {

    // console.log(listdata);
    return (
        <>
            <section id="departments" className="departments">
                <div className="container">
                    <div className="row" >
                        {
                            listdata.map((l, i) => {
                                return (
                                    <div className="col-lg-6">
                                        <div className="member d-flex align-items-start">
                                            <div className="pic"><img src={l.Img} className="img-doctor" alt /></div>
                                            <div className="member-info">

                                                {
                                                    l.name === undefined ? 
                                                    <h4>{l.name}</h4>  :
                                                    <h4>{l.name}</h4>
                                                }
                                                
                                                {l.Des === undefined || l.Txt === undefined ?
                                                    <>
                                                        <span>Price : {l.price}</span>
                                                        <p>Quantity : {l.qua}</p>
                                                        <p>id : {l.id}</p>
                                                        <p>date : {l.date}</p>

                                                    </>
                                                    :
                                                    <>
                                                        <span>{l.Des}</span>
                                                        <p>{l.Txt}</p>

                                                        <div className="social">
                                                            <a href><i className="ri-twitter-fill" /></a>
                                                            <a href><i className="ri-facebook-fill" /></a>
                                                            <a href><i className="ri-instagram-fill" /></a>
                                                            <a href> <i className="ri-linkedin-box-fill" /> </a>
                                                        </div>
                                                    </>
                                                }

                                               
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );

}

export default List;