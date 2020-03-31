import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router'
import Slider from '@material-ui/core/Slider'
import ProductCard from 'components/pj_event/productCard'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  setTeaFilter,
  setPriceFilter,
  fetchProducts,
  setInputFilter,
} from 'actions/products'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'

const teaType = [
  {
    id: 1,
    name: '果韻蜜香紅',
  },
  {
    id: 2,
    name: '正欉鐵觀音',
  },
  {
    id: 3,
    name: '奶香金萱',
  },
  {
    id: 4,
    name: '清香四季春',
  },
  {
    id: 5,
    name: '日月潭紅玉',
  },
  {
    id: 6,
    name: '蘭香翠玉',
  },
  {
    id: 7,
    name: '阿薩姆紅茶',
  },
  {
    id: 8,
    name: '東方美人茶',
  },
  {
    id: 7,
    name: '烏龍茶',
  },
]

function Product({
  filterTea,
  setTeaFilter,
  setPriceFilter,
  setInputFilter,
  fetchProducts,
  data,
}) {
  const [total, setTotal] = useState([])
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 })
  const [input, setInput] = useState('')
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
    fetchProducts()
  }, [])

  useEffect(() => {
    setPriceFilter(priceRange)
  }, [priceRange])

  useEffect(() => {
    setInputFilter(input)
  }, [input])

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
                      value={input}
                      onChange={e => setInput(e.target.value)}
                    />
                  </div>
                </div>
                <InputRange
                  maxValue={1000}
                  minValue={0}
                  value={priceRange}
                  onChange={value => setPriceRange(value)}
                />
                {/* <div className="d-flex">
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
                </div> */}
                {/* <div className="d-flex">
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
                </div> */}
              </div>
            </div>

            <div className="col-md-6 ">
              <div className="pj_cart-tea">
                <p className="mb-2 pl-1 fs-lg text-ff">茶種</p>
                <div className="pj_container-button">
                  {teaType.map(el => {
                    return (
                      <button
                        type="button"
                        onClick={() => setTeaFilter(el.id)}
                        className={`mb-1 mr-1 link-btn ${
                          filterTea == el.id ? 'active' : ''
                        }`}
                      >
                        {el.name}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-deck row">
          {data
            ? data.map(el => {
                return (
                  <div key={el.id} className="col-4 mb-4">
                    <ProductCard product={el} />
                  </div>
                )
              })
            : ''}
        </div>
      </div>
    </>
  )
}

const mapStateToProps = ({ products }) => {
  const { filterTea, data, priceRange, inputFilter } = products
  let filterData = data
  // 茶種篩選
  if (filterTea) {
    filterData = filterData.filter(el => el.tag == filterTea)
  }
  // 字串搜尋
  if (inputFilter) {
    filterData = filterData.filter(el => el.title.includes(inputFilter))
  }
  // 價格區間
  filterData = filterData.filter(el => {
    return el.price > priceRange.min && el.price < priceRange.max
  })

  return { filterTea, data: filterData }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { setTeaFilter, fetchProducts, setPriceFilter, setInputFilter },
    dispatch
  )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product))
