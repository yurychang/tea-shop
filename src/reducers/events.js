const defaultState = {
  filterType: "",     // vendor or zone
  eventsFilter: "",   // vendorId or zoneName
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
  return state
}
