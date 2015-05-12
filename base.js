$(document).ready(function(){

	$.get('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC', render)

  function render(theData){
		$.each(theData.data, function(){
			$('body').append("<img src='" 
								+ this.images.fixed_height.url
								+ "'>");
		});
	};

	function deleteAllRenderImg(){
		$('img').remove();
	}

	$('input').on('change',function(event){
		deleteAllRenderImg();

		var searchInput = event.target.value 
		searchInput = searchInput.replace(/\s/g, '+')

		var url = "http://api.giphy.com/v1/gifs/search?q=" + searchInput +"&limit=100"+ "&api_key=dc6zaTOxFJmzC"

 		$.get(url, render)
	})

	$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       
   }
});

});