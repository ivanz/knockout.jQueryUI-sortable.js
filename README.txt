Knockout JS jQuery UI Sortable List Binding

Usage:

<h2>Column 1</h3>
<ul class="mySortableColumn" data-bind="sortableList: yourObservableArray1, sortableOptions: { connectWith: '.mySortableColumn' }" >
   <!-- ko foreach: yourObservableArray1 -->
   <li data-bind="sortableItem: arrayItem"></li>
   <!-- /ko -->
</ul>
<h2>Column 2</h3>
<ul class="mySortableColumn" data-bind="sortableList: yourObservableArray2, sortableOptions: { connectWith: '.mySortableColumn' }" >
    <!-- ko foreach: yourObservableArray2 -->
    <li data-bind="sortableItem: arrayItem"></li>
    <!-- /ko -->
</ul>
<h2>Column 3</h3>
<ul class="mySortableColumn" data-bind="sortableList: yourObservableArray3, sortableOptions: { connectWith: '.mySortableColumn' }" >
    <!-- ko foreach: yourObservableArray3 -->
    <li data-bind="sortableItem: arrayItem"></li>
    <!-- /ko -->
</ul>