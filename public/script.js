const para = `
The word “bionic” is composed of the terms bios (life) and technology.
We use the human brain, a phenomenon of nature, and combine it with
the reading technology & therefore “Bionic Reading” is formed.
`;
document.getElementById('static-para').innerHTML = convert(true);

function convert(isStatic = false) {
  var str = isStatic ? para : document.getElementById('user-para').value;
  var new_str = '';
  str.replace(/\p{L}+/gu, (word) => {
    const { length } = word;
    let midPoint = 1;
    if (length > 3) midPoint = Math.ceil(length / 2);
    const firstHalf = word.slice(0, midPoint);
    const secondHalf = word.slice(midPoint);
    const htmlWord = `<strong>${firstHalf}</strong>${secondHalf}`;
    new_str += htmlWord + ' ';
  });
  !isStatic && (document.getElementById('out-para').innerHTML = new_str);
  return new_str;
}

document.addEventListener('keyup', () => convert(false));
