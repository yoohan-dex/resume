const highlight = (str) =>
  str.replace(/`(.+?)`/g, '<strong>$1</strong>');

export default highlight;
