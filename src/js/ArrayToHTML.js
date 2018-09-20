class ArrayToHTML {
  static encode(_string) {
    const string = _string;
    return string
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  static iterateOverArray(_array) {
    const currentArr = Array.from(_array);
    let string = '';
    if (currentArr.length === 1) {
      string = `<${currentArr[0]}/>`;
    }
    if (currentArr.length > 1) {
      string = `<${currentArr[0]}>`;
      currentArr.forEach((current, index) => {
        if (Array.isArray(current)) {
          string += ArrayToHTML.iterateOverArray(current);
        }
        if (typeof current === 'string' && index !== 0) {
          string += ArrayToHTML.encode(current);
        }
      });
      string += `</${currentArr[0]}>`;
    }
    return string;
  }
}

export default ArrayToHTML;
