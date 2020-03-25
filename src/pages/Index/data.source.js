import React from 'react'
import logo from 'images/logo.svg'
import logo_s from 'images/logo-h.svg'
import logo_w from 'images/logo_w.svg'

export const Banner00DataSource = {
  wrapper: { className: 'banner0 k83fye1ylu-editor_css' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: <img src={logo} alt="" />,
  },
  content: {
    className: 'banner0-content k83hoswqa2m-editor_css',
    children: (
      <span>
        <span>
          <p></p>
          <p>
            <br />
          </p>
        </span>
      </span>
    ),
  },
  button: {
    className: 'banner0-button',
    children: '精選商品',
    href: '/product',
    target: '/product',
    type: 'default',
  },
}
export const Feature00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>精選產品</p>
          </span>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://www.twinings.com.tw/aimg/a/15/154/151541636492864660940f.jpg',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <span>
                    <p>錫蘭紅茶</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>
                    仕女伯爵茶是為格雷家族的成員—格雷二世的夫人所調製出來的。其口感調的更柔和，帶入柑橘、檸檬酸香氣息，讓茶的風味更清新。仕女伯爵茶添加檸檬與香橙的果皮，能使茶葉呈現豐富的果香口感。
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://www.twinings.com.tw/aimg/a/15/154/1515416454610308704a7e.jpg',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>梅果茶</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>
                    清新的口感，融入淡淡的佛手柑芬芳，最適合在午后時光用一顆閒適的心情細細品嚐。尤其佛手柑芬芳，更能讓繁複的心境隨之沉澱，時時刻刻注入重新的力量。飲用時若添加檸檬容易則減少佛手柑的芬芳，享用原味或添加少許牛奶都是不錯的選擇。
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://www.twinings.com.tw/aimg/a/15/154/15154164242623083b9640.jpg',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>大吉嶺紅茶</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>
                    名列世界三大茗茶之一的大吉嶺，被譽為“紅茶中的香檳”，金黃的茶色有著令人回味無限的清淡果香，是產量極少的頂級茶品。其細緻的口感適合單獨品用。
                  </p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
}
export const Banner01DataSource = {
  wrapper: { className: 'banner0 k83fveagfd-editor_css' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: <img src={logo_w} alt="" />,
  },
  content: {
    className: 'banner0-content',
    children: (
      <span>
        <p>
          <br />
        </p>
      </span>
    ),
  },
  button: {
    className: 'banner0-button',
    children: '嚴選廠商',
    href: '/Allstore',
    target: '/product',
    type: 'default',
  },
}
export const Teams10DataSource = {
  wrapper: { className: 'home-page-wrapper teams1-wrapper' },
  page: { className: 'home-page teams1' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <span>
              <p>嚴選店家</p>
            </span>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                'http://cdn.rologo.com/wp-content/uploads/2014/03/lipton-new-logo.jpg?x-oss-process=image/format,webp,image/resize,m_fill,w_932,h_932#',
            },
            {
              name: 'title',
              className: 'teams1-title',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <p>立頓茶葉</p>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams1-job',
              children: (
                <span>
                  <span>
                    <p>百大茶葉排行第一</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children: (
                <span>
                  <p>
                    這是歐可茶葉，以健康為號召，主打不添加奶精粉，只用純奶粉且還能自行調整奶茶甜度，在網路闖出知名度。
                    不鋪實體通路，僅靠網路銷售，每包售價達3
                  </p>
                  <p>
                    2元，比起主要競爭對手三點一刻貴上2倍，每年仍可銷出3百50萬包奶茶包，成為網購奶茶包銷量第一的品牌。
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                'http://cdn.rologo.com/wp-content/uploads/2014/03/lipton-new-logo.jpg?x-oss-process=image/format,webp,image/resize,m_fill,w_932,h_932#',
            },
            {
              name: 'title',
              className: 'teams1-title',
              children: (
                <span>
                  <span>
                    <span>
                      <p>立頓茶葉</p>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams1-job',
              children: (
                <span>
                  <span>
                    <p>百大茶葉排行第一</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children: (
                <span>
                  <p>
                    這是歐可茶葉，以健康為號召，主打不添加奶精粉，只用純奶粉且還能自行調整奶茶甜度，在網路闖出知名度。
                    不鋪實體通路，僅靠網路銷售，每包售價達3
                  </p>
                  <p>
                    2元，比起主要競爭對手三點一刻貴上2倍，每年仍可銷出3百50萬包奶茶包，成為網購奶茶包銷量第一的品牌。
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                'http://cdn.rologo.com/wp-content/uploads/2014/03/lipton-new-logo.jpg?x-oss-process=image/format,webp,image/resize,m_fill,w_932,h_932#',
            },
            {
              name: 'title',
              className: 'teams1-title',
              children: (
                <span>
                  <span>
                    <span>
                      <p>立頓茶葉</p>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams1-job',
              children: (
                <span>
                  <p>百大茶葉排行第一</p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children: (
                <span>
                  <p>
                    這是歐可茶葉，以健康為號召，主打不添加奶精粉，只用純奶粉且還能自行調整奶茶甜度，在網路闖出知名度。
                    不鋪實體通路，僅靠網路銷售，每包售價達3
                  </p>
                  <p>
                    2元，比起主要競爭對手三點一刻貴上2倍，每年仍可銷出3百50萬包奶茶包，成為網購奶茶包銷量第一的品牌。
                  </p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
}
export const Banner21DataSource = {
  wrapper: { className: 'banner2' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        page: { className: 'home-page banner2-page' },
        textWrapper: { className: 'banner2-text-wrapper' },
        bg: { className: 'bg bg0' },
        title: {
          className: 'banner2-title',
          children: (
            <span>
              <span>
                <p>走訪茶的故鄉</p>
              </span>
            </span>
          ),
        },
        content: {
          className: 'banner2-content k83gg217sr-editor_css',
          children: (
            <span>
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <p className="">帶您更進一步認識茶</p>
                        <p className="">
                          <br />
                        </p>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          ),
        },
        button: {
          className: 'banner2-button k83hwrh21if-editor_css',
          children: 'Learn More',
        },
      },
    ],
  },
}
export const Feature20DataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 8, xs: 24 },
  img: {
    children: 'https://pic.pimg.tw/cindy6732/1570111018-4123191863.jpg',
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: {
    className: 'content2-title',
    children: (
      <span>
        <span>
          <p>
            <b>日月潭老茶廠</b>
          </p>
        </span>
      </span>
    ),
  },
  content: {
    className: 'content2-content',
    children: (
      <span>
        <p>
          日月老茶廠位在南投魚池鄉，靠近日月潭風景區，擁有得天獨厚的地理環境，所栽植出的阿薩姆紅茶品質極佳，老茶廠前身為台灣農林公司的魚池茶廠，在歷經九二一大地震後，開始重建轉型，從單純的製茶廠轉型成為兼具生產紅茶、有機農業及推廣健康飲食與環境的觀光茶廠。
        </p>
      </span>
    ),
  },
}
export const Pricing00DataSource = {
  wrapper: { className: 'home-page-wrapper pricing0-wrapper' },
  OverPack: { playScale: 0.3, className: 'home-page pricing0' },
  imgWrapper: { className: 'pricing0-img-wrapper', md: 12, xs: 24 },
  img: {
    className: 'pricing0-img',
    name: 'image',
    children:
      'https://www.hugosum.com.tw/upload/events/photo_b_24_147158341294.jpg',
  },
  childWrapper: {
    className: 'pricing0-text-wrapper',
    md: 12,
    xs: 24,
    children: [
      {
        name: 'title',
        children: (
          <span>
            <span>
              <span>
                <span>
                  <p>
                    <i>和菓森林</i>
                  </p>
                </span>
              </span>
            </span>
          </span>
        ),
        className: 'pricing0-title k83ht877z8h-editor_css',
      },
      {
        name: 'content',
        children: (
          <span>
            <span>
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <h3>
                            歷久的生態茶園，與這日式氛圍的茶廠，還有手作茶的課程，讓您可以了解茶匠的精神！
                          </h3>
                          <p>活動時間:大約 2.5 小時</p>
                          <p>備註: 2人成行，每年4-11月，請提前7天預約！</p>
                          <p>活動流程：</p>
                          <p>
                            <br />
                          </p>
                          <p>
                            ｜茶園散策→紅茶歷史解說→紅茶製程導覽→紅茶DIY活動→紅茶品茗&amp;點心時光→包裝茶葉
                          </p>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        ),
        className: 'pricing0-content',
      },
      {
        name: 'pricing',
        children: (
          <span>
            <p>30人即成團</p>
          </span>
        ),
        className: 'pricing0-pricing k83auwiu0e-editor_css',
      },
      {
        name: 'button',
        children: {
          icon: '',
          href: '/events',
          type: 'primary',
          children: (
            <span>
              <span>
                <p>立即預約</p>
              </span>
            </span>
          ),
        },
      },
    ],
  },
}
export const Content130DataSource = {
  OverPack: {
    className: 'home-page-wrapper content13-wrapper',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children: '',
        className: 'title-image',
      },
      {
        name: 'title',
        children: (
          <span>
            <span>
              <span>
                <p>
                  <b>全面性的茶品平台</b>
                </p>
              </span>
            </span>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        children: (
          <span>
            <p>合作廠商包含:銅鑼茶廠,日月潭老茶廠</p>
          </span>
        ),
        className: 'title-content',
      },
      {
        name: 'content2',
        children: (
          <span>
            <span>
              <p>如需合作歡迎與我們聯絡</p>
            </span>
          </span>
        ),
        className: 'title-content',
      },
    ],
  },
}
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page k83gupfspk-editor_css',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children: <img src={logo_s} alt="" />,
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: '',
              className: 'k83gwzlwc3p-editor_css',
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <span>
                <p>關於我們</p>
              </span>
            </span>
          ),
          className: 'k83gwegehwj-editor_css',
        },
        childWrapper: {
          children: [
            {
              name: 'link0',
              href: '#',
              children: (
                <span>
                  <span>
                    <p>
                      茶產業在台灣早已經是個遍地開花的行業，而湘茗作為開創調茶時代的先驅，我們希望讓客人們更多元的接觸這項已經有五千年生命的獨特飲料，讓消費者更幸福更健康的享受生活。
                      <br />
                    </p>
                  </span>
                </span>
              ),
              className: 'k83gwdge01a-editor_css',
            },
            {
              name: 'link1',
              href: '#',
              children: (
                <span>
                  <p>
                    <br />
                  </p>
                </span>
              ),
            },
            {
              name: 'link2',
              href: '#',
              children: (
                <span>
                  <p>
                    <br />
                  </p>
                </span>
              ),
            },
            {
              name: 'link3',
              href: '#',
              children: (
                <span>
                  <p>
                    <br />
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <p>聯繫我們</p>
            </span>
          ),
          className: 'k83gx1qpvgf-editor_css',
        },
        childWrapper: {
          children: [
            {
              href: '#',
              name: 'link0',
              children: (
                <span>
                  <span>
                    <p>電話:0900-000-000</p>
                  </span>
                </span>
              ),
              className: 'k83gx45n4sr-editor_css',
            },
            {
              href: '#',
              name: 'link1',
              children: (
                <span>
                  <p>聯絡信箱:example@gmail.com</p>
                </span>
              ),
              className: 'k83gx64fdp-editor_css',
            },
            {
              href: '#',
              name: 'link2',
              children: (
                <span>
                  <p>106台北市大安區復興南路一段390號2樓</p>
                </span>
              ),
              className: 'k83gx64fdp-editor_css',
            },
          ],
        },
      },
      // {
      //   name: 'block3',
      //   xs: 24,
      //   md: 6,
      //   className: 'block',
      //   title: {
      //     children: (
      //       <span>
      //         <p>
      //           <br />
      //         </p>
      //       </span>
      //     ),
      //     className: 'k83anbs74bo-editor_css',
      //   },
      //   childWrapper: {
      //     children: [
      //       {
      //         href: '#',
      //         name: 'link0',
      //         children: (
      //           <span>
      //             <p>
      //               <br />
      //             </p>
      //           </span>
      //         ),
      //       },
      //       {
      //         href: '#',
      //         name: 'link1',
      //         children: (
      //           <span>
      //             <p>
      //               <br />
      //             </p>
      //           </span>
      //         ),
      //       },
      //     ],
      //   },
      // },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page k83h1ugzdbd-editor_css' },
  copyright: {
    className: 'copyright k83gut2jfn-editor_css',
    children: (
      <span>
        <span>
          <span>
            <span>
              <span>©2020 by 湘茗 All Rights Reserved</span>
            </span>
          </span>
        </span>
      </span>
    ),
  },
}
