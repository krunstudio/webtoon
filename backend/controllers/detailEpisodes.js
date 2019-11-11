const models = require('../models')
const detailEpisode = models.image

exports.index = (req, res) => {
    detailEpisode.findAll().then(result=>res.send(result))
}

exports.show = (req, res) => {
    detailEpisode.findAll({where:{webtoon_id: req.params.id_webtoon, episode_id: req.params.id_episode }}).then(result=> res.send(result))
}

exports.image = (req, res) => {
    detailEpisode.findAll({where:{user_id: req.params.user_id, webtoon_id: req.params.webtoon_id, episode_id: req.params.episode_id }}).then(result=> res.send(result))
}

exports.getImages = (req, res) => {
    detailEpisode.findAll({where:{user_id: req.params.user_id, webtoon_id: req.params.webtoon_id, episode_id: req.params.episode_id }}).then(result=> res.send(result))
}

exports.createMyEpisode = (req, res) => {
    const user_id = req.params.user_id
    const webtoon_id = req.params.webtoon_id
    const episode_id = req.params.episode_id
    const {page,image} = req.body
 detailEpisode.create({
    page : page,
    image : image,
    webtoon_id : webtoon_id,
    episode_id: episode_id,
    user_id : user_id,
 }).then(image=> {
     res.send({
         image
     })
 })
}


exports.deleteImage = (req, res) => {
    detailEpisode.destroy({
        where: {
            user_id: req.params.user_id,
            webtoon_id: req.params.webtoon_id,
            episode_id: req.params.episode_id,
            id: req.params.image_id
        }}).then(image=> {
        res.send({
            message: "success",
            image
        })
    })
}
