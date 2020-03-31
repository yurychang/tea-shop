import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from 'components/pj_event/productCard'



function VendorProduct() {

    const [productData, setProductData] = useState([])
    const vendorid = sessionStorage.getItem('vendorId')
    console.log(vendorid)

    //取得商品列表
    async function getProductDataFromServer() {
        const request = new Request('http://localhost:3333/vendor/getvendorproductlistuseparam/' + vendorid, {
            method: 'GET',
            // credentials: 'include',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'appliaction/json',
            }),
        })

        const response = await fetch(request)
        const data = await response.json()
        console.log('data', data);
        setProductData(data)
        console.log('productData', productData)

    }

    useEffect(() => {
        getProductDataFromServer()
    }, [])

    const singleProduct = (<>
        {productData.map((value, index) => {
            return (
                <div style={{ width: '250px' }}>
                    <ProductCard product={value} />
                </div>
                // <div className="card singleProduct mr-3 d-flex align-items-center">
                //     <div className="ls_p250 ">
                //     <img className="" src={`http://localhost:3333/images/${value.img}`} alt="" />
                //     </div>
                //     <div className="card-body">
                //         <div className="producttop mb-2 d-flex justify-content-between">
                //             <div className="ptag">
                //                 <button type="button" className="btn btn-outline-primary btn-xs mr-1">高海拔</button>
                //                 <button type="button" className="btn btn-outline-info btn-xs mr-1">無農藥</button>
                //                 <button type="button" className="btn btn-outline-danger btn-xs">蜜香紅茶</button>
                //             </div>
                //             <i className="far fa-heart mt-2"></i>
                //         </div>
                //         <Link to={`/Commodity/${value.id}`}><h6 className="">{value.title}</h6></Link>
                //         <div className="product-pretext mb-2">風華絕代50年，山蔭長歌採茶人......</div>
                //         <div className="productbottom d-flex justify-content-between">
                //             <div className="product-price">NTD {value.price}</div>
                //             <i className="fas fa-shopping-cart mt-1" />
                //         </div>
                //     </div>
                // </div>
            )
        })}
    </>)


    return (
        <>

            <div className="product d-flex flex-wrap ml-6">

                {singleProduct}

            </div>


        </>
    )
}

export default VendorProduct