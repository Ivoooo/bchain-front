import q0 from "./0_introduction.json";
import q1 from "./1_businessCase.json";
import q2 from "./2_organisationalPerspecive.json";
import q3 from "./3_identifyBenefits.json";
import q4 from "./4_CheckUsability.json";
import q5 from "./5_evaluateCompany.json";
import q6 from "./6_telemetry.json";

let q = [q0, q1, q2, q3, q4, q5, q6]; //IMPORTANT if you add a new step (q7), you NEED to extend this array!
//GUIDELINES TO ADD NEW QUESTION: //todo edit questioncontainer name


export class QuestionHandler {
    q = [q0, q1, q2, q3, q4, q5, q6];

    static getQuestion([chapter, part], language) {
        return getQuestion([chapter, part], language);
    }

    static getTitles(language="Deutsch") {
        return getTitles(language);
    }

    static getNextStep([chapter=0, part=0]) {
        return getNextStep([chapter, part])
    }
}

function getQuestion([chapter, part], language) {
    return language === "Deutsch" ? q[chapter]["Fragen"][part] : q[chapter]["Question"][part];
}

function getNextStep([chapter, part]) {
    if(q[chapter]["Fragen"][part+1] !== undefined) return [chapter, part+1] //todo why this no work
    return [chapter+1,1] //todo check if end is reached
}

function getTitles(language="Deutsch") {
    let t = []
    for(let i=0; i< q.length; i++) {
        t.push(q[i]["Title"][language]);
    }
    return t;
}