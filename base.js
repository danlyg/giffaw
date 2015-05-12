$(document).ready(function(){
  // code in here!
  console.log("here's your data:", mockData)


  function render(theData){
		$.each(mockData.data, function(){
			$('body').append("<img src='" 
								+ this.images.fixed_height.url
								+ "'>");
		});
	};
 	render(mockData);
});