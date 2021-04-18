export class EventHandler {
    constructor() {
        this.EventHandler = null;
    };

    eventOnClick(el, callback) {
        $(document).undelegate(el, 'click');
        $(document).delegate(el, 'click', callback);
        return this;
    };

    eventOnChange(el, callback) {
        $(document).delegate(el, 'change', callback);
        return this;
    };

    eventOnDelegate(el, e, callback) {
        $(document).delegate(el, e, callback);
        return this;
    };

    eventOn(el, e, callback) {
        $(el).on(e, callback);
        return this;
    };

    destroyDataTable(tableContent) {
        if ($.fn.DataTable.isDataTable(tableContent) === true) {
            tableContent.DataTable().destroy();
        } else {
            console.log(tableContent + ' is not datatable');
        };
        return this;
    };
};
