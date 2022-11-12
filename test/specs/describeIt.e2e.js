

describe('Top level describe', function () {

  describe('First nested describe', function () {
      it.only('Test Case 1', function () {
        // code for Test Case 1
      });
  
      it('Test Case 2', function () {
        // code for Test Case 2
      });
  
      it('Test Case 3', function () {
        // code for Test Case 3
      });

      describe('Second nested describe', function(){
          it('Test Case 4', function () {
            // code for Test Case 4
          });
      });
  });
});