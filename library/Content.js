export class Content {
    constructor() {
        this.Content = null;
        this.Attributes = null;
        this.Element = {};
        this.Styles = null;
    };

    getContent() {
        return this.Content;
    };

    getAttributes() {
        return this.Attributes;
    };

    getAllElement() {
        return this.Element;
    };

    getElement(element) {
        return this.Element[element];
    };

    setContent(content) {
        this.Content = content;
        return this;
    };

    setAttributes(attributes) {
        this.Attributes = attributes;
        return this;
    };

    setElement(element, target) {
        this.Element[element] = target;
        return this;
    };

    appendContentTo(el) {
        $(el).append(this.Content);
        return this;
    };

    addClass(element, className) {
        $(this.Element[element]).addClass(className);
        return this;
    };

    emptyElement(el) {
        $(el).empty();
        return this;
    };

    removeElement(el) {
        $(el).remove();
        return this;
    };

    setDataTable(el, attributes = null) {
        $(el).DataTable(attributes);
        return this;
    };

    setDropdown(el, attributes = null) {
        $(el).dropdown(attributes);
        return this;
    };

    findElement(el, target) {
        return $(el).find(target);
    };

    setObjectInElement(el, object, value) {
        $(el)[object] = value;
        return this;
    };

    setStyles(el, text) {
        let elem = document.querySelectorAll(el);
        elem.forEach(element => {
            element.setAttribute('style', text);
        });
        return this;
    };
}