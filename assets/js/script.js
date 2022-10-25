const submitButton = document.getElementById("submit");
const rateValue = document.querySelectorAll(".btn-rating");
const actualRate = document.getElementById("rating");

function submit() {
    document.querySelector('#main-section').style.display = "none";
    document.querySelector('.thankyou').classList.remove('thankyou');
}

rateValue.forEach((rating) => {
    rating.addEventListener("click", () => {
      actualRate.innerHTML = rating.innerHTML;
      console.log(rating);
    })
  })