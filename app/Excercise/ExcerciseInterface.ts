import { Answer } from "../Answer/Answer.js"

interface ExcerciseInterface {
    calculate(): Answer;
    createMatrixFields(): void;
    isExcercise(excerciseNum: number): boolean;
    getExcerciseSetting(): string;
}

export { ExcerciseInterface }