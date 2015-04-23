// $(function() {
  var i = 0;
  var postList = [];
  var premadeList = [];
  var postStorage = [];
  var click = document.getElementById('click');
  var postTable = document.getElementById('postTable');

  var Post = function(user, title, description, image, location){
    this.user = user;
    this.title = title;
    this.description = description;
    this.image = image;
    this.location = location;
  };
//////////////////////////////////////////////////////////////////////

    var geocoder, location1, location2;

    function initialize() {
        geocoder = new GClientGeocoder();
    }

     function showLocation() {
        console.log("showLocation");
        geocoder.getLocations("seattle" || document.forms[0].address1.value, function (response) {
            if (!response || response.Status.code != 200)
            {
                alert("Sorry, we were unable to geocode the first address");
            }
            else
            {
                location1 = {lat: response.Placemark[0].Point.coordinates[1], lon: response.Placemark[0].Point.coordinates[0], address: response.Placemark[0].address};
                geocoder.getLocations(postStorage[i++].location, function (response) {
                    if (!response || response.Status.code != 200)
                    {
                        alert("Sorry, we were unable to geocode the second address");
                    }
                    else
                    {
                        location2 = {lat: response.Placemark[0].Point.coordinates[1], lon: response.Placemark[0].Point.coordinates[0], address: response.Placemark[0].address};
                        calculateDistance();
                    }
                });
            }
        });
    }
    var miledistance;
    function calculateDistance()
    {
        console.dir(location1);
        console.dir(location2);
        try
        {
            var glatlng1 = new GLatLng(location1.lat, location1.lon);
            var glatlng2 = new GLatLng(location2.lat, location2.lon);
            miledistance = glatlng1.distanceFrom(glatlng2, 3959).toFixed(1);
            lLocation.innerHTML = obj.location + miledistance;
        }
        catch (error)
        {
            alert(error);
        }
        console.log("calculateDistance: "+ miledistance);
        return miledistance;
    }


///////////////////////////////////////////////////////////////////////////////////

  var renderLocation = function(obj) {
    var elDiv = document.createElement('div');
    var elUser = document.createElement('p');
    var elImage = document.createElement('a');
    var elTitle = document.createElement('p');
    var elDescription = document.createElement('p');
    var elLocation = document.createElement('p');

    elDiv.classList.add('postDiv');
    elUser.classList.add('name');
    elImage.classList.add('img');
    elTitle.classList.add('title');
    elDescription.classList.add('description');
    elLocation.classList.add('location');

    elDiv.appendChild(elUser);
    elDiv.appendChild(elTitle);
    elDiv.appendChild(elDescription);
    elDiv.appendChild(elImage);
    elDiv.appendChild(elLocation);

    elUser.innerHTML= obj.user;
    elTitle.innerHTML = obj.title;
    elDescription.innerHTML = obj.description;
    elImage.innerHTML = '<img src=' + obj.image + '>';
    showLocation()
    return elDiv;
  };

  window.addEventListener('load', function(event) {
      var post1 = new Post('DogavanMcnap', 'Eggs', 'I have 10 eggs I just don\'t need', 'http://aka.weightwatchers.com/images/1033/dynamic/GCMSImages/Egg_000001615195_main.jpg', 'boston'),
          post2 = new Post('John', 'Wrench', 'I have a wrench I don\'t need if anyone wants it?', 'http://aka.weightwatchers.com/images/1033/dynamic/GCMSImages/Egg_000001615195_main.jpg', 'seattle'),
          post3 = new Post('Fred', 'Bananas', 'I bought these bananas for a smoothie but I only needed two! I\'ve got 3 left!', 'http://aka.weightwatchers.com/images/1033/dynamic/GCMSImages/Egg_000001615195_main.jpg', 'olympia');

    premadeList.push(post1, post2, post3);
    postStorage.push(post1, post2, post3);

    var renderPreMade = function() {
      premadeList.forEach(function(list) {
        postTable.appendChild(renderLocation(list));
      });
    };
    showLocation();
    renderPreMade();
  });

  click.addEventListener('submit', function(event) {
    event.preventDefault();

    var createPost = new Post(event.target.user.value,
      event.target.item.value,
      event.target.desc.value,
      event.target.img.value,
      event.target.address1.value);

    postList.push(createPost);
    postStorage.push(createPost);

    event.target.user.value = null
    event.target.item.value = null
    event.target.desc.value = null
    event.target.img.value = null
    event.target.address1.value  = null

    var renderPostList = function() {
        console.log("renderPostList");
      postList.forEach(function(post) {
        postTable.insertBefore(post.render(), postTable.firstChild);
      })
    };
    renderPostList();
    postList = [];
  });
// });
