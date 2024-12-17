var services = {
  shaving: '80 грн',
  haircut: '60 грн',
  hairWash: '100 грн',
  price () {
    const values = Object.values(services);
    var price = 0;
    for (i = 0; i < values.length; i++) {
      var intValue = parseInt(values[i]);
      if (!Number.isNaN(intValue)) {
        price = price + intValue;
      }
    }
    return price;
  },
  minPrice () { 
    const values = Object.values(services);
    var minPrice = parseInt(values[0]);
    for (i = 0; i < values.length; i++) { 
      var intValue = parseInt(values[i]);
      if (!Number.isNaN(intValue)) { 
        if (intValue < minPrice) { 
          minPrice = intValue;
        }
      }
    }
    return minPrice;
  },
  maxPrice () { 
    const values = Object.values(services);
    var maxPrice = parseInt(values[0]);
    for (i = 0; i < values.length; i++) { 
      var intValue = parseInt(values[i]);
      if (!Number.isNaN(intValue)) { 
        if (intValue > maxPrice) { 
          maxPrice = intValue;
        }
      }
    }
    return maxPrice;
  }
}


services["massage"] = "1 грн";

var price = services.price();
var minPrice = services.minPrice();
var maxPrice = services.maxPrice();
console.log(price, minPrice, maxPrice);
