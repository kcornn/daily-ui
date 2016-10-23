var app = angular.module('app', []);

app.controller('Main', function () {

});

/* 

app.controller('BuyController', function(){
	var vm = this;
	vm.airports = [{'name': 'Ljubljana', 'abbrevation': 'LJU', 'price': 100}, {'name': 'Maribor', 'abbrevation': 'MBX', 'price': 200}, {'name': 'Gradec', 'abbrevation': 'GRZ', 'price': 300}];
	vm.selectedAirport = vm.airports[0];
	
	vm.destinations = [{'name': 'London Gatwick', 'abbrevation': 'LGW', 'price': 100}, {'name': 'London Heathrow', 'abbrevation': 'LHR', 'price': 200}];
	vm.selectedDestionation = vm.destinations[0];
});

app.filter('euro', function() {
  return function(input,round) { 
    return Number(input).toFixed(round || 0) + ' €';
  };
}); */