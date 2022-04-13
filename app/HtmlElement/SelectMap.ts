class SelectMap {
    private excerciseSelect: HTMLSelectElement = <HTMLSelectElement>document.getElementById('exerciseSelect');

    public getExcerciseSelect(): HTMLSelectElement {
        return this.excerciseSelect;
    }
}

export { SelectMap };