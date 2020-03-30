import React from 'react'
import Slider from '@material-ui/core/Slider'
import img1 from '../../images/01.jpg'
import img2 from '../../images/shopping_cart-24px.svg'
import img3 from '../../images/favorite-24px.svg'

function valuetext(value) {
  return `NT.${value}`
}
function Product({ ...attrs }) {
  const [value, setValue] = React.useState([1000, 5000])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const handleAddToCart = (event, newValue) => {
    console.log('addtocart')
  }

  return (
    <>
      <div className="container">
        <h1 className="pj_border-bottom-product">產品列表</h1>
        <div className="mb-4">
          <div className="row no-gutters">
            <div className="col-md-6">
              <div className="pj_box">
                <div className="pj_container-1">
                  <div class="form-group has-search">
                    <span class="fa fa-search form-control-feedback"></span>
                    <input
                      type="text"
                      class="form-control"
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
                    max={10000}
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
          <div className=" col-4 ">
            <img src={img1} className="card-img-top" alt="..." />
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

                <i className="far fa-heart mt-2 pj_icon" aria-hidden="true"></i>
                {/* <i className="fas fa-heart mt-2" aria-hidden="true"></i> */}
              </div>
              <p className="card-title" style={{ fontSize: '18px' }}>
                古典日月英式紅茶 - 風華五十年 280g
              </p>
              <p className="card-text" style={{ fontSize: '14px' }}>
                風華絕代五十年，山蔭長歌採茶人，香濃韻清照顏色 ......
              </p>
            </div>
            <div className="pj_card-footer">
              <div>NT $320</div>
              <img src={img2} alt="" 
              onClick=={()=>{handleAddToCart({
                title,
              })}}
               />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
