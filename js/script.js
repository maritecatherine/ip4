$(document).ready(function(){
    function Pizza(name,size,crust,topping,total,unit){
        this.name = name;
        this.size = size;
        this.crust = crust;
        this.topping = topping;
        this.total = total;
        this.unit = unit;

    }
    $(".order").click(function(){
        var pizzaName = $(".name option:selected").val();
        var pizzaSize = $(".size option:selected").val();
        var pizzaTopping = $(".topping option:selected").val();
        var pizzaCrust = $(".crust option:selected").val();
        var total = parseInt(pizzaSize + pizzaTopping + pizzaCrust);
        var unit = 1;
        var checkoutTotal = 0;



    $("table").show();
    $(".extra").show();
    $(".order").hide();


    $("#name").html($(".name option:selected").text());
    $("#size").html($(".size option:selected").text());
    $("#crust").html($(".crust option:selected").text());
    $("#topping").html($(".topping option:selected").text());
    $("#total").html(total);


        
    $(".add-pizza").click(function(){
        var pizzaName = $(".name option:selected").val();
        var pizzaSize = $(".size option:selected").val();
        var pizzaTopping = $(".topping option:selected").val();
        var pizzaCrust = $(".crust option:selected").val();
        var total = parseInt(pizzaSize + pizzaTopping + pizzaCrust);
        var unit = unit + 1;
        var checkoutTotal = checkoutTotal + total;

        var newPizza = new Pizza(pizzaName, pizzaSize, pizzaTopping, pizzaCrust, total, unit);
        
         $("#ordersmade").append('<tr><th scope="row">' + newPizza.unit + '</th><td id="name">' + newPizza.name + '</td><td id="size">' + newPizza.size + '</td><td id="crust">' + newPizza.crust + '</td><td id="topping">'+newPizza.topping+'</td><td id="total">' +newPizza.total+'</td></tr>');
         console.log(newPizza)

    });
    $(".checkout").click(function(){
        $(".add-pizza").hide();
        $(".checkout").hide();
        $(".bill").show();
        $(".delivery").show();
        $(".bill.person").hide();
        checkoutTotal = checkoutTotal + total;

        $(".delivery- info").html(checkoutTotal);
    });






    });

});