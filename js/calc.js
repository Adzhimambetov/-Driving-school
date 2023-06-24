const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');

const option5 = document.getElementById('option5');
const option6 = document.getElementById('option6');
const option7 = document.getElementById('option7');

const option9 = document.getElementById('option9');
const option10 = document.getElementById('option10');
const option11 = document.getElementById('option11');

const total = document.getElementById('total');

const total2 = document.getElementById('total2');

const total3 = document.getElementById('total3');

option1.addEventListener('change', calculateTotal);
option2.addEventListener('change', calculateTotal);
option3.addEventListener('change', calculateTotal);

option5.addEventListener('change', calculateTotal2);
option6.addEventListener('change', calculateTotal2);
option7.addEventListener('change', calculateTotal2);

option9.addEventListener('change', calculateTotal3);
option10.addEventListener('change', calculateTotal3);
option11.addEventListener('change', calculateTotal3);

function calculateTotal() {
  let sum = 29900;
  if (option1.checked) {
    sum -= parseInt(option1.value);
  }
  if (option2.checked) {
    sum -= parseInt(option2.value);
  }
  if (option3.checked) {
    sum -= parseInt(option3.value);
  }

  total.textContent = sum;
}

function calculateTotal2() {
  let sum = 29900;

  if (option5.checked) {
    sum -= parseInt(option5.value);
  }
  if (option6.checked) {
    sum -= parseInt(option6.value);
  }
  if (option7.checked) {
    sum -= parseInt(option7.value);
  }

  total2.textContent = sum;
}

function calculateTotal3() {
  let sum = 29900;

  if (option9.checked) {
    sum -= parseInt(option9.value);
  }
  if (option10.checked) {
    sum -= parseInt(option10.value);
  }
  if (option11.checked) {
    sum -= parseInt(option11.value);
  }

  total3.textContent = sum;
}
