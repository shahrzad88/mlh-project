$(document).ready(function() {
  new Chart(document.getElementById("line"), {
    type: 'line',
    data: {
      labels: [01, 05, 10, 15, 20, 25, 30],
      datasets: [{ 
        data: [86, 114, 106, 106, 107, 111, 133],
        label: "Green Spendings",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [282, 350, 411, 502, 635, 809, 947],
        label: "Non-Green Spendings",
        borderColor: "#8e5ea2",
        fill: false
      }]
    },
    options: {
      responsive: false,
      title: {
        display: true,
        text: 'March 2019 Spendings (in USD)'
      }
    }
  });
});
