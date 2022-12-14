const {User} = require('../../models/User');

async function getWishlist(req,res) {
    const id = req.body.id;

    try {
        const user = await User.find({_id:id});
        console.log(user);
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(404).json({error:'Error finding wishlist items'});
    }
}

module.exports = getWishlist