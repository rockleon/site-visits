module.exports = function siteVisits(key, sessionStorage) {
  const url = "https://site-visits.herokuapp.com/visits";
  if (typeof key !== "string") throw new TypeError("Key should be a string!");
  const isVisited = sessionStorage.getItem("site-visited");
  if (isVisited && isVisited != "") {
    console.log("count not updated", isVisited);
  } else {
    fetch(`${url}/${key}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        sessionStorage.setItem("site-visited", "true");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return 1;
};
