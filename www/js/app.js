'use strict';

angular.module('app', ['ionic', 'ionic.utils', 'hc.marked'])

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('tabs', {
            url: '/tabs',
            abstract: true,
            templateUrl: 'views/tabs.html'
        })
        .state('tabs.decks', {
            url: '/decks',
            views: {
                'decks-tab': {
                    templateUrl: 'views/decks/decks.html',
                    controller: 'DecksController'
                }
            }
        })
        .state('tabs.card', {
            url: '/card',
            views: {
                'card-tab': {
                    templateUrl: 'views/card/card.html',
                    controller: 'CardController'
                }
            }
        })
        .state('tabs.answer', {
            url: '/answer',
            views: {
                'card-tab': {
                    templateUrl: 'views/answer/answer.html',
                    controller: 'AnswerController'
                }
            }
        })
        .state('tabs.score', {
            url: '/score',
            views: {
                'card-tab': {
                    templateUrl: 'views/score/score.html',
                    controller: 'ScoreController'
                }
            }
        })
        .state('tabs.settings', {
            url: '/settings',
            views: {
                'settings-tab': {
                    templateUrl: 'views/settings/settings.html',
                    controller: 'SettingsController'
                }
            }
        })
        .state('tabs.about', {
            url: '/about',
            views: {
                'settings-tab': {
                    templateUrl: 'views/about/about.html',
                    controller: 'AboutController'
                }
            }
        })
        .state('tabs.help', {
            url: '/help',
            views: {
                'settings-tab': {
                    templateUrl: 'views/help/help.html',
                    controller: 'HelpController'
                }
            }
        })
        .state('tabs.reset', {
            url: '/about',
            views: {
                'settings-tab': {
                    templateUrl: 'views/reset/reset.html',
                    controller: 'ResetController'
                }
            }
        })
        .state('tabs.filter', {
            url: '/filter',
            views: {
                'filter-tab': {
                    templateUrl: 'views/filter/filter.html',
                    controller: 'FilterController'
                }
            }
        });

    $urlRouterProvider.otherwise('/tabs/decks');
})

.factory('Settings', function () {
    var Settings = {
        qrandom: false,
        arandom: false,
        devanagari: false,
        transliteration: 'IAST',
        hintPercent: 10,
        filter: {
            max: 50,
            min: 50,
            tags: []
        }
    };
    return Settings;
})

.factory('Decks', function () {
    var Decks = {};
    return Decks;
})

.directive('x', function () {
    return {
        restrict: 'AE',
        compile: function (el) {
            el.remove();
        }
    };
})

.run(function ($ionicPlatform, $rootScope) {
    // replaced with app version if device is defined
    $rootScope.version = '0.0.0';

    console.log('RUNNING APP'); // //
    console.log(getData.text('data/test.json'));
    console.log(getData.json('dtat/test.json'));

    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the
        // accessory bar above the keyboard for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }

        if (ionic.Platform.device()[0] !== undefined) {
            cordova.getAppVersion(function (version) {
                $rootScope.version = version;
            });
        }
    });
});