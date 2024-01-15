export const validBrackets = (expression: string) => {
    const brackets: { [key: string]: string } = {
        ")": "(",
        "]": "[",
        "}": "{",
    };

    let stack: string[] = [];

    for (const char of expression) {
        if (["(", "[", "{"].includes(char)) {
            stack.push(char);
        } else if ([")", "]", "}"].includes(char)) {
            if (
                stack.length === 0 ||
                stack[stack.length - 1] !== brackets[char]
            ) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.length === 0;
};

export const validBooleanExpression = (expression: string) => {
    const L = ["|", "&"];
    const B = ["(", ")"];
    const C = ["<", ">", "=", "!"];
    const A = ["+", "-", "/", "*"];

    let tsExpression = "1";

    for (let i = 0; i < expression.length; i++) {
        const current = expression[i];
        if (B.includes(current)) {
            tsExpression += "1";
        } else if (L.includes(current)) {
            tsExpression += current + current;
        } else if (C.includes(current)) {
            tsExpression += current;
        } else if (A.includes(current)) {
            tsExpression += "+";
        } else {
            tsExpression += "1";
        }

        if (
            tsExpression.length > 1 &&
            tsExpression[tsExpression.length - 1] ===
                tsExpression[tsExpression.length - 2] &&
            tsExpression[tsExpression.length - 1] === "1"
        ) {
            tsExpression = tsExpression.slice(0, -1);
        }
    }

    try {
        const result = eval(tsExpression);
        return result === false || result === true;
    } catch (e) {
        return false;
    }
};