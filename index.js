module.exports = function siteVisits(key, debug = false) {
  const url = "https://site-visits.herokuapp.com/visits";
  const local_domains = ["localhost", "127.0.0.1", ""];
  const host = location.hostname;

  if (typeof Storage === "undefined") {
    throw new Error(`Browser doesn't support session-storage.`);
  }
  if (local_domains.includes(host)) {
    console.log(
      `Site-Visits : Localhost detected. Visit count won't be updated.`
    );
    debug = true;
  }
  if (typeof key !== "string") {
    if (debug) throw new Error("Site-Visits Error : Key should be a string!");
    return;
  }

  const isVisited = sessionStorage.getItem("site-visited");
  if (isVisited && isVisited != "") {
    if (debug) {
      console.log(
        "Site-Visits : Visit count won't be updated as page was already visited in the same session."
      );
    }
  } else {
    if (debug) {
      fetch(`${url}/${key}/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) return response.json();
          else {
            if (response.status === 400) throw new Error("Invalid key!");
            else throw new Error("Server Error!");
          }
        })
        .then((data) => {
          sessionStorage.setItem("site-visited", "true");
          console.log(`Site-Visits : site visit working for ${data.title}.`);
        })
        .catch((error) => {
          console.error("Site-Visits", error);
        });
    } else {
      fetch(`${url}/${key}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) return response.json();
          else {
            if (response.status === 400) throw new Error("Invalid key!");
            else throw new Error("Server Error!");
          }
        })
        .then((data) => {
          sessionStorage.setItem("site-visited", "true");
        })
        .catch((error) => {
          console.error("Site-Visits", error);
        });
    }
  }
  return 1;
};
