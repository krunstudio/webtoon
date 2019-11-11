const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
app.use(bodyParser.json())

//controllers
const AuthController = require('./controllers/auth')
const WebtoonController = require('./controllers/webtoons')
const EpisodeController = require('./controllers/episodes')
const DetailEpisodeController = require('./controllers/detailEpisodes')

//middlewares
const { authenticated } = require('./middleware')
app.group("/api/v1", (router) => {

    //auth API
    router.post('/login', AuthController.login)
    router.post('/register', AuthController.register)

    //webtoon API
    router.get('/webtoons', WebtoonController.index)  
    router.get('/webtoon/:id', WebtoonController.show)
    router.patch('/webtoon/:id', WebtoonController.update)    
    router.delete('/webtoon/:id', WebtoonController.delete) 
    router.get('/user/:id/webtoons', authenticated, WebtoonController.show) 
    router.post('/user/:id/webtoon', authenticated, WebtoonController.store)
    router.put('/user/:user_id/webtoon/:webtoon_id',authenticated, WebtoonController.update)
    router.delete('/user/:user_id/webtoon/:webtoon_id',authenticated, WebtoonController.delete)



    //Episode API
    router.get('/episodes', EpisodeController.index)
    router.get('/webtoon/:id/episodes', EpisodeController.show)
    router.get('/user/:user_id/webtoon/:webtoon_id/episodes',authenticated, EpisodeController.showcreation)
    router.get('/user/:user_id/webtoon/:webtoon_id/episodes',authenticated, EpisodeController.showcreation)
    router.get('/user/:user_id/webtoon/:webtoon_id/episodes',authenticated, EpisodeController.showcreation)
    router.post('/user/:user_id/webtoon/:webtoon_id/episode', authenticated, EpisodeController.createEpisode)
    router.put('/user/:user_id/webtoon/:webtoon_id/episode/:id', authenticated, EpisodeController.editEpisode)
    router.delete('/user/:user_id/webtoon/:webtoon_id/episode/:episode_id', authenticated, EpisodeController.deleteEpisode)


    //Detail Episode API
    router.get('/webtoon/:id_webtoon/episode/:id_episode', DetailEpisodeController.show)
    router.get('/detailepisodes', DetailEpisodeController.index)
    router.get('/user/:user_id/webtoon/:webtoon_id/episode/:episode_id/images', authenticated, DetailEpisodeController.image)
    router.get('/user/:user_id/webtoon/:webtoon_id/episode/:episode_id/images', authenticated, DetailEpisodeController.getImages)
    router.post('/user/:user_id/webtoon/:webtoon_id/episode/:episode_id/image', authenticated, DetailEpisodeController.createMyEpisode)
    router.delete('/user/:user_id/webtoon/:webtoon_id/episode/:episode_id/image/:image_id', authenticated, DetailEpisodeController.deleteImage) 
})

app.listen(process.env.PORT || 9876, function(){ 
    console.log ('Listening on our Port!')
})


