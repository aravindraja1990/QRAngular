var app = angular.module("vcard-app");
app.controller("generateQR", function($scope,settings) {
	$scope.init = function () {
		
		settings.acntDetails.then(function(data){
			console.log(data.data);
			$('#QRCode').qrcode({width: 120,height: 120, text: JSON.stringify(data.data)});
			var img = $('#QRCode canvas').get(0).toDataURL("image/png");
			
			$('#code-image').attr("src",img);
		})

//		settings.retreiveAccountDetails().success(function(list){
//			$scope.list=list;
//			//	var actDetail= list.name ","
//			$('#QRCode').qrcode({width: 120,height: 120, text: JSON.stringify(list)});
//			var img = $('#QRCode canvas').get(0).toDataURL("image/png");
//			
//			$('#code-image').attr("src",img);
//		});
		
	 //  $('#QRCode').qrcode({width: 120,height: 120, text: this.list.name});
	};
});