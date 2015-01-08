//describe('work/module', function() {
//  beforeEach(function() {
//    this.Router = stub();
//
//    this.Module = proxyquire('src/work/module.js', {
//      './router': this.Router
//    });
//
//    this.container = { container: true };
//    this.module = new this.Module('work', {}, { container: this.container });
//  });
//
//  describe('#initialize', function() {
//    beforeEach(function() {
//      this.module.initialize();
//    });
//
//    it('should create a new router', function() {
//      expect(this.Router).to.have.been.calledWithNew.and.calledWith({
//        container: this.container
//      });
//    });
//  });
//});
