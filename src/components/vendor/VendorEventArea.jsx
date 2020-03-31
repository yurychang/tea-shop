import React, { useEffect, useState } from 'react'
// import { withRouter } from 'react-router-dom'






function VendorEventArea() {


    const [eventData, setEventData] = useState([])
    const vendorid = sessionStorage.getItem('vendorOnlyId')

    async function getDataFromServer() {

        const request = new Request('http://localhost:3333/vendor/getvendoreventlist/' + vendorid, {
            method: 'GET',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'appliaction/json',
            }),
        })
        const response = await fetch(request)
        const data = await response.json()
        console.log(data);
        setEventData(data)
    }

    useEffect(() => {
        getDataFromServer()
    }, [])

    const eventlist = (<>
        {eventData.map((value, index) => {
            return(
            <div class="card singleevent mb-3">
                <div class="d-flex justify-content">
                    <div class="vendorEventImg">
                        <img src="https://via.placeholder.com/200" alt="" />
                    </div>
                    <div class="card-body eventVendorInfo ">
                        <h5 class="card-title eventTitle">{value.title}</h5>
                        <div class="vendorEventContent"></div>
                        <div class="d-flex justify-content-between align-items-end">
                            <div></div>
                            <div><i class="fas fa-map-marker-alt"></i>{value.location}</div>
                        </div>
                    </div>
                </div>
            </div>
            )

        })}
    </>)



    return (
        <>
            <div className="eventscontent mr-5 col-8">

                {eventlist}



            </div>


        </>
    )
}

export default VendorEventArea