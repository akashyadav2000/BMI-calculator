const form = document.querySelector('form');

form.addEventListener('submit', (stop) => {
  stop.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  // switch ((height, weight)) {
  //   case 'height' === '' || height < 0 || isNaN(height):
  //     results.innerHTML = `Please enter valid height ${height}`;
  //     break;

  //   case 'weight' === '' || weight < 0 || isNaN(weight):
  //     results.innerHTML = `Please enter valid weight ${weight}`;
  //     break;

  //   default:
  //     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  //     results.innerHTML = `<span>${bmi}</span>`;
  //     if (bmi < 18.6 || bmi < 0) {
  //       results.innerHTML = `${bmi} <br> Under Weight`;
  //     } else if (bmi === 18.6 || bmi > 18.6 || bmi < 24.9 || bmi === 24.9) {
  //       results.innerHTML = `${bmi} <br> Normal Weight`;
  //     }
  //     if (bmi > 24.9) {
  //       results.innerHTML = `${bmi} <br> Over Weight`;
  //     }
  // }

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span">${bmi}</span>`;

    if (bmi < 18.6 || bmi < 0) {
      results.innerHTML = `${bmi} <br> Under Weight`;
    }

    else if (bmi === 18.6 || bmi > 18.6 || bmi < 24.9 || bmi === 24.9) {
      results.innerHTML = `${bmi} <br> Normal Weight`;
    }
    if (bmi > 24.9) {
      results.innerHTML = `${bmi} <br> Over Weight`;
    }
  }
});
