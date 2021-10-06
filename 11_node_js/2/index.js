// npm вообще красава

// инициализация проекта: npm init

// зависимости: в package.json записывают зависимости

// 1 устанавливаем веб сервер (Express)
// npm i express (i = install)
// npm install express --save (--save - нам необходимо сохранить данный пакет, 
// как зависимость проекта) -> dependencies
// у самого модуля - свои dependencies и npm их устанавливает

// устанавливаем nodemon для режима разработки (dev)
// npm i nodemon --save-dev -> devDependencies

// для того чтобы пользоваться nodemon из консоли - этот пакет
// надо установить глобально: npm i nodemon -g (для Unix sudo ...)
// устанавливает nodemon в глобальную область видимости

// если удалить папку node_modules - восстановить можно
// с помощью команды npm i 

// package-lock - системный файл генерируемый автоматически,
// используется для ускорения работы npm - отвечает
// за совместимость версий пакетов, его менять не надо