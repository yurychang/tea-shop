import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



function BackendEvents() {

    const [eventData, setEventData] = useState([])

    async function getDataFromServer() {

        const request = new Request('http://localhost:3333/vendor/getvendorbackevents', {
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
        setEventData(data)
    }

    useEffect(() => {
        getDataFromServer()
    }, [])

    const eventlist = (<>
        {eventData.map((value, index) => {
            return (
                <div className="card mb-4">
                    <div className="card-header d-flex justify-content-between">
                        <div className="account"></div>
                        <div className="order-number">活動編號:20200331{value.id}</div>
                    </div>
                    <div className="card-body d-flex justify-content-between align-items-center">
                        <div className="eventPreview">{value.title}</div>
                        <div>
                            <button className="btn btn-primary mb-2 ">編輯活動</button>
                        </div>
                    </div>
                </div>

            )

        })}

    </>)







    return (
        <>
            <div className="content">
                <h3>活動管理</h3>
                <hr />
                <ul className="nav ">
                    <li className="nav-item">
                        <Link className="nav-link active" to="#">全部活動</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">進行中活動</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">已過期活動</Link>
                    </li>
                </ul>
                <div className="d-flex justify-content-end  mb-2">
                    <button className="btn btn-primary ">新增活動</button>
                </div>

                {eventlist}




            </div>




        </>
    )
}

export default BackendEvents