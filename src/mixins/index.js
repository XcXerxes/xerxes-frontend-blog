export default {
  filters: {
    parseUserName (val) {
      return val ? val.substr(0, 1).toLocaleUpperCase() : ''
    }
  }
}
