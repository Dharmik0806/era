import React, { useEffect, useState } from 'react';
import ListEra from '../../component/list/ListEra';

function Kid(props) {

    const [data, setData] = useState([]);
    const [sdata, setSdata] = useState();
    const [mData, setMdata] = useState()
    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("kid"));

        if (localData !== null) {
            setData(localData)
        }
    }, [])

    // ************************************SEARCH ***************************************
    const handleSearch = (value) => {
console.log(value);
    }

    // *****************************************Sort*****************************************


    let finalData = sdata ? sdata : data;

    return (
        <>
            {/* ***** Kids Area Starts ***** */}
            <div className='mainContainer'>

                <section className="section" id="kids">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-heading">
                                    <h2>Kid's Latest</h2>
                                    <span>Details to details is what makes Hexashop different from the other themes.</span>
                                </div>
                            </div>
                            <div className='sortFilCon'>
                                <input type="Search" onChange={(e) => handleSearch(e.target.value)} placeholder="Search" className='searchBox' />

                                {/* <select id='sort' onChange={((e) => handleSort(e.target.value))} className='sortBox'>
                                    <option value="">sort</option>
                                    <option value="hl">Price High To low</option>
                                    <option value="lh">Price Low to High</option>
                                    <option value="az">Name A to Z</option>
                                    <option value="za">Name Z to A</option>
                                </select> */}
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <ListEra listData={finalData} section={"kid"} />
                            </div>
                        </div>
                    </div>
                </section >
            </div>
            {/* ***** Kids Area Ends ***** */}

        </>
    );
}

export default Kid;