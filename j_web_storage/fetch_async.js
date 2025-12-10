async function fetchData() {
  // TODO: fetch via async/await
  try {
    const response = await fetch("https://reqres.in/api/unknown", {
      headers: { "x-api-key": API_KEY },
    });

    if (response.status === 403)
      throw new Error("Permission denied. Please confirm authentication.");
    else if (!response.ok)
      throw new Error("Network response NOT ok.");

    const result = await response.json();
    console.log(result.data);

  } catch (error) {
    console.log(error.message);
  }
}
fetchData();
