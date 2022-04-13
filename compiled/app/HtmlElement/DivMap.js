class DivMap {
    constructor() {
        this.matrixDiv = document.getElementById('matrixDiv');
        this.resultDiv = document.getElementById('resultDiv');
        this.excerciseSettingDiv = document.getElementById('excerciseSettingDiv');
    }
    getMatrixDiv() {
        return this.matrixDiv;
    }
    getResultDiv() {
        return this.resultDiv;
    }
    getExcerciseSettingDiv() {
        return this.excerciseSettingDiv;
    }
}
export { DivMap };
