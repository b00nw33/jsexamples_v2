function fetchData() {
  // TODO: fetch via promise
  fetch("https://reqres.in/api/unknown", {
    headers: { "x-api-key": "reqres_dee01a6317614db2b4e14590ea671996" },
  }).then(res => {
    console.log(res);

    if (response.status === 403)
      throw new Error("Permission denied. Please confirm authentication.");
    else if (!res.ok) throw new Error("Network response NOT ok.");
    
    return res.json();
  }).then(data => console.log(data)
  ).catch(err => console.log(err.message));
}

fetchData();