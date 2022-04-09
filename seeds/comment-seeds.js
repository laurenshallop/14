const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "testing1!",
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: "testing2",
        user_id: 3,
        post_id: 1
    },
    {
        comment_text: "Testing3!",
        user_id: 1,
        post_id: 1
    }
]





const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;