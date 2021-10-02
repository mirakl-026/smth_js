/*
    Реализуйте класс Dropdown, который будет 
    инициализировать компонент выбора элементов
    по функционалу похожий на обычный HTML элемент select,
    но полностью реализованный кодом 
*/

/*
    Пример использования:
    const dropdown = new Dropdown('dropdown', {
        items: [
            {label: 'Москва', id: 'msk'},
            {label: 'Санкт-Петербург', id: 'spb'},
            {label: 'Новосибирск', id: 'nsk'},
            {label: 'Краснодар', id: 'krdr'},
        ]
    })
*/

// моё видение
/*
class Dropdown {
    constructor() {
        // this.opened = false;
        this.values = ['msk', 'spb', 'nsk'];
        this.currentIndex = 0;

        // виртуальное создание текущего
        this.$el_current = document.createElement("div");
        this.$el_current.style.borderBlockStyle = "ridge";
        this.$el_current.addEventListener('click', () =>{
            console.log("curr clicked!");
            this.show_list();
        });

        // виртуальное создание списка
        this.$el_list = document.createElement("div");
        for (let i = 0; i < this.values.length; i++){
            // console.log(v);
            let div_li = document.createElement('div');
            div_li.textContent = this.values[i];
            div_li.style.borderBlockStyle = "ridge";

            div_li.addEventListener('click', () =>{
                console.log(`div_li-${i}-${this.values[i]} clicked!`);
                this.currentIndex = i;
                this.show_current();
            });
            this.$el_list.insertAdjacentElement("beforeend", div_li);
        }

        this.show_current();
    }

    show_current() {
        // когда показываем текущего - скрываем список
        this.$el_list.style.display = "none";
        // ... берём значение currentIndex и вставляем в текст
        this.$el_current.textContent = this.values[this.currentIndex];
        this.$el_current.style.display = "block";
    }


    show_list() {
        // когда показываем список - скрыванм текущего
        this.$el_current.style.display = "none";
        // и просто показываем список
        this.$el_list.style.display = "block";
    }

    create() {
        document.querySelector(".wrapper").insertAdjacentElement("beforeend",this.$el_current);
        document.querySelector(".wrapper").insertAdjacentElement("beforeend",this.$el_list);

    }
}

const dd = new Dropdown().create();
*/

// Владилен
// его изменения лезут в index.html


class Dropdown {
    constructor(selector, options) {
        this.$el = document.querySelector(selector);
        this.items = options.items;
       
        this.$el.querySelector(".dropdown__label").textContent = this.items[0].label;
        
        this.$el.addEventListener('click', event => {
            if (event.target.classList.contains("dropdown__label")) {
                if (this.$el.classList.contains("open")) {
                    this.close();
                }
                else {
                    this.open();
                }
            } 
            else if (event.target.tagName.toLowerCase() === 'li') {
                this.select(event.target.dataset.id);
            }
        });

        const itemsHTML = this.items.map(i => {
            return `<li data-id="${i.id}">${i.label}</li>`;
        }).join(" ");

        this.$el.querySelector(".dropdown__menu").insertAdjacentHTML("afterbegin", itemsHTML);
    }

    select(id) {
        const item = this.items.find(i => i.id === id);
        // console.log(item);
        this.$el.querySelector(".dropdown__label").textContent = item.label;
        this.close();
    }

    open() {
        this.$el.classList.add("open");
    }

    close() {
        this.$el.classList.remove("open");
    }
}

const dropdown = new Dropdown('#dropdown', {
    items: [
        {label: 'Москва', id: 'msk'},
        {label: 'Санкт-Петербург', id: 'spb'},
        {label: 'Новосибирск', id: 'nsk'},
        {label: 'Краснодар', id: 'krdr'},
    ]
})