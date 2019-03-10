db = [{
    "name": "S&P 500 (TR)",
    "isGreen": true
  },
  {
    "name": "S&P GSCI TR",
    "isGreen": false
  },
  {
    "name": "S&P 500 Bond Index Cup",
    "isGreen": true
  },
  {
    "name": "S&P National AMT-Free Municipal Bond Index",
    "isGreen": true
  },
  {
    "name": "Nike",
    "isGreen": false
  },
  {
    "name": "Ford",
    "isGreen": false
  }
];

let content = document.querySelector("#search-bar");
let result = document.querySelector(".result");

let search_companies = (name) => {
  let sent = new RegExp(name, 'i');
  
  db.forEach(i => {
    if(sent.test(i.name)) alert("asda");
    
    let p = document.createElement("p");
    p.style.textAlign = "left";
    p.style.padding = "12px 20px 12px 40px";
    p.style.marginLeft = "20px";

    let img = document.createElement("img");
    img.style.maxWidth = "15px";
    img.style.maxHeight = "15px";
    img.style.float = "left";
    img.style.paddingRight = "20px";
    img.style.paddingLeft = "85px";

    if (name === i.name && i.isGreen === true) {
      img.setAttribute("src", "../images/green_dot.png");
      p.append(img);
      let text = document.createTextNode(i.name);
      p.append(text);
      result.append(p);
    } else if (name === i.name && i.isGreen === false) {
      img.setAttribute("src", "../images/red_dot.png");
      p.append(img);
      let text = document.createTextNode(i.name);
      p.append(text);
      result.append(p);
    }
  })
};

$(document).ready(function () {
  $('.search-area').keydown(function (e) {
    let value = $("#search-bar").val();
    var key = e.which;
    if (key == 13) {
      if(result.hasChildNodes()) result.removeChild(result.childNodes[0]);
      search_companies(value);
      return false;
    }
  });
});

let search_btn = document.querySelector("#search-btn");
search_btn.addEventListener("click", () => {
      search_companies(content.value);
  display_companies();
});