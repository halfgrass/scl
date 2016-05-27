var l = new function(){
	var _log = function(o,s){
		if(typeof o == 'object'){
			console.log(o);
		}else{
			console.log('%c'+o,s);
		}
	}
	var _gp = function(a,s){
		var rs = [];
		for(var i=0;i<a.length;i++){
				rs.push(a[i]);
			}
		do{
			var temp = [];
			for(var i=0;i<rs.length;i++){
				for(var j=0;j<a.length;j++){
					temp.push(rs[i]+""+a[j]);
				}
			}
			rs = rs.concat(temp);
			s--;
		}while(s>1)
		return rs;
	}
	var _c = {r:'color:red;',g:'color:green;',b:'color:blue;',m:'font-size:16px',l:'font-size:24px;'};
	var _f = _gp('rgbml'.split(''),2);
	for(var i in _f){
		this[_f[i]] = function(name){
			return function(m) {
				ns = name.split("");
				var ss = '';
				for(var s in ns){
					ss += _c[ns[s]];
				}
				_log(m,ss);
			}
		}(_f[i]);
	}
	this.gray = function(m){
		_log(m,'color:gray;');
	}
	this.c = function(m,c){
		_log(m,'color:'+c);
	}
	this.s = function(m,s){
		_log(m,s);
	}
}();