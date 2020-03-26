import React from 'react'
import Figure from 'react-bootstrap/Figure'
import vendorImg from '../../images/vendor/vendor-img.png'
import { withRouter } from 'react-router-dom'




function VendorInfo(props) {
    const city = { '11': '台北市', '12': '新北市', '13': '桃園市', '14': '基隆市', '15': '新竹縣', '16': '宜蘭縣', '21': '台中市', '22': '苗栗縣', '23': '彰化縣', '24': '南投縣', '25': '雲林縣', '31': '嘉義縣', '32': '台南市', '33': '高雄市', '34': '屏東縣', '35': '澎湖縣', '41': '花蓮縣', '42': '台東縣' }

    // const cityss = [
    //     {
    //         id: 11,
    //         zId: 1,
    //         name: '台北'
    //     }
    // ]



    const citynum = props.vendorZone
    console.log('citynum', citynum)


    const newcity = city[citynum]



    return (
        <>
            <div className="vendorInfo mt-3">
                <div className="ls_info-img mb-5">
                    <img
                        src={props.vendorImg} alt="" />
                </div>

                <h4 className="text-center">{props.vendorName}</h4>
                <hr />
                <div className="info">
                    <p className="text-center">商店資訊</p>
                    <p className="text-center">地區：{newcity}</p>
                    <p className="text-center">連絡電話：{props.vendorPhone}</p>
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

export default withRouter(VendorInfo)