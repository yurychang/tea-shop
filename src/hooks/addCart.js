export default function addCart(product, amount) {
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  const newProduct = { ...product, amount }
  const target = cart.find(el => el.id === newProduct.id)
  if (target) {
    const filterCart = cart.filter(el => el.id !== newProduct.id)
    const newCart = [...filterCart, newProduct]
    localStorage.setItem('cart', JSON.stringify(newCart))
    return newCart.length
  } else {
    const newCart = [...cart, newProduct]
    localStorage.setItem('cart', JSON.stringify(newCart))
    return newCart.length
  }
}
