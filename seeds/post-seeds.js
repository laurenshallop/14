const { Post } = require('../models');

const postData = [
    {
        // 1
        "post_text": "B1",
        "user_id": 1
    },
    {
        // 2
        "post_text": "B1",
        "user_id": 2
    },
    {
        // 3
        "post_text": "B1",
        "user_id": 3
    },
    {
        // 4
        "post_text": "B1",
        "user_id": 4
    }, 
    {
        // 5
        "post_text": "B1",
        "user_id": 2
    }
    ,  
    {
        // 6 
        "post_text": "B1",
        "user_id": 5
    },
    {
        // 7
        "post_text": "B1",
        "user_id": 4
    },
    {
        // 8
        "post_text": "B1",
        "user_id": 3
    },
    {
        // 9
        "post_text": "JB1",
        "user_id": 1
    },
    {
        // 10 
        "post_text": "B1",
        "user_id": 4
    },
    {
        // 11
        "post_text": "B1",
        "user_id": 3
    },
    {
        // 12
        "post_text": "B1",
        "user_id": 2
    },
    {
        // 13
        "post_text": "B1",
        "user_id": 5
    },
    {
        // 14
        "post_text": "B1",
        "user_id": 1
    }
]


const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;