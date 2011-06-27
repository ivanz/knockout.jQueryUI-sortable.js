Knockout JS jQuery UI Sortable List Binding

Usage:

<ul data-bind="sortableList: yourObservableArray" >
    {{each(i, arrayItem) yourObservableArray}}
        <li data-bind="sortableItem: arrayItem"></li>
    {{/each}}
</ul>
