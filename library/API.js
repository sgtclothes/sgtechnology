export class API {
    constructor() {
        this.LastResponse = {};
        this.List = {};
    };

    init() {
        return this;
    };

    setList(list) {
        this.List = list;
    };

    getLastResponse() {
        return this.LastResponse;
    };

    next(f) {
        f(this.LastResponse);
        return this;
    };

    async getListData(value) {
        let self = this;
        await $.ajax({
            type: 'GET',
            url: this.List['index'][value],
            dataType: 'json',
            success: function (response) {
                self.LastResponse = response;
                console.log(value + " OK");
            }
        });
        return this;
    };

    async getDataById(value, id) {
        let self = this;
        await $.ajax({
            type: 'GET',
            url: this.List['index'][value] + '/' + id,
            dataType: 'json',
            success: function (response) {
                self.LastResponse = response;
                console.log(value + " OK");
            }
        });
        return this;
    };

    async postData(value, data) {
        let self = this;
        console.log(value);
        await $.ajax({
            type: 'POST',
            url: this.List['post'][value],
            data: data,
            dataType: 'json',
            success: function (response) {
                self.LastResponse = response;
                console.log(value + " POST OK");
            }
        });
        return this;
    };
}