'use strict';

var myApp = angular.module('ngPhoneApp', ['ngPhoneService']);

myApp.controller('ngPhoneCtrl', ['phoneInfo', 'brandService', function(phoneInfoServiceInstance, brandServiceInstance) {
    var self = this;

    phoneInfoServiceInstance.getPhoneLatest({ brand: 'Xiaomi' }, (function(data) {
        self.phones = data;
    }));

    brandServiceInstance.loadAllUsers()
        .then(function(users) {
            self.brands = [].concat(users);
        });

    self.getPhoneLatest = function(brandName) {
        phoneInfoServiceInstance.getPhoneLatest({ brand: brandName }, (function(data) {
            self.phones = data;
        }));
    }

}]);