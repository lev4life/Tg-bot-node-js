const CATEGORIES = require('./categories')

module.exports = [
        {
          id: "Абсентный бык",
          name: "Это абсентный бык!🐃",
          description: "Для тех, кто готов познать бычью силу!💪",
          sticker:
            "https://tlgrm.ru/_/stickers/bd2/fed/bd2fed73-fab0-4299-a0e5-0dead789563a/4.webp",
          photo: null,
          price: 6,
          category: CATEGORIES.action
        },
        {
          id: "Вампир",
          name: "Это Вампир 🧛‍♂️",
          description: "Коктейль для настоящих кровопийц 🩸",
          sticker:
            "https://tlgrm.ru/_/stickers/bd2/fed/bd2fed73-fab0-4299-a0e5-0dead789563a/2.webp",
          photo: null,
          price: 7,
          category: CATEGORIES.action
        },

        {id: "Вампир1",
        name: "Это Вампир 🧛‍♂️",
        description: "Коктейль для настоящих кровопийц 🩸",
        sticker:
          "https://tlgrm.ru/_/stickers/bd2/fed/bd2fed73-fab0-4299-a0e5-0dead789563a/3.webp",
        photo: null,
        price: 7,
        category: CATEGORIES.action
        },
        {
          id: "Амаретто-роуз",
          name: "Это Амаретто-роуз 🌹",
          description: "Нежный, как первый поцелуй💋",
          sticker:
            "https://tlgrm.ru/_/stickers/bd2/fed/bd2fed73-fab0-4299-a0e5-0dead789563a/7.webp",
          photo: null,
          price: 8,
          category: CATEGORIES.action
        },
        {
          id: "Jack Daniels",
          name: null,
          description: "Этого хватит на весь зомби-апокалипсис🧟‍♂️",
          sticker: null,
          photo: "https://i.ytimg.com/vi/1Su2isvONCI/maxresdefault.jpg",
          price: null,
          category: CATEGORIES.epic
        },
        {
          id: "Henessy",
          name: null,
          description: "Выбор настоящего аристократа🤌",
          sticker: null,
          photo: "https://content.okwine.ua/files/product/1968974880544130680/30eb4a10-e6ca-11ea-a1e8-753a9db42c60.jpg",
          price: 100,
          category: CATEGORIES.epic
        },
        {
          id: "Jameson",
          name: null,
          description: "Достойный выбор для компании🥃",
          sticker: null,
          photo: "https://cdn.metro-cc.ru/ru/ru_pim_360755001001_01.png",
          price: null,
          category: CATEGORIES.epic
        },
    ]