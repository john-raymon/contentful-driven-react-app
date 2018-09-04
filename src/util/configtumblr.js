const tumblr = require('tumblr.js');
const tumblrClient = tumblr.createClient({
  credentials: {
  	consumer_key: process.env.REACT_APP_TUMBLR_KEY,
  	token: process.env.REACT_APP_TUMBLR_KEY
  },
  returnPromises: true,
});

/*
tag must be array if multiple tags
tumblrClient.blogPosts('vvvisualvandals', {type: 'photo', tag: ['convert', 'love', 'chicken'] }).then(resp => {
      console.log('this is the tumblr response', resp)
})

*/

export default tumblrClient;