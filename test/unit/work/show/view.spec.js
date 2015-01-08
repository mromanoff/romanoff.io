//describe('work/show/view', function() {
//  beforeEach(function() {
//    this.template = stub();
//
//    this.model = new Backbone.Model();
//    this.model.url = 'foo';
//    this.model.cleanup = stub();
//
//    this.View = proxyquire('src/work/show/view.js', {
//      './template.hbs' : this.template
//    });
//
//    this.itemView = new this.View({ model: this.model });
//  });
//
//  describe('#initialize', function() {
//    beforeEach(function() {
//      this.itemView.initialize({ model: this.model });
//    });
//
//    it('should attach the model', function() {
//      expect(this.itemView).to.have.ownProperty('model', this.model);
//    });
//
//    it('should cleanup the model', function() {
//      expect(this.model.cleanup).to.have.been.called;
//    });
//  });
//
//
//  describe('#handleToggle', function() {
//    beforeEach(function() {
//      this.itemView.handleToggle();
//    });
//  });
//
//  describe('#handleToggleFailure', function() {
//    beforeEach(function() {
//      this.itemView.handleToggleFailure();
//    });
//  });
//
//  describe('#handleDestroy', function() {
//    beforeEach(function() {
//      this.itemView.handleDestroy();
//    });
//  });
//
//  describe('#handleConfirmDestroy', function() {
//    beforeEach(function() {
//      this.itemView.handleConfirmDestroy();
//    });
//  });
//
//  describe('#handleCancelDestroy', function() {
//    beforeEach(function() {
//      this.itemView.handleCancelDestroy();
//    });
//  });
//
//  describe('#handleDestroySuccess', function() {
//    beforeEach(function() {
//      this.itemView.handleDestroySuccess();
//    });
//  });
//});
