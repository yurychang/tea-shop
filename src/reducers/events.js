import { TOGGLE_FILTER, FETCH_EVENTS } from 'actions/events'

const defaultState = {
  filterType: "",     // vendor or zone
  filterId: "",
  vendors: [{
    zId: 0,
    zone: '北',
    include: [{
      id: 0,
      name: '大溪老茶廠'
    }, {
      id: 1,
      name: '銅鑼茶廠'
    }, {
      id: 2,
      name: '景泰茶葉'
    }]
  },
  {
    zId: 1,
    zone: '中',
    include: [{
      id: 3,
      name: '福源茶廠'
    }, {
      id: 4,
      name: '益壽製茶廠'
    }, {
      id: 5,
      name: '日月潭老茶廠'
    }]
  },
  {
    zId: 2,
    zone: '南',
    include: [{
      id: 6,
      name: '和菓森林'
    }, {
      id: 7,
      name: '遊山茶訪'
    }, {
      id: 8,
      name: '東峰紅茶廠'
    }]
  },
  {
    zId: 3,
    zone: '東',
    include: [{
      id: 9,
      name: '林旺製茶廠'
    }, {
      id: 10,
      name: '嘉茗茶園'
    }]
  }],
  data: [
    {
      id: 1,
      cId: '1',
      cName: '遊山茶訪',
      title: '遊山茶訪 - 茶之旅',
      content: '<p>以一個小時認識臺灣茶，包括台灣茶的演進、多樣性以及製茶過程與茶葉相關知識</p><ul><li>活動時數：1小時</li><li>免費導覽</li><li>為了維護其他顧客權益，預約逾時超過15分鐘不接受入館參觀</li><li>館內最大可容納人數為30人，超過5人時請預約，我們會將時間保留給您，以免館內人數太多無法進入</li></ul>',
      location: '南投竹山茶文化館',
      banner: 'https://fakeimg.pl/1000x280/',
      price: '500'
    }
  ]
}

export default function events(state = defaultState, action) {
  switch (action.type) {
    case TOGGLE_FILTER:
      return {
        ...state,
        filterType: action.filterType,
        filterId: action.filterId
      }
    case FETCH_EVENTS:
      return {
        ...state,
        data: action.data
      }
    default:
      return state
  }
}
