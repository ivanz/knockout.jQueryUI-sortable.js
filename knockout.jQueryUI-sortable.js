// Knockout JS jQuery UI Sortable list binding 0.1
// Author: (c) Ivan Zlatev - http://ivanz.com
// Source Code: http://github.com/ivanz/knockout.jQueryUI-sortable.js
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

$(function() {
    ko.bindingHandlers.sortableList = {
        _dataItemKey: "data-ko-collectionItem",
        // Detects when an HTML from a JQuery UI Sortabe has been moved
        // and applies the same move to the ViewModel collection item
        init: function (element, valueAccessor, allBindingsAccessor) {
            options = allBindingsAccessor().sortableOptions || {};
            options.update = function (event, ui) {
                    var newIndex = $(element).children().index(ui.item);
                    var collection = ko.utils.unwrapObservable(valueAccessor());
                    var collectionItem = $(ui.item).data(ko.bindingHandlers.sortableList._dataItemKey);
                    var oldIndex = collection.indexOf(collectionItem);
                    collection.splice(oldIndex, 1);
                    collection.splice(newIndex, 0, collectionItem);
                };
            options.remove = function (event, ui) {
                    var collection = ko.utils.unwrapObservable(valueAccessor());
                    var collectionItem = $(ui.item).data(ko.bindingHandlers.sortableList._dataItemKey);
                    var oldIndex = collection.indexOf(collectionItem);
                    collection.splice(oldIndex, 1);
                };
            options.receive = function (event, ui) {
                    var newIndex = $(element).children().index(ui.item);
                    var collection = ko.utils.unwrapObservable(valueAccessor());
                    var collectionItem = $(ui.item).data(ko.bindingHandlers.sortableList._dataItemKey);
                    collection.splice(newIndex, 0, collectionItem);
                };
            $(element).sortable(options);
        }
    };

    ko.bindingHandlers.sortableItem = {
        // Uses Jquery.data() to associate the collection item object
        // with the HTML element.
        init: function (element, valueAccessor, allBindingsAccessor) {
            var collectionItem = ko.utils.unwrapObservable(valueAccessor());
            $(element).data(ko.bindingHandlers.sortableList._dataItemKey, collectionItem);
        }
    };
});
