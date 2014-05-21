(function(){
    var app = angular.module('store', []);

    app.controller('StoreController', function(){
        this.products = gems;
    });

    var gems = [
        {
            name: "Dodecahedron",
            price: 2.95,
            description: "Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.",
            canPurchase: true,
            soldOut: false
        },
        {
            name: "Pentagonal Gem",
                price: 2.95,
            description: "Some gems have more then one side... this one has five.",
            canPurchase: false,
            soldOut: true
        }
    ];
})();
