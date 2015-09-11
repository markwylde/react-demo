export default new class {
  firstLetterUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  pluralise(string, count) {
    if (count > 1) {
      return string + 's';
    } else {
      return string;
    }
  }
}();
