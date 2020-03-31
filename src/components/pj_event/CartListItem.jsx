import React from 'react'

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

function findName(id) {
  const target = teaType.find(el => +el.id === +id)
  return target?.name
}

export default function CartListItem({ product, deleteCart }) {
  return (
    <>
      <tr>
        <th scope="row">
          <div className="p-2 ">
            <img
              className="pj_cartList-img"
              src={`http://localhost:3333/images/product/${product.img}`}
              alt=""
            />
          </div>
        </th>
        <td className=" align-middle" style={{ fontSize: '14px' }}>
          {product?.title}
        </td>
        <td className=" align-middle pj_white-space">
          <strong> {findName(product.tag)}</strong>
        </td>
        <td className=" align-middle pj_white-space">
          <strong>{product?.unit}包</strong>
        </td>
        <td className=" align-middle pj_white-space">
          <strong>${product?.price}</strong>
        </td>
        <td className=" align-middle pj_white-space">
          <strong>{product?.amount}</strong>
        </td>
        <td className=" align-middle pj_white-space">
          <strong>${product?.price * product?.amount}</strong>
        </td>
        <td className=" align-middle pj_white-space">
          <button
            type="button"
            class="btn btn-outline-danger"
            onClick={() => deleteCart(product.id)}
            style={{
              fontSize: '12px',
              width: '40px',
              height: '30px',
              padding: 0,
            }}
          >
            刪除
          </button>
        </td>
      </tr>
    </>
  )
}
