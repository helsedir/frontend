


/**
 * @ngdoc service
 * @name webUiApp.Guideline
 * @description
 * # Guideline
 * Factory in the webUiApp.
 */
 var apiUrl = 'http://digitalguidelines.azurewebsites.net/api/v1/';
 //apiUrl = 'http://localhost:50500/api/v1/';
 //apiUrl = 'http://localhost:50500/api/v1/';
angular.module('retningslinjeApp')
  .factory('Guideline', ['$resource', function ($resource) {
    return $resource(apiUrl+'guidelines/:id',{},
    {
    	update : { method:'PUT' },
      addSection : {method: 'POST', params:{id:'@id'}, url: apiUrl + "guidelines/:id/sections/"},
    });
  }])
  .factory('Section', ['$resource', function ($resource) {
    return $resource(apiUrl+'sections/:id',{},
    {
    	update : { method:'PUT' },
      addSection : {method: 'POST', params:{id:'@id'}, url: apiUrl + "sections/:id/sections/"},
      addRecommendation : {method: 'POST', params:{id:'@id'}, url: apiUrl + "sections/:id/recommendations/"},
    });
  }])  
  .factory('Recommendation', ['$resource', function ($resource) {
    return $resource(apiUrl+'recommendations/:id',{},
    {
      update : { method:'PUT' },
      addPico : {method: 'POST', params:{id:'@id'}, url: apiUrl + "recommendations/:id/picos/"},
    });
  }])  
  .factory('Pico', ['$resource', function ($resource) {
    return $resource(apiUrl+'picos/:id',{},
    {
      update : { method:'PUT' }
    });
  }])
  .factory('PicoCode', ['$resource', function ($resource) {
    return $resource(apiUrl+'picoCodes/:id',{},
    {
      update : { method:'PUT' }
    });
  }])
  .factory('TaxonomyCode', ['$resource', function ($resource) {
    return $resource(apiUrl+'taxonomyCode/:id',{},
    {
      update : { method:'PUT' }
    });
  }]);