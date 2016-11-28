function calc() {
  this.message="";
}

calc.prototype.displayResult=function (resultDiv) {
  resultDiv.innerHTML="Result : "+this.message;
};

calc.prototype.computeResult=function (form) {
  var v1 = parseInt(form.elements['v1'].value);
  var v2 = parseInt(form.elements['v2'].value);
  var c1 = form.elements['c1'].value;
  var c2 = form.elements['c2'].value;

  if(v1 < 0 || v2 < 0){
    throw new MoneyNegativeExc();
  }else if(c1.length > 3 || c2.length > 3){
    throw new DevisesMauvaiseLongueurExc();
  }else{

    m1=new money(v1, c1);
    m2=new money(v2, c2);

    ops=form.elements['ops'].value;

    try{
      if (ops==="ADD") {
        res=MoneyOps.add(m1,m2);
        this.message="Result : "+(res.toString())+"";

      } else if(ops==="SUB") {
        //sub une fonction en plusdans money.js
        res=MoneyOps.sub(m1,m2);
        this.message="Result : "+(res.toString())+"";
      } else {
        //pour une opération autre que + ou -
        this.message="Unsupported operation "+ops+"";
      }
    }catch (e) {
      this.message=e.toString();
    }
  }
};

function doComputation(form,resDiv) {
    c=new calc();
    c.computeResult(form);
    c.displayResult(resDiv);
}
