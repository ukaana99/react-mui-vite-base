const Regex = {
  alphabet6: /^[a-zA-Z0-9]{6}$/,
  number7: /^[0-9]{7}$/,
  number8: /^[0-9]{8}$/,
  alphabet: /^[a-zA-Z0-9]+$/,
  emailDomain: /@(.*)/g, // '@example.com'
  parenthesisAndContent: /\((.*)\)/g, // '(example)'
  number: /^\d+$/,
};

export default Regex;
