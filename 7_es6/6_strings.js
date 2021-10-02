const createLink = ({path, name}) => '<a target="_blank" href="'+path+'">'+name+'</a>';

const ul = document.querySelector('ul');

const google = '<li>' + createLink({path: 'https://google.com', name: 'Google'}) + '</li>';
const yandex = '<li>' + createLink({path: 'https://ya.ru', name: 'Yandex'}) + '</li>';

ul.insertAdjacentHTML('afterbegin', google);
ul.insertAdjacentHTML('afterbegin', yandex);

// неудобно из-за '"'"''""""

// шаблонизация через `${}`
const createLink2 = ({path, name}) => `<a target="_blank" href="${path}">${name}</a>`;
const aspnet = `<li>${createLink({path: 'https://asp.net', name: 'ASPNET'})}</li>`;

ul.insertAdjacentHTML('afterbegin', aspnet);

const strToLog = `
    Hello
    World
        I am
            New tab
`;

console.log(strToLog);