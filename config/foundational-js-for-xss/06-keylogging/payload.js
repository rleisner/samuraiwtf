[].map.call(inputs, function(e){ e.addEventListener('keyup',function(evt) { console.log(evt.target.name + ' - ' + evt.key)}); });
