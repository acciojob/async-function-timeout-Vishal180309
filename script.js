//your JS code here. If required.
const form = document.getElementById("delay-form");
const output = document.getElementById("output");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const text = document.getElementById("text").value;
    const delay = parseInt(document.getElementById("delay").value);

    await delayMessage(text, delay);
});

function delayMessage(text, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            output.innerText = text;
            resolve();
        }, delay);
    });
}
