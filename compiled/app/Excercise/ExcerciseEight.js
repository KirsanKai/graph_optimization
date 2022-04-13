import { Answer } from "../Answer/Answer.js";
import { InputMap } from "../HtmlElement/InputMap.js";
class ExcerciseEight {
    constructor(matrix) {
        this.matrix = matrix;
    }
    calculate() {
        const matrixArray = this.matrix.collectValFromMatrixDiv();
        if (matrixArray.length === 0) {
            throw new Error('Матрица не заполнена');
        }
        const inputMap = new InputMap();
        const edgeCount = inputMap.getEdgeInputVal();
        const dimensionCount = inputMap.getDimensionInputVal();
        let answerMatrix = [];
        for (let i = 0; i < dimensionCount; i++) {
            answerMatrix.push([]);
            for (let j = 0; j < dimensionCount; j++) {
                answerMatrix[i].push(0);
            }
        }
        for (let i = 0; i < edgeCount; i++) {
            const a = matrixArray[i][0] - 1;
            const b = matrixArray[i][1] - 1;
            answerMatrix[a][b] = 1;
        }
        let answerText = '';
        for (let i = 0; i < dimensionCount; i++) {
            for (let j = 0; j < dimensionCount; j++) {
                answerText += ' ' + answerMatrix[i][j] + ' ';
            }
            answerText += '<br>';
        }
        return new Answer(answerText);
    }
    createMatrixFields() {
        this.matrix.createMatrixFields();
    }
    isExcercise(excerciseNum) {
        return excerciseNum === 8 ? true : false;
    }
    getExcerciseSetting() {
        return "Простой ориентированный граф задан списком ребер, выведите его представление в виде матрицысмежности.";
    }
}
export { ExcerciseEight };
