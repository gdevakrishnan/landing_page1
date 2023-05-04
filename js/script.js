// Nav bar
let icon = 1;
var menu = document.querySelector('#menu_icon');
function menu_icon() {
  if (icon === 1) {
    menu.innerHTML = "<i class='fa fa-close'></i>";
    icon = 0;
  }

  else {
    menu.innerHTML = "<i class='fa fa-bars'></i>";
    icon = 1;
  }
}

// Image Slider 1
var count1 = 0;
let image_container1 = document.querySelector(".image1");
let text1 = document.querySelector(".text1");

const displayTestimonial1 = (e) => {
  switch (e) {
    case 1:
      image_container1.setAttribute("src", "images/image1.jpg");
      text1.innerHTML = "Health";
      break;

    case 2:
      image_container1.setAttribute("src", "images/image2.jpg");
      text1.innerHTML = "Days";
      break;

    case 3:
      image_container1.setAttribute("src", "images/image3.jpg");
      text1.innerHTML = "Life";
      break;
  }
}

const decrement = () => {
  if (count1 > 1) {
    count1 -= 1;
    displayTestimonial1(count1);
  }
}

const increment = () => {
  if (count1 < 4) {
    count1 += 1;
    displayTestimonial1(count1);
  }
}


// Tesimonial 2
let stars = document.querySelector(".stars");
let title = document.querySelector(".test_title");
let content = document.querySelector(".test_content");
let profile = document.querySelector(".profile");
let userName = document.querySelector(".name");
var count2 = 0;

let displayTestimonial = (e) => {
  switch (e) {
    case 1:
      stars.innerHTML =
        '<i class="fa fa-star"></i>' +
        '<i class="fa fa-star"></i>' +
        '<i class="fa fa-star"></i>' +
        '<i class="fa fa-star"></i>';
      title.innerHTML = "Doctor Cares Everyone";
      content.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam facilis quasi autem officiis amet molestiae illo laudantium incidunt culpa repudiandae Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, voluptatem.";
      profile.setAttribute("src", "images/images6.jpeg")
      userName.innerHTML = "Ben Walker";
      break;

    case 2:
      stars.innerHTML =
        '<i class="fa fa-star"></i>' +
        '<i class="fa fa-star"></i>' +
        '<i class="fa fa-star"></i>';
      title.innerHTML = "Best Health Care";
      content.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, voluptatem. illum maxime porro? Ipsa fuga commodi aspernatur delectus inventore quam temporibus.";
      profile.setAttribute("src", "images/images7.jpeg")
      userName.innerHTML = "Marie";
      break;

    case 3:
      stars.innerHTML =
        '<i class="fa fa-star"></i>' +
        '<i class="fa fa-star"></i>' +
        '<i class="fa fa-star"></i>' +
        '<i class="fa fa-star"></i>' +
        '<i class="fa fa-star"></i>';
      title.innerHTML = "Great Services!";
      content.innerHTML = "Lorem ipsum, dolor  sit dolor  sit  amet consectetur amet consectetur adipisicing elit. Voluptas dignissimos nemo laudantium repellendus dolorem consequatur cupiditate accusantium eum cum omnis.";
      profile.setAttribute("src", "images/images8.jpeg")
      userName.innerHTML = "John Wesly";
      break;

    default:
      break;
  }
}

let left = () => {
  if (count2 > 1) {
    count2 -= 1;
    console.log(count2);
    displayTestimonial(count2);
  }
}

let right = () => {
  if (count2 < 3) {
    count2 += 1;
    console.log(count2);
    displayTestimonial(count2);
  }
}