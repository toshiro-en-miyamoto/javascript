const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Woman's real name?", "Dianna Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
];

function start() {
    let score = 0;

    for(const [question, answer] of quiz) {
        const response = ask(question);
        check(response, answer);
    }

    gameOver();

    function ask(question) {
        return prompt(question);
    }

    function check(response, answer) {
        if(response === answer) {
            alert('Correct!');
            score++;
        } else {
            alert(`Wrong! ${answer}`);
        }
    }

    function gameOver() {
        alert(`Game Over, you scored ${score} point${score>1? 's': ''}`);
    }
}

start(quiz);