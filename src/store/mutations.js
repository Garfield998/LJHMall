export default {
  //mutations唯一的目的就是修改state的状态
  //mutations中的每个方法尽可能完成的事件比较单一
  addCounter(state, payload) {
    payload.count++
  },
  addToCart(state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  }
}
