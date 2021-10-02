const form = document.querySelector("form");

form.addEventListener("submit", event => {
    event.preventDefault();
    const title = form.title.value;
    const text = form.text.value;
    const description = form.description.value;

    // saveForm({title,text, description});
    //saveForm2({title,text, description});   // эффект тот-же
    //saveForm3({title,text, description});
    saveForm4(title,text, description);
})

// сохранение на сервере
function saveForm(data) {
    const formData = {
        date: new Date().toLocaleDateString(),
        title: data.title,
        text: data.text,
        description: data.description       
    };

    console.log("Form data: ", formData);
}

// не очень удобно каждое поле добавлять, упрощаем
function saveForm2({title, text, description}) {
    const formData = {
        date: new Date().toLocaleDateString(),
        title, text, description      
    };

    console.log("Form data: ", formData);
}

// spread!
function saveForm3(data) {
    const formData = {
        date: new Date().toLocaleDateString(),
        ...data     // spread - не нужно вручную и не важно сколько полей - всё что на входе - всё добавится (создаёт ссылки на поля если что)
    };
    console.log("Form data: ", formData);
}

// Rest
// принимает все параметры в массив
function saveForm4(...args) {   // rest - все аргументы будут собраны в 1 масссив
    // console.log(args);

    const [title, text, description] = args

    const formData = {
        date: new Date().toLocaleDateString(),   
        title, text, description
    };
    console.log("Form data: ", formData);
}

// rest применяется для сбора всех параметров (аргументов)
// а spread служит для того чтобы разворачивать объекты