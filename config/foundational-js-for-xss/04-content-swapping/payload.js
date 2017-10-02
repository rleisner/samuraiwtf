var b = document.getElementsByTagName('body')[0];
b.innerHTML = '<div id="old1">'+b.innerHTML+'</div>';
b.innerHTML += '<div id="new1" style="display:none">Login Here! ;)</div>';
var o1 = document.getElementById('old1');
var n1 = document.getElementById('new1');
o1.style.display = 'none'; n1.style.display = '';
