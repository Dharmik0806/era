import React, { useEffect, useState } from 'react';
import ListEra from '../../component/list/ListEra';
// import Slider from 'react-slick';

function Women(props) {
    const [data, setData] = useState([])
    const [sdata, setSdata] = useState();
    const [mData, setMdata] = useState();
    const [sort, setSort] = useState()


    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("women"));
        console.log("Women 9");
        console.log(localData);

        if (localData !== null) {
            setData(localData)
        }
    }, []);

    // ************************************SEARCH ***************************************

    const handleSearch = (value) => {
        console.log(value);
        if (value !== "") {
            let fData = data.filter((a) =>
            (
                a.name.toLowerCase().includes(value.toLowerCase()) ||
                a.price.toString().includes(value)
            )
            )
            setSdata(fData)
            console.log(fData);
        } else {
            setSdata()
            handleSort(sort, "yes");
        }
    }


    // *****************************************Sort*****************************************

    const handleSort = (sValue) => {
        console.log(sValue);

        if (sValue !== "") {
            let sortData = data.sort((a, b) => {
                if (sValue === "hl") {
                    return b.price - a.price;
                } else if (sValue === "lh") {
                    return a.price - b.price;
                } else if (sValue === "az") {
                    return a.name.localeCompare(b.name);
                } else if (sValue === "za") {
                    return b.name.localeCompare(a.name)
                }
            })
            console.log(sortData);
        } else {
            setMdata()
        }
    }
    

    let finalData = sdata ? sdata : data;
    return (
        <>

            {/* ***** Women Area Starts ***** */}
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