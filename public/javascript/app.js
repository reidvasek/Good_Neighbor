$(function() {
  var postList = [];
  var premadeList = [];
  var postStorage = [];
  var click = document.getElementById('click');
  var postTable = document.getElementById('postTable');

  var Post = function(user, title, description, image, location, email){
    this.user = user;
    this.title = title;
    this.description = description;
    this.image = image;
    this.location = location;
    this.email = email;
  };

  Post.prototype.render = function() {
    var elDiv = document.createElement('div');
    var elUser = document.createElement('p');
    var elImage = document.createElement('a');
    var elTitle = document.createElement('p');
    var elDescription = document.createElement('p');
    var elLocation = document.createElement('p');
    var elEmail = document.createElement('p');

    elDiv.classList.add('postDiv');
    elUser.classList.add('name');
    elImage.classList.add('img');
    elTitle.classList.add('title');
    elDescription.classList.add('description');
    elLocation.classList.add('description');
    elEmail.classList.add('description');

    elDiv.appendChild(elUser);
    elDiv.appendChild(elTitle);
    elDiv.appendChild(elDescription);
    elDiv.appendChild(elImage);
    elDiv.appendChild(elLocation);
    elDiv.appendChild(elEmail);

    elUser.innerHTML= this.user;
    elTitle.innerHTML = this.title;
    elDescription.innerHTML = this.description;
    elImage.innerHTML = '<img src=' + this.image + '>';
    elLocation.innerHTML = this.location;
    elEmail.innerHTML = this.email;
    return elDiv;
  };

  window.addEventListener('load', function(event) {
    var post1 = new Post('DogavanMcnap', 'Eggs', 'I have 10 eggs I just don\'t need', 'http://aka.weightwatchers.com/images/1033/dynamic/GCMSImages/Egg_000001615195_main.jpg', 'Seattle, WA', 'Dognap@example.com'),
          post2 = new Post('John', 'Wrench', 'I have a wrench I don\'t need if anyone wants it?', 'http://www.blogcdn.com/www.diylife.com/media/2010/03/combination-wrench-590rr033010.jpg', 'San Fransisco, CA', 'John@example.com'),
          post3 = new Post('Fred', 'Bananas', 'I bought these bananas for a smoothie but I only needed two! I\'ve got 3 left!', 'http://askgeorgie.com/wp-content/uploads/2012/11/banana.jpg', 'Portland, OR', 'Fred@example.com'),
          post4 = new Post('Kevin Bacon', 'Sugar', 'I just have too much sugar for my own good.', 'http://www.beautybulletin.com/images/sugar_8560.jpg', 'Sand Diego, CA', 'KevinBacon@example.com'),
          post5 = new Post('Miranda Karp', 'Firewood', 'Chopped all this up over the weekend, pretty sure I wont use it all any time soon.', 'http://mulchcapecod.com/images/seasoned-firewood.jpg', 'New York, NY', 'MirandaK@example.com'),
          post6 = new Post('Trent Miles', 'Cup Noodles', 'Costco had a noodle sale, I couldn\'t resist.', 'http://blogs.phoenixnewtimes.com/bella/CupNoodle.jpg', 'Golta, CA', 'TrentMiles@example.com'),
          post7 = new Post('Chave Dapelle', 'Bottled Water', 'You can never have too much bottled water!', 'http://www.herald.co.zw/wp-content/uploads/2014/06/tapped-out-water-bottles_16601_600x450.jpg','Santa Clara, CA','ChaveDapelle@example.com'),
          post8 = new Post('Eve Sterkel', 'Napkins', 'So Mcdonalds gave me a ton of napkins, I wont be needing them all.', 'http://www.rantlifestyle.com/wp-content/uploads/2014/06/703.-Napkins.jpg', 'Chicago, IL', 'EveSterkel@example.com');

    premadeList.push(post1, post2, post3, post4, post5, post6, post7, post8);

    var renderPreMade = function() {
      premadeList.forEach(function(list) {
        postTable.appendChild(list.render());
      });
    };
    renderPreMade();
  });

  click.addEventListener('submit', function(event) {
    event.preventDefault();

    var createPost = new Post(event.target.user.value,
      event.target.item.value,
      event.target.desc.value,
      event.target.img.value,
      event.target.loc.value,
      event.target.email.value);

    postList.push(createPost);
    postStorage.push(createPost);

    event.target.user.value = null
    event.target.item.value = null
    event.target.desc.value = null
    event.target.img.value = null
    event.target.loc.value = null
    event.target.email.value = null

    var renderPostList = function() {
      postList.forEach(function(post) {
        postTable.insertBefore(post.render(), postTable.firstChild);
      })
    };
    renderPostList();
    postList = [];
  });
});
