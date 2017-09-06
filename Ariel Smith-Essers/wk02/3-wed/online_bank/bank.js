
// find balance
var currentBalance = document.querySelector('.current-balance');
// find input
var dollars = document.querySelector('.dollar-amount');
// find withdraw button
var withdrawButton = document.querySelector('.withdrawal');
// find deposit button
var depositButton = document.querySelector('.deposit');
// find low-balance warning
var lowBalance = document.querySelector('.low-balance');

// on withdraw click minus input from balance
var minusWithdrawal = function(balance, withdrawal) {
  return balance -= withdrawal;
}
// on deposit click add input to balance
var addDeposit = function(balance, deposit) {
  return balance += deposit;
}

withdrawButton.addEventListener('click', function() {
  var balance = Number(currentBalance.innerHTML);
  var withdrawal = Number(dollars.value);
  var sum = minusWithdrawal(balance, withdrawal);
  if (sum < 0) {
    lowBalance.textContent = 'Insufficient funds.';
    dollars.value = '';
  } else {
    lowBalance.textContent = 'Thank you for your service.';
    currentBalance.textContent = sum;
    dollars.value = '';
  }

});

depositButton.addEventListener('click', function() {
  var balance = Number(currentBalance.innerHTML);
  var deposit = Number(dollars.value);
  var sum = addDeposit(balance, deposit);
  currentBalance.textContent = sum;
  dollars.value = '';
});
