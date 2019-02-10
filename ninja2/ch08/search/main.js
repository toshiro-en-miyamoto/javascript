const labelInputElement = 'Search Here';
const formSearch = document.forms['search'];
const [inputSearch, buttonSearch] = formSearch.elements;

inputSearch.value=labelInputElement;

inputSearch.addEventListener('focus', () => {
    if(inputSearch.value === labelInputElement)
        inputSearch.value = '';
}, false);

inputSearch.addEventListener('blur', () => {
    if(inputSearch.value === '')
        inputSearch.value = labelInputElement;
}, false);

inputSearch.addEventListener('change', () => console.log('changed'));

formSearch.addEventListener('submit', funcSearch, false);
function funcSearch(event) {
    alert(`Searching for: ${inputSearch.value}`);
    event.preventDefault();
};
