$(function() {
  var postList = [];

  var Post = function(user, title, description){
    this.user = user;
    this.title = title;
    this.description = description;
  };

  Post.prototype.addPost = function(){
    postList.push(Post);
  };

  var post1 = new Post('DogavanMcnap', 'Eggs', 'I have 10 eggs I just don\'t need'),
        post2 = new Post('John', 'Wrench', 'I have a wrench I don\'t need if anyone wants it?'),
        post3 = new Post('Fred', 'Bananas', 'I bought these bananas for a smoothie but I only needed two! I\'ve got 3 left!');

  postList.push(post1, post2, post3);



});
