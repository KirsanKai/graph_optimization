import { Answer } from "../Answer/Answer.js";
import { InputMap } from "../HtmlElement/InputMap.js";
import { NxNMatrix } from "../Matrix/NxNMatrix.js"
import { ExcerciseInterface } from "./ExcerciseInterface.js";

class ExcerciseSixteen implements ExcerciseInterface {
    
    private matrix: NxNMatrix;
    
    constructor(matrix: NxNMatrix) {
        this.matrix = matrix;
    }

    public calculate(): Answer {
        const matrixArray = this.matrix.collectValFromMatrixDiv();

        console.log(matrixArray);
        
        if (matrixArray.length === 0) {
            throw new Error('Матрица не заполнена');
        }

        const inputMap = new InputMap();
        const dimensionCount = inputMap.getDimensionInputVal();

        let inArray: Array<number> = [];
        let outArray: Array<number> = [];
        for (let i = 0; i < dimensionCount; i++) {
            for (let j = 0; j < dimensionCount; j++) {
                if (matrixArray[i][j] !== 1) {
                    continue;
                };
                
                outArray[i] = 1;
                inArray[j] = 1;
            }
        }
        
        let sourceCount = 0;
        let sinkCount = 0;
        for (let i = 0; i < dimensionCount; i++) {
            if (inArray[i] !== 1) sourceCount++;
            if (outArray[i] !== 1) sinkCount++;
        }

        console.log(inArray);
        console.log(outArray);
        let sourceAnswerText = sourceCount.toString();
        let sinkAnsweText = sinkCount.toString();

        for (let i = 0; i < dimensionCount; i++) {
            const grafNumber = i + 1;
            if (inArray[i] !== 1) sourceAnswerText += ' ' + grafNumber + ' ';
            if (outArray[i] !== 1) sinkAnsweText += ' ' + grafNumber + ' ';
        }
        return new Answer(sourceAnswerText + '<br>' + sinkAnsweText);
    }

    public createMatrixFields(): void {
        this.matrix.createMatrixFields();
    }

    public isExcercise(excerciseNum: number): boolean {
        return excerciseNum === 16 ? true : false;
    }

    public getExcerciseSetting(): string {
        return "Ориентированный граф называется турниром, если между любой парой его различных вершин существуетровно одно ребро.<br>Для заданного списком ребер графа проверьте, является ли он турниром.";
    }
}

export { ExcerciseSixteen }