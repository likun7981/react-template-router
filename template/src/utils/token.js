const tokenRegx = /S*[?&]token=([0-9a-zA-Z-]*)&?/

export default () => {
  const matches = window.location.href.match(tokenRegx)
  const token = (matches && matches[1]) || localStorage.getItem('token')
  if (token) {
    localStorage.setItem('token', token)
  }
  return token
}
