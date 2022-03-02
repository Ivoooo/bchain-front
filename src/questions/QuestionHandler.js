import q0 from "./0_introduction.json";
import q1 from "./1_businessCase.json";
import q2 from "./2_organisationalPerspecive.json";
import q3 from "./3_identifyBenefits.json";
import q4 from "./4_CheckUsability.json";
import q5 from "./5_evaluateCompany.json";
import q6 from "./6_telemetry.json";

let q = [q0, q1, q2, q3, q4, q5, q6]; //IMPORTANT if you add a new step (q7), you NEED to extend this array!
//merge with NaviHelper. => Check if arrays get built every time => if yes store in local storage todo
//might be smart to save the version here because then only this file needs editing.

export class QuestionHandler {
    q = [q0, q1, q2, q3, q4, q5, q6];

    static getQuestion([chapter, part]) {
        return getQuestion([chapter, part]);
    }

    static getTitles(language="de") {
        return getTitles(language);
    }

    static getNextStep([chapter=0, part=0]) {
        return getNextStep([chapter, part]);
    }

    static getLastStep([chapter, part]) {
        return getLastStep([chapter, part]);
    }
}

function getQuestion([chapter, part]) {
    return q[chapter]["questionContainer"][part];
}

function getNextStep([chapter, part]) {
    if(q[chapter]["questionContainer"][part+1] !== undefined) return [chapter, part+1];
    return [chapter+1,1]
}

function getTitles(language="de") {
    let t = []
    for(let i=0; i< q.length; i++) {
        t.push(q[i]["title"][language]);
    }
    return t;
}

function getLastStep([chapter, part]) {
    if(part - 1 >= 1) return [chapter, part-1];
    if(chapter-1 < 0) return [0,1];

    let q = [chapter-1, 1];
    while(getNextStep(q)[0] === q[0]) q=getNextStep(q);
    return q;
}