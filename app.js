var budgetController = (function(){
	var x = 30;
	var add = function(a) {
		return x + a;
		}

	return {
		publicTest: function(b) {
			return add(b);
		}
}
})();


var UIController = (function() {

// Some code here


})();


var controller = (function(budgetCtrl, UICtrl) {

//Some code here
var z  = budgetCtrl.publicTest(2);

return {
	anotherTest: function(){
		console.log(z);
	}
}

})(budgetController, UIController);













