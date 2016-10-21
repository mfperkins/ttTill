function Order() {
  this._items = [];
}

Order.prototype = {

  getItems: function () {
    return this._items;
  }
  
};
