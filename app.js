// BUDGET CONTROLLER
var budgetController = (function(){

// SOME CODE HERE

})();



// UI CONTROLLER
var UIController = (function() {

return {
  getinput: function() {
      var type = document.querySelector('.add__type').value;
      var description = document.querySelector('.add__description').value;
      var value = document.querySelector('.add__value').value;
  }
};

})();




// MAIAN APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {
    // 1. Get data from input

    // 2. Add item to the Budget contoller

    // 3. Add itme to UI

    // 4. Calculate the budger

    // 5. Display the budget
        console.log('test');
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
       if (event.keyCode === 13 || event.which === 13) {
       ctrlAddItem();
       }
    });


})(budgetController, UIController);













