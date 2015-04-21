$(function() {
  var postList = [];

  var Post = function(user, title, description, image){
    this.user = user;
    this.title = title;
    this.description = description;
    this.image = image
  };

  Post.prototype.render = function() {
    var elDiv = document.createElement('div');
    var elUser = document.createElement('p');
    var elTitle = document.createElement('a');
    var elDescription = document.createElement('p');
    var elImage = document.createElement('img');
    elDiv.appendChild(elUser, elTitle, elDescription, elImage);
    elUser.innerHTML = this.user;
    elTitle.innerHTML = this.title;
    elDescription = this.description;
    elImage = this.image;
    return elDiv;

  };

  var post1 = new Post('DogavanMcnap', 'Eggs', 'I have 10 eggs I just don\'t need'),
        post2 = new Post('John', 'Wrench', 'I have a wrench I don\'t need if anyone wants it?'),
        post3 = new Post('Fred', 'Bananas', 'I bought these bananas for a smoothie but I only needed two! I\'ve got 3 left!');

  postList.push(post1, post2, post3);

  var createPost = new Post(event.target.PLACE.value,
    event.target.PLACE.value,
    event.target.PLACE.value,
    event.target.PLACE.value);


});
