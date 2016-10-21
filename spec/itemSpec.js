describe("Item", function() {

  var item;
  var itemName = "Flat White";
  var itemAmount = 3;

  beforeEach(function() {
    item = new Item(itemName, itemAmount);
  });

  describe("The basics ... it ... ", function() {

    it("should have a name", function() {
      expect(item._name).toEqual("Flat White");
    });

    it("should have an amount", function() {
      expect(item._amount).toEqual(3);
    });

  });

});
