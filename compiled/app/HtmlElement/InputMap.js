class InputMap {
    constructor() {
        this.dimensionInput = document.getElementById('dimensionInput');
        this.edgeInput = document.getElementById('edgeInput');
        this.matrixInputs = document.getElementsByClassName('matrixInput');
    }
    getDimensionInput() {
        return this.dimensionInput;
    }
    getEdgeInput() {
        return this.edgeInput;
    }
    getEdgeInputVal() {
        var _a;
        const edgeInputVal = Number(this.edgeInput.value);
        console.log(edgeInputVal);
        if ((_a = edgeInputVal === NaN) !== null && _a !== void 0 ? _a : edgeInputVal <= 0) {
            throw new Error('Введите корректное число рёбер');
        }
        return edgeInputVal;
    }
    getDimensionInputVal() {
        var _a;
        const dimensionInputVal = Number(this.dimensionInput.value);
        if ((_a = dimensionInputVal === NaN) !== null && _a !== void 0 ? _a : dimensionInputVal <= 0) {
            throw new Error('Введите корректное число рёбер');
        }
        return dimensionInputVal;
    }
    getMatrixInputs() {
        return this.matrixInputs;
    }
}
export { InputMap };
