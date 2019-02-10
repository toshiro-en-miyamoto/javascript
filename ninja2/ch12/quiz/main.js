const quiz = [
    { name: "Superman", realName: "Clark Kent" },
    { name: "Wonder Woman", realName: "Dianna Prince" },
    { name: "Batman", realName: "Bruce Wayne" },
    { name: 'The Hulk', realName: 'Bruce Banner' },
    { name: 'Spider-man', realName: 'Peter Parker' },
    { name: 'Cyclops', realName: 'Scott Summers' }
];

function random(a, b=1) {
    console.log('random() invoked');
    if(b === 1)
        [a, b] = [b, a];
    return Math.floor((b-a+1) * Math.random()) + a;
}

function shuffle(array) {
    console.log('shuffle() invoked');
    for(let i = array.length; i; i--) {
        let j = random(i) -1;
        [array[i - 1], array[j]] = [array[j], array[i - 1]];
    }
}

const view = {
    start: document.getElementById('start'),
    timer: document.querySelector('#timer strong'),
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    response: document.querySelector('#response'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),

    render(target, content, attributes) {
        console.log('view.rendor() invoked');
        for(const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },

    show(element) {
        console.log('view.show() invoked');
        element.style.display = 'block';
    },

    buttons(array) {
        console.log('view.button() invoked');
        return array
            .map(value => `<button>${value}</button>`)
            .join('');
    },

    hide(element) {
        console.log('view.hide() invoked');
        element.style.display = 'none';
    },

    setup() {
        console.log('view.setup() invoked');
        this.show(this.question);
        this.show(this.response);
        this.show(this.result);
        this.hide(this.start);
        this.render(this.score, game.score);
        this.render(this.result, '');
        this.render(this.info, '');
    },

    teardown() {
        console.log('view.teardown() invoked');
        this.hide(this.question);
        this.hide(this.response);
        this.show(this.start);
    }
};

const game = {

    start(quiz) {
        console.log('game.start() invoked');
        this.secondsRemaining = 20;
        this.timer = setInterval(this.countdown, 1000);
        this.score = 0;
        this.questions = [...quiz];
        view.setup();
        this.ask();
    },

    ask() {
        console.log('game.ask() invoked');
        if(this.questions.length > 2) {
            shuffle(this.questions);
            this.question = this.questions.pop();
            const options = [
                this.questions[0].realName,
                this.questions[1].realName,
                this.question.realName ];
            shuffle(options);
            const question = `What is ${this.question.name}'s real name?`;
            view.render(view.question, question);
            view.render(view.response, view.buttons(options));
        } else {
            this.gameOver();
        }
    },

    check(event) {
        console.log('game.check() invoked');
        const response = event.target.textContent;
        const answer = this.question.realName;
        if(response === answer) {
            view.render(view.result, 'Correct!', {'class':'correct'});
            this.score++;
            view.render(view.score, this.score);
        } else {
            view.render(view.result, `Wrong! ${answer}`, {'class':'wrong'});
        }
        this.ask();
    },

    gameOver() {
        console.log('game.gameOver() invoked');
        view.render(view.info, `Game over, you scored ${this.score}.`);
        view.teardown();
        clearInterval(this.timer);
    },

    countdown() {
        console.log('game.countdown() invoked');
        game.secondsRemaining--;
        view.render(view.timer, game.secondsRemaining);
        if(game.secondsRemaining <= 0)
            game.gameOver();
    }
};

view.start.addEventListener('click', () => game.start(quiz), false);
view.response.addEventListener('click', (event) => game.check(event), false);
