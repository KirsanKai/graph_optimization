import { App } from "./app/App.js";

try {
    new App();
} catch (e) {
    const message = (e as Error).message; 
    console.log(message);
    alert(message);
}