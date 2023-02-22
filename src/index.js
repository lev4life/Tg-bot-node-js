const TgBot = require("node-telegram-bot-api");

const CATEGORIES = require('./categories')

const config = require("./config");

const helper = require("./helper");

const keyboard = require("./keyboard");

const inlineKeyboard = require("./inline_keyboard");

const kb = require("./keyboard-buttons");

const coctails = require('./coctails')

helper.logStart();

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

const bot = new TgBot(config.TOKEN, {
  polling: true,
});

const start = () => {
  bot.onText(/\/start/, async (msg) => {
    const chatId = helper.getChatId(msg);
    const text = `Привет, ${msg.from.first_name}  ${msg.from.last_name}!\nВыбери интересующий тебя раздел!`;
    await bot.sendSticker(
      chatId,
      "https://tlgrm.ru/_/stickers/5eb/843/5eb8436f-51c7-315b-abc5-7f45216b5502/256/18.webp"
    );
    return bot.sendMessage(helper.getChatId(msg), text, {
      reply_markup: {
        keyboard: keyboard.home,
      },
    });
  });

  bot.on("message", async (msg) => {
    console.log("Work", msg.from.first_name, msg.from.last_name);
    const text = msg.text;
    const chatId = helper.getChatId(msg);

    switch (text) {
      case kb.home.info:
        break;
      case kb.home.bar:
        bot.sendMessage(chatId, `Выберите напиток`, {
          reply_markup: {
            keyboard: keyboard.menubar,
          },
        });
        break;
      case kb.barsmenu.action:
        bot.sendMessage(chatId, `Выберите Экшн-коктейль`, {
          reply_markup: {
            keyboard: keyboard[CATEGORIES.action],
          },
        });
        break;
      case kb.barsmenu.epic:
        bot.sendMessage(chatId, `Выберите Эпический снаряд`, {
          reply_markup: {
            keyboard: keyboard[CATEGORIES.epic],
          },
        });
        break;
      case kb.home.about:
        bot.sendMessage(
          chatId,
          "Наша команда готовит лучшие коктейли во всем Диком Западе!🤠:"
        );
        bot.sendVideo(
          chatId,
          "https://vod-progressive.akamaized.net/exp=1676902902~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3524%2F5%2F142621450%2F428356285.mp4~hmac=3d40248c665bd98a396871189a3f97a0d4e7906669959176cb78cd5c9909581a/vimeo-prod-skyfire-std-us/01/3524/5/142621450/428356285.mp4"
        );
        bot.sendMessage(chatId, "С уважением, Telegraf-bar!");
        break;
      case kb.backtohome:
        bot.sendMessage(chatId, `Выберите раздел`, {
          reply_markup: {
            keyboard: keyboard.home,
          },
        });
        break;
      case kb.backtomenubar:
        bot.sendMessage(chatId, `Выберите напиток`, {
          reply_markup: {
            keyboard: keyboard.menubar,
          },
        });
        break;
    }

    if (text === "Информация о боте") {
      await bot.sendMessage(
        chatId,
        `${msg.from.first_name}, меня зову Бот На Рогах и я помогу тебе найти твой любимый напиток!🍺🍷🥃🍸`
      );
      return bot.sendSticker(
        chatId,
        "https://tlgrm.ru/_/stickers/5eb/843/5eb8436f-51c7-315b-abc5-7f45216b5502/12.webp"
      );
    }

    const coctail = coctails.find((item) => item.id === text);
    console.log(coctail);

    if (coctail) {
        return printCoctail(chatId, coctail)
    }

    if (text === "Случайный напиток") {
      const randomNum = getRandomNumber(coctails.length);
      const randomCoctail = coctails[randomNum]
      return printCoctail(chatId, randomCoctail)
    }

    bot.on("callback_query", async function (msg) {
      const data = msg.data;
      const chatId = msg.message.chat.id;
      const msgid = msg.message.message_id;
      console.log(msg);

      if (data === "order") {
        await bot.deleteMessage(chatId, msgid);
        await bot.sendMessage(chatId, "Order", inlineKeyboard.mainMenu);
      }

      if (data === "feedback") {
        await bot.deleteMessage(chatId, msgid);
        await bot.sendMessage(chatId, "Answer", inlineKeyboard.feedbackMenu);
      }

      if (data === "backMain") {
        await bot.deleteMessage(chatId, msgid);
        await bot.sendMessage(chatId, "Answer", inlineKeyboard.menuOptions);
      }

      if (data === "phone") {
        await bot.sendMessage(
          chatId,
          "Позвоните на нашу горячую линию Telegraf-line по номеру телефона, чтобы сделать заказ: +79114913481"
        );
      }

      if (data === "good") {
        await bot.sendMessage(chatId, "Спасибо дружище, нам очень приятно!😊");
      }

      if (data === "bad") {
        await bot.sendMessage(chatId, "Прости друг, мы исправися!😔");
      }
      // if(data === 'back'){
      //     await bot.deleteMessage(chatId, msgid)
      //     await bot.sendMessage(chatId, 'Answer', inlineKeyboard.mainMenu)
      // }
    });
  });
};
start();

async function printCoctail(chatId, coctail) {

    if(coctail.name)
    await bot.sendMessage(chatId, coctail.name);

      if(coctail.description)
    await bot.sendMessage(chatId, coctail.description);

      if(coctail.sticker)
    await bot.sendSticker(chatId, coctail.sticker);

      if(coctail.photo)
    await bot.sendPhoto(chatId, coctail.photo)

      if(coctail.price)
    await bot.sendMessage(chatId, `Стоимость: ${coctail.price}💵`);
      
    return bot.sendMessage(
      chatId,
      "Закажи прямо сейчас!",
      inlineKeyboard.menuOptions
    );
}
