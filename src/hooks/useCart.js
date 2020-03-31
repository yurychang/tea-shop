import { useState, useEffect } from 'react'

export default function useCart() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  )
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  let cartCount = 0
  cart.forEach(el => (cartCount += el.amount))

  const addCart = (product, amount) => {
    const newProduct = { ...product, amount }
    const target = cart.find(el => el.id === newProduct.id)
    let newCart = []
    console.log(newProduct)
    if (target) {
      const filterCart = cart.filter(el => el.id !== newProduct.id)
      newCart = [...filterCart, newProduct]
    } else {
      newCart = [...cart, newProduct]
    }
    setCart(newCart)
  }

  const deleteCart = id => {
    const target = cart.find(el => el.id === id)
    if (target) {
      const filterCart = cart.filter(el => el.id !== id)
      const newCart = [...filterCart]
      setCart(newCart)
    }
  }

  const increaseCart = id => {
    const filterCart = cart.filter(el => el.id !== id)
    const target = cart.find(el => el.id === id)
    if (!target) {
      return
    }
    target.amount += 1
    const newCart = [...filterCart, target]
    setCart(newCart)
  }

  const decreaseCart = id => {
    const filterCart = cart.filter(el => el.id !== id)
    const target = cart.find(el => el.id === id)
    if (!target) {
      return
    }
    target.amount += 1
    const newCart = [...filterCart, target]
    setCart(newCart)
  }

  return { addCart, deleteCart, increaseCart, decreaseCart, cart, cartCount }
}
