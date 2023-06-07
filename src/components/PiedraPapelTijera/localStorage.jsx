export function saveToLocalStorage ({ board, turn }) {
  window.localStorage.setItem('board', JSON.stringify(board))
  window.localStorage.setItem('turn', turn)
}

export function removeLocalStorage () {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}