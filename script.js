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

function smallEnough(a, limit) {
  let arr = a.find((item) => item > limit);
  if (arr == undefined) {
    return true;
  }
  return false;
}

console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));
