function setTimeoutPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let err = false;
      if (!err) {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}

const pro = setTimeoutPromise();

pro
  .then(function () {
    console.log("successful");
  })
  .catch(function () {
    console.log("error");
  })
  .finally(function () {
    console.log("log always");
  });
