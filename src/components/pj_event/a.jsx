import React, { useState, useEffect } from 'react'

function Cart() {
  const [mycart, setMycart] = useState([])
  const [mycartDisplay, setMycartDisplay] = useState([])
  const [dataLoading, setDataLoading] = useState(false)

  async function getCartFromLocalStorage() {
    // 開啟載入指示
    setDataLoading(true)

    const newCart = localStorage.getItem('cart') || []

    console.log(JSON.parse(newCart))

    // 設定資料
    setMycart(JSON.parse(newCart))
  }

  //   async function updateTotalToLocalStorage(value) {
  //     // 開啟載入指示
  //     setDataLoading(true)

  //     const newTotal = +total + value
  //     localStorage.setItem('total', newTotal)

  //     // 設定資料
  //     setTotal(newTotal)
  //   }

  // 一開始就會開始載入資料
  useEffect(() => {
    getCartFromLocalStorage()
  }, [])

  // 每次mycart資料有變動就會3秒後關掉載入指示
  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false)
    }, 500)

    let newMycartDisplay = []

    console.log('mycartDisplay', mycartDisplay)
    console.log('mycart', mycart)

    //尋找mycartDisplay
    for (let i = 0; i < mycart.length; i++) {
      //尋找mycartDisplay中有沒有此mycart[i].id
      //有找到會返回陣列成員的索引值
      //沒找到會返回-1
      const index = newMycartDisplay.findIndex(
        value => value.id === mycart[i].id
      )
      //有的話就數量+1
      if (index !== -1) {
        console.log('findindex', index)
        //每次只有加1個數量
        //newMycartDisplay[index].amount++
        //假設是加數量的
        newMycartDisplay[index].amount += mycart[i].amount
      } else {
        //沒有的話就把項目加入，數量為1
        const newItem = { ...mycart[i] }
        newMycartDisplay = [...newMycartDisplay, newItem]
      }
    }

    console.log(newMycartDisplay)
    setMycartDisplay(newMycartDisplay)
  }, [mycart])

  const sum = items => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].price
    }
    return total
  }

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <>
      <ul className="list-group">
        {mycartDisplay.map((value, index) => {
          return (
            <li className="list-group-item" key={value.id}>
              產品：{value.name}/數量：{value.amount}/單價：{value.price}/
              {'   '}
              小計：{value.amount * value.price}
            </li>
          )
        })}
      </ul>
      <h3>總價：{sum(mycartDisplay)}</h3>
    </>
  )

  return (
    <>
      <div className="container">{dataLoading ? loading : display}</div>
    </>
  )
}

export default Cart
