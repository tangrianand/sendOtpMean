var app=angular.module('KisanNetwork');


//MainController begins
   app.controller('MainController', function($scope,$http) {

         var contactList=[];
        $http.get('http://localhost:3000/getContactList')
        .success(function(data) {
            contactList = data;
            $scope.contactList=contactList;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
        $scope.report=function(id){
            console.log(id);
        }
        $scope.sendOtp= function(contact){
            console.log(contact);
            $http.post('http://localhost:3000/sendSMS/'+contact)
             .success(function(data) {
             console.log("otp sent successfully");
             })
             .error(function(data) {
             console.log('Error: ' + data);
            });
        }
      
    });
//MainController Controller ends 




//MessageHistory Controller begins
     app.controller('MessageHistory',function($scope,$http){
         var smsList=[];
            $http.get('http://localhost:3000/smsList')
             .success(function(data) {
                 smsList=data;
             $scope.smsList=smsList;
             console.log(smsList);
             })
             .error(function(data) {
             console.log('Error: ' + data);
            });
     });
//MessageHistory Controller ends