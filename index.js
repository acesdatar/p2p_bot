const Bot = require('node-telegram-bot-api');
const request = require('request');
const url = 'https://launchlibrary.net/1.3/launch';
const trigger = 'I want to pledge GHs 100.00';
const token = '535567586:AAGl5B9hsAnOz68jmadwhUVbZj4wHu2CcIA';

const bot = new Bot(token, {polling: true});

const prepareData = (body) => {
    const launches = JSON.parse(body).launches;
    return launches.filter((launch) => launch !== undefined)
    .map((launch) => `${launch.name} on ${launch.net}`)
    .join('\n\n');
};

bot.on('message', (msg) => {
    if(msg.text,toString() === trigger) {
        return request(url, (err, resp, body) => {
            bot.sendMessage(msg.chat.id, prepareData(body));
        })
    }

    bot.sendMessage(msg.chat.id, 'Hi, do you want to PH?', {
        reply_markup: {
            keyboard: [[trigger], ['I am leaving this group, you people chop my money saa']]
        }
    });
});

bot.on('message', (msg) => {
    
    var Hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.chat.id,"Hello dear user");
    } 
        
    });
