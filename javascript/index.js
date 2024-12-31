function updateTime(){
  let saigonElement = document.querySelector("#saigon");
  let saigonDateElement = saigonElement.querySelector(".date");
  let saigonTimeElement = saigonElement.querySelector(".time");
  let saigonTime = moment().tz("Asia/Saigon");
  saigonDateElement.innerHTML = saigonTime.format("MMMM Do YYYY");
  saigonTimeElement.innerHTML = `${saigonTime.format(
    "h:mm:ss"
  )}<small>${saigonTime.format("A")}</small>`;

  let frankfurtElement = document.querySelector("#frankfurt");
  let frankfurtDateElement = frankfurtElement.querySelector(".date");
  let frankfurtTimeElement = frankfurtElement.querySelector(".time");
  let frankfurtTime = moment().tz("Europe/Berlin");
  frankfurtDateElement.innerHTML = frankfurtTime.format("MMMM Do YYYY");
  frankfurtTimeElement.innerHTML = `${frankfurtTime.format(
    "h:mm:ss"
  )}<small>${frankfurtTime.format("A")}</small>`;
}
updateTime();
setInterval(updateTime, 1000);