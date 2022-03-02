import q0 from "./0_introduction.json";
import q1 from "./1_businessCase.json";
import q2 from "./2_organisationalPerspecive.json";
import q3 from "./3_identifyBenefits.json";
import q4 from "./4_CheckUsability.json";
import q5 from "./5_evaluateCompany.json";
import q6 from "./6_telemetry.json";

let q = [q0, q1, q2, q3, q4, q5, q6]; //IMPORTANT if you add a new step (q7), you NEED to extend this array!

let values = buildProgressArray();


export class NaviHelper {
    static getCurrentProgress([chapter, part]) { //todo make binary search
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

function getNextStep([chapter, part]) { //todo this is same as in QuestionHandler
    if(q[chapter]["questionContainer"][part+1] !== undefined) return [chapter, part+1];
    return [chapter+1,1]
}

function calculateProgress(type) {
    if (type === "Front Page") return 1;
    if (type === "Text") return 1;
    if (type === "Dual Choice") return 1;
    if (type === "Overview") return 1;
    if (type === "Single Choice with Other" || type === "Single Choice") return 2;
    if (type === "Multiple Choice or none" || type === "Multiple Choice") return 4;
    if (type === "Telemetry") return 3;
    console.log("Error in NaviHelper.calculateProgress. Illegal type: " + type);
    return 0;
}

function buildProgressArray() {
    let a = [0,1];
    let c = [calculateProgress(q[a[0]]["questionContainer"][a[1]]["type"])];
    while(a[0] !== 6 || a[1] !== 1) {
        a = getNextStep(a);
        //pushes value of last array plus value of current step
        c.push(c[c.length-1] + calculateProgress(q[a[0]]["questionContainer"][a[1]]["type"]));
    }
    return c
}