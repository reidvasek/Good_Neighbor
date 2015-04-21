$(function() {
  var postList = [];
  var premadeList = [];
  var postTable = document.getElementById('postTable');

  var Post = function(user, title, description, image){
    this.user = user;
    this.title = title;
    this.description = description;
    this.image = image
  };

  Post.prototype.render = function() {
    var elDiv = document.createElement('div');
    var elUser = document.createElement('p');
    var elImage = document.createElement('a');
    var elTitle = document.createElement('p');
    var elDescription = document.createElement('p');
    elDiv.appendChild(elUser, elTitle, elDescription, elImage);
    elUser.innerHTML = this.user;
    elTitle.innerHTML = this.title;
    elDescription.innerHTML = this.description;
    elImage.innerHTML = '<img src' + this.image + '>';
    return elDiv;

  };

  var post1 = new Post('DogavanMcnap', 'Eggs', 'I have 10 eggs I just don\'t need'),
        post2 = new Post('John', 'Wrench', 'I have a wrench I don\'t need if anyone wants it?'),
        post3 = new Post('Fred', 'Bananas', 'I bought these bananas for a smoothie but I only needed two! I\'ve got 3 left!');

  postList.push(post1, post2, post3);

  var renderPreMade = function() {
    premadeList.forEach(function(list) {
      postTable.appendChild(list.render());
    });
  };

  $("#click").click(function(event) {
    event.preventDefault();

    var createPost = new Post(event.target.user.value,
      event.target.item.value,
      event.target.desc.value,
      event.target.img.value);

    postList.push(createPost);

    event.target.user.value = null
    event.target.item.value = null
    event.target.desc.value = null
    event.target.img.value = null

    var renderPostList = function() {
      postList.forEach(function(post) {
        postTable.appendChild(post.render());
      })
    };
    renderPostList();
    postList = [];
  });
});
