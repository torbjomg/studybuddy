async function postRequest(url, data) {
  const response = await fetch(url, {
    method: "POST",
    mode: "same-origin", // assuming thjis will only be used for python api
    cache: "default",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "error",
    referrerPolicy: "same-origin",
    body: JSON.stringify(data),
  });
  return response.json();
}

export { postRequest };
