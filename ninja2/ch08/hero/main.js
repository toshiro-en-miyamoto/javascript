const formHero = document.forms['formHero'];
formHero.addEventListener('submit', makeHero, false);

function makeHero(event) {
    event.preventDefault();

    const hero = {};
    hero.name = formHero.heroName.value;
    hero.realName = formHero.realName.value;

    hero.powers = [];
    hero.powers = [...formHero.powers]
        .filter(box => box.checked)
        .map(box => box.value);

    hero.category = formHero.category.value;
    hero.age = formHero.age.value;
    hero.city = formHero.city.value;
    hero.origin = formHero.origin.value;

    alert(JSON.stringify(hero));
    return hero;
}

const labelFirst = formHero.querySelector('label');
const divError = document.createElement('div');
divError.classList.add('error');
divError.textContent = 'cannot start with X.';
labelFirst.append(divError);

formHero.heroName.addEventListener('keyup', validateInline, false);
formHero.heroName.addEventListener('keyup', disableSubmit, false);

function validateInline() {
    const heroName = this.value.toUpperCase();
    divError.style.display =
        heroName.startsWith('X') ? 'block' : 'none';
}

function disableSubmit(event) {
    document.getElementById('submit').disabled =
        event.target.value === '' ? true : false;
}