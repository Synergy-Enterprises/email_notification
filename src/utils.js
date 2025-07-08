function getMessage() {
  return 'Hello from the test pipeline repository!';
}

function getCurrentTime() {
  return new Date().toISOString();
}

module.exports = {
  getMessage,
  getCurrentTime
};