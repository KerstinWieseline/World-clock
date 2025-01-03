function updateTime(){
  let saigonElement = document.querySelector("#saigon");
  if (saigonElement) {
    let saigonDateElement = saigonElement.querySelector(".date");
    let saigonTimeElement = saigonElement.querySelector(".time");
    let saigonTime = moment().tz("Asia/Saigon");
    saigonDateElement.innerHTML = saigonTime.format("MMMM Do YYYY");
    saigonTimeElement.innerHTML = `${saigonTime.format(
      "h:mm:ss"
    )}<small>${saigonTime.format("A")}</small>`;
  }
  let frankfurtElement = document.querySelector("#frankfurt");
  if (frankfurtElement) {
    let frankfurtDateElement = frankfurtElement.querySelector(".date");
    let frankfurtTimeElement = frankfurtElement.querySelector(".time");
    let frankfurtTime = moment().tz("Europe/Berlin");
    frankfurtDateElement.innerHTML = frankfurtTime.format("MMMM Do YYYY");
    frankfurtTimeElement.innerHTML = `${frankfurtTime.format(
      "h:mm:ss"
    )}<small>${frankfurtTime.format("A")}</small>`;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
    )}</small></div>
    </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);