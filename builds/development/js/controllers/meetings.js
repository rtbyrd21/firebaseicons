myApp.controller('MeetingsController', 
  function($scope, $rootScope, $location, $firebase, $firebaseAuth, Authentication, FIREBASE_URL, info) {

    
 $scope.interpretation = {};
  $scope.actions = {};
  $scope.info = info;  
//  $scope.info.gender = "male";
//  $scope.info.age = "21";
//  $scope.info.experiene = "1";
    
  var ref = new Firebase(FIREBASE_URL + '/second');
  var meetingsInfo = $firebase(ref);
  var meetingsObj = $firebase(ref).$asObject(); 
  var meetingsArray = $firebase(ref).$asArray(); 
    
  meetingsObj.$loaded().then(function(data){
    $scope.meetings = meetingsObj;
  });  
    
   meetingsArray.$loaded().then(function(data){
    $rootScope.howManyMeetings = meetingsArray.length;
  });  
    
   meetingsArray.$watch(function(event){
    $rootScope.howManyMeetings = meetingsArray.length;
   });  
    
  $scope.authid = Authentication.authorized;
    
//  $scope.meetingsInfo = meetingsInfo.$asObject();

  $scope.addMeeting=function() {
    console.log($scope.interpretation[1]);
    meetingsInfo.$push({
      icons: [{"interepation": $scope.interpretation, 
               "action": $scope.actions,
              "info" : $scope.info
              }             
             ],
      date: Firebase.ServerValue.TIMESTAMP
    }).then(function() {
      $location.path('/thankyou');
    });
  } //addmeeting
  
$scope.begin = function() {
    $location.path('/meetings');
  } //login
 
 
// $scope.addInfo=function() {
//    meetingsInfo.$push({
//      info: [{
//              "gender": 'male',
//              "age": '21',
//              "experience": '1',
//              }             
//             ],
//      date: Firebase.ServerValue.TIMESTAMP
//    }).then(function() {
//      $location.path('/meetings');
//    });
//  } //addmeeting
  
  $scope.deleteMeeting=function(key) {
    meetings.$remove(key);
  } //deletemeeting

  var ref = new Firebase(FIREBASE_URL + '/users/' + Authentication.authorized);
  var user = $firebase(ref).$asObject();
    
  user.$loaded().then(function(){
    $rootScope.current = user;
  });  
  console.log(Authentication.authorized);
  
  
}); //MeetingsController