
function Delete(object) {
    var row = object.parentElement.parentElement;
    var item = row.parentElement;
    item.removeChild(row);
  }


function myFunc() {
    var para = document.getElementById("p");
    para.classList.toggle("paragraphClass");
}

function myyFunc() {
    var para = document.getElementById("p-p");
    para.classList.toggle("paragraphClass");
}

function myyyFunc() {
    var para = document.getElementById("p-p-p");
    para.classList.toggle("paragraphClass");
}







function inputNumber(el)
{
    
    var myElements = document.getElementsByClassName('cart-quantity-input');
    var sum = 0;
    for (var i=0;i<myElements.length;i++) {
        if(myElements[i].value)
            sum = sum+parseInt(myElements[i].value);
    }
    if(sum<=100)
    {
        el.dataset.prevvalue  = el.value;
    } else {
        el.value  = el.dataset.prevvalue;
    }

}

function minusoperation(inputNumber)
{

    var el = document.getElementById('number'+inputNumber);
    if(parseInt(el.value))
    {
        el.value = parseInt(el.value)-1;

    } else {
        el.value = 0;
    }
    el.onchange();
}

function plusoperation(inputNumber)
{
    var el = document.getElementById('number'+inputNumber);

    if(parseInt(el.value))
    {
        el.value = parseInt(el.value)+1;
    } else {
        el.value = 1;
    }
    el.onchange();

}

//the updateCartTotal function is not working ... i dont know why ... check it and please tell me the problem face to face in the hackerspace thank you for your help :)

function updateCartTotal() {
    var cartItemContainer = document.getElementById('cart-items');
    var  cartRows = cartItemContainer.getElementsByClassName('cart-row')[0];

    var total = 0;

    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = quantityElement.value;

        total = total + (price * quantity); 
    }

   
    document.getElementById('cart-total-price')[0].innerText = '$' + total;
}

    
