export class ErrorHandler {
    constructor() {
        this.Error = null;
    };

    setError(err) {
        this.Error = err;
        return this;
    };

    getError() {
        return this.Error;
    };

    alertError(err) {
        console.log(err.message);
        console.log(err.stack);
        const [, lineno, colno] = err.stack.match(/(\d+):(\d+)/);
        console.log('Line:', lineno);
        console.log('Column:', colno);
        alert('Error : ' + err.message + ' (' + err.stack.split('\n')[0] + ')');
    };
}