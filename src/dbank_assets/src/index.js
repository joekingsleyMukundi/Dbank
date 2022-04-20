// jshint esversion:9
import { dbank }  from "../../declarations/dbank";
window.addEventListener('load', async function(){
  console.log("finished loading");
  const currentBal = await dbank.checkBalance();
  console.log(currentBal);
  document.getElementById("value").innerText = currentBal.toFixed(2);
});

document.querySelector('form').addEventListener('submit', async function(event){
  event.preventDefault();
  console.log("submited");
  const button =  event.target.querySelector("#submit-btn");
  const inputAmount = parseFloat(document.getElementById('input-amount').value);
  const outputamount = parseFloat(document.getElementById('withdrawal-amount').value);
  button.setAttribute("disabled", true);
  if (document.getElementById('input-amount').value.length !=0){
    await dbank.depositFunds(inputAmount);
  }
  if (document.getElementById('withdrawal-amount').value.length !=0){
    await dbank.withdrawFunds(inputAmount);
  }
  await dbank.compoundIntrest();
  const currentBal = await dbank.checkBalance();
  document.getElementById("value").innerText = currentBal.toFixed(2);
  document.getElementById('input-amount').value = "";
  document.getElementById('withdrawal-amount').value = "";
  button.removeAttribute("disabled");
});