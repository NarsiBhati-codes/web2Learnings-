function myOwnSetTimeout(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}

myOwnSetTimeout(1000).then(function () {
  console.log("first thing to print");
});
