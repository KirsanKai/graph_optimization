class ButtonMap {
    constructor() {
        this.calculateBtn = document.getElementById('calculateBtn');
        this.createBtn = document.getElementById('createBtn');
    }
    getCalculateBtn() {
        return this.calculateBtn;
    }
    getCreateBtn() {
        return this.createBtn;
    }
}
export { ButtonMap };
