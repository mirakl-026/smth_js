// Реализуйте класс MyPromise, который будет работать точно так же, как и Promise.
// Достаточно реализовать методы: then, catch, finally
// методы all, race делать не нужно

// var promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve( 2 );
//     }, 2000);
// });

// promise.then( num => num *= 2)
//     .then(num => num *=3 )
//     .catch(err => console.log(err))
//     .finally( () => console.log("finally"));


// промисы создаются как классы
class MyPromise {

    // в конструктор передаётся функция с двумя параметрами - resolve, reject
    constructor(callback) {
        // функция вызовется сразу-же
        
        // поскольку catch и finally вызываются 1 раз:
        this.onCatch = null;
        this.onFinally = null;

        // для then
        this.thenCbs = [];   // массив коллбэков

        // флаг останова
        this.isRejected = false;

        // в resolve передаются данные - data
        function resolver(data) {
            if (this.isRejected) 
                return;
                
            // вызов цепочек then
            this.thenCbs.forEach(cb => {
                data = cb(data);       // данные меняются по цепочке вызовов
            });

            // есть ли finally?
            if (this.onFinally)
                this.onFinally();
        }

        // в reject передаётся error
        function rejecter(error) {
            this.isRejected = true;
            // есть ли catch?
            if (this.onCatch) 
                this.onCatch(error);    // вызов того самого cb

            // есть ли finally?
            if (this.onFinally)
                this.onFinally();
        }

        // callback принимает resolve , reject
        // bind(this) - для привязки контекста
        callback(resolver.bind(this), rejecter.bind(this));
    }

    // промис объект имеет 3 метода then, catch, finally - все примают функции
    // then вызывается много раз
    then(cb) {
        this.thenCbs.push(cb);
        // возвращаем промис
        return this;
    }

    // catch вызывается 1 раз
    catch(cb) {
        this.onCatch = cb;
        return this;
    }

    // finally вызывается 1 раз
    finally(cb) {
        this.onFinally = cb;    //запоминаем коллбэк, чтобы вызывать когда нужно
        return this;
    }
}


const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        reject("ERROR!");
        resolve( 2 );
    }, 2000);
});

promise.then( num => num *= 2)
    .then(num => num *=3 )
    .catch(err => console.error(err))
    .finally( () => console.log("finally"))
    .then(num => console.log("Done!",num));