import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './pictures.html';

class Pictures {}

const name = 'pictures';

export default angular.module(name, [
    angularMeteor,
    uiRouter
]).component(name, {
    template,
    controllerAs: name,
    controller: Pictures
    })
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('pictures', {
            url: '/pictures',
            template: '<pictures></pictures>'
        });
}
