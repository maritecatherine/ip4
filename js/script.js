$(document).ready(function(){
    function Pizza(name,size,crust,topping,total,unit){
        this.name = name;
        this.size = size;
        this.crust = crust;
        this.topping = topping;
        this.total = total;
        this.unit = unit;

    }

    $(".choosen").hide();
    $("table").hide();
    $(".extra-buttons").hide();
    $(".bill").hide();
    $("btn.yes").hide();
    $("btn.no").hide();

    $(".delivery-info").hide();
    

    $(".btn.order").click(function(event){
        event.preventDefault();
        var pizzaName = $(".name option:selected").val();
        var pizzaSize = $(".size option:selected").val();
        var pizzaTopping = $(".topping option:selected").val();
        var pizzaCrust = $(".crust option:selected").val();
        var total = parseInt(pizzaSize) + parseInt(pizzaTopping) + parseInt(pizzaCrust);
        var unit = 1;
        var checkoutTotal = 0;

    $("table").show();
    $(".choosen").show();
    $(".extra-buttons").show();
    $(".btn.order").hide();
    
    
    

    $("#name").html($(".name option:selected").text());
    $("#size").html($(".size option:selected").text() + "-" +pizzaSize);
    $("#crust").html($(".crust option:selected").text()+ "-" +pizzaCrust);
    $("#topping").html($(".topping option:selected").text() + "-" +pizzaTopping);
    $("#total").html(total);

        
    $(".add-pizza").click(function(event){
        event.preventDefault();
        var pizzaName = $(".name option:selected").val();
        var pizzaSize = $(".size option:selected").val();
        var pizzaTopping = $(".topping option:selected").val();
        var pizzaCrust = $(".crust option:selected").val();
        var total = parseInt(pizzaSize) + parseInt(pizzaTopping) + parseInt(pizzaCrust);
        var unit = unit + 1;
        var checkoutTotal = checkoutTotal + total;

        var newPizza = new Pizza(pizzaName, pizzaSize, pizzaTopping, pizzaCrust, total, unit);
        
         $("#ordersmade").append('<tr><th scope="row">' + newPizza.unit + '</th><td id="name">' + newPizza.name + '</td><td id="size">' + $(".size option:selected").text() + " - "  + newPizza.size + '</td><td id="crust">'  + $(".crust option:selected").text() + " - "  + newPizza.crust + '</td><td id="topping">' + $(".topping option:selected").text() + " - "  + newPizza.topping +'</td><td id="total">' + newPizza.total +'</td></tr>'); 
         console.log(newPizza);

    });
    $(".btn.checkout").click(function(event){
        event.preventDefault();
        $(".add-pizza").hide();
        $(".btn.checkout").hide();
        $(".bill").show();
        $(".btn.yes").show();
        $(".btn.no").show();
        $(".person").hide();
        checkoutTotal = checkoutTotal + total;

        $(".bill.checkout-total").html(checkoutTotal);
    });

    $(".btn.yes").click(function(){
        $(".delivery-cost").hide();
        $(".btn.yes").hide();
        $(".btn.no").hide();
        $(".btn.checkout").show;
        $(".person").show();
        $(".checkout-total span").html(checkoutTotal + 150);

    });
    $(".btn.yes").click(function(){
        $(".delivery-cost").hide();
        $(".btn.yes").hide();
        $(".btn.no").hide();
        $(".person").show();
    });    

    $(".btn.proceed").click(function(event){
        event.preventDefault();
        var personName = $("input#name").val();
        var phone = $("input#phone").val();
        var location = $(".bill#location input").val();
        $(".delivery-info").show();
        $(".person").hide();
        $(".delivery-info span").html(location);

    });
    


    });
 
});