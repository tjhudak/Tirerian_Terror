let itemsData = null;

async function loadItems() {
    if(!itemsData) {
        const response = await fetch("./items.json");
        itemsData = await response.json();
    }
    return itemsData;
}

export async function getItem(category, key) {
  const data = await loadItems();
  if(!data[category] || !data[category][key]) {
    throw new Error(`Item not found: ${category}.${key}`);
  
  }
  return data[category][key];
}