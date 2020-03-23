import React, { useEffect, useState } from 'react'



function VendorList() {

    const [alldata, setAlldata] = useState([])

    async function getDataFromServer() {

        const request = new Request('http://localhost:3333/vendor/getallvendor', {
            method: 'GET',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'appliaction/json',
            }),

        })
        const response = await fetch(request)
        const data = await response.json()
        console.log(data);
        setAlldata(data)


    }

    useEffect(() => {
        getDataFromServer()
    }, [])


    const singlevendor = (
        <>
            {alldata.map((value, index) => {
                return (

                    <div className="card ls_singlevendor mr-3 mt-2">
                        <div className="ls_allstore-img">
                            <img className="" src={value.vendorImg} alt="" /></div>
                        <div className="card-body">
                            <h6 className="">{value.vendorName}</h6>
                            <div className="product-pretext mb-2">{value.Zone}</div>
                        </div>
                    </div>
                )
            })}
        </>)






    return (

        <>
            <div className="container d-flex">

                {singlevendor}

            </div>


        </>
    )
}

export default VendorList