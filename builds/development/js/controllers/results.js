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
    $scope.damage1 = ((total / damage2.length).toFixed(2));
    $scope.damage2 = ((damage2total / damage2.length).toFixed(2));
    $scope.damage3 = ((damage3total / damage3.length).toFixed(2));
    $scope.phys1 = ((phys1total / phys1.length).toFixed(2));
    $scope.phys2 = ((phys2total / phys2.length).toFixed(2));
    $scope.phys3 = ((phys3total / phys3.length).toFixed(2));
    $scope.oc1 = ((oc1total / oc1.length).toFixed(2));
    $scope.oc2 = ((oc2total / oc2.length).toFixed(2));
    $scope.oc3 = ((oc3total / oc3.length).toFixed(2));
    $scope.skin1 = ((skin1total / skin1.length).toFixed(2));
    $scope.skin2 = ((skin2total / skin2.length).toFixed(2));
    $scope.skin3 = ((skin3total / skin3.length).toFixed(2));   
   });  
    


    
var log = [];
var lognew = [];
var total = 0;
var damage2 = []; 
var damage2total = 0; 
var damage3 = []; 
var damage3total = 0;
var phys1 = []; 
var phys1total = 0; 
var phys2 = []; 
var phys2total = 0;
var phys3 = []; 
var phys3total = 0; 
var oc1 = []; 
var oc1total = 0; 
var oc2 = []; 
var oc2total = 0;
var oc3 = []; 
var oc3total = 0;
var skin1 = []; 
var skin1total = 0; 
var skin2 = []; 
var skin2total = 0;
var skin3 = []; 
var skin3total = 0;       
    
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
    
    $.each(damage3, function() {  
    damage3total += parseInt(this);
    
}); 
    
angular.forEach(log, function(value, key) {    
  if(value){
  for(var key in value){
   if( key.substr(0,3) !== "-Jg" ) continue;
     var nestedObject = value[key];
    
      if(nestedObject.icons[0]['physical therapy'][1]){
     this.push(nestedObject.icons[0]['physical therapy'][1]); 
      }
}   
   }
  
}, phys1);    
       
    
    $.each(phys1, function() {  
    phys1total += parseInt(this);
    
});  
    
    
angular.forEach(log, function(value, key) {    
  if(value){
  for(var key in value){
   if( key.substr(0,3) !== "-Jg" ) continue;
     var nestedObject = value[key];
    
      if(nestedObject.icons[0]['physical therapy'][2]){
     this.push(nestedObject.icons[0]['physical therapy'][2]); 
      }
}   
   }
  
}, phys2);    
       
    
    $.each(phys2, function() {  
    phys2total += parseInt(this);
    
});    
   
angular.forEach(log, function(value, key) {    
  if(value){
  for(var key in value){
   if( key.substr(0,3) !== "-Jg" ) continue;
     var nestedObject = value[key];
    
      if(nestedObject.icons[0]['physical therapy'][3]){
     this.push(nestedObject.icons[0]['physical therapy'][3]); 
      }
}   
   }
  
}, phys3);    
       
    
    $.each(phys3, function() {  
    phys3total += parseInt(this);
    
});      
    
angular.forEach(log, function(value, key) {    
  if(value){
  for(var key in value){
   if( key.substr(0,3) !== "-Jg" ) continue;
     var nestedObject = value[key];
    
      if(nestedObject.icons[0].ocular[1]){
     this.push(nestedObject.icons[0].ocular[1]); 
      }
}   
   }
  
}, oc1);          
    
    $.each(oc1, function() {  
    oc1total += parseInt(this);
    
}); 
    
angular.forEach(log, function(value, key) {    
  if(value){
  for(var key in value){
   if( key.substr(0,3) !== "-Jg" ) continue;
     var nestedObject = value[key];
    
      if(nestedObject.icons[0].ocular[2]){
     this.push(nestedObject.icons[0].ocular[2]); 
      }
}   
   }
  
}, oc2);          
    
    $.each(oc2, function() {  
    oc2total += parseInt(this);
    
});  
    
angular.forEach(log, function(value, key) {    
  if(value){
  for(var key in value){
   if( key.substr(0,3) !== "-Jg" ) continue;
     var nestedObject = value[key];
    
      if(nestedObject.icons[0].ocular[3]){
     this.push(nestedObject.icons[0].ocular[3]); 
      }
}   
   }
  
}, oc3);          

    
    $.each(oc3, function() {  
    oc3total += parseInt(this);
    
});  
    

angular.forEach(log, function(value, key) {    
  if(value){
  for(var key in value){
   if( key.substr(0,3) !== "-Jg" ) continue;
     var nestedObject = value[key];
    
      if(nestedObject.icons[0].skin[1]){
     this.push(nestedObject.icons[0].skin[1]); 
      }
}   
   }

}, skin1);          

    $.each(skin1, function() {  
    skin1total += parseInt(this);
    
});  
    
