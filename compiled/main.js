import { App } from "./app/App.js";
try {
    new App();
}
catch (e) {
    const message = e.message;
    console.log(message);
    alert(message);
}
