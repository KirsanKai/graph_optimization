import { Answer } from "../Answer/Answer.js";
import { InputMap } from "../HtmlElement/InputMap.js";
class ExcerciseFour {
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
        let k = 0;
        for (let i = 0; i < matrixArray.length; i++) {
            for (let j = 0; j < dimensionCount; j++) {
                if (matrixArray[i][j] == 1)
                    k++;
            }
        }
        return new Answer(`Количество ребер: ${k}`);
    }
    createMatrixFields() {
        this.matrix.createMatrixFields();
    }
    isExcercise(excerciseNum) {
        return excerciseNum === 4 ? true : false;
    }
    getExcerciseSetting() {
        return "Ориентированный граф задан матрицей смежности. Найдите количество ребер в графе.";
    }
}
export { ExcerciseFour };
