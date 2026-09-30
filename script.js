/* ================= SEARCH ================= */

function searchPoems() {

    const input =
        document.getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    const poems =
        document.querySelectorAll(".poem-card");

    const message =
        document.getElementById("searchMessage");

    let found = 0;


    poems.forEach(function(poem) {

        const text =
            poem.innerText.toLowerCase();


        if (text.includes(input)) {

            poem.style.display = "block";

            found++;

        } else {

            poem.style.display = "none";

        }

    });


    if (input === "") {

        poems.forEach(function(poem) {

            poem.style.display = "block";

        });

        message.innerText =
            "সব কবিতা দেখানো হচ্ছে।";

        return;
    }


    if (found > 0) {

        message.innerText =
            found + " টি কবিতা পাওয়া গেছে।";

    } else {

        message.innerText =
            "দুঃখিত, কোনো কবিতা পাওয়া যায়নি।";

    }

}


/* ================= QUIZ ================= */

const quizQuestions = [

    {
        question: "কবিতা কী প্রকাশের একটি মাধ্যম?",

        answers: [
            "অনুভূতি",
            "গণিত",
            "কম্পিউটার",
            "খেলা"
        ],

        correct: 0
    },


    {
        question: "কবিতায় প্রকৃতি নিয়ে লেখা হতে পারে?",

        answers: [
            "হ্যাঁ",
            "না",
            "কখনো নয়",
            "শুধু বইয়ে"
        ],

        correct: 0
    },


    {
        question: "‘মায়ের ভালোবাসা’ কবিতার মূল বিষয় কী?",

        answers: [
            "মায়ের ভালোবাসা",
            "খেলাধুলা",
            "কম্পিউটার",
            "ভ্রমণ"
        ],

        correct: 0
    },


    {
        question: "‘বৃষ্টির দিন’ কবিতায় কী আছে?",

        answers: [
            "বৃষ্টি",
            "মরুভূমি",
            "বরফ",
            "সমুদ্রযাত্রা"
        ],

        correct: 0
    },


    {
        question: "‘আমার বাংলাদেশ’ কবিতায় কোন দেশের কথা বলা হয়েছে?",

        answers: [
            "বাংলাদেশ",
            "ভারত",
            "জাপান",
            "কানাডা"
        ],

        correct: 0
    },


    {
        question: "কবিতার মাধ্যমে কী প্রকাশ করা যায়?",

        answers: [
            "অনুভূতি",
            "শুধু সংখ্যা",
            "শুধু ছবি",
            "শুধু হিসাব"
        ],

        correct: 0
    },


    {
        question: "বন্ধুত্বের একটি গুরুত্বপূর্ণ বিষয় কী?",

        answers: [
            "পাশে থাকা",
            "এড়িয়ে চলা",
            "রাগ করা",
            "ভুলে যাওয়া"
        ],

        correct: 0
    },


    {
        question: "প্রকৃতির একটি উদাহরণ কোনটি?",

        answers: [
            "গাছ",
            "কম্পিউটার",
            "মোবাইল",
            "গাড়ি"
        ],

        correct: 0
    },


    {
        question: "‘স্বপ্ন’ কবিতায় কী বিষয় রয়েছে?",

        answers: [
            "স্বপ্ন ও আশা",
            "শুধু খেলাধুলা",
            "শুধু খাবার",
            "শুধু ভ্রমণ"
        ],

        correct: 0
    },


    {
        question: "সাহিত্য মানুষের কী কাজে সাহায্য করতে পারে?",

        answers: [
            "ভাবনা ও অনুভূতি প্রকাশে",
            "শুধু হিসাব করতে",
            "শুধু রান্না করতে",
            "শুধু খেলতে"
        ],

        correct: 0
    }

];


let currentQuestion = 0;

let totalScore = 0;


function loadQuestion() {

    const question =
        document.getElementById("question");

    const answers =
        document.getElementById("answers");

    const score =
        document.getElementById("score");


    score.innerText = "";


    const current =
        quizQuestions[currentQuestion];


    question.innerText =
        (currentQuestion + 1) +
        ". " +
        current.question;


    answers.innerHTML = "";


    current.answers.forEach(
        function(answer, index) {

            const button =
                document.createElement("button");


            button.innerText = answer;


            button.className =
                "answer-button";


            button.onclick =
                function() {

                    checkAnswer(
                        index,
                        button
                    );

                };


            answers.appendChild(button);

        }
    );

}


function checkAnswer(index, button) {

    const current =
        quizQuestions[currentQuestion];


    const allButtons =
        document.querySelectorAll(
            ".answer-button"
        );


    allButtons.forEach(
        function(btn) {

            btn.disabled = true;

        }
    );


    if (index === current.correct) {

        button.classList.add("correct");

        totalScore++;

    } else {

        button.classList.add("wrong");

        allButtons[current.correct]
            .classList.add("correct");

    }


    document.getElementById("score")
        .innerText =
        "তোমার স্কোর: " +
        totalScore;

}


function nextQuestion() {

    currentQuestion++;


    if (
        currentQuestion >=
        quizQuestions.length
    ) {

        document.getElementById("question")
            .innerText =
            "🎉 কুইজ শেষ!";


        document.getElementById("answers")
            .innerHTML = "";


        document.getElementById("score")
            .innerText =
            "তোমার মোট স্কোর: " +
            totalScore +
            " / " +
            quizQuestions.length;


        return;

    }


    loadQuestion();

}


/* প্রথম প্রশ্ন চালু */

loadQuestion();