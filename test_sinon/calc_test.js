QUnit.module("calc", {
//	setup:function(){alert("setup moneyOps individual test");},
//	teardown:function(){alert("teardown moneyOps individual test");}
});

// Changement de nom pour coller au nouveau code, de computeresults à computeresults_add
QUnit.test("test_computeresults_add", function(assert)
{
        var fixture="";
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='2'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EUR'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='2'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='EUR'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='ADD'/>");
        fixture+=("</form>");


        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;


        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        assert.equal(c.message,"Result : 4 (EUR)");
}
);

//Changement da SUB à MULT (pour )
QUnit.test("test_computeresults_other", function(assert)
{
        var fixture="";
        fixture+=("<div id='res'></div>");
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='2'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EUR'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='2'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='EUR'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='MULT'/>");
        fixture+=("</form>");


        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        assert.equal(c.message,"Unsupported operation MULT");
}
);

QUnit.test("test_displayResult", function(assert)
{
        var fixture="";
        fixture+=("<div id='res'></div>");

        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        var c=new calc();
        c.message="4 (EUR)";
        c.displayResult(document.getElementById('res'));
        assert.equal(document.getElementById('res').innerHTML,"Result : 4 (EUR)");
}
);

// Test pour devises incompatibles
QUnit.test("test_devisesIncompatibles", function(assert)
{
        var fixture="";
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='2'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='CHF'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='2'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='EUR'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='ADD'/>");
        fixture+=("</form>");

        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        assert.equal(c.message,"Devises incompatibles : 2 (CHF) vs 2 (EUR)");
}
);
// Test pour l'affichage devises incompatibles
QUnit.test("test_affichageDevisesIncompatibles", function(assert)
{
        var fixture="";
        fixture+=("<div id='res'></div>");

        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        var c=new calc();
        c.message="Devises incompatibles : 2 (CHF) vs 2 (EUR)";
        c.displayResult(document.getElementById('res'));
        assert.equal(document.getElementById('res').innerHTML,"Result : Devises incompatibles : 2 (CHF) vs 2 (EUR)");
}
);

// Test pour le SUB
QUnit.test("test_computeresults_sub", function(assert)
{
        var fixture="";
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='2'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EUR'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='2'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='EUR'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='SUB'/>");
        fixture+=("</form>");

        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        assert.equal(c.message,"Result : 0 (EUR)");
}
);

//test v<0 et longueur cur>3
QUnit.test("test_computeresults_sub", function(assert)
{
        var fixture="";
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='-2'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EUR'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='2'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='EUR'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='SUB'/>");
        fixture+=("</form>");

        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        assert.equal(c.message,"Result : 0 (EUR)");
}
);
