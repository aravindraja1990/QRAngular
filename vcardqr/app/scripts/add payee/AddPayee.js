var app = angular.module("vcard-app");
app.controller("AddPayee", function($scope,settings) {
	$scope.setFiles = function(element) {
		var file = (element.files[0]);
		if (file) {
			if (/^image\//i.test(file.type)) {
				console.log("file image");
				readFile(file);
				//decodeFile();
			} else {
				alert('Not a valid image!');
			}
		}
	};
	
	function readFile(file) {
		var canvas = $('#scannedQR');
		var reader = new FileReader();
		reader.onload=function(e){
			var img=new Image();
			img.onload=function(){
				
				width=img.width; height=img.height;
				
				canvas.width = width;
				canvas.height = height;
				var context = canvas[0].getContext('2d');
				context.drawImage(this, 30, 30, width, height);
			}
			img.src=e.target.result;
		}
		reader.readAsDataURL(file);
		
		reader.onloadend = function () {
			
		}
	};
	function decodeFile(){
		var canvas = $('#scannedQR');
		qrcode.callback = function getQRCode(data){console.log(data);};
		qrcode.decode(canvas.get(0).toDataURL());
		
	};
	
});