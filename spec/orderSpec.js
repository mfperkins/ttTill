describe("Order", function() {

  var order;
  flatWhite = jasmine.createSpyObj("flatWhite", ['_name', '_amount']);

  beforeEach(function() {
    order = new Order();
  });

  describe("The basics ... it ... ", function() {

    it("should have an empty arry of items", function() {
      expect(order.getItems()).toEqual([]);
    });

  });

  describe("#orderItem", function() {

    beforeEach(function() {
      order.orderItem("Flat White", 3);
    });

    it("should add a new item to the items array", function() {
      expect(order.getItems().length).toEqual(1);
    });
  });

});
