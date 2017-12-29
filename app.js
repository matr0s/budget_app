// BUDGET CONTROLLER
var budgetController = (function(){

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
      allItems: {
          exp: [],
          inc: []
      },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
      addItem: function(type, des, val) {

          var newItem, itemId;
          // Create new ID
          if (data.allItems[type].length > 0) {

              itemId = data.allItems[type][data.allItems[type].length - 1].id + 1;

          } else {
              itemId = 0;
          }

          // Add new item
            if (type === 'exp') {
            newItem = new Expense(itemId, des, val);
            } else if (type === 'inc') {
            newItem = new Income(itemId, des, val);
            }
          // Push item to the data structure
            data.allItems[type].push[newItem];
          // Return the new element
            return newItem;
        }
    };

})();



// UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value'  ,
        inputBtn: '.add__btn',
        expensesContainer: '.expenses__list',
        incomeContainer: '.income__list'
    };

return {
  getinput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
            };
  },

    addListItem: function(obj, type) {
      var html, newHtml, element;
    // Create HTML string with placeholder
    if (type === 'inc') {

    element = DOMstrings.incomeContainer;

    html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
    } else if (type === 'exp') {

    element = DOMstrings.expensesContainer;

    html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
    }

    // Replace value in the HTML
    newHtml = html.replace('%id%', obj.id);
    newHtml = newHtml.replace('%description%', obj.description);
    newHtml = newHtml.replace('%value%', obj.value);

    // Insert HTML into DOM
    document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

    },

    clearFields: function() {
      var fields, fieldsArray;
        fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
        fieldsArray = Array.prototype.slice.call(fields);
        fieldsArray.forEach(function(current, index, array){
            current.value = "";
        });
        fieldsArray[0].focus();
    },

    getDOMstrings: function() {
        return DOMstrings;
    }
};
})();

// MAIAN APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListener = function() {
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function() {
        var input, newItem, listItems;
    // 1. Get data from input
        input = UICtrl.getinput();
    // 2. Add item to the Budget contoller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
    // 3. Add itme to UI
        listItems = UICtrl.addListItem(newItem, input.type);

        // 4. Clear the fields
        UICtrl.clearFields();

        // 4. Calculate the budger

    // 5. Display the budget

    };

    return {
        init: function() {
           console.log('Init has been started');
            setupEventListener();
        }
    };

})(budgetController, UIController);


controller.init();











