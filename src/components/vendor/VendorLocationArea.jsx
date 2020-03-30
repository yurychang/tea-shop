import React, { useState, useEffect } from 'react'



function VendorLocationArea() {


    const [locationData, setLocationData] = useState([])
    const vendorid = sessionStorage.getItem('vendorId')

    async function getDataFromServer() {

        const request = new Request('http://localhost:3333/vendor/getvendorlocation/'+ vendorid, {
            method: 'GET',
            credentials: 'include',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'appliaction/json',
            }),
        })
        const response = await fetch(request)
        const data = await response.json()
        console.log(data);
        setLocationData(data)
    }

    useEffect(() => {
        getDataFromServer()
    }, [])

    const locationlist = (
        <>
            {locationData.map((value, index) => {
                return (
                    <div class="card ls_locationInfo mb-3">
                        <div class="d-flex justify-content">
                            <div class="card-body ">
                                <h5 class="card-title eventTitle">{value.locationName}</h5>
                                <div class="">地址:{value.locationAddress}</div>
                                <div class="">電話:{value.locationPhone}</div>
                            </div>
                        </div>
                    </div>

                )
            })}
        </>)




    return (
        <>

            <div className="product flex-wrap col-8 ">


                {locationlist}

            </div>




        </>
    )
}

export default VendorLocationArea