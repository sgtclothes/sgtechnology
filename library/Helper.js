export class Helper {
    constructor() { };

    init() {
        return this;
    };

    arrayOfObjects() {
        class ArrayOfObjects {
            constructor() {
                this.ArrayOfObjects = null;
            };

            setArrayOfObjects(arrayOfObjects) {
                this.ArrayOfObjects = arrayOfObjects;
                return this;
            };

            getObjectsByValue(arrOfObject, key, val) {
                let results = arrOfObject.filter(obj => {
                    return obj[key] === val;
                });
                return results;
            };
        };
        return new ArrayOfObjects();
    };

    inputFilterElements() {
        class InputFilterElements {
            constructor() {
                this.MinValue = null;
                this.MaxValue = null;
            };

            setMinValue(minValue) {
                this.MinValue = minValue;
                return this;
            };

            setMaxValue(maxValue) {
                this.MaxValue = maxValue;
                return this;
            };

            init() {
                let self = this;
                (function ($) {
                    $.fn.inputFilter = function (inputFilter) {
                        return this.on(
                            'input keydown keyup mousedown mouseup select contextmenu drop',
                            function () {
                                if (inputFilter(this.value)) {
                                    this.oldValue = this.value
                                    this.oldSelectionStart = this.selectionStart
                                    this.oldSelectionEnd = this.selectionEnd
                                } else if (this.hasOwnProperty('oldValue')) {
                                    this.value = this.oldValue
                                    this.setSelectionRange(
                                        this.oldSelectionStart,
                                        this.oldSelectionEnd,
                                    )
                                }
                            },
                        )
                    }
                })(jQuery)

                $('#uintTextBox').inputFilter(function (value) {
                    return /^\d*$/.test(value)
                })
                $('#intLimitTextBox').inputFilter(function (value) {
                    return /^\d*$/.test(value) && (value === '' || parseInt(value) <= 500)
                })
                $('.intTextBox').inputFilter(function (value) {
                    return /^-?\d*$/.test(value)
                })
                $('.floatTextBox').inputFilter(function (value) {
                    return /^-?\d*[.]?\d*$/.test(value)
                })
                $('.floatTextBoxWithRange').inputFilter(function (value) {
                    return (
                        /^-?\d*[.]?\d*$/.test(value) && (value === '' || (parseFloat(value) >= self.MinValue && parseFloat(value) <= self.MaxValue))
                    )
                })
                $('.intTextBoxWithRange').inputFilter(function (value) {
                    return /^\d*$/.test(value) && (value === '' || (parseInt(value) >= self.MinValue && parseInt(value) <= self.MaxValue))
                })
                $('#currencyTextBox').inputFilter(function (value) {
                    return /^-?\d*[.,]?\d{0,2}$/.test(value)
                })
                $('#basicLatinTextBox').inputFilter(function (value) {
                    return /^[a-z]*$/i.test(value)
                })
                $('#extendedLatinTextBox').inputFilter(function (value) {
                    return /^[a-z\u00c0-\u024f]*$/i.test(value)
                })
                $('#hexTextBox').inputFilter(function (value) {
                    return /^[0-9a-f]*$/i.test(value)
                })
                return this;
            };
        };
        return new InputFilterElements();
    };

    elementBehavior() {
        class ElementBehavior {
            constructor() { };
            activeNavTabsClass() {
                $(".nav-tabs li a").click(function () {
                    $(".nav-tabs li").removeClass("active");
                    $(this).parent().addClass("active");
                });
                return this;
            };
            collapsible() {
                var coll = document.getElementsByClassName("collapsible");
                var i;
                for (i = 0; i < coll.length; i++) {
                    coll[i].addEventListener("click", function () {
                        this.classList.toggle("active");
                        var content = this.nextElementSibling;
                        console.log(content.style.display);
                        if (content.style.display === "block") {
                            content.style.display = "none";
                        } else {
                            content.style.display = "block";
                        };
                    });
                };
                return this;
            };
        };
        return new ElementBehavior();
    };
}