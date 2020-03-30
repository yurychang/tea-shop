export default function updateCartNum(id, num) {
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  const filterCart = cart.filter(el => el.id !== id)
  const target = cart.find(el => el.id === id)
  if (!target) {
    return
  }
  target.amount = num
  const newCart = [...filterCart, target]
  localStorage.setItem('cart', JSON.stringify(newCart))
  return target.amount
}
