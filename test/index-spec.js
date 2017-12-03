escribe('login', function () {
    this.timeout(20000);
    it('should login with correct password', function (done) {
        this.timeout(20000);
        setTimeout(done, 20000);
        request.post('/login')
            .send({
                email:"usertest@colorado.edu",
                password:"Password123"
            })
            .expect('Location','/home')
            .end(done);
        });
