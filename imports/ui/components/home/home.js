import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './home.html';

class Home {

    constructor($scope, $reactive, $translate) {
        'ngInject';
        $reactive(this).attach($scope);
        this.translate = $translate;
    }

    changeLanguage(){
        if (this.translate.use() === 'en') {
            this.translate.use('tr');
        } else if (this.translate.use() === 'tr') {
            this.translate.use('en');
        }
    }


}

const name = 'home';

export default angular.module(name, [
    angularMeteor,
    uiRouter
]).component(name, {
    template,
    controllerAs: name,
    controller: Home
    })
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('home', {
            url: '/',
            template: '<home></home>'
        });
}