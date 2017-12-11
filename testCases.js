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

  it('SkiU responds to /', function testSlash(done) {
  request(server)
    .get('/')
    .expect(200, done);
  });
  it('404 for a random page', function testRandomPath(done) {
    request(server)
      .get('/thisshouldbreak')
      .expect(404, done);
  });
  it('Page responds When navigating to register page', function testRegister(done) {
    request(server)
    .get('/register')
    .expect(200, done);
  });
});
