db = [{
  "name": "TD",
  "isGreen": true,
  "summary": `They launched a Green Banking Web page to help our Canadian customers 
              find information on TD’s green products and services. Thier most popular 
              green service continues to be Paperless Record Keeping. To date, more 
              than 8.9 million TD customers in North America have chosen to go paperless, 
              saving approximately 10,000 trees every year.`,
  "nearest": "https://maps.google.com/maps?q=TD&t=&z=13&ie=UTF8&iwloc=&output=embed",
  "photo": "../resources/TD-Canada.jpg"
},
{
  "name": "Dell",
  "isGreen": true,
  "summary": `We firmly believe that technology plays a special role in driving human progress – 
              that the good it can do in the world is 10x greater than the footprint of making 
              and using technology. Traditionally, the environmental impact of how consumers use
              our products has accounted for the bulk of that footprint. But as energy efficiency 
              improvements continue, how a product is made is becoming even more important. That’s 
              why we focus on reducing our impact across the value chain, taking action against climate
              change, striving for zero-waste manufacturing and driving sustainability across the business.`,
  "nearest": "https://maps.google.com/maps?q=dell&t=&z=13&ie=UTF8&iwloc=&output=embed",
  "photo": "../resources/Dell.jpg"
},
{
  "name": "Telus",
  "isGreen": true,
  "summary": `Through the end of 2017, we are using 4.4 per cent less energy than we did in 2010, 
              despite significant business growth. This is thanks to our energy management program
              and real estate efficiency initiatives. We have also reduced our GHG emissions by 19 
              per cent over the same period.`,
  "nearest": "https://maps.google.com/maps?q=telus&t=&z=13&ie=UTF8&iwloc=&output=embed",
  "photo": "../resources/telus.jpg"
},
{
  "name": "Nestle",
  "isGreen": false,
  "summary": `We favour full product lifecycle consideration, addressing all of the most impactful 
              elements along the supply chain, including the product's use and end-of-life treatment. 
              We also support the establishment of one internationally harmonised methodology, preferably
              through the International Standards Organization (ISO). Nestlé is a member of the ISO Water 
              Footprint Working Group (ISO140046: ISO/TC207/SC5/WG8), which first convened in 2009. `,
  "nearest": "https://maps.google.com/maps?q=Nestl%C3%A9&t=&z=13&ie=UTF8&iwloc=&output=embed",
  "photo": "../resources/nestle.jpg" 
},
{
  "name": "Max Mara",
  "isGreen": false,
  "summary": `Max Mara has achieved the E-label. This is our lowest possible sustainability score, and 
              Max Mara has earned it by communicating nothing concrete about the policies for environment,
              carbon emissions or labor conditions in low-wages countries. For us as consumers, it is 
              unclear whether Max Mara is committed to sustainability or not.`,
  "nearest": "https://maps.google.com/maps?q=MaxMara&t=&z=13&ie=UTF8&iwloc=&output=embed",
  "photo": "../resources/max_mara.jpg"
},
{
  "name": "Diesel",
  "isGreen": false,
  "summary": `the diesel is one of the largest contributors to environmental pollution problems worldwide, 
              and will remain so, with large increases expected in vehicle population and vehicle miles 
              traveled (VMT) causing ever-increasing global emissions. Diesel emissions contribute to 
              the development of cancer; cardiovascular and respiratory health effects; pollution of air, 
              water, and soil; soiling; reductions in visibility; and global climate change.`,
  "nearest": "https://maps.google.com/maps?q=diesel&t=&z=13&ie=UTF8&iwloc=&output=embed",
  "photo": "../resources/diesel.jpg"
}
];


let content = document.querySelector("#search-bar");
let result = document.querySelector(".result");

// let get_map = (location) => {
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyBJvNxW0PDeuWYc4tzR0MVHB1tPwW7AY98")
// }

let search_companies = (name) => {
  let sent = new RegExp(name, 'i');
  
  db.forEach(i => {
    let h2 = document.createElement("h2");
    h2.style.textAlign = "center";

    let img = document.createElement("img");
    img.style.maxWidth = "45px";
    img.style.maxHeight = "45px";
    // img.style.float = "left";
    img.style.paddingRight = "20px";
    // img.style.paddingLeft = "132px";

    if(sent.test(i.name) && i.isGreen === true){
      img.setAttribute("src", "../resources/green_dot.png");
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

      //get map here

    } else if (sent.test(i.name) && i.isGreen === false) {
      img.setAttribute("src", "../resources/red_dot.png");
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

      //get map here
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