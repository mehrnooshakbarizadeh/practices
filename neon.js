function openChart(eve, chartName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(chartName).style.display = "block";
  eve.currentTarget.className += " active";
}

function handleHamberMenuBtn() {
  if (
    document.querySelector(".container-side").getAttribute("data-narrow") !==
    "true"
  ) {
    document
      .querySelector(".container-side")
      .setAttribute("data-narrow", "true");
  } else {
    document
      .querySelector(".container-side")
      .setAttribute("data-narrow", "false");
  }
}
