var Arena = require('./game');

describe('Testing Game of Life', function(done){
  describe('Arena', function(){
    it('initializes a function', function(){
      var arena = new Arena();
      chai.expect(typeof arena).to.be.equal('object');
    });
  });
});
