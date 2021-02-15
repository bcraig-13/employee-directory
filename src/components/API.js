// eslint-disable-next-line import/no-anonymous-default-export
export default {
  search: function () {
    return fetch("https://randomuser.me/api/?results=50&inc=picture,name,phone,email")
  }
}