const form = document.querySelector(".myForm");
const emiDetails = document.querySelector(".emi-para")
const calculateBtn = document.querySelector('#calculate-emi');

const otp = Math.round(Math.random() * 1000) + 1000;


calculateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let amount = parseInt(document.querySelector('#amount').value);
  let t = parseInt(document.querySelector('#tYear').value);
  let R = 10 / 12 * 100;
  let tYear = t * 12  // in months;

  let EMI = amount * R * ((1 + R) ** tYear) / (R) ** tYear - 1;

  if (isNaN(EMI)) {
    emiDetails.style.display = "none";
  } else {
    emiDetails.innerHTML = `Estimated EMI: Rs ${Math.round(EMI)}/month.`;
    emiDetails.style.display = "block";
  }
})


form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert(otp);
  localStorage.setItem("OTP", otp);

  let fullName = document.querySelector('#fname').value;
  let eMail = document.querySelector('#email').value;
  localStorage.setItem('Fullname', fullName);
  localStorage.setItem('Email', eMail);
  window.location.href = "confirmation.html"
});

