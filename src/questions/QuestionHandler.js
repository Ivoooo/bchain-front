import q0 from "./0_introduction.json";
import q1 from "./1_businessCase.json";
import q2 from "./2_organisationalPerspecive.json";
import q3 from "./3_identifyBenefits.json";
import q4 from "./4_CheckUsability.json";
import q5 from "./5_evaluateCompany.json";
import q6 from "./6_telemetry.json";
import q7 from "./7_end.json"

const q = [q0, q1, q2, q3, q4, q5, q6, q7]; //IMPORTANT if you add a new step (q8), you NEED to extend this array!
//ALSO, you need to import the new question above! (q8 recommended as name)
//Likely it would make sense to change the order as Telemetry and End should probably be at the end.
//Additionally, on FrontPage.js you need to add to line 18 the new chapter (8: {}) see below:
//const [answer, setAnswer] = useState({0:{}, 1: {}, 2: {}, 3:{}, 4:{}, 5:{}, 6:{}, 7:{}, 8:{}});

const qList = getQuestionList();

export class QuestionHandler {
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

    static getQuestionArray() {
        return q;
    }

    static getQuestionList() {
        return qList;
    }
}

function getQuestion([chapter, part]) {
    return q[chapter]["questionContainer"][part];
}

function getNextStep([chapter, part]) {
    if(q[chapter]["questionContainer"][part+1] !== undefined) return [chapter, part+1];
    if(q[chapter+1] !== undefined) {
        if(q[chapter+1]["questionContainer"][1] !== undefined) {
            return [chapter+1, 1];
        }
    }
    return null; //to signal end of questions
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

function getQuestionList() {
    let a = [0,1];
    let c = [a];
    while(getNextStep(a) !== null) {
        a = getNextStep(a);
        c.push(a);
    }
    return c;
}