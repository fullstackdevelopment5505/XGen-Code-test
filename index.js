
var parent = document.getElementById("XgenElement");

for(var i = 0; i < products.length; ++i){
    var child = window.htmlTemplate;
    var product = products[i];

    if(product.prod_name.includes("Top") && product.is_in_stock != 0){
        for(var key in product){
            const renderKey = `{{${key}}}`;
            var regex = new RegExp(renderKey, "g");
            if(child.includes(renderKey)) child = child.replace(regex, product[key]);
        }
        parent.innerHTML += child;
    }
}