const env = require('./.env')
const Telegraf = require('Telegraf')
const bot = new Telegraf(env.token)

const gifTelegram = 'https://media.giphy.com/media/ya4eevXU490Iw/giphy.gif'

bot.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date - start
    const dataEHora = new Date().toLocaleString();
    console.log(`${dataEHora} \n Tempo de resposta: ${ms}ms`)
})

//Diferentes tipos de repsostas
//Resposta do tipo texto
bot.start(async ctx => {
    await ctx.reply(`Seja bem vindo, ${ctx.message.from.first_name}!😎`)

    //Resposta com vídeo do youtube 
    await ctx.reply('Veja o vídeo: https://www.youtube.com/watch?v=oND3GZCZ16k')

    //Resposta com HTML
    await ctx.replyWithHTML(`Pode ser usado tags <strong>Negrito</strong> ou para <em>Itálico</em>.   <a href="http://sc.senai.br>SENAI</a>  <code>Código</code>"`)

    //Resposta com Markdown
    await ctx.replyWithMarkdown('Dá para escrever *em negrito*, _em itálico_ `em código` ou ```bloco```. também é possível link[SENAI](http://sc.senai.br)')

    //Resposta com Foto
    await ctx.replyWithPhoto('https://i.picsum.photos/id/296/200/300.jpg?hmac=3w6L7NcSbkDRHC36vvfj4JuF0yOHmTjqQS5F9biJyKA', {caption: 'Foto Aleatória'})

    //Resposta com localização
    await ctx.replyWithLocation(-27.1156927, -48.9123907)

    //Resposta com GIF Animado
    await ctx.replyWithAnimation(gifTelegram)

})

bot.launch()

//https://media.giphy.com/media/ya4eevXU490Iw/giphy.gif