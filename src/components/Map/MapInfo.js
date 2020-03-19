import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function MapInfo() {
  return (
    <>
      <div>
        <div className="teagarden-information">
          <h1>南投</h1>
          <thead>
            盛產:
            <tbody className="tea-type">
              凍頂烏龍茶 | 日月潭紅茶 | 凍頂貴妃茶 | 蜜香紅茶 | 高山茶
            </tbody>
          </thead>
          <thead>
            茶廠:
            <tbody className="tea-garden">
              日月潭老茶廠 | 和菓森林 | 銅鑼茶廠 | 東峰紅茶廠 | 大溪茶廠
            </tbody>
          </thead>

          <Carousel className="teagarden-carousel">
            <Carousel.Item>
              <img
                className="teagarden-carousel w-100"
                src="https://fakeimg.pl/800x400/"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="teagarden-carousel w-100"
                src="https://fakeimg.pl/800x400/"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="teagarden-carousel"
                src="https://fakeimg.pl/800x400/"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <thead className="teagarden-information">
            梨山、八仙山茶區
            <tbody>
              本茶區均屬臺中市和平區，為山區多雨之氣候型態，其地質狀態對茶葉製造有利，在雨季連續下雨後，其茶菁含水量相對較低，適合製造香氣高、滋味清醇之特色茶。本茶區栽培品種以青心烏龍為主，製造茶類為輕發酵之半球形部分發酵茶，因地理位置及海拔差異，兩區所產製之茶類特質略有差異。
              八仙山茶區之茶質滋味較濃稠。
              梨山茶區因海拔高、氣溫低，部分區段一年只能採收 2~3
              次，因其氣候冷涼，茶菁肥厚，成茶外觀色澤翠綠，水色蜜綠帶黃，香氣清揚，滋味清醇鮮爽為其最大特色。
            </tbody>
          </thead>
          <thead>
            梨山、八仙山茶區
            <tbody>
              本茶區均屬臺中市和平區，為山區多雨之氣候型態，其地質狀態對茶葉製造有利，在雨季連續下雨後，其茶菁含水量相對較低，適合製造香氣高、滋味清醇之特色茶。本茶區栽培品種以青心烏龍為主，製造茶類為輕發酵之半球形部分發酵茶，因地理位置及海拔差異，兩區所產製之茶類特質略有差異。
              八仙山茶區之茶質滋味較濃稠。
              梨山茶區因海拔高、氣溫低，部分區段一年只能採收 2~3
              次，因其氣候冷涼，茶菁肥厚，成茶外觀色澤翠綠，水色蜜綠帶黃，香氣清揚，滋味清醇鮮爽為其最大特色。
            </tbody>
          </thead>
        </div>
      </div>
    </>
  )
}

export default MapInfo
