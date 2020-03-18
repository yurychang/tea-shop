import React from 'react'

import '../../styles/pj/_pj.css'

function ProductReviews({ ...attrs }) {
  return (
    <>
      <div class="container">
        <h2>商品評論</h2>
        <div class="pj_card-comment">
          <div class="d-flex pj_card-comment-in">
            <div class="pj_card-comment-number">5/5</div>
            <div class="pj_card-comment-star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <div class="pj_card-comment-box">全部</div>
            <div class="pj_card-comment-box">5星</div>
            <div class="pj_card-comment-box">4星</div>
            <div class="pj_card-comment-box">3星</div>
            <div class="pj_card-comment-box">2星</div>
            <div class="pj_card-comment-box">1星</div>
          </div>
        </div>
        <div class="d-flex pj_card-comment-box-on">
          <div class="pj_card-comment-box-circle"></div>
          <div class="pj_card-comment-name">J****e</div>
          <div class="pj_card-comment-star1">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>
        <div class="pj_card-comment-name-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni,
          libero, architecto officiis deserunt consequuntur possimus ab ea
          asperiores laudantium sed harum, aspernatur sequi molestiae
          repellendus distinctio dolorum non perferendis nulla.
        </div>
        <div class="d-flex pj_card-comment-box-on">
          <div class="pj_card-comment-box-circle"></div>
          <div class="pj_card-comment-name">J****e</div>
        </div>
        <div class="pj_card-comment-name-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni,
          libero, architecto officiis deserunt consequuntur possimus ab ea
          asperiores laudantium sed harum, aspernatur sequi molestiae
          repellendus distinctio dolorum non perferendis nulla.
        </div>
      </div>
    </>
  )
}
export default ProductReviews
