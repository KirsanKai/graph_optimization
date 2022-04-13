import { ExcerciseInterface } from "./Excercise/ExcerciseInterface.js";
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
    private divMap: DivMap;
    private buttonMap: ButtonMap;
    private selectMap: SelectMap;

    private excercises: Array<ExcerciseInterface>;
    private currentExcercise: ExcerciseInterface | null = null;

    constructor() {
        this.divMap = new DivMap();
        this.buttonMap = new ButtonMap();
        this.selectMap = new SelectMap();
        this.excercises = this.createExercises();
        this.setEvents();
    }

    private createExercises(): Array<ExcerciseInterface> {
        return [
            new ExcerciseFour(new NxNMatrix()),
            new ExcerciseEight(new Nx2Matrix()),
            new ExcerciseTwelve(new NxNMatrix()),
            new ExcerciseSixteen(new NxNMatrix()),
            new ExcerciseTwenty(new Nx2Matrix()),
        ];
    }

    private choiceExcercise(excerciseNum: number): void {
        for (let excercise of this.excercises) {
            if (excercise.isExcercise(excerciseNum) === false) {
                continue;
            }

            this.currentExcercise = excercise;
            return;
        }

        throw new Error('Упражнение не найдено');
    }

    private setEvents(): void {
        this.buttonMap.getCreateBtn().onclick = () => {
            try {
                this.writeMessageToResult();
                this.getCurrentExcercise().createMatrixFields();
            } catch (e: any) {
                this.writeMessageToResult(e.message);
            }
        };
        this.buttonMap.getCalculateBtn().onclick = () => {
            try {
                const answer = this.getCurrentExcercise().calculate(); 
                this.writeMessageToResult(answer.getMessage());
            } catch (e: any) {
                this.writeMessageToResult(e.message);
            }
        };
    
        const exerciseSelect = this.selectMap.getExcerciseSelect();
        exerciseSelect.onchange = () => {
            try {
                this.writeMessageToResult();
                this.choiceExcercise(Number(exerciseSelect.selectedOptions.item(0)?.value));
                this.setExcerciseSettings(this.getCurrentExcercise());
            } catch (e: any) {
                this.writeMessageToResult(e.message);
            }
        }
    }

    private getCurrentExcercise(): ExcerciseInterface {
        if (this.currentExcercise === null) {
            throw Error('Не выбрано упражнение');
        } 

        return this.currentExcercise;
    }

    private writeMessageToResult(message = ''): void {
        this.divMap.getResultDiv().innerHTML = message;
    }

    private setExcerciseSettings(excercise: ExcerciseInterface): void {
        this.divMap.getExcerciseSettingDiv().innerHTML = excercise.getExcerciseSetting();
    }
}

export { App };