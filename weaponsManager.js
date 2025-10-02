// weaponsManager.js
let weaponsData = null;

async function loadWeapons() {
  if (!weaponsData) {
    const response = await fetch("./weapons.json");
    weaponsData = await response.json();
  }
  return weaponsData;
}

export async function getWeapon(key) {
  const data = await loadWeapons();
  return data[key];
}