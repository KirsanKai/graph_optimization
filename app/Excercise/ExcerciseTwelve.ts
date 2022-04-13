import { Answer } from "../Answer/Answer.js";
import { InputMap } from "../HtmlElement/InputMap.js";
import { Nx2Matrix } from "../Matrix/Nx2Matrix.js"
import { ExcerciseInterface } from "./ExcerciseInterface.js";

class ExcerciseTwelve implements ExcerciseInterface {
    
    private matrix: Nx2Matrix;
    
    constructor(matrix: Nx2Matrix) {
        this.matrix = matrix;
    }

    public calculate(): Answer {
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

    public createMatrixFields(): void {
        this.matrix.createMatrixFields();
    }

    public isExcercise(excerciseNum: number): boolean {
        return excerciseNum === 12 ? true : false;
    }

    public getExcerciseSetting(): string {
        return "Неориентированный граф задан матрицей смежности. Найдите степени всех вершин графа.";
    }
}

export { ExcerciseTwelve }