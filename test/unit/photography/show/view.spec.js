describe('photography/show/view', function() {
  beforeEach(function() {
    this.template = stub();

    this.model = new Backbone.Model();
    this.model.url = 'foo';
    this.model.cleanup = stub();

    this.View = proxyquire('../../src/photography/show/view.js', {
      './template.hbs' : this.template
    });

    this.itemView = new this.View({ model: this.model });
  });

  describe('#initialize', function() {
    beforeEach(function() {
      this.itemView.initialize({ model: this.model });
    });

    xit('should attach the model', function() {
      expect(this.itemView).to.have.ownProperty('model', this.model);
    });

    xit('should cleanup the model', function() {
      expect(this.model.cleanup).to.have.been.called;
    });
  });
});
