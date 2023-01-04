// let firstNameId = 'first-name';
// let lastNameId = 'last-name';
// let addressId = 'address';
// let citiesId = 'cities';
// let hobbiesId = 'hobbies';
// let avatarWrapperId = 'avatar-wrapper';
// let avatarId = 'avatar';

// let firstNameEl = document.getElementById(firstNameId);
// let lastNameEl = document.getElementById(lastNameId);
// let addressEl = document.getElementById(addressId);
// let citiesEl = document.getElementById(citiesId);
// let hobbiesEl = document.getElementById(hobbiesId);
// let avatarWrapperEl = document.getElementById(avatarWrapperId);
// let avatarEl = document.getElementById(avatarId);

// alert(firstNameEl.className);
// alert(lastNameEl.value);
// alert(addressEl.value);
// alert(citiesEl.innerHTML);
// alert(hobbiesEl.innerHTML);
// alert(avatarWrapperEl.innerHTML);
// alert(avatarEl.alt);

// firstNameEl.value = 'Sanek';
// lastNameEl.setAttribute('value', 'Petrov');
// lastNameEl.className = 'last-name default-input error-input';

// function invert(array) {
//   let arr = array.map((item) => (item ? item * -1 : -0));
//   return arr;
// }

// console.log(invert([-1, -2, -3, -4, -5]));

function addLength(str) {
  let array = str.split(' ');

  let arr = array.map((item) => item + ' ' + item.length);
  return arr;
}
console.log(addLength('apple ban'));
