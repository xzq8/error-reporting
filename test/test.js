describe("when has error,callback is run?",function(){

    it("err is callbakc",function(done){
        error(function(err){console.log(err),done()})
    })

})