describe('contact/model', function() {
  beforeEach(function() {
    this.Model = proxyquire('src/contact/model.js', {});
    this.model = new this.Model();
  });

  describe('#validate', function() {
    beforeEach(function() {
      spy(this.model, 'validate');
    });

    describe('when missing "first name" field', function() {
      beforeEach(function() {
        this.attrs = { firstName: '', lastName: 'Doe', email: 'doe@doe.com', phone: '555-555-5555'};
        this.model.validate(this.attrs);
      });

      it('should return an error', function() {
        expect(this.model.validate).to.have.returned(['Missing "First Name" field']);
      });
    });

    describe('when missing "Last Name" field', function() {
      beforeEach(function() {
        this.attrs = { firstName: 'Joe', lastName: '', email: 'doe@doe.com', phone: '555-555-5555'};
        this.model.validate(this.attrs);
      });

      it('should return an error', function() {
        expect(this.model.validate).to.have.returned(['Missing "Last Name" field']);
      });
    });

    describe('when missing "Email" field', function() {
      beforeEach(function() {
        this.attrs = { firstName: 'Joe', lastName: 'Doe', email: '', phone: '555-555-5555'};
        this.model.validate(this.attrs);
      });

      it('should return an error', function() {
        expect(this.model.validate).to.have.returned(['Missing "Email" field']);
      });
    });

    describe('when missing "Phone" field', function() {
      beforeEach(function() {
        this.attrs = { firstName: 'Joe', lastName: 'Doe', email: 'doe@doe.com', phone: ''};
        this.model.validate(this.attrs);
      });

      it('should return an error', function() {
        expect(this.model.validate).to.have.returned(['Missing "Phone" field']);
      });
    });

    describe('when attributes are valid', function() {
      beforeEach(function() {
        this.attrs = { firstName: 'Joe', lastName: 'Doe', email: 'doe@doe.com', phone: '555-555-5555'};
        this.model.validate(this.attrs);
      });

      it('should return an error', function() {
        expect(this.model.validate).to.have.returned(undefined);
      });
    });
  });
});
