
import {QuestionHandler} from "./QuestionHandler";

let q = QuestionHandler.getQuestionArray(); //IMPORTANT if you add a new step (q8), you NEED to extend this array!

let values = buildProgressArray();


export class NaviHelper {
    static getCurrentProgress([chapter, part]) { // this could be improved with binary search using an array
        //similar to buildProgressArray. However, since there are only about ~50 questions the impact is minor.
        let a = [0,1];
        let i = 1;
        while(a[0] !== chapter || a[1] !== part) {
            a = getNextStep(a);
            ++i;
        }
        return values[i];
    }

    static getMaxProgress() {
        return values[values.length -1];
    }
}

function getNextStep([chapter, part]) {
    return QuestionHandler.getNextStep([chapter, part]);
}

function calculateProgress(type) {
    if (type === "Front Page") return 1;
    if (type === "Text") return 1;
    if (type === "Dual Choice") return 1;
    if (type === "Overview") return 1;
    if (type === "Single Choice with Other" || type === "Single Choice") return 2;
    if (type === "Multiple Choice or none" || type === "Multiple Choice") return 4;
    if (type === "Telemetry") return 3;
    if(type === "End") return 1;
    console.log("Error in NaviHelper.calculateProgress. Illegal type: " + type);
    return 0;
}

function buildProgressArray() {
    let a = [0,1];
    let c = [calculateProgress(q[a[0]]["questionContainer"][a[1]]["type"])];
    while(getNextStep(a) !== null) {
        a = getNextStep(a);
        //pushes value of last array plus value of current step
        c.push(c[c.length-1] + calculateProgress(q[a[0]]["questionContainer"][a[1]]["type"]));
    }
    return c
}