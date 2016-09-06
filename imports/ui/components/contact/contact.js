import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './contact.html';

class Contact {}

const name = 'contact';

export default angular.module(name, [
    angularMeteor,
    uiRouter
]).component(name, {
        template,
        controllerAs: name,
        controller: Contact
    })
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('contact', {
            url: '/contact',
            template: '<contact></contact>'
        });
}
