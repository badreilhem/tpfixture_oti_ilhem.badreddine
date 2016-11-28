// Devise non compatibles
function DevisesIncompatibleExc(_d1,_d2) {
	this.c1=_d1; this.c2=_d2;

}

DevisesIncompatibleExc.prototype.toString=function (){
		return "Devises incompatibles : "+this.c1+" vs "+this.c2;
}
