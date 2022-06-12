function convert() {
  var str = document.getElementById('user-para').value;
  var new_str = '';
  str.replace(/\p{L}+/gu, (word) => {
    const { length } = word;
    let midPoint = 1;
    if (length > 3) midPoint = Math.ceil(length / 2);
    const firstHalf = word.slice(0, midPoint);
    const secondHalf = word.slice(midPoint);
    const htmlWord = `<b>${firstHalf}</b>${secondHalf}`;
    new_str += htmlWord + ' ';
  });
  document.getElementById('out-para').innerHTML = new_str;
  return new_str;
}

document.addEventListener('keyup', convert);
