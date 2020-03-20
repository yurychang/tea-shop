import React, { useState } from 'react'




function BackendData() {

    const welcomeText = "您好，歡迎光臨，希望我們提供的商品您會喜歡!"

    const [imgUrl, setImgUrl] = useState('')
    const [imgUrl2, setImgUrl2] = useState('')

    const [vendorName, setVendorName] = useState('')
    const [vendorEmail, setVendorEmail] = useState('')
    const [vendorPhone, setVendorPhone] = useState('')
    const [vendorZone, setVendorZone] = useState('')
    const [vendorAddress, setVendorAddress] = useState('')
    const [vendorImg, setVendorImg] = useState('')
    const [vendorAbout, setVendorAbout] = useState('')
    const [vendorBanner, setVendorBanner] = useState('')

    const localId = localStorage.getItem('vendorId')







    const handleUserImg = (e) => {
        const content = e.target.result;
        // console.log('file content', content)
        // You can set content in state and show it in render.
        setImgUrl(content)



    }

    const handleChangeUserImg = (file) => {
        const fileData = new FileReader();
        fileData.onloadend = handleUserImg;
        fileData.readAsDataURL(file);

    }

    const handleBannerImg = (e) => {
        const content = e.target.result;
        // console.log('file content', content)
        // You can set content in state and show it in render.
        setImgUrl2(content)

    }

    const handleChangeBannerImg = (file) => {
        const fileData = new FileReader();
        fileData.onloadend = handleBannerImg;
        fileData.readAsDataURL(file);
    }

    const handleSubmit = (event) => {

        event.preventDefault()

        const vendorUpdate = { vendorName, vendorEmail, vendorPhone, vendorZone, vendorAddress, vendorImg, vendorAbout, vendorBanner, localId }

        sendRegisterDataToServer(vendorUpdate, () => alert('更新成功'))


        async function sendRegisterDataToServer(vendorUpdate, callback) {
            // 注意資料格式要設定，伺服器才知道是json格式
            const request = new Request('http://127.0.0.1:3333/vendor/updatedata', {
                method: 'POST',
                body: vendorUpdate,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                },
            })

            const response = await fetch(request)
            console.log('response', response);
            const data = await response.json()
            callback()
            return data;
        }





    }





    return (
        <>
            <div className="content col-10">
                <h3>資料管理</h3>
                <hr />
                <form className="form-data mb-5" encType="multipart/form-data">
                    <div className="data-area d-flex justify-content-between">

                        <div className="form-area col-6">

                            <div className="form-group">
                                <label>廠商名稱</label>
                                <input type="text" className="form-control" placeholder="" name="vendorName" onChange={e => setVendorName(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label>E-mail</label>
                                <input type="email" className="form-control" name="vendorEmail" onChange={e => setVendorEmail(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label>手機號碼</label>
                                <input type="text" className="form-control" name="vendorPhone" onChange={e => setVendorPhone(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label>地址</label>
                                <br />
                                <select className="custom-select mb-2 col-5" name="vendorZone" onChange={e => setVendorZone(e.target.value)}>
                                    <option selected>選擇縣市</option>
                                    <option value="1">台北市</option>
                                    <option value="2">新北市</option>
                                    <option value="3">新竹市</option>
                                </select>
                                <input type="text" className="form-control" name="vendorAddress" onChange={e => setVendorAddress(e.target.value)} />
                            </div>


                        </div>



                        <div className="img-area col-5">
                            <div className="figure ls_W300">
                                <img className="figure-img img-fluid rounded" src={imgUrl} alt="" />
                            </div>
                            <input type="file" name="vendorImg" onChange={e =>
                                handleChangeUserImg(e.target.files[0])} />
                        </div>
                    </div>



                    <div className="mt-5 mb-5">
                        <label>關於商店</label>
                        <textarea className="form-control" value={welcomeText} placeholder="" required name="vendorAbout" onChange={e => setVendorAbout(e.target.value)} />

                    </div>


                    <div className="">
                        <label> 商店Banner</label>
                        <div className="figure ls_W800">
                            <img className="figure-img img-fluid rounded" src={imgUrl2} alt="" />
                        </div>
                        <input type="file" name="vendorBanner" onChange={e =>
                            handleChangeBannerImg(e.target.files[0])} />
                    </div>

                    <button type="submit" className="btn btn-main col-3" onClick={event => handleSubmit(event)}>更新</button>
                </form>


            </div>


        </>
    )
}

export default BackendData