import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router'
import Slider from '@material-ui/core/Slider'
import img1 from '../../images/01.jpg'
import img2 from '../../images/shopping_cart-24px.svg'
import img3 from '../../images/favorite-24px.svg'
import { Link } from 'react-router-dom'

function valuetext(value) {
  return `NT.${value}`
}
function Product({ ...attrs }) {
  const [total, setTotal] = useState([])
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

  // ------map----

  // const mapEat = total.map(function(item, index, array) {
  //   if (item.i) {
  //     return `${item.title} `
  //   } else {
  //     return `${item.title} `
  //   }
  // })

  // console.log(mapEat)

  // 價錢拉霸-----------------------------------------
  const [value, setValue] = React.useState([0, 800])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const handleAddToCart = (event, newValue) => {
    console.log('addtocart')
  }
  // on-----------------------------------------
//   const [onimg, setOnimg] = useState([])
//   console.log('onimg',onimg)
// }

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
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <p style={{ paddingRight: '10px' }}>price</p>
                  <input
                    type="number"
                    value={value[0]}
                    style={{ height: '25px', width: '80px' }}
                    disabled
                  />

                  <input
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
                  <button type="button" className="btn btn btn-success  pj_btn">
                    綠茶
                  </button>
                  <button type="button" className="btn btn-danger  pj_btn">
                    紅茶
                  </button>
                  <button
                    type="button"
                    className=" pj_btn btn 
                  btn-secondary "
                  >
                    烏龍茶
                  </button>
                  <button type="button" className="btn btn-primary  pj_btn">
                    東方美人茶
                  </button>
                  <button type="button" className="btn btn-warning pj_btn">
                    鐵觀音茶
                  </button>
                  <button type="button" className="btn btn-info pj_btn">
                    普洱茶
                  </button>
                  <button type="button" className="btn btn-dark pj_btn">
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
                      <Link to="Commodity/id" className="d-block">
                        <img src={img1} className="card-img-top" alt="..." />
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
                        <Link to="Commodity" className="d-block">
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
                        <div>{el.price}</div>
                        <img src={img2} alt="" onClick={handleAddToCart} />
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

// const mapStateToProps = ({ product }, { match }) => {
//   const { params } = match
//   let cId = ''
//   let companyProduct = []
//   let product = {}
//   for (let i = 0; i < product.data?.length; i++) {
//     const el = product.data[i]
//     if (el.id.toString() === params.id.toString()) {
//       product = el
//       cId = product.cId
//     }
//   }
//   product.data.forEach(el => {
//     if (el.cId.toString() === cId.toString()) {
//       product.push(el)
//     }
//   })
//   return { product, companyProduct }
// }

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ fetchProduct, fetchCompanys }, dispatch)
// }

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product))
export default withRouter(Product)
