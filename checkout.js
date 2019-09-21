function selectSaleItems(items) {
  return items.filter(function checkDiscount(items) {
    return items.discount > 0
  })
}

module.exports = selectSaleItems
