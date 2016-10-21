describe("Order", function() {

  var order;

  beforeEach(function() {
    order = new Order();
  });

  describe("The basics ... it ... ", function() {

    it("should have an empty arry of items", function() {
      expect(order.getItems()).toEqual([]);
    });

  });

});
