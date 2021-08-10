const allInputs = document.querySelectorAll(".inputButton");
const output = document.querySelector(".displayOutput");

let operations = [];
let num = [];
let allNums = [];
let answer = 0;

allInputs.forEach((input) => {
    input.addEventListener("click", (evt) => {
        let check = evt.target.innerText;

        switch (check) {
            case "AC":
                {
                    num = [];
                    operations = [];
                    allNums = [];
                    answer = 0;
                    output.textContent = "0";
                    break;
                }
            case "<-":
                {
                    num.pop();
                    if (num.length === 0) {
                        output.textContent = "0"
                    } else {
                        output.textContent = num.join('');
                    }
                    break;
                }
            case "%":
                {
                    let percent = +num.join('') / 100;
                    num = (percent + '').split('');
                    output.textContent = percent;
                    break;
                }
            case "/":
                {
                    allNums.push(num.join(''));
                    operations.push("/");
                    num = [];
                    output.textContent = "/";
                    break;
                }
            case "7":
                {
                    num.push(7);
                    output.textContent = num.join('');
                    break;
                }
            case "8":
                {
                    num.push(8);
                    output.textContent = num.join('');
                    break;
                }
            case "9":
                {
                    num.push(9);
                    output.textContent = num.join('');
                    break;
                }
            case "*":
                {
                    allNums.push(num.join(''));
                    operations.push("*");
                    num = [];
                    output.textContent = "*";
                    break;
                }
            case "4":
                {
                    num.push(4);
                    output.textContent = num.join('');
                    break;
                }
            case "5":
                {
                    num.push(5);
                    output.textContent = num.join('');
                    break;
                }
            case "6":
                {
                    num.push(6);
                    output.textContent = num.join('');
                    break;
                }
            case "-":
                {
                    allNums.push(num.join(''));
                    operations.push("-");
                    num = [];
                    output.textContent = "-";
                    break;
                }
            case "1":
                {
                    num.push(1);
                    output.textContent = num.join('');
                    break;
                }
            case "2":
                {
                    num.push(2);
                    output.textContent = num.join('');
                    break;
                }
            case "3":
                {
                    num.push(3);
                    output.textContent = num.join('');
                    break;
                }
            case "+":
                {
                    allNums.push(num.join(''));
                    operations.push("+");
                    num = [];
                    output.textContent = "+";
                    break;
                }
            case "+/-":
                {
                    if (num.includes("-")) {
                        num.shift();
                        output.textContent = num.join('');
                        break;
                    } else {
                        num.unshift("-");
                        output.textContent = num.join('');
                        break;
                    }

                }
            case "0":
                {
                    num.push(0);
                    output.textContent = num.join('');
                    break;
                }
            case ".":
                {
                    if (num.includes(".")) {
                        break;
                    } else {
                        if (num.length == 0) {
                            num.push(0);
                            num.push(".");
                            output.textContent = num.join('');
                            break;
                        }
                    }
                }
            case "=":
                {
                    allNums.push(num.join(''));
                    console.log(allNums, 'start');
                    let length = allNums.length;
                    for (; length > 0; length--) {
                        let operation = operations[0];
                        switch (operation) {
                            case "+":
                                {
                                    answer = (+allNums[0]) + (+allNums[1]);
                                    allNums.shift();
                                    allNums.shift();
                                    allNums.unshift(answer);
                                    operations.shift();
                                    break;
                                }
                            case "-":
                                {
                                    answer = (+allNums[0]) - (+allNums[1]);
                                    allNums.shift();
                                    allNums.shift();
                                    allNums.unshift(answer);
                                    operations.shift();
                                    break;
                                }
                            case "/":
                                {
                                    answer = (+allNums[0]) / (+allNums[1]);
                                    allNums.shift();
                                    allNums.shift();
                                    allNums.unshift(answer);
                                    operations.shift();
                                    break;
                                }
                            case "*":
                                {
                                    answer = (+allNums[0]) * (+allNums[1]);
                                    allNums.shift();
                                    allNums.shift();
                                    allNums.unshift(answer);
                                    operations.shift();
                                    break;
                                }
                        }
                    }
                    output.textContent = answer;
                    operations = [];
                    num = (answer + '').split('');
                    allNums = [];
                    console.log(allNums, 'end')
                    break;
                }

        }
    })
});