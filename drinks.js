const Drinks = (function () {
    const _drinks = ['chocomel', 'spa blauw', 'sinaasappelsap', ];



    // Don't tell anyone about my new drink, ok?
    const _newDrink = function() {
        return 'ice tea';
    };

    const _addNewDrink = function() {
        const _newDrinks = [..._drinks, _newDrink()];
        return _newDrinks;
    };
    // Ssssht, don't say anything about the above ;-)



    const allDrinks = function() {
        const _drinksOneLiner = _drinks.join(', ');
        console.log('everything [= all drinks]', _drinksOneLiner);
        return _drinksOneLiner;
    };

    const amountOfDrinks = function() {
        const _drinksLength = _drinks.length;
        console.log('amount [= drinks length]:', _drinksLength);
        return _drinksLength;
    };

    const bestDrinkEver = function() {
        const _bestDrink = _drinks[0];
        console.log('best [= first item in array]', _bestDrink);
        return _bestDrink;
    };

    return {
        everything: allDrinks,
        amount: amountOfDrinks,
        best: bestDrinkEver,
    }
})();


console.log('---------- Drinks Module starts here ---------- ');
console.log('type `Drinks` in this console to see the Drinks object with all methods');
Drinks.everything();
Drinks.amount();
Drinks.best();
console.log('---------- Drinks Module ends here ---------- ');
