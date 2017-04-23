QUnit.test("equilateral have three equal sides", function( assert ) {
 	
  
assert.equal(triangle.isEquilateral(2,2,2),true,"2,2,2 is equilateral") ;
	
assert.equal(triangle.isEquilateral(0,0,0),false,"0,0,0 is not equilateral") ;
	
assert.equal(triangle.isEquilateral(-1,-1,-1),false,"-1,-1,-1 is not equilateral");
});


QUnit.test("isosceles triangle has two equal sides", function( assert ) {
	assert.equal(triangle.isIsosceles(5,5,2),true,"5,5,2 is isosceles") ;
	assert.equal(triangle.isIsosceles(2,5,5),true,"5,5,2 is isosceles") ;
	assert.equal(triangle.isIsosceles(5,2,5),true,"5,5,2 is isosceles") ;
	assert.equal(triangle.isIsosceles(4,4,7),true,"4,4,7 is isosceles") ;
	assert.equal(triangle.isIsosceles(3,3,5),true,"3,3,5 is isosceles") ;
	assert.equal(triangle.isIsosceles(2,2,1),true,"2,2,1 is isosceles") ;
	assert.equal(triangle.isIsosceles(3,3,5),true,"5,5,2 is isosceles") ;
});


QUnit.test("scalene triangle has three different sides", function( assert ) {
	
assert.equal(triangle.isScalene(3,2,4),true,"2,2,4 is scalene") ;
assert.equal(triangle.isScalene(1,2,6),true,"2,2,4 is scalene") ;
assert.equal(triangle.isScalene(2,3,4),true,"4,2,3 is scalene");

});







