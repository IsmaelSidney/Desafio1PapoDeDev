function changeColor(color) {
    switch (color) {
      case 'green':
        setTimeout(function () {
          document.getElementById('shoes-img').src = "assets/sneakers.png";
        }, 600);
        break;
      case 'red':
        setTimeout(function () {
          document.getElementById('shoes-img').src = "assets/redSneakers.png";
        }, 600);
        break;
      case 'blue':
        setTimeout(function () {
          document.getElementById('shoes-img').src = "assets/blueSneakers.png";
        }, 600);
        break;
    }
  }

