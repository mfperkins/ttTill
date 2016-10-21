function Order() {
  this._items = [];
}

Order.prototype = {

  getItems: function () {
    return this._items;
  },

  orderItem: function(name, amount) {
    item = (typeof item !== 'undefined') ?  item : new Item(name, amount);
    this._items.push(item);
    console.log(this._items);
  }

};
