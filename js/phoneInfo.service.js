'use strict';

var myService = angular.module('ngPhoneService', ['ngResource', 'ngMaterial']);

myService.factory('phoneInfo', ['$resource', function($resource) {
    var serviceInstance = $resource('https://fonoapi.freshpixl.com/v1/:apiMethod/', {
        token: '86b89476caaf66eda3f21279b7711afc',
    }, {
        getPhone: {
            method: 'POST',
            params: { device: 'Huawei', apiMethod: 'getdevice' },
            isArray: true
        },
        getPhoneLatest: {
            method: 'POST',
            params: { brand: 'Apple', limit: 10, apiMethod: 'getlatest' },
            isArray: true
        }
    });

    return serviceInstance;
}]);