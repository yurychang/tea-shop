import React from 'react'

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
          <strong>{product?.tag}</strong>
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
