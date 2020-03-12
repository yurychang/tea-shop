import React from 'react'
import Figure from 'react-bootstrap/Figure'
import vendorImg from '../../images/vendor-img.png'




function VendorInfo() {
    return (
        <>
            <div className="vendorInfo mt-3">
                <div className="vendortest">
                <Figure className="roundedCircle">
                    <Figure.Image
                        width={200}
                        height={200}
                        src={vendorImg}
                    />
                </Figure>
                </div>

                <h4 className="text-center">吉林茶園</h4>
                <hr />
                <div className="info">
                    <p className="text-center">商店資訊</p>
                    <p className="text-center">地區：花蓮縣</p>
                    <p className="text-center">連絡電話： 03-887-1463</p>
                </div>
                <hr />
                <div className="star">
                    <p className="text-center">商店評價</p>
                </div>

                <div className="vhup"></div>

            </div>

        </>
    )
}

export default VendorInfo