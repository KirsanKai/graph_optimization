import { ExcerciseFour } from "./Excercise/ExcerciseFour.js";
import { ButtonMap } from "./HtmlElement/ButtonMap.js";
import { DivMap } from "./HtmlElement/DivMap.js";
import { SelectMap } from "./HtmlElement/SelectMap.js";
import { Nx2Matrix } from "./Matrix/Nx2Matrix.js";
import { NxNMatrix } from "./Matrix/NxNMatrix.js";
import { ExcerciseEight } from "./Excercise/ExcerciseEight.js";
import { ExcerciseTwelve } from "./Excercise/ExcerciseTwelve.js";
import { ExcerciseSixteen } from "./Excercise/ExcerciseSixteen.js";
import { ExcerciseTwenty } from "./Excercise/ExcerciseTwenty.js";
class App {
    constructor() {
        this.currentExcercise = null;
        this.divMap = new DivMap();
        this.buttonMap = new ButtonMap();
        this.selectMap = new SelectMap();
        this.excercises = this.createExercises();
        this.setEvents();
    }
    createExercises() {
        return [
            new ExcerciseFour(new NxNMatrix()),
            new ExcerciseEight(new Nx2Matrix()),
            new ExcerciseTwelve(new NxNMatrix()),
            new ExcerciseSixteen(new NxNMatrix()),
            new ExcerciseTwenty(new Nx2Matrix()),
        ];
    }
    choiceExcercise(excerciseNum) {
        for (let excercise of this.excercises) {
            if (excercise.isExcercise(excerciseNum) === false) {
                continue;
            }
            this.currentExcercise = excercise;
            return;
        }
        throw new Error('Упражнение не найдено');
    }
    setEvents() {
        this.buttonMap.getCreateBtn().onclick = () => {
            try {
                this.writeMessageToResult();
                this.getCurrentExcercise().createMatrixFields();
            }
            catch (e) {
                this.writeMessageToResult(e.message);
            }
        };
        this.buttonMap.getCalculateBtn().onclick = () => {
            try {
                const answer = this.getCurrentExcercise().calculate();
                this.writeMessageToResult(answer.getMessage());
            }
            catch (e) {
                this.writeMessageToResult(e.message);
            }
        };
        const exerciseSelect = this.selectMap.getExcerciseSelect();
        exerciseSelect.onchange = () => {
            var _a;
            try {
                this.writeMessageToResult();
                this.choiceExcercise(Number((_a = exerciseSelect.selectedOptions.item(0)) === null || _a === void 0 ? void 0 : _a.value));
                this.setExcerciseSettings(this.getCurrentExcercise());
            }
            catch (e) {
                this.writeMessageToResult(e.message);
            }
        };
    }
    getCurrentExcercise() {
        if (this.currentExcercise === null) {
            throw Error('Не выбрано упражнение');
        }
        return this.currentExcercise;
    }
    writeMessageToResult(message = '') {
        this.divMap.getResultDiv().innerHTML = message;
    }
    setExcerciseSettings(excercise) {
        this.divMap.getExcerciseSettingDiv().innerHTML = excercise.getExcerciseSetting();
    }
}
export { App };
