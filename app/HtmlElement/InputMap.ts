class InputMap {
    private dimensionInput: HTMLInputElement = <HTMLInputElement>document.getElementById('dimensionInput');
    private edgeInput: HTMLInputElement = <HTMLInputElement>document.getElementById('edgeInput');
    private matrixInputs: HTMLCollectionOf<HTMLInputElement> = <HTMLCollectionOf<HTMLInputElement>>document.getElementsByClassName('matrixInput');

    public getDimensionInput(): HTMLInputElement {
        return this.dimensionInput;
    }

    public getEdgeInput(): HTMLInputElement {
        return this.edgeInput;
    }

    public getEdgeInputVal(): number {
        const edgeInputVal: number = Number(this.edgeInput.value);
        console.log(edgeInputVal);

        if (edgeInputVal === NaN ?? edgeInputVal <= 0) {
            throw new Error('Введите корректное число рёбер');
        }

        return edgeInputVal;
    }

    public getDimensionInputVal(): number {
        const dimensionInputVal: number = Number(this.dimensionInput.value);

        if (dimensionInputVal === NaN ?? dimensionInputVal <= 0) {
            throw new Error('Введите корректное число рёбер');
        }

        return dimensionInputVal;
    }

    public getMatrixInputs(): HTMLCollectionOf<HTMLInputElement> {
        return this.matrixInputs;
    }
}

export { InputMap };