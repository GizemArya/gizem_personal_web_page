import angular from 'angular';

import { Meteor } from 'meteor/meteor';

import 'bootstrap/dist/css/bootstrap.css';

import { name as Gizemarslan } from '../imports/ui/components/gizemarslan/gizemarslan';

function onReady() {
    angular.bootstrap(document, [
        Gizemarslan
    ], {
        strictDi: true
    });
}

if (Meteor.isCordova) {
    angular.element(document).on('deviceready', onReady);
} else {
    angular.element(document).ready(onReady);
}
