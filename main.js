$(document).on('ready', function() {
  
	var myStore = $('#store-template').html();
	console.log(myStore);

	var template = Handlebars.compile(myStore);
		console.log(template);

	for (var i=0; i<productsData.productsList.length; i++){
		var gameOutput=template(productsData.productsList[i]);
		console.log('gameOutput: ', gameOutput);
		$('#product-container').append(gameOutput);
	}

	var wishlistHTML = $('#wishlistitem').html();
	console.log(wishlistHTML);
	var wishTemplate = Handlebars.compile(wishlistHTML);

	$(document).on('click', '.add', function(){
		var title = $(this).siblings('h2').text();
		console.log(title);
		var addWish = {'title': title};
		var wishOutput = wishTemplate(addWish);
		console.log(wishOutput);
		$('#wishlist').append(wishOutput);
	});

	$(document).on('click', '.delete', function(){
		$(this).closest('.wishItem').remove();
	});
});