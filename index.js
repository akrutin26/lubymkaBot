const { Telegraf, Markup } = require('telegraf')
const bot = new Telegraf('5076303833:AAGhebmmM8m7ADf4iZ17qTg3Usc9fgBSD-k');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

let picsArray = [];
let complimentArray = ['Ты освещаешь мою жизнь как солнце в дождливый день.','В тебе есть все, о чем я мечтал.','Сны с твоим участием – самые лучшие.',
'Спасибо тебе за то, что ты появилась в моей жизни и сделала ее лучше.','Когда ты рядом, я счастлив как никогда.',
'Я не то чтобы хорошо разбираюсь в моде, но даже я вижу, что у тебя потрясающий вкус в одежде.',
'В тебе есть и ум и красота. Это восхитительно.','Если бы мне пришлось выписать на листок все твои положительные качества, мне бы и дня не хватило.',
'Если через десять лет мы также будем сидеть и смотреть друг другу в глаза, я буду самым счастливым мужчиной на земле.',
'Я всегда буду пытаться тебя рассмешить. Потому что мне нравится твоя улыбка.','Когда ты так смотришь на меня, мир вокруг словно исчезает.',
'Я хочу провести с тобой всю свою жизнь.','Когда мне становится грустно, я вспоминаю о счастливых моментах, которые мы с тобой пережили. И понимаю, что у меня есть все, чтобы быть счастливым. Благодаря тебе.',
'Мне всегда тебя недостаточно.',' Ты наполняешь мою жизнь смыслом.',' Все, что я делаю в этой жизни, я делаю для тебя.',' Я восхищаюсь твоей смелостью.',
' Моя жизнь неидеальна. Но какая разница, если у меня есть ты?',
' Я не верил во все эти штуки с «родственными душами». Но после встречи с тобой я перестал быть таким скептиком.',' Время с тобой – лучшее время в моей жизни.',
' Такие женщины как ты встречаются одна на миллион.',' Ты – мое вдохновение.',' Красивых девушек много. Но таких цепляющих как ты я не встречал ни разу.',
' Как только ты вошла в мою жизнь, все поменялось. И я очень этому рад.',' Я и мечтать не мог, что встречу такую как ты.',' С тобой приятно общаться.',
' Когда я с тобой, время пролетает незаметно. И в то же время оно словно останавливается. И во всем мире нет больше никого кроме нас. Как ты это делаешь?',
' Больше всего я благодарен за то, что ты есть в моей жизни.',' Любой парень был бы счастлив иметь такую девушку. Но везунчиком оказался я.',' Когда я с тобой, я не могу перестать улыбаться.',
' Ты знаешь чего хочешь от жизни, ты уверена в себе. Меня это восхищает в тебе.',' Я так не люблю с тобой расставаться.',' Мне хочется тебя обнять и никогда не отпускать.',
' Люблю вечера, проведенные с тобой. Они какие-то особенно теплые и счастливые.',' Я не могу от тебя оторваться.',' Ты как последний элемент пазла, которого мне не хватало в жизни.',
' Я не могу представить свою жизнь без тебя в ней.',' Ты всегда потрясающе выглядишь. В платье или в джинсах. С макияжем или без. Всегда.',
' Когда ты смеешься, ты еще очаровательнее чем обычно.',' Ты понимаешь меня как никто другой. Ты всегда умеешь подобрать нужные слова. Ты потрясающа.',
' Я ничего бы не стал в тебе менять. Ты идеальна такой, какая есть.',' Никому в своей жизни я не доверял так как тебе.',' Впервые в жизни я боюсь потерять человека так сильно.',
' Когда ты рядом, все остальное не имеет значения.',' Ты для меня все.',' Ты дополняешь меня, делаешь лучше.',' Я люблю в тебе все те мелочи, что ты считаешь своими ужасными недостатками.',
' Ты удивительная девушка.',' Каждый раз с нетерпением жду встречи с тобой.',' Я не могу описать словами насколько ты важна для меня.',
' Ты мотивируешь меня на великие свершения.',' Я сделаю все, что ты захочешь. Даже готов делать сотни фоток для твоего Инстаграма.',' Ты такая искренняя и настоящая.',
' Ты самый позитивный человек из всех, кого я когда-либо встречал.',' Я ни с кем не испытывал таких сильных эмоций.',' Ты заставляешь меня любить эту жизнь даже в самые трудные моменты.',
' Без тебя я бы не добился всего того, что есть у меня сейчас.',' С тобой всегда так интересно общаться. У тебя на все есть своя точка зрения.',' У тебя потрясающая внешность и не менее потрясающие ум и чувство юмора.',
' Ты одна из самых интересных личностей, что я когда-либо встречал в своей жизни.',
' Без тебя моя жизнь была бы куда более серой и скучной.',' Ты невозможно сексуальная.',' Мне так нравится твой мягкий и сексуальный голос.',' Когда ты рядом, мне абсолютно плевать на то, какая за окном погода.',
' Мне нравится в тебе твоя эмоциональность.',' Мне нравится разговаривать с тобой на глубокие темы. Ты умеешь видеть суть вещей.',' Твои волосы прекрасны. К ним так и хочется прикоснуться.',
' Ты удивительная девушка.',' Мне нравится страсть, с которой ты отдаешься своему делу.',' Ты никогда не пасуешь перед трудностями. Смотришь на все позитивно и очень любишь жизнь. Я так люблю в тебе это.',
' Ты бы могла влюбить в себя парня одним своим чувством юмора.',' Я никогда не встречал настолько добрую и заботливую девушку.',' Я всегда найду для тебя время.',
' Одна твоя улыбка способна меня взбодрить.',' Твое присутствие делает меня сильнее.',' Мне никогда не бывает с тобой скучно.',' Я обожаю слушать звук твоего голоса по утрам.',
' Как все эти креативные идеи помещаются в твоей голове?',' Ты упорно идешь к своим целям и не зависишь от чужого мнения. Это дорогого стоит.',' Звук твоего смеха делает меня самым счастливым человеком на планете.',
' Я ничего бы не хотел менять в своем прошлом. Ведь все мои действия привели к встрече с тобой.',' Когда ты не рядом, я думаю о тебе каждую минуту. ',' Ты всегда готова выслушать и поддержать меня. Я очень это ценю.',
' Даже самый неудачный день становится лучше, когда я вижу тебя.',' Ты такая уверенная в себе, что это очень возбуждает.',' Ты такая бесстрашная. Гроза таксистов!!!',
' Ты исключительно женственна и элегантна.',' У тебя мощнейшая энергетика. Ты заряжаешь все вокруг.',' У меня перехватывает дыхание от тебя.',' Ты привнесла в мою жизнь новые краски.',
' Мне нравится слушать твои истории. Ты классно все описываешь.','Ты как одна из тех книг, которые хочется перечитывать постоянно. Каждый раз ты находишь в них новые удивительные детали.'];

