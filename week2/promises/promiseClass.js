function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

setTimeoutPromisified(2000).then(() => {
  console.log("Narsi Bhati");
});
