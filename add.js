onmessage = function (e) {
    let sum = 0;
    let from = parseInt(e.data.from);
    let to = parseInt(e.data.to);
    sum = from*to;
    postMessage(sum);
    }