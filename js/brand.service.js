    'use strict';

    angular.module('ngPhoneService')
        .service('brandService', ['$q', function brandService($q) {
            var users = [{
                    name: 'Xiaomi',
                    avatar: 'svg-1',
                },
                {
                    name: 'HTC',
                    avatar: 'svg-2',
                },
                {
                    name: 'Huawei',
                    avatar: 'svg-2',
                },
                {
                    name: 'Motorola',
                    avatar: 'svg-2',
                }
            ];

            // Promise-based API
            return {
                loadAllUsers: function() {
                    // Simulate async nature of real remote calls
                    return $q.when(users);
                }
            };
        }]);