class DivMap {
    private matrixDiv: HTMLDivElement = <HTMLDivElement>document.getElementById('matrixDiv');
    private resultDiv: HTMLDivElement = <HTMLDivElement>document.getElementById('resultDiv');
    private excerciseSettingDiv: HTMLDivElement = <HTMLDivElement>document.getElementById('excerciseSettingDiv');

    public getMatrixDiv(): HTMLDivElement {
        return this.matrixDiv;
    }

    public getResultDiv(): HTMLDivElement {
        return this.resultDiv;
    }

    public getExcerciseSettingDiv(): HTMLDivElement {
        return this.excerciseSettingDiv;
    }
}

export { DivMap };