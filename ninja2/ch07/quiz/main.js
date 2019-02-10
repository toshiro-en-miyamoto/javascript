const quiz = [
    { name: "Superman", realName: "Clark Kent" },
    { name: "Wonder Woman", realName: "Dianna Prince" },
    { name: "Batman", realName: "Bruce Wayne" }
];

const view = {
    start: document.getElementById('start'),
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    render(target, content, attributes) {
        for(const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },
    show(element) {
        element.style.display = 'block';
    },
    hide(element) {
        element.style.display = 'none';
    }
};

const game = {

    start(quiz) {
        this.questions = [...quiz];
        this.score = 0;
        view.hide(view.start);

        for(const question of this.questions) {
            this.question = question;
            this.ask();
        }
        this.gameOver();
    },

    ask() {
        const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question, question);
        const response = prompt(question);
        view hide(view.question);
        this.check(response);
    },

    check(response) {
        const answer = this.question.realName;
        if(response === answer) {
            this.score++;
            view.render(view.score, this.score);
            view.render(view.result, 'Correct!', {'class':'correct'});
            alert(`Correct! ${answer}`);
        } else {
            view.render(view.result, `Wrong! ${answer}`, {'class':'wrong'});
            alert(`Wrong! ${answer}`);
        }
        view.hide(view.result);
    },

    gameOver() {
        view.render(view.info, `Game over, you scored ${this.score}.`);
        view.show(view.start);
    }

};

view.start.addEventListener('click', () => game.start(quiz), false);