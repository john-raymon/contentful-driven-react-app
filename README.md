## How to add content to vvvisualvandals.com through Tumblr's platform
#### Before adding any content you must first understand how the VV platform fetches data from Tumblr. 

  All the content being populated on the VV platform (vvvisualsvandals.com) is coming directly from Tumblr. The VV platform fetches for two different types of post from the global.vvvisualvandals.com Tumblr blog. 
> There are several types of post you can create on tumblr such as text, quote, link, answer, video, audio, photo, chat. We will only be using the two below to populate the VV platform.
- Video
- Photo

These two different types of post are what the three Visual subsets comprise of ...
- Visual
  - Video 
    - > visual/video is made up of Tumblr video type post
  - Photo
    - > visual/photo is made up of Tumblr photo type post
  - Design
    - > visual/design is made up of Tumblr photo type post
    
When a page is rendered, for example the vvvisualvandals.com/visual/design/album-artwork page, the VV platform makes a request to the Tumblr API. It basically asks Tumblr for all the photo type post that are tagged with `albumartworks` on global.vvvisualvandals.com.
> Tags will never have any hyphens (-), or spaces. (Ex: `musicvideos`, `albumartworks`)

