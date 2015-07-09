angular.module('scheduleApp',['firebase'])

//Main Controller and Firebase
.controller('mainController', function($scope, $firebase){
	var ref = new Firebase("https://custom-scheduler.firebaseio.com/days");
	var fb = $firebase(ref);

	//sync
	var syncObject = fb.$asObject();

	//three way binding
	syncObject.$bindTo($scope, 'days');

	//Reset data to default
	$scope.reset = function() {

    fb.$set({
      monday: {
        name: 'Monday',
        slots: {
          0900: {
            time: '9:00am',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          }
        }
      },
      tuesday: {
        name: 'Tuesday',
        slots: {
          0900: {
            time: '9:00am',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          }
        }
      }
    });
  };
});