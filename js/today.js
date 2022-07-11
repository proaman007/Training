//cart values:::::
var cart=[
    {
      id:"product1",
      brand:"iphone",
      price:12000,
      qty:2
    },
    {
        id:"product2",
        brand:"mac",
        price:35000,
        qty:1
    },
    {
        id:"product3",
        brand:"watch",
        price:1000,
        qty:2
    }
  ]

  var total=0;
  for(prop in cart){
    // console.log(cart[prop].price)
    // console.log(cart[prop].qty)
    if(cart[prop].qty==1){
       total+=cart[prop].price;
    } else{
       total+=cart[prop].price *cart[prop].qty;
    }
  }
  console.log("total price",total)
