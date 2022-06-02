function convert() {
  var str = document.getElementById('user-para').value;
  var new_str = '';
  str = str.split(' ');

  str.forEach((word) => {
    word = word.split('');
    var bold_word = '';
    var non_bold_word = '';
    var half_len = Math.floor(word.length / 2);
    for (let i = 0; i < half_len; i++) {
      bold_word += word[i];
    }
    for (let i = half_len; i < word.length; i++) {
      non_bold_word += word[i];
    }
    new_str =
      new_str +
      `<span class="bold" style="font-weight:bold">${bold_word}</span>` +
      non_bold_word +
      ' ';
    document.getElementById('out-para').innerHTML = new_str;
  });
}

document.addEventListener('keyup', convert);
document.getElementById('btn').addEventListener('click', (event) => {
  var str = document.getElementById('user-para').value;
  var new_str = '';
  str = str.split(' ');

  str.forEach((word) => {
    word = word.split('');
    var bold_word = '';
    var non_bold_word = '';
    var half_len = Math.floor(word.length / 2);
    for (let i = 0; i < half_len; i++) {
      bold_word += word[i];
    }
    for (let i = half_len; i < word.length; i++) {
      non_bold_word += word[i];
    }
    new_str = new_str + `**${bold_word}**` + non_bold_word + ' ';
    navigator.clipboard.writeText(new_str);
  });
});
