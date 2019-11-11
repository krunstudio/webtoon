const models = require('../models')
const Webtoon = models.webtoon

exports.index = (req, res) => {
   let title = req.query.title
   let favorite = req.query.is_favorite
   if (favorite == 'true') {
       favorite = 1
        Webtoon.findAll({where:{isFavorite:favorite}}).then(result=> res.send(result))
   } 
   else if (title != null) {
        Webtoon.findAll({where:{title: title}}).then(result=> res.send(result))
   }
   else {
       Webtoon.findAll().then(result=>res.send(result))
   }
}

exports.show = (req, res) => {
    Webtoon.findAll({where:{created_by: req.params.id}}).then(result=> res.send(result))
}

exports.store = (req, res) => {
       const user_id = req.params.id
       const {title,genre,image} = req.body
    Webtoon.create({
       title : title,
       genre : genre,
       image : image,
       created_by : user_id,
    }).then(webtoon=> {
        res.send({
            webtoon
        })
    })
}

exports.update = (req, res) => {
    Webtoon.update(req.body,{
        where: {
            created_by: req.params.user_id, id: req.params.webtoon_id
        }
    }).then(webtoon=> {
        res.send({
            message: "success",
            data : req.body
        })
    })
}

exports.delete = (req, res) => {
    Webtoon.destroy({where: {created_by: req.params.user_id, id: req.params.webtoon_id}}).then(webtoon=> {
        res.send({
            message: "success",
            webtoon
        })
    })
}
