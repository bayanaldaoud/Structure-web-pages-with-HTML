var opinion = prompt('what do you think is the largest French company total or carrfour ?');

while (opinion !== 'total' && opinion !== 'carrfour') {
  order = prompt('what do you think is the largest French company total or carrfour ?');
}

var youropinion = '';

if (opinion === 'total') {
    youropinion = '<img src="https://www.total.jo/sites/g/files/wompnd1366/f/atoms/image/total_logo.png" />';
} else if (opinion === 'carrfour') {
    youropinion = '<img src="https://jo24.net/assets/2015/2015-055/images/dbebe33743309b64aa56ba4e28717d5a.jpg"/>';
}

var nobranches = prompt('how many branches of the company in the world?');

var result = ''; 

for (var i = 0; i < nobranches; i++) {
  result = result + youropinion;
}

function getsize(width , hight ,depth) {
  var area = width * hight;
  var volume = width * hight * depth; 
  var size = [area, volume]
  return size;
}
var sizeone = getsize(2,3,2)


document.write(result);


alert("keep going");