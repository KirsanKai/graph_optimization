import { Answer } from "../Answer/Answer.js";
import { InputMap } from "../HtmlElement/InputMap.js";
import { Nx2Matrix } from "../Matrix/Nx2Matrix.js"
import { ExcerciseInterface } from "./ExcerciseInterface.js";

class ExcerciseTwenty implements ExcerciseInterface {
    
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
        const edgeCount = inputMap.getEdgeInputVal();
        let answerMatrix: Array<Array<number>> = [];

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

        let isTournament = true;
        for (let i = 0; i < dimensionCount; i++) {
            for (let j = 0; j < dimensionCount; j++) {
                if ((i != j) && (answerMatrix[i][j] + answerMatrix[j][i] != 1)) isTournament = false;
            }
        }
        
        if (isTournament) {
            return new Answer('YES');
        }

        return new Answer('NO');
    }

    public createMatrixFields(): void {
        this.matrix.createMatrixFields();
    }

    public isExcercise(excerciseNum: number): boolean {
        return excerciseNum === 20 ? true : false;
    }

    public getExcerciseSetting(): string {
        return "Ориентированный граф задан матрицей смежности.<br>Найдите все вершины графа, которые являютсяистоками, и все его вершины, которые являются стоками.";
    }
}

export { ExcerciseTwenty }