import { Answer } from "../Answer/Answer.js";
import { InputMap } from "../HtmlElement/InputMap.js";
class ExcerciseTwelve {
    constructor(matrix) {
        this.matrix = matrix;
    }
    calculate() {
        const matrixArray = this.matrix.collectValFromMatrixDiv();
        if (matrixArray.length === 0) {
            throw new Error('Матрица не заполнена');
        }
        const inputMap = new InputMap();
        const dimensionCount = inputMap.getDimensionInputVal();
        let answerText = '';
        for (let i = 0; i < dimensionCount; i++) {
            let k = 0;
            for (let j = 0; j < dimensionCount; j++) {
                if (matrixArray[i][j] !== 1) {
                    continue;
                }
                k++;
            }
            answerText += ' ' + k + ' ';
        }
        return new Answer(answerText);
    }
    createMatrixFields() {
        this.matrix.createMatrixFields();
    }
    isExcercise(excerciseNum) {
        return excerciseNum === 12 ? true : false;
    }
    getExcerciseSetting() {
        return "Неориентированный граф задан матрицей смежности. Найдите степени всех вершин графа.";
    }
}
export { ExcerciseTwelve };
