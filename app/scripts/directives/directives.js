'use strict';

var app=angular.module('01HolaMundoApp');

app.directive('rfCreditos',function(){
    var $ = angular.element;
    var colors = ['#FFAA00', '#FFD300', '#531DFF', '#1A60FF', '#FFCF70', '#FFE670', '#9E80FF'];

    var replaceWithColors = function(element) {
        var originalText = element.text();
        var $newContent = $('<span>');
        for (var i=0; i < originalText.length; i++) {
            var colorIdx = i % colors.length;
            var char = originalText.charAt(i);
            $newContent.append(
                $('<span>').css('color', colors[colorIdx]).text(char)
            );
        }
        element.html($newContent);
    };

    return {
        restrict: 'AE',
        link : function(scope, element) {
            replaceWithColors(element);
        }
    };
});