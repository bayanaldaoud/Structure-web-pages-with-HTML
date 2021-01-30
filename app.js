var opinion = prompt('what do you think is the largest French company Total or Carrfour ?');

while (opinion !== 'Total' && opinion !== 'Carrfour') {
  order = prompt('what do you think is the largest French company Total or Carrfour ?');
}

var youropinion = '';

if (opinion === 'Total') {
    youropinion = '<img src="https://www.total.jo/sites/g/files/wompnd1366/f/atoms/image/total_logo.png"/>';
} else if (opinion === 'Carrfour') {
    youropinion = '<img src="https://jo24.net/assets/2015/2015-055/images/dbebe33743309b64aa56ba4e28717d5a.jpg"/>';
}

var nobranches = prompt('how many branches of the company in the world?');

var result = '';

for (var i = 0; i < nobranches; i++) {
  result = result + youropinion;
}

document.write(result);
