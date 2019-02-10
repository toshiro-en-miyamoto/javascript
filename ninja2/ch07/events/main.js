function doSomething(event) {
    console.log('Something Happened!');
    console.log(`${event.type} on ${event.target}`);

    const screen = `screen: ${event.screenX}, ${event.screenY}`;
    const client = `client: ${event.clientX}, ${event.clientY}`;
    const page   = `page: ${event.pageX}, ${event.pageY}`;
    console.log(`${screen}, ${client}, ${page}` );
}

function highlight(event) {
    event.target.classList.toggle('highlight');
}

function remove(event) {
    event.target.style.backgroundColor = 'pink';
    event.target.removeEventListener('click', remove);
}

// addEventListener('click', doSomething);

const clickPara = document.getElementById('click');
clickPara.addEventListener('click', () => console.log('click'));
clickPara.addEventListener('mousedown', () => console.log('down'));
clickPara.addEventListener('mouseup', () => console.log('up'));

const dblclickPara = document.getElementById('dblclick');
dblclickPara.addEventListener('dblclick', highlight);

const mousePara = document.getElementById('mouse');
mousePara.addEventListener('mouseover', highlight);
mousePara.addEventListener('mouseout', highlight);

const oncePara = document.getElementById('once');
oncePara.addEventListener('click', remove);

const brokenLink = document.getElementById('broken');
brokenLink.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Broken Link!');
});

const ulElement = document.getElementById('list');
const liElement = document.querySelector('#list li');

ulElement.addEventListener('click', (event) => {
    console.log('Clicked on ul');
}, false);

liElement.addEventListener('click', (event) => {
    console.log('Clicked on li');
    event.stopPropagation();
}, false);

ulElement.addEventListener('click', highlight);

addEventListener('keydown', highlight);
addEventListener('keyup', () => console.log(`${new Date}`));
addEventListener('keypress', (event) => console.log(`${event.key}`));

// check to see if the C key was depressed while holding down the Ctrl
addEventListener('keydown', (event) => {
    if(event.key === 'c' && event.ctrlKey) {
        console.log('Action canceled!');
    }
});