module.exports = function siteVisits(key, sessionStorage) {
  if (typeof key !== "string") throw new TypeError("Key should be a string!");
  const isVisited = sessionStorage.getItem('site-visited')
  if(isVisited && isVisited != '') {
    console.log('count not updated', isVisited);
  }
  else {
    console.log('count updated', key, isVisited);
    sessionStorage.setItem('site-visited', 'true')
  }
    // const url = 'https://bookit-v1.herokuapp.com/api/v1/bookings';
  // fetch(url)
  // .then(response => response.json())
  // .then(data => console.log(data));
  return 1;
};

// class siteVisit {
//   constructor(key) {
//     this.key = key;
//     this.updated = false
//     console.log('count updated', key);
//     this.updated = true
//   }
// }

// module.exports = { siteVisit };