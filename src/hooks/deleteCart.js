// export default function deleteCart(id) {
//   const cart = JSON.parse(localStorage.getItem('list')) || []
//   const target = cart.find(el => el.id === id)
//   if (target) {
//     const filterCart = cart.filter(el => el.id !== id)
//     const newCart = [...filterCart]
//     localStorage.setItem('list', JSON.stringify(newCart))
//   }
// }
export default function deleteCart(id) {
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  const target = cart.find(el => el.id === id)
  if (target) {
    const filterCart = cart.filter(el => el.id !== id)
    const newCart = [...filterCart]
    localStorage.setItem('cart', JSON.stringify(newCart))
    return newCart.length
  }
  return cart.length
}
