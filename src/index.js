module.exports = function reverse (n) {
    if (n.toString()[0] === '-') {
        return n.toString().split('').splice(1).reverse().join('')
      }
      else if (n.toString()[n.toString().length - 1] === '0') {
        return n.toString().split('').reverse().splice(1).join('')
      }
      else {
        return n.toString().split('').reverse().join('')
      }
}
