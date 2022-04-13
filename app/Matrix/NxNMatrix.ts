import { DivMap } from "../HtmlElement/DivMap.js";
import { InputMap } from "../HtmlElement/InputMap.js";
import { MatrxiInterface } from "./MatrixInterface.js";

class NxNMatrix implements MatrxiInterface
{
    createMatrixFields(): void {
        const inputMap = new InputMap();
        const divMap = new DivMap();

        const dimensionCount = inputMap.getDimensionInputVal();
        const matrixDiv = divMap.getMatrixDiv();

        matrixDiv.innerHTML = '';
        let tbl = document.createElement('table');
        tbl.id = 'table';

        let tableMarkup = "<table>";

        for (let i = 0; i < dimensionCount; i++) {
            tableMarkup = tableMarkup + "<tr>";
            for (let j = 0; j < dimensionCount; j++) {
                tableMarkup = tableMarkup + "<td><input style='width: 30px; height: 30px' type='text' class='input'></td>";
            }

            tableMarkup = tableMarkup + "</tr>";
        }

        tableMarkup = tableMarkup + "</table>";
        matrixDiv.innerHTML = tableMarkup;
    }

    public collectValFromMatrixDiv(): Array<Array<number>> {
        const inputMap = new InputMap();
        const dimensionCount = inputMap.getDimensionInputVal();

        const tableNode = (document.getElementsByClassName("input") as HTMLCollectionOf<HTMLInputElement>);
        const line = [];
        const matrix = [];

        for (let i = 0; i < tableNode.length; i++) {
            line.push(Number(tableNode[i].value))
        }

        for (let i = 0; i < line.length /dimensionCount; i++) {
            matrix.push(<number[]>line.slice(i * dimensionCount, (i + 1) * dimensionCount));
        }

        return matrix
    }
}

export { NxNMatrix } 