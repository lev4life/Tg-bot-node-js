// const web ='https://ya.ru'
// const phone = 89114913481

module.exports = {
    menuOptions: {
        reply_markup: {
            inline_keyboard:  [
                [
                    {text: 'Заказать!', callback_data: 'order'},
                    {text: 'Оставить отзыв!', callback_data: 'feedback'},
                ]
            ]
        }
    },
    

    mainMenu: {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: 'По номеру телефона!', callback_data: 'phone' },
                    {text: 'Онлайн!', url: 'https://ya.ru'},
                    {text: 'Назад', callback_data: 'backMain'}
                ]
            ]
        }
    },
    
    feedbackMenu: {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: 'Okay, bro!👍', callback_data: 'good'},
                    {text: 'Daaamn!👎', callback_data: 'bad'},
                    {text: 'Назад', callback_data: 'backMain'},
                    // {text: 'Назад', callback_data: 'back'}
                ]
            ]
        }
    }
}