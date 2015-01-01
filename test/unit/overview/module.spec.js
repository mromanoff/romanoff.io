describe('overview/module', function() {
  beforeEach(function() {
    this.Router = stub();

    this.Module = proxyquire('src/overview/module.js', {
      './router': this.Router
    });

    this.container = { container: true };
    this.module = new this.Module('overview', {}, { container: this.container });
  });

  describe('#initialize', function() {
    beforeEach(function() {
      this.module.initialize();
    });

    it('should create a new router', function() {
      expect(this.Router).to.have.been.calledWithNew.and.calledWith({
        container: this.container
      });
    });
  });
});
