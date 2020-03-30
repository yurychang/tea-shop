import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router'
import Slider from '@material-ui/core/Slider'
import img1 from '../images/01.jpg'
import img2 from '../images/shopping_cart-24px.svg'
import img3 from '../images/favorite-24px.svg'
import { Link } from 'react-router-dom'

function valuetext(value) {
  return `NT.${value}`
}
function Product(props) {
  const [total, setTotal] = useState([])
  const [addToCart, setAddToCart] = useState(0)
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  // const [totalDisplay, setTotalDisplay] = useState([])
  // const [dataLoading, setDataLoading] = useState(false)

  // 注意資料格式要設定，伺服器才知道是json格式
  async function getDataFromServer() {
    // 開啟載入指示
    // setDataLoading(true)

    const request = new Request('http://localhost:3333/product/try-get', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    // 設定資料
    setTotal(data)
    // return data
  }

  // 一開始就會開始載入資料
  useEffect(() => {
    getDataFromServer()
  }, [])

  console.log('total', total)

  // console.log(mapEat)

  // 價錢拉霸-----------------------------------------
  const [value, setValue] = React.useState([0, 800])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  //onImg-----------------------------------------
  const handleAddImg = (addImg, newAddImg) => {
    console.log('addImg')
  }
  // 搜尋
  // useEffect(() => {
  //   const featchList = async (query = 'total') => {
  //     try {
  //       const data = await featchList(search)

  //       data && setData(data)
  //     } catch (err) {
  //       throw err
  //     }
  //   }

  //   featchList(search)
  // }, [])

  return (
    <>
      <div className="container">
        <h1 className="pj_border-bottom-product">產品列表</h1>
        <div className="mb-4">
          <div className="row no-gutters">
            <div className="col-md-6">
              <div className="pj_box">
                <div className="pj_container-1">
                  <div className="form-group has-search">
                    <span className="fa fa-search form-control-feedback"></span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      // onChange={(ev => setSearch(ev.target.title), 300)}
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <p style={{ paddingRight: '10px' }}>price</p>
                  <input
                    className="pj_input-color"
                    type="number"
                    value={value[0]}
                    style={{ height: '25px', width: '80px' }}
                    disabled
                  />

                  <input
                    className="pj_input-color"
                    type="number"
                    value={value[1]}
                    style={{ height: '25px', width: '80px' }}
                    disabled
                  />
                </div>
                <div className="d-flex">
                  <Slider
                    max={9999}
                    min={0}
                    value={value}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    onChange={handleChange}
                    getAriaValueText={valuetext}
                    valueLabelFormat={valuetext}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6 ">
              <div className="pj_cart-tea">
                <h4>茶種</h4>
                <div className="pj_container-button">
                  <button type="button" className="pj_btn pj_button-green">
                    綠茶
                  </button>
                  <button type="button" className="pj_button-rad  pj_btn">
                    紅茶
                  </button>
                  <button type="button" className=" pj_btn pj_button ">
                    烏龍茶
                  </button>
                  <button type="button" className="pj_button-purple  pj_btn">
                    東方美人茶
                  </button>
                  <button type="button" className="pj_button-blue pj_btn">
                    鐵觀音茶
                  </button>
                  <button type="button" className="pj_button-yellow pj_btn">
                    普洱茶
                  </button>
                  <button type="button" className="pj_button-orange pj_btn">
                    金萱茶
                  </button>
                </div>
              </div>

              <div>
                <h4>風味</h4>
                <ul className="d-flex">
                  <div className="pj_container-button pj_cart-Flavor">
                    <button
                      type="button"
                      className="btn btn-outline-primary pj_cart-Flavor"
                    >
                      風味
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary pj_cart-Flavor"
                    >
                      風味
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-success pj_cart-Flavor"
                    >
                      風味
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger pj_cart-Flavor"
                    >
                      風味
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-warning pj_cart-Flavor"
                    >
                      風味
                    </button>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="card-deck row">
          {total
            ? total.map((el, i) => {
                return (
                  <>
                    <div className=" col-4 ">
                      <Link to={`/Commodity/${el.id}`} className="d-block">
                        <img
                          src={`http://localhost:3333/images/product/${el.img}`}
                          className="card-img-top"
                          alt=""
                          onClick={handleAddImg(el.id)}
                        />
                      </Link>

                      <div className="card-body">
                        <div className="pj_container-button pj_cart-Flavor">
                          <button
                            type="button"
                            className="btn btn-outline-primary pj_cart-Flavor"
                          >
                            風味
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary pj_cart-Flavor"
                          >
                            風味
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-success pj_cart-Flavor"
                          >
                            風味
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-danger pj_cart-Flavor"
                          >
                            風味
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-warning pj_cart-Flavor"
                          >
                            風味
                          </button>

                          <i
                            className="far fa-heart mt-2 pj_icon"
                            aria-hidden="true"
                          ></i>
                          {/* <i className="fas fa-heart mt-2" aria-hidden="true"></i> */}
                        </div>
                        <Link to={`/Commodity/${el.id}`} className="d-block">
                          <p
                            className="card-title"
                            style={{ fontSize: '18px' }}
                          >
                            {el.title}
                          </p>
                        </Link>
                        <p className="card-text" style={{ fontSize: '14px' }}>
                          {el.feaTure}
                        </p>
                      </div>
                      <div className="pj_card-footer">
                        <div>$NT{el.price}</div>
                        <img
                          src={img2}
                          alt=""
                          onClick={() => setAddToCart(addToCart + 1)}
                        />
                      </div>
                    </div>
                  </>
                )
              })
            : ''}
        </div>
      </div>
    </>
  )
}

export default withRouter(Product)
