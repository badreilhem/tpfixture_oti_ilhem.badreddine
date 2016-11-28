QUnit.module("moneyOps", {
//	setup:function(assert){alert("setup moneyOps individual test");},
//	teardown:function(assert){alert("teardown moneyOps individual test");}
});

//test add
QUnit.test("test simple add", function(assert)
{
	assert.expect(2);

	var m1=sinon.createStubInstance(money);
	var m2=sinon.createStubInstance(money);
	m1.getValue.returns(1);m1.getCurrency.returns("EUR");
	m2.getValue.returns(2);m2.getCurrency.returns("EUR");

	var m3=new money(3,"EUR");
	sinon.stub(m3,"getValue").returns(3);
	sinon.stub(m3,"getCurrency").returns("EUR");

	assert.ok(m3.equals(MoneyOps.add(m1,m2)),"3e = 1e+2e");
	assert.deepEqual(m3,MoneyOps.add(m1,m2),"3e = 1e+2e deepEqual");
}
);


QUnit.test("test multi devise add", function(assert)
{
	var m1EUR=new money(1,"EUR");
	sinon.stub(m1EUR,"getValue").returns(1);
	sinon.stub(m1EUR,"getCurrency").returns("EUR");

	var m2CHF=sinon.createStubInstance(money);
	m2CHF.getValue.returns(2);m2CHF.getCurrency.returns("CHF");

	assert.throws(	function() {var m3=MoneyOps.add(m1EUR,m2CHF)},
									DevisesIncompatibleExc,
									"Devises Incompatibles");
}
);

//test sub
QUnit.test("test simple sub", function(assert)
{
	assert.expect(1);

	var m1=sinon.createStubInstance(money);
	var m2=sinon.createStubInstance(money);
	m1.getValue.returns(2);m1.getCurrency.returns("EUR");
	m2.getValue.returns(1);m2.getCurrency.returns("EUR");

	var m3=new money(1,"EUR");
	sinon.stub(m3,"getValue").returns(1);
	sinon.stub(m3,"getCurrency").returns("EUR");

	assert.ok(m3.equals(MoneyOps.sub(m1,m2)),"3e = 1e+2e");
}
);

QUnit.test("test sub v1 < v2", function(assert)
{
	assert.expect(1);

	var m1=sinon.createStubInstance(money);
	var m2=sinon.createStubInstance(money);
	m1.getValue.returns(2);m1.getCurrency.returns("EUR");
	m2.getValue.returns(1);m2.getCurrency.returns("EUR");

	assert.throws(	function() {var m3=MoneyOps.sub(m1,m2)},
									ValeursPasDansLeBonOrdreExc,
									"Opération impossible");
}
);

QUnit.test("test multi devise sub", function(assert)
{
	var m1EUR=new money(1,"EUR");
	sinon.stub(m1EUR,"getValue").returns(1);
	sinon.stub(m1EUR,"getCurrency").returns("EUR");

	var m2CHF=sinon.createStubInstance(money);
	m2CHF.getValue.returns(2);m2CHF.getCurrency.returns("CHF");

	assert.throws(	function() {var m3=MoneyOps.add(m1EUR,m2CHF)},
									DevisesIncompatibleExc,
									"Devises Incompatibles");
}
);
