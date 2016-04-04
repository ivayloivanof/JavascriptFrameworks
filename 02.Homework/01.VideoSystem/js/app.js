var videoSystem = angular.module("VideoSystem", ['ngRoute']);

videoSystem.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl : 'homeView/home.html',
			controller : 'homeView'
		})
		.when('/upload', {
			templateUrl : 'uploadVideo/upload.html',
			controller : 'uploadController'
		})
		.otherwise({
			redirectTo : '/home'
		})
}]);

videoSystem.service('$videoFile', function () {
	var listOfVideos = [];

	var addVideo = function(newVideo) {
		listOfVideos.push(newVideo);
	};

	var getVideo = function(){
		return listOfVideos;
	};

	addVideo({
		title : 'Course introduction',
		pictureUrl : 'data:image/jpeg;base64,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',
		length : '3:32',
		category : 'IT',
		subscribers : 3,
		date : new Date(2014, 12, 15),
		haveSubtitles : false,
		comments : [
			{
				username: 'Pesho Peshev',
				content: 'Congratulations Nakov',
				date: new Date(2014, 12, 15, 12, 30, 0),
				likes: 3,
				websiteUrl: 'http://pesho.com/'
			}
		]
	});

	return {
		addVideo: addVideo,
		getVideo: getVideo
	};
});
