let foto;
let compliment;

for (let i = 0; i <144; i++)
    picsArray[i] = 'img/'+ '('+ (i+1) +')' + '.jpg';

bot.start((ctx) => ctx.reply('Привет, котёнок! Этот бот создан специально для тебя! Если ты заскучала,а я занят, то он меня подменит! Напиши что угодно!'))

bot.on('message', ctx => {
    let startMessage = `Солнышко, ты хочешь милый комплиментик или милую картиночку? 🥰🥰🥰`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, startMessage, {
        reply_markup: {
            inline_keyboard: [
                [{
                        text: "Хочу комплиментик 🥺👉🏻👈🏻 ",
                        callback_data: 'комплимент'
                    },
                    {
                        text: "Хочу картиночку 🤤",
                        callback_data: 'картинка'
                    }
                ],
    
            ]
        }
    })
})

bot.action('картинка', ctx => {
    foto = picsArray[getRandomInt(144)]
    ctx.deleteMessage();
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: foto
    }, 
    {
        reply_markup: {
            inline_keyboard: [
                [{
                        text: "Хочу комплиментик 🥺👉🏻👈🏻 ",
                        callback_data: 'комплимент'
                    },
                    {
                        text: "Хочу картиночку 🤤",
                        callback_data: 'картинка'
                    }
                ],
    
            ]
        }
    })
})

bot.action('комплимент', ctx => {
    compliment = complimentArray[getRandomInt(92)]
    ctx.deleteMessage();
    ctx.reply(compliment, {
        reply_markup: {
            inline_keyboard: [
                [{
                        text: "Хочу комплиментик 🥺👉🏻👈🏻 ",
                        callback_data: 'комплимент'
                    },
                    {
                        text: "Хочу картиночку 🤤",
                        callback_data: 'картинка'
                    }
                ],
    
            ]
        }
    }
    );
    
})




/*bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))*/

bot.launch()