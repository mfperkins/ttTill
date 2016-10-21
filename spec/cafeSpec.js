describe("Cafe", function() {

  var cafe;

  beforeEach(function() {
    cafe = new Cafe(menu);
  });

  describe("On initialize, it ... ", function() {

    it("should have a list of items", function() {
      expect(cafe._menuItems).toEqual(menu.prices);
    });

  });

});
