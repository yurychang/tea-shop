import React from 'react'
import Slider from '@material-ui/core/Slider'
import img1 from '../../images/01.jpg'
import img2 from '../../images/shopping_cart-24px.svg'

function valuetext(value) {
  return `NT.${value}`
}
function Product({ ...attrs }) {
  const [value, setValue] = React.useState([20, 37])

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
              <h4>茶種</h4>
              <div className="pj_box">
                <div className="pj_container-1">
                  <i className="fa fa-search" aria-hidden="true"></i>
                  <input type="text" placeholder="Search..." />
                </div>
                <div className="d-flex">
                  <p style={{ paddingRight: '10px' }}>price</p>
                  <input
                    type="number"
                    value={value[0]}
                    style={{ height: '25px', width: '50px' }}
                    disabled
                  />
                  <input
                    type="number"
                    value={value[1]}
                    style={{ height: '25px', width: '50px' }}
                    disabled
                  />
                </div>
                <div className="d-flex">
                  <Slider
                    max={40}
                    min={10}
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
                  <button type="button" className="btn btn-primary pj_btn">
                    綠茶
                  </button>
                  <button type="button" className="btn btn-secondary pj_btn">
                    紅茶
                  </button>
                  <button type="button" className="btn btn-success pj_btn">
                    烏龍茶
                  </button>
                  <button type="button" className="btn btn-danger pj_btn">
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
                  <div className="pj_container-button">
                    <button
                      type="button"
                      className="btn btn-outline-primary pj_btn"
                    >
                      風味
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary pj_btn"
                    >
                      風味
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-success pj_btn"
                    >
                      風味
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger pj_btn"
                    >
                      風味
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-warning pj_btn"
                    >
                      風味
                    </button>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="card-deck">
          <div className="card">
            <img src={img1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">古典日月英式紅茶 - 風華五十年 280g</h5>
              <p className="card-text">
                風華絕代五十年，山蔭長歌採茶人，香濃韻清照顏色 ......
              </p>
            </div>
            <div className="pj_card-footer">
              <div>NT $320</div>
              <img src={img2} alt="" onClick={handleAddToCart} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
