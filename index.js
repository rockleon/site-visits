module.exports = function updateVisits(key) {
  if (typeof key !== "string") throw new TypeError("Key should be a string!");
  console.log('count updated');
  return 1;
};