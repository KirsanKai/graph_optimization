import { DivMap } from "../HtmlElement/DivMap.js";
import { InputMap } from "../HtmlElement/InputMap.js";
import { MatrxiInterface } from "./MatrixInterface.js";

class Nx2Matrix implements MatrxiInterface
{

    public createMatrixFields(): void {
        const inputMap = new InputMap();
        const divMap = new DivMap();

        const edgeCount = inputMap.getEdgeInputVal();
        const matrixDiv = divMap.getMatrixDiv();

        matrixDiv.innerHTML = '';
        let tbl: Element = document.createElement('table');
        tbl.id = 'table';

        let tableMarkup = "<table>";

        for (let i = 0; i < edgeCount; i++) {
            tableMarkup = tableMarkup + "<tr>";
            for (let j = 0; j < 2; j++) {
                tableMarkup = tableMarkup + "<td><input style='width: 30px; height: 30px' type='text' class='input'></td>";
            }
            
            tableMarkup = tableMarkup + "</tr>";
        }

        tableMarkup = tableMarkup + "</table>";
        matrixDiv.innerHTML = tableMarkup;
    }

    public collectValFromMatrixDiv(): Array<Array<number>> {
        const tableNode = (document.getElementsByClassName("input") as HTMLCollectionOf<HTMLInputElement>);

        const line = [];
        const matrix = [];

        for (let i = 0; i < tableNode.length; i++) {
            line.push(Number(tableNode[i].value));
        }

        for (let i = 0; i < line.length / 2; i++) {
            matrix.push(<number[]>line.slice(i * 2, i * 2 + 2));
        }

        return matrix
    }
}

export { Nx2Matrix }