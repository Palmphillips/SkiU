var request = require('supertest');
describe('loading express', function () {
  var server;
  beforeEach(function () {
    server = require('./app');
  });
  afterEach(function () {
    var server1 = server.listen(3000, function() {
      server1.close(function() {});
  });
  });
 
  it('responds to /', function testSlash(done) {
  request(server)
    .get('/')
    .expect(200, done);
  });
  it('404 everything else', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
  it('200 When navigating to register', function testRegister(done) {
    request(server)
    .get('/register')
    .expect(200, done);
  });
});
