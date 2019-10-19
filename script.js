Function.prototype.safeCall = function(...params) {
  try {
    return this.call(this, ...params);
  } catch(error) {
    return null;
  }
}

function safeCall(func) {
  try {
    func();
    return true;
  } catch (error) {
    return false;
  }
}
