describe('app Module', function() {

   var html, scope, compiled, element;

   function processChange($rootScope, $compile) {
      scope = $rootScope.$new();
      compiled = $compile(html);
      element = compiled(scope);
      scope.$digest();
   }

   beforeEach(module('app'));



   it('should render my-form correctly', inject(function($rootScope, $compile) {

      html = "<opt-in><div class=\"brand-logo\"></div></opt-in>"

      processChange($rootScope, $compile);

      expect(element.find('div').length).toBe(1);
      expect(element.find('div').attr('class')).toContain('brand-logo');
      expect(element.find('input[type=\"text\"]').length).toBe(3);
      expect(element.find('button[type=\"submit\"]').length).toBe(1);
   }));

});

   

	

