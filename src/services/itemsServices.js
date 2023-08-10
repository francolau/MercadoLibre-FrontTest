export async function searchItems(query) {
  try {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${query}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());
    return await response;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function itemId(id) {
  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`, {
      headers: {
        "Content-Type": "apllication/json",
      },
    }).then((res) => res.json());
    return await response;
  } catch (err) {
    throw err;
  }
}


export async function itemIdDescription(id) {
  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}/description`, {
      headers: {
        "Content-Type": "apllication/json",
      },
    }).then((res) => res.json());
    return await response;
  } catch (err) {
    throw err;
  }
}
