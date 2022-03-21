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
    $(".extra").hide();
    $(".bill").hide();

    $(".delivery-info").hide();


    $(".btn.order").click(function(event){
        var pizzaName = $(".name option:selected").val();
        var pizzaSize = $(".size option:selected").val();
        var pizzaTopping = $(".topping option:selected").val();
        var pizzaCrust = $(".crust option:selected").val();
        var total = parseInt(pizzaSize) + parseInt(pizzaTopping) + parseInt(pizzaCrust);
        var unit = 1;
        var checkoutTotal = 0;

    $(".choosen").show();
    $("table").show();
    $(".extra").show();
    $(".btn.order").hide();
    $(".btn.proceed").show()


    $("#name").html($(".name option:selected").text() + " -" +pizzaName);
    $("#size").html($(".size option:selected").text() + "-" +pizzaSize);
    $("#crust").html($(".crust option:selected").text()+ "-" +pizzaCrust);
    $("#topping").html($(".topping option:selected").text() + "-" +pizzaTopping);
    $("#total").html(total);





        
    $(".add-pizza").click(function(){
        var pizzaName = $(".name option:selected").val();
        var pizzaSize = $(".size option:selected").val();
        var pizzaTopping = $(".topping option:selected").val();
        var pizzaCrust = $(".crust option:selected").val();
        var total = parseInt(pizzaSize) + parseInt(pizzaTopping) + parseInt(pizzaCrust);
        var unit = unit + 1;
        var checkoutTotal = checkoutTotal + total;

        var newPizza = new Pizza(pizzaName, pizzaSize, pizzaTopping, pizzaCrust, total, unit);
        
         $("#ordersmade").append('<tr><th scope="row">' + newPizza.unit + '</th><td id="name">' + newPizza.name + '</td><td id="size">' + newPizza.size + '</td><td id="crust">' + newPizza.crust + '</td><td id="topping">'+ newPizza.topping +'</td><td id="total">' + newPizza.total +'</td></tr>'); 
         console.log(newPizza);

    });
    $(".checkout").click(function(){
        $(".add-pizza").hide();
        $(".checkout").hide();
        $(".bill").show();
        $(".delivery").show();
        $(".bill.person").hide();
        checkoutTotal = checkoutTotal + total;

        $(".checkout-total").html(checkoutTotal);
    });

    $(".delivery").click(function(){
        $(".delivery-cost").hide();
        $(".delivery").hide();
        $(".person").show();
        $(".checkout-total span").html(checkoutTotal + 150);

    });
    $(".proceed").click(function(){
        var personName = $("input#name").val();
        var phone = $("input#phone").val();
        var location = $("input#location").val();
        $(".delivery-info").show();
        $(".person").hide();
        $(".delivery-info span").html(location)

    });
    event.preventDefault();


    });
 
});