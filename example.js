
let uname = localStorage.getItem("Fullname");
let mail = localStorage.getItem("Email");
let OTP = localStorage.getItem("OTP");
let form = document.querySelector('.confirmForm');
let verificationAlert = document.querySelector(".verification-alert");
let userDetails = document.querySelector('.user-details');


userDetails.innerHTML = `Dear <span style="color:#d3004e">${uname}</span>, <br> Thank you for your inquiry. <br> four digit verification number has been sent to your Email:<span style="color:#d3004e">${mail}</span>,<br> Please enter it in the following box and submit for confirmation:`;

let attempts = 3;

// while (attempts > 0) {
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let userOtp = parseInt(document.querySelector('#enteredotp').value);

  if (userOtp == OTP) {
    console.log("Correct")
    verificationAlert.innerHTML = `<i class="fa-regular fa-circle-check" style="padding-right:5px;"></i> Validation Successfull !`;
    verificationAlert.style.color = "green"
    userOtp.innerHTML = " ";
  }
  else if (attempts <= 0) {
    alert("No More attempt, Please Filll the form again.")
    window.location.href = "form.html"
  }
  else {
    attempts -= 1;
    verificationAlert.innerHTML = `Enter correct OTP, ${attempts} attempts left.`
    verificationAlert.style.color = "red";
  }
})

// }


