class ButtonMap {
    private calculateBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById('calculateBtn');
    private createBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById('createBtn');

    public getCalculateBtn(): HTMLButtonElement {
        return this.calculateBtn;
    }

    public getCreateBtn(): HTMLButtonElement {
        return this.createBtn;
    }
}

export { ButtonMap }; 