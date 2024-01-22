const getColor = () => {
  const randomNumber = Math.floor(Math.random()*16777215);
  console.log(randomNumber);
  const randomCode = "#"+randomNumber.toString(16);
  console.log(randomCode); 
  document.body.style.backgroundColor = randomCode;
  document.querySelector('.js-color').innerHTML = `Background Color: ${randomCode}`;
  
  navigator.clipboard.writeText(randomCode);
}
document.querySelector('.js-button').addEventListener(
  "click",
  getColor
)
getColor();