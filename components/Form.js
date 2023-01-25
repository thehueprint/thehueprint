// generate a regular expression to verify a valid email address
const emailRegex = new RegExp(
  '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$',
);

//verify the submitted form is not from a bot
const verifyBot = (e) => {
  if (e.target.honeypot.value) {
    e.preventDefault();
    return false;
  }

  return true;
};
