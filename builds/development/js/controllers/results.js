myApp.controller('ResultsController', 
  function($scope, $rootScope, $location, $firebase, $firebaseAuth, Authentication, FIREBASE_URL) {


  var ref = new Firebase(FIREBASE_URL);
  var meetingsInfo = $firebase(ref);
  var meetingsObj = $firebase(ref).$asObject(); 
  var meetingsArray = $firebase(ref).$asArray(); 
  var data = meetingsObj;
    
  meetingsObj.$loaded().then(function(data){
    $scope.meetings = meetingsObj;
  });  
     
   meetingsArray.$loaded().then(function(data){
    $rootScope.howManyMeetings = meetingsArray.length;
  });  
    
   meetingsArray.$watch(function(event){
    $rootScope.howManyMeetings = meetingsArray.length;
   });  
    


    
var log = [];
var lognew = [];
var total = 0;
var damage2 = []; 
var damage2total = 0; 
var damage3 = []; 
var damage3total = 0;     
    
meetingsArray.$loaded().then(function(data){    
angular.forEach(meetingsArray, function(value, key) {
  this.push(value.comprehension);
}, log);    
    
    
    
 }).then(function(data){
  
angular.forEach(log, function(value, key) {    
  if(value){
  for(var key in value){
   if( key.substr(0,3) !== "-Jg" ) continue;
     var nestedObject = value[key];
//     total += nestedObject.icons[0].damage[1];  
      
     this.push(nestedObject.icons[0].damage[1]);  
}   
   }
  
}, lognew);    
        

    
    $.each(lognew,function() {
    total += parseInt(this);
    

});
    

angular.forEach(log, function(value, key) {    
  if(value){
  for(var key in value){
   if( key.substr(0,3) !== "-Jg" ) continue;
     var nestedObject = value[key];
      
     this.push(nestedObject.icons[0].damage[2]);  
}   
   }
  
}, damage2);    
        
    
    $.each(damage2,function() {
    damage2total += parseInt(this);
    

});
    
angular.forEach(log, function(value, key) {    
  if(value){
  for(var key in value){
   if( key.substr(0,3) !== "-Jg" ) continue;
     var nestedObject = value[key];
    
      if(nestedObject.icons[0].damage[3]){
     this.push(nestedObject.icons[0].damage[3]); 
      }
}   
   }
  
}, damage3);    
console.log(damage3);        
    
    $.each(damage3, function() {  
    damage3total += parseInt(this);
    
});    
    
    
    $scope.damage1 = ((total / meetingsArray.length).toFixed(2));
    $scope.damage2 = ((damage2total / meetingsArray.length).toFixed(2));
    $scope.damage3 = ((damage3total / meetingsArray.length).toFixed(2));
    
});   
    
}); //MeetingsController