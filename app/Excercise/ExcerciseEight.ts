import { Answer } from "../Answer/Answer.js";
import { InputMap } from "../HtmlElement/InputMap.js";
import { Nx2Matrix } from "../Matrix/Nx2Matrix.js"
import { ExcerciseInterface } from "./ExcerciseInterface.js";

class ExcerciseEight implements ExcerciseInterface {
    
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
        const edgeCount = inputMap.getEdgeInputVal();
        const dimensionCount = inputMap.getDimensionInputVal();

        let answerMatrix: Array<Array<number>> = [];
        for (let i = 0; i < dimensionCount; i++) {
            answerMatrix.push([]);
            for (let j = 0; j < dimensionCount; j++) {
                answerMatrix[i].push(0);  
            }
        }

        for (let i = 0; i < edgeCount; i++) {
            const a = <number>matrixArray[i][0] - 1;
            const b = <number>matrixArray[i][1] - 1;
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

    public createMatrixFields(): void {
        this.matrix.createMatrixFields();
    }

    public isExcercise(excerciseNum: number): boolean {
        return excerciseNum === 8 ? true : false;
    }

    public getExcerciseSetting(): string {
        return "Простой ориентированный граф задан списком ребер, выведите его представление в виде матрицысмежности.";
    }
}

export { ExcerciseEight }