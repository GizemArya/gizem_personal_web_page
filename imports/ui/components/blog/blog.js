import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './blog.html';

class Blog {}

const name = 'blog';

export default angular.module(name, [
    angularMeteor,
    uiRouter
]).component(name, {
        template,
        controllerAs: name,
        controller: Blog
    })
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('blog', {
            url: '/blog',
            template: '<blog></blog>'
        });
}

