var app = angular.module("bookCmsApp", ['ngRoute']);

app.controller("bookAppCon", ["$scope", function($scope){

	$scope.bookclass = {
		"cata" : true,
		"content" : false
	};
	$scope.tabNav = function(key){
		$scope.bookclass = {
			"cata" : false,
			"content" : false
		}
		$scope.bookclass[key] = true;
	}

}])

app.controller("cataClass", ["$scope", "$http", function($scope, $http){
	$scope.submitForm = function(){
		if($scope.cata.title.length <= 3){
			alert("标题长度至少为3");
			return false;
		}else if($scope.cata.alt.length <= 5){
			alert("内容长度至少为50");
			return false;
		}
		//把添加的分类数据传送给后台服务器
		$http.post("/add/cata/type",$scope.cata).then(function(res){
			//console.log(res);
			return res;
		}).then(function(res){
			if(res.data.success){
				alert("数据添加成功");
				$scope.cata = {
					alt : "",
					title : ""
				}
			}else{
				alert("数据添加失败");
			}
		})
		//console.log($scope);

	}

}])

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when("/cata", {
		templateUrl : "./cata.html",
		controller : "cataClass"
	}).when("/content", {
		templateUrl : "./content.html"
	}).otherwise({
		redirectTo : "/cata"
	});
}])
