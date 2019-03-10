db = [{
    "name": "RBC",
    "isGreen": true,
    "summary": `In 2007, RBC was recognized as the Top Most 100 powerful brands in the world. 
                Was recognized as the "most respected corporation" in Canada In October 2008, 
                RBC was named one of "Canada's Top 100 Employers" by Mediacorp Canada Inc., 
                and was featured in Maclean's newsmagazine. Later that month, RBC was also named one
                of Greater Toronto's Top Employers, which was announced by the Toronto Star newspaper. 
                According to a global Newsweek ranking, which measures how effectively companies manage 
                environmental risks and opportunities relative to their industry peers, Royal Bank of 
                Canada is the most environmentally friendly company in the world.`,
    "nearest": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11523.722694440863!2d-79.5041641!3d43.7742979!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2fa904e0e43d%3A0x964c12c7381375c!2sRBC+Royal+Bank!5e0!3m2!1sen!2sca!4v1552210478815",
    "photo": "/app/public/resources/rbc.jpg"
  },
  {
    "name": "Archer Daniels Midland",
    "isGreen": false,
    "summary": `While it's working on many biofuels, it has faced hundreds of millions of dollars worth 
                of lawsuits for various types of pollution. According to Newsweek, it has big environmental
                impact, and a below average reputation. `,
    "nearest": "https://maps.google.com/maps?q=Archer%20Daniels%20Midland&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "photo": "/app/public/resources/adm.jpg"
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
    "isGreen": true,
    "summary": `Nike is working hard to reduce toxicity by incorporating the principles of its Considered 
                line which eliminated most adhesives to join uppers and lowers into many other products, such as Air Jordan XX`
  },
  {
    "name": "Consol Energy",
    "isGreen": false,
    "summary": `Consol had the second most poltical donations in 2008 amongst miners. You can bet they'll be spending 
                more to make sure cap and trade doesn't happen. `
  }
];

let content = document.querySelector("#search-bar");
let result = document.querySelector(".result");

let search_companies = (name) => {
  let sent = new RegExp(name, 'i');
  
  db.forEach(i => {
    // let p = document.createElement("p");
    // p.style.textAlign = "left";
    // p.style.padding = "12px 20px 12px 40px";
    // p.style.marginLeft = "20px";

    let h2 = document.createElement("h2");
    h2.style.textAlign = "center";

    let img = document.createElement("img");
    img.style.maxWidth = "15px";
    img.style.maxHeight = "15px";
    // img.style.float = "left";
    img.style.paddingRight = "20px";
    // img.style.paddingLeft = "132px";

    if(sent.test(i.name) && i.isGreen === true){
      img.setAttribute("src", "/app/public/resources/green_dot.png");
      h2.append(img);
      let text = document.createTextNode(i.name);
      h2.append(text);
      result.append(h2);
      
      let p = document.createElement("p");
      p.style.padding = "20px";
      let text1 = document.createTextNode(i.summary);
      p.append(text1);
      result.append(p);
      result.style.backgroundColor = "rgba(0, 0, 0, 0.8)";  

      let iframe = document.createElement("iframe");
      iframe.style.display = "inline-flex";
      iframe.style.justifyContent = "flex-start";
      iframe.style.marginRight = "250px";
      iframe.setAttribute("src", i.nearest);
      result.appendChild(iframe);

      let img2 = document.createElement("img");
      img2.style.height = "150px";
      img2.style.marginLeft = "250px";
      img2.style.display = "inline-flex";
      img2.style.justifyContent = "flex-end";
      img2.setAttribute("src", i.photo);
      result.appendChild(img2);

    } else if (sent.test(i.name) && i.isGreen === false) {
      img.setAttribute("src", "/app/public/resources/red_dot.png");
      h2.append(img);
      let text = document.createTextNode(i.name);
      h2.append(text);
      result.append(h2);
      
      let p = document.createElement("p");
      p.style.padding = "20px";
      let text1 = document.createTextNode(i.summary);
      p.append(text1);
      result.append(p);
      result.style.backgroundColor = "rgba(0, 0, 0, 0.8)";  

      let iframe = document.createElement("iframe");
      iframe.style.display = "inline-flex";
      iframe.style.justifyContent = "flex-start";
      iframe.style.marginRight = "250px";
      iframe.setAttribute("src", i.nearest);
      result.appendChild(iframe);

      let img2 = document.createElement("img");
      img2.style.height = "150px";
      img2.style.marginLeft = "250px";
      img2.style.display = "inline-flex";
      img2.style.justifyContent = "flex-end";
      img2.setAttribute("src", i.photo);
      result.appendChild(img2);
    }
  })
};

$(document).ready(function () {
  $('.search-area').keydown(function (e) {
    let value = $("#search-bar").val();
    let key = e.which;
    if (key == 13) {
      while(result.hasChildNodes()){
        result.removeChild(result.childNodes[0]);
      } 
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