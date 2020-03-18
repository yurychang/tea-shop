import React from 'react'
import { Link } from 'react-router-dom'



function BackendProduct() {


    return (
        <>
            <div className="content col-10">
                <h3>商品管理</h3>
                <hr />


                <form>
                    <div className="form-group">
                        <label>商品名稱</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <label>茶種</label>
                    <select className="custom-select mb-3" id="inputGroupSelect01">
                        <option selected>請選擇茶種</option>
                        <option value="1">紅茶</option>
                        <option value="2">綠茶</option>
                        <option value="3">烏龍茶</option>
                    </select>

                    <div className="form-group">
                        <label>分類</label>
                        <input type="text" className="form-control" />
                    </div>


                    <div className="form-group">
                        <label>價格</label>
                        <input type="text" className="form-control" />
                    </div>

                    <form className="">
                        <div className="mb-3">
                            <label for="validationTextarea">商品介紹</label>
                            <textarea className="form-control" id="validationTextarea" placeholder="" required />
                        </div>

                        <label>選擇商品圖</label>
                        <div className="input-group mb-4">
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" />
                                <label className="custom-file-label" >請點選圖片</label>
                            </div>
                        </div>
                                    </div>

                    <button type="submit" className="btn btn-primary" >新增商品</button>

                </form>


            </div>







        </>
    )
}

export default BackendProduct