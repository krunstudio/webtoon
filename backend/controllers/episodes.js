const models = require('../models')
const Episode = models.episode

exports.index = (req, res) => {
    Episode.findAll().then(result=>res.send(result))
}

exports.show = (req, res) => {
    Episode.findAll({where:{Webtoon_id: req.params.id}}).then(result=> res.send(result))
}

exports.showepisode = (req, res) => {
    Episode.findAll({
        where:{
            Webtoon_id: req.params.id
        }
    }).then(webtoon=> res.send({
        title : webtoon.title,
        title: webtoon.image
    })
    )
}

exports.detailEpisode = (req, res) => {
    Episode.findAll({where:{Webtoon_id: req.params.webtoon_id}}).then(result=> res.send(result))
}


exports.showcreation = (req, res) => {
    Episode.findAll({where:{user_id: req.params.user_id, webtoon_id: req.params.webtoon_id }}).then(result=> res.send(result))
}


exports.store = (req, res) => {
    Episode.create(req.body).then(webtoon=> {
        res.send({
            message: "success",
            webtoon
        })
    })
}

exports.createEpisode = (req, res) => {
       const user_id = req.params.user_id
       const webtoon_id = req.params.webtoon_id
       const {title,image} = req.body
    Episode.create({
       title : title,
       image : image,
       webtoon_id : webtoon_id,
       user_id : user_id
    }).then(episode=> {
        res.send({
            webtoon_id : episode.webtoon_id,
            title: episode.title,
            image : episode.image,
        })
    })
}

exports.editEpisode = (req, res) => {
    const user_id = req.params.user_id
    const webtoon_id = req.params.webtoon_id
    const id = req.params.id
    Episode.update(req.body,{
     where: {
         user_id: user_id, webtoon_id: webtoon_id, id:id
     }
 }).then(webtoon=> {
     res.send({
         message: "success",
         data : req.body
     })
 })
}

exports.deleteEpisode = (req, res) => {
    Episode.destroy({where: {user_id: req.params.user_id, webtoon_id: req.params.webtoon_id, id: req.params.episode_id}}).then(webtoon=> {
        res.send({
            message: "success",
            webtoon
        })
    })
}
