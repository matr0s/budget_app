// BUDGET CONTROLLER
var budgetController = (function(){

// SOME CODE HERE

})();



// UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value'  ,
        inputBtn: '.add__btn'
    };

return {
  getinput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
            };
  },
    getDOMstrings: function() {
        return DOMstrings;
    }
};
})();




// MAIAN APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function() {
    // 1. Get data from input
        var input = UICtrl.getinput();
        console.log(input);
    // 2. Add item to the Budget contoller

    // 3. Add itme to UI

    // 4. Calculate the budger

    // 5. Display the budget

    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {

       if (event.keyCode === 13 || event.which === 13) {
       ctrlAddItem();
       }

    });


})(budgetController, UIController);













