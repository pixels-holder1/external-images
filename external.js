// external image reader test

const baseParam = "?target=";

let params = window.location.search;
let target = params.replace(baseParam, "");
console.log(target);

let data = document.createElement("pre");
data.style.overflowWrap = "break-word";
data.style.whiteSpace = "pre-wrap";
data.innerHTML = target;
document.body.appendChild(data);

console.log(data.innerHTML);