angular.forEach(log, function(value, key) {    
  if(value){
  for(var key in value){
   if( key.substr(0,3) !== "-Jg" ) continue;
     var nestedObject = value[key];
    
      if(nestedObject.icons[0].skin[2]){
     this.push(nestedObject.icons[0].skin[2]); 
      }
}   
   }
  
}, skin2);          
      
    $.each(skin2, function() {  
    skin2total += parseInt(this);
    
}); 

angular.forEach(log, function(value, key) {    
  if(value){
  for(var key in value){
   if( key.substr(0,3) !== "-Jg" ) continue;
     var nestedObject = value[key];
    
      if(nestedObject.icons[0].skin[3]){
     this.push(nestedObject.icons[0].skin[3]); 
      }
}   
   }
    
}, skin3);          

//console.log(skin3);
    $.each(skin3, function() {  
    skin3total += parseInt(this);
    array = skin3;
});      
  
    
    $scope.damage1 = ((total / damage2.length).toFixed(2));
    $scope.damage2 = ((damage2total / damage2.length).toFixed(2));
    $scope.damage3 = ((damage3total / damage3.length).toFixed(2));
    $scope.phys1 = ((phys1total / phys1.length).toFixed(2));
    $scope.phys2 = ((phys2total / phys2.length).toFixed(2));
    $scope.phys3 = ((phys3total / phys3.length).toFixed(2));
    $scope.oc1 = ((oc1total / oc1.length).toFixed(2));
    $scope.oc2 = ((oc2total / oc2.length).toFixed(2));
    $scope.oc3 = ((oc3total / oc3.length).toFixed(2));
    $scope.skin1 = ((skin1total / skin1.length).toFixed(2));
    $scope.skin2 = ((skin2total / skin2.length).toFixed(2));
    $scope.skin3 = ((skin3total / skin3.length).toFixed(2));
    
    
}).then(function(data){   
  


    
function standardDeviation(values){
  var avg = average(values);
  
  var squareDiffs = values.map(function(value){
    var diff = value - avg;
    var sqrDiff = diff * diff;
    return sqrDiff;
  });
  
  var avgSquareDiff = average(squareDiffs);
 
  var stdDev = Math.sqrt(avgSquareDiff);
  return stdDev;
}
 
function average(data){
  var sum = data.reduce(function(sum, value){
    return sum + value;
  }, 0);
 
  var avg = sum / data.length;
  return avg;
}

$(function(){
 var arraynew = JSON.parse("[" + lognew + "]");   
  console.log(arraynew); 
  var stdDev = (standardDeviation(arraynew)).toFixed(2);
  $scope.stdDev = stdDev;     
      
}); 
    
$(function(){
 var arraynew = JSON.parse("[" + damage2 + "]");   
  var stdDev = (standardDeviation(arraynew)).toFixed(2);
  $scope.stdDev1 = stdDev;     
      
});     
    
$(function(){
 var arraynew = JSON.parse("[" + damage3 + "]");   
  var stdDev = (standardDeviation(arraynew)).toFixed(2);
  $scope.stdDev2 = stdDev;     
      
}); 
    
$(function(){
 var arraynew = JSON.parse("[" + phys1 + "]");   
  var stdDev = (standardDeviation(arraynew)).toFixed(2);
  $scope.stdDev3 = stdDev;     
      
});     
        
$(function(){
 var arraynew = JSON.parse("[" + phys2 + "]");   
  var stdDev = (standardDeviation(arraynew)).toFixed(2);
  $scope.stdDev4 = stdDev;     
      
});  
    
$(function(){
 var arraynew = JSON.parse("[" + phys3 + "]");   
  var stdDev = (standardDeviation(arraynew)).toFixed(2);
  $scope.stdDev5 = stdDev;     
      
});   

$(function(){
 var arraynew = JSON.parse("[" + oc1 + "]");   
  var stdDev = (standardDeviation(arraynew)).toFixed(2);
  $scope.stdDev6 = stdDev;     
      
});     
    
$(function(){
 var arraynew = JSON.parse("[" + oc2 + "]");   
  var stdDev = (standardDeviation(arraynew)).toFixed(2);
  $scope.stdDev7 = stdDev;     
      
});     
    
$(function(){
 var arraynew = JSON.parse("[" + oc3 + "]");   
  var stdDev = (standardDeviation(arraynew)).toFixed(2);
  $scope.stdDev8 = stdDev;     
      
});  

$(function(){
 var arraynew = JSON.parse("[" + skin1 + "]");   
  var stdDev = (standardDeviation(arraynew)).toFixed(2);
  $scope.stdDev9 = stdDev;     
      
}); 
    
$(function(){
 var arraynew = JSON.parse("[" + skin2 + "]");   
  var stdDev = (standardDeviation(arraynew)).toFixed(2);
  $scope.stdDev10 = stdDev;     
      
}); 
    
$(function(){
 var arraynew = JSON.parse("[" + skin3 + "]");   
  var stdDev = (standardDeviation(arraynew)).toFixed(2);
  $scope.stdDev11 = stdDev;     
      
});     
    
    
    
});    
    
    
    
}); //MeetingsController


