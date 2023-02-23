import React, { useEffect, useState } from 'react';
import ListEra from '../../component/list/ListEra';
// import Slider from 'react-slick';

function Women(props) {
    const [data, setData] = useState([]);
    const [fdata, setFdata] = useState()
    const [sdata, setSdata] = useState()
    const [sort, setSort] = useState()

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("women"));
        console.log(localData);
        if (localData !== null) {
            setData(localData);
        }
    }, []);

    console.log("******women********");
    console.log(JSON.parse(localStorage.getItem("women")));

    // ************************************SEARCH ***************************************

    const handleSearch = (value) => {
        console.log(value);

        if (value !== "") {
            let filteredData = data.filter((m) =>
            (
                m.name.toLowerCase().includes(value.toLowerCase())||
                m.price.toString().includes(value) 
            )
            );
            setFdata(filteredData)
        } else {
            setFdata()
            handleSort(sort, "women");       //3
        }

    }

    // *****************************************Sort*****************************************

    const handleSort = (val, empty = "") => {
        console.log(val);
        setSort(val);

        // // step 2
        // let fData = fdata ?  fdata :data ;     //1
        let fData = fdata && empty === "" ? fdata : data;     //4


        if (val !== "") {

            let fsData = fData.sort((a, b) => {    //2
                if (val === "hl") {
                    return b.price - a.price;
                } else if (val === "lh") {
                    return a.price - b.price;
                } else if (val === "az") {
                    return a.name.localeCompare(b.name)
                } else if (val === "za") {
                    return b.name.localeCompare(a.name)
                } else if (val === "dlh") {
                    return a.date > b.date ? 1 : -1
                } else if (val === "dhl") {
                    return b.date > a.date ? 1 : -1
                }
            })
            console.log(fsData);
            setSdata(fsData);

        } else {
            setSdata();
        }
    }

    // let finalData = sdata ? sdata :  data;
    // let finalData = sdata ? sdata :  mData ? mData : data;
    let finalData = fdata ? fdata : sdata ? sdata : data;
    return (
        <>

            {/* ***** women Area Starts ***** */}
            <div className='mainContainer'>

                <section className="section" id="women">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-heading">
                                    <h2>Women's Latest</h2>
                                    <span>Details to details is what makes Hexashop different from the other themes.</span>
                                </div>
                            </div>
                            <div className='sortFilCon'>
                                <input type="Search" onChange={(e) => handleSearch(e.target.value)} placeholder="Search" className='searchBox' />

                                <select id='sort' onChange={((e) => handleSort(e.target.value))} className='sortBox'>
                                    <option value="">sort</option>
                                    <option value="hl">Price High To low</option>
                                    <option value="lh">Price Low to High</option>
                                    <option value="az">Name A to Z</option>
                                    <option value="za">Name Z to A</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <ListEra listData={finalData} section={"women"} />
                            </div>
                        </div>
                    </div>
                </section >
            </div>
            {/* ***** Women Area Ends ***** */}

        </>
    );
}

export default Women;