import { Answer } from "../Answer/Answer.js";
import { InputMap } from "../HtmlElement/InputMap.js";
import { NxNMatrix } from "../Matrix/NxNMatrix.js"
import { ExcerciseInterface } from "./ExcerciseInterface.js";

class ExcerciseFour implements ExcerciseInterface {
    
    private matrix: NxNMatrix;
    
    constructor(matrix: NxNMatrix) {
        this.matrix = matrix;
    }

    public calculate(): Answer {
        const matrixArray = this.matrix.collectValFromMatrixDiv();

        if (matrixArray.length === 0) {
            throw new Error('Матрица не заполнена');
        }

        const inputMap = new InputMap();
        const dimensionCount = inputMap.getDimensionInputVal();

        let k = 0;

        for (let i = 0; i < matrixArray.length; i++) {
            for (let j = 0; j < dimensionCount; j++) {
                if (matrixArray[i][j] == 1) k++;
            }
        }
        
        return new Answer(`Количество ребер: ${k}`);
    }

    public createMatrixFields(): void {
        this.matrix.createMatrixFields();
    }

    public isExcercise(excerciseNum: number): boolean {
        return excerciseNum === 4 ? true : false;
    }

    public getExcerciseSetting(): string {
        return "Ориентированный граф задан матрицей смежности. Найдите количество ребер в графе.";
    }
}

export { ExcerciseFour }