import React from 'react'
import '../../style/Shoping/Shopingcar.scss'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from 'react-router-dom'
// import Carousel from '../components/Navigation_Navber/Carousel'

const Shopingcar = () => {
  return (
    <>
      <section className="content_shoping">
        <Container>
          <Row>
            <Col md={12} xs={12}>
              <article className="">
                <div className="entry-content">
                  <div className="woocommerce">
                    <div className="woocommerce-notices-wrapper"></div>
                    <form
                      className="woocommerce-cart-form text-align-center"
                      action="#"
                      method="post"
                    >
                      <table
                        className="shop_table shop_table_responsive col-md-12 woocommerce-cart-form__contents"
                        cellspacing="0"
                      >
                        <thead className="shop_table_thead">
                          <tr>
                            <th className="product-remove">&nbsp;</th>
                            <th className="product-thumbnail">&nbsp;</th>
                            <th className="product-name">Product</th>
                            <th className="product-price">Price</th>
                            <th className="product-quantity">Quantity</th>
                            <th className="product-subtotal">Total</th>
                          </tr>
                        </thead>
                        <tbody className="shop_table_body">
                          <tr className="woocommerce-cart-form__cart-item cart_item">
                            <td className="product-remove">
                              <a
                                href="#"
                                className="remove"
                                aria-label="Remove this item"
                                data-product_id="682"
                                data-product_sku=""
                              >
                                &times;
                              </a>
                            </td>
                            <td className="product-thumbnail">
                              <a href="#">
                                <img
                                  width="162"
                                  height="300"
                                  src="http://okthemes.com/villenoir/wp-content/uploads/2016/03/Red-Pinot-Noir-w-cup.png"
                                  className="attachment-9999x300 size-9999x300"
                                  alt=""
                                />
                              </a>
                            </td>
                            <td className="product-name" data-title="Product">
                              <a href="#">VillenoirPinot Noir</a>{' '}
                            </td>
                            <td className="product-price" data-title="Price">
                              <span className="woocommerce-Price-amount amount">
                                189,00&nbsp;
                                <span className="woocommerce-Price-currencySymbol">
                                  &euro;
                                </span>
                              </span>
                            </td>
                            <td
                              className="product-quantity"
                              data-title="Quantity"
                            >
                              <div className="quantity buttons_added">
                                <input
                                  type="button"
                                  value="-"
                                  className="minus"
                                ></input>
                                <label
                                  className="screen-reader-text"
                                  for="quantity_5dcb88c341594"
                                >
                                  Villenoir Pinot Noir quantity
                                </label>
                                <input
                                  type="number"
                                  id="quantity_5dcb88c341594"
                                  className="input-text qty text"
                                  step="1"
                                  min="0"
                                  max
                                  value="1"
                                  title="Qty"
                                  size="4"
                                  inputmode="ntmeric"
                                ></input>
                                <input
                                  type="button"
                                  value="+"
                                  className="plus"
                                ></input>
                              </div>
                            </td>
                            <td className="product-subtotal" data-title="Total">
                              <span className="woocommerce-Price-amount amount">
                                189,00&nbsp;
                                <span className="woocommerce-Price-currencySymbol">
                                  &euro;
                                </span>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="6" className="actions">
                              <div className="coupon">
                                <div className="input-group">
                                  <span className="input-group-addon">
                                    <label for="coupon_code">Coupon code</label>
                                  </span>
                                  <input
                                    type="text"
                                    name="coupon_code"
                                    className="input-text form-control"
                                    id="coupon_code"
                                    value=""
                                  />
                                  <span className="input-group-btn">
                                    <input
                                      type="submit"
                                      className="button btn btn-primary"
                                      name="apply_coupon"
                                      value="Apply"
                                    />
                                  </span>
                                </div>
                              </div>
                              <input
                                type="hidden"
                                id="_wpnonce"
                                name="_wpnonce"
                                value="ccaefa2a03"
                              />
                              <input
                                type="hidden"
                                name="_wp_http_referer"
                                value="/villenoir/cart/"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <Col md={12} className="cart-collaterals">
                        <div className="cross-sells">
                          <h2>You may be interested in&hellip;</h2>
                          <Row>
                            <ul className="products">
                              <li className="col-xl-6 col-xs-12 col-sm-12 col-md-12 post-686 product type-product status-publish has-post-thumbnail product_cat-white-wines member-discount discount-restricted first instock shipping-taxable purchasable product-type-simple">
                                <a
                                  href="#"
                                  className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                                >
                                  <h2 className="woocommerce-loop-product__title">
                                    Villenoir Riesling
                                  </h2>
                                  <div className="gg-product-image-wrapper">
                                    <img
                                      width="1400"
                                      height="2225"
                                      src="http://okthemes.com/villenoir/wp-content/uploads/2016/03/White-Riesling-w-cup.png"
                                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                      alt=""
                                      srcset="http://okthemes.com/villenoir/wp-content/uploads/2016/03/White-Riesling-w-cup.png 1400w, http://okthemes.com/villenoir/wp-content/uploads/2016/03/White-Riesling-w-cup-189x300.png 189w, http://okthemes.com/villenoir/wp-content/uploads/2016/03/White-Riesling-w-cup-768x1221.png 768w, http://okthemes.com/villenoir/wp-content/uploads/2016/03/White-Riesling-w-cup-644x1024.png 644w"
                                      sizes="(max-width: 1400px) 100vw, 1400px"
                                    />
                                  </div>
                                </a>
                                <div className="gg-product-meta-wrapper">
                                  <dl>
                                    <dt>Year</dt>
                                    <dd>
                                      <span className="year">2012</span>
                                    </dd>
                                    <dt>Price </dt>
                                    <dd>
                                      <span className="price">
                                        <span className="woocommerce-Price-amount amount">
                                          165,00&nbsp;
                                          <span className="woocommerce-Price-currencySymbol">
                                            &euro;
                                          </span>
                                        </span>
                                      </span>
                                    </dd>
                                  </dl>
                                  <a
                                    href="#"
                                    data-quantity="1"
                                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                    data-product_id="686"
                                    data-product_sku=""
                                    aria-label="Add &ldquo;Villenoir Riesling&rdquo; to your cart"
                                    rel="nofollow"
                                  >
                                    Add to cart
                                  </a>
                                </div>
                              </li>
                              <li className="col-xl-6 col-xs-12 col-sm-12 col-md-12 post-684 product type-product status-publish has-post-thumbnail product_cat-white-wines member-discount discount-restricted last instock shipping-taxable purchasable product-type-simple">
                                <a
                                  href="#"
                                  className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                                >
                                  <h2 className="woocommerce-loop-product__title">
                                    Villenoir Chardonnay
                                  </h2>
                                  <div className="gg-product-image-wrapper">
                                    <img
                                      width="1400"
                                      height="2225"
                                      src="http://okthemes.com/villenoir/wp-content/uploads/2016/03/White-Chardonnay-w-cup.png"
                                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                      alt=""
                                      srcset="http://okthemes.com/villenoir/wp-content/uploads/2016/03/White-Chardonnay-w-cup.png 1400w, http://okthemes.com/villenoir/wp-content/uploads/2016/03/White-Chardonnay-w-cup-189x300.png 189w, http://okthemes.com/villenoir/wp-content/uploads/2016/03/White-Chardonnay-w-cup-768x1221.png 768w, http://okthemes.com/villenoir/wp-content/uploads/2016/03/White-Chardonnay-w-cup-644x1024.png 644w"
                                      sizes="(max-width: 1400px) 100vw, 1400px"
                                    />
                                  </div>
                                </a>
                                <div className="gg-product-meta-wrapper">
                                  <dl>
                                    <dt>Year </dt>
                                    <dd>
                                      <span className="year">2014</span>
                                    </dd>

                                    <dt>Price </dt>
                                    <dd>
                                      <span className="price">
                                        <span className="woocommerce-Price-amount amount">
                                          236,00&nbsp;
                                          <span className="woocommerce-Price-currencySymbol">
                                            &euro;
                                          </span>
                                        </span>
                                      </span>
                                    </dd>
                                  </dl>
                                  <a
                                    href="#"
                                    data-quantity="1"
                                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                    data-product_id="684"
                                    data-product_sku=""
                                    aria-label="Add &ldquo;Villenoir Chardonnay&rdquo; to your cart"
                                    rel="nofollow"
                                  >
                                    Add to cart
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </Row>
                        </div>
                        <div className="cart_totals ">
                          <h2>Cart totals</h2>
                          <table
                            cellspacing="0"
                            className="shop_table shop_table_responsive"
                          >
                            <tr className="cart-subtotal">
                              <th>Subtotal</th>
                              <td data-title="Subtotal">
                                <span className="woocommerce-Price-amount amount">
                                  189,00&nbsp;
                                  <span className="woocommerce-Price-currencySymbol">
                                    &euro;
                                  </span>
                                </span>
                              </td>
                            </tr>
                            <tr className="woocommerce-shipping-totals shipping">
                              <th>Shipping</th>
                              <td data-title="Shipping">
                                <ul
                                  id="shipping_method"
                                  className="woocommerce-shipping-methods"
                                >
                                  <li>
                                    <input
                                      type="hidden"
                                      name="shipping_method[0]"
                                      data-index="0"
                                      id="shipping_method_0_flat_rate3"
                                      value="flat_rate:3"
                                      className="shipping_method"
                                    />
                                    <label for="shipping_method_0_flat_rate3">
                                      Flat rate:{' '}
                                      <span className="woocommerce-Price-amount amount">
                                        10,00&nbsp;
                                        <span className="woocommerce-Price-currencySymbol">
                                          &euro;
                                        </span>
                                      </span>
                                    </label>
                                  </li>
                                </ul>
                                <p className="woocommerce-shipping-destination">
                                  Shipping options will be updated during
                                  checkout.{' '}
                                </p>
                              </td>
                            </tr>
                            <tr className="order-total">
                              <th>Total</th>
                              <td data-title="Total">
                                <strong>
                                  <span className="woocommerce-Price-amount amount">
                                    199,00&nbsp;
                                    <span className="woocommerce-Price-currencySymbol">
                                      &euro;
                                    </span>
                                  </span>
                                </strong>
                              </td>
                            </tr>
                          </table>
                          <div className="d-flex">
                            <div className="wc-update-cart">
                              <input
                                type="submit"
                                className="button"
                                name="update_cart"
                                value="Update cart"
                              />
                            </div>
                            <div className="wc-proceed-to-checkout">
                              <Link
                                to="/ShopingCar/Billing_details"
                                className="checkout-button button alt wc-forward"
                              >
                                {' '}
                                Proceed to checkout
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </form>
                  </div>
                </div>
              </article>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Shopingcar
