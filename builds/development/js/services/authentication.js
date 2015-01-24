myApp.factory('Authentication', function($firebase, 
  $firebaseAuth, FIREBASE_URL, $location, $rootScope) {

  var ref = new Firebase(FIREBASE_URL);
    var simpleLogin = $firebaseAuth(ref);
    //Predefine the factory
    var factory = {
       login: login,
       authorized: null
//       signedIn: signedIn
    };

    function login() {
       return simpleLogin.$authAnonymously().then(function(authData) {
          var userref = new Firebase(FIREBASE_URL + 'users');
          var firebaseUsers = $firebase(userref);
         
         var ref = new Firebase(FIREBASE_URL + '/users/' + authData.uid);
  var userObj = $firebase(ref).$asObject();
         
         userObj.$loaded().then(function(){
          $rootScope.currentUser = userObj;
         })
         
          
         var userInfo = {
            regUser: authData.uid
         }
         firebaseUsers.$set(authData.uid, userInfo);
          factory.authorized = authData.uid; //Set the property here
         $location.path('/comprehension');
      }).catch(function(error) {});
    } 
  
 
   //return it
   return factory;
});