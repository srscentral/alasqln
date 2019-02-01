// Plugin sample

var yy = alasqln.yy;

yy.Echo = function (params) { return yy.extend(this, params); }
yy.Echo.prototype.toString = function() {
	var s =  'TEST '+this.expr.toString();
	return s;
}

yy.Echo.prototype.execute = function (databaseid, params, cb) {
//	var self = this;
	// console.log(76336,this.expr.toJS());
	var fn = new Function('params, alasqln','return '+this.expr.toJS());
	var res = fn(params, alasqln);
	if(cb) res = cb(res);
	return res;
}