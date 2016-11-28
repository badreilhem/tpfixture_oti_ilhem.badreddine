// v1 < v2
function ValeursPasDansLeBonOrdreExc(_d1,_d2) {
	this.v1=_d1; this.v2=_d2;
}

DevisesIncompatibleExc.prototype.toString=function (){
		return "Opération impossible, la valeur : "+this.v1+" est inférieur à la valeu : "+this.v2;
}
