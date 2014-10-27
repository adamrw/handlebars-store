$(document).on('ready', function() {
  
var myStore = $('#store-template').html();
console.log(myStore);

var template = Handlebars.compile(myStore);
	console.log(productsDataTemplate);

for (var i=0; i<productsData.productsList.length; i++){
	var gameOutput=template(producsData.productsList[i]);
	console.log('gameOutput: ', gameOutput);
	$('#product-container').append(gameOutput);
}

});