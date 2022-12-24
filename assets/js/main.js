const burger = document.querySelector('.burger');
const links = document.querySelector('.links');
burger.addEventListener('click', () => {
  links.classList.toggle('active');
});
links.addEventListener('click', () => {
  links.classList.remove('active');
})

const items = document.querySelectorAll("[id^=list-item]");
const contents = document.querySelectorAll("[class^=fresh]");
items.forEach((item, i) => {
  item.addEventListener("click", () => {
    contents.forEach((content, contentIndex) => {
      content.style.display = i === contentIndex ? "block" : "none";
    });
    items.forEach(function (item) {
      item.classList.remove('clicked');
    });
    item.classList.add('clicked');
  });
});

const expandables = document.querySelectorAll(".expandable");
expandables.forEach((expandable) => {
  expandable.addEventListener("click", () => {
    expandable.classList.toggle("white");
    const spcolor = expandable.querySelector("span")
    spcolor.classList.toggle("spcolor")
    const content = expandable.querySelector(".content");
    content.classList.toggle("expanded");
    const chlogo = expandable.querySelector(".logoPlus");
    chlogo.classList.toggle("fa-plus");
    chlogo.classList.toggle("fa-minus",);
    chlogo.classList.toggle("spcolor");
    expandables.forEach((otherItem) => {
      if (otherItem !== expandable) {
        otherItem.classList.remove("white")
        const otherContent = otherItem.querySelector(".content");
        otherContent.classList.remove("expanded");
        const otherChlogo = otherItem.querySelector(".logoPlus");
        otherChlogo.classList.remove("fa-minus");
        otherChlogo.classList.remove("spcolor");
        otherChlogo.classList.add("fa-plus");
        const Otherspcolor = otherItem.querySelector("span")
        Otherspcolor.classList.remove("spcolor")
      }
    });
  });
});

$(document).ready(function () {
  if ($(window).width() > 640) {
    $(document).scroll(function () {
      let scroll = $(document).scrollTop()
      var offset = $("#imgtop").offset();
      var top = offset.top;
      if (scroll >= top - 50) {
        $(".container0").css("background-color", "white")
      } else {
        $(".container0").css("background-color", " #20c99600")

      }
    });
  }
});


$(document).ready(function () {
  var one = $('div.one span');
  var two = $('div.two span');
  var three = $('div.three span');

  one.animate({ count: 659930840 }, {
    duration: 1500,
    easing: 'swing',
    step: function () {
      one.text(Math.ceil(this.count));
    }
  });

  two.animate({ count: 6679325 }, {
    duration: 1500,
    easing: 'swing',
    step: function () {
      two.text(Math.ceil(this.count));
    }
  });

  three.animate({ count: 632809444 }, {
    duration: 1500,
    easing: 'swing',
    step: function () {
      three.text(Math.ceil(this.count));
    }
  });
});

