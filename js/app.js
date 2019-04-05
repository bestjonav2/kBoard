angular.module('kanbanApp',[])
	.controller('kanbanController',function($scope){
		var kanbanCtrl = this;
		kanbanCtrl.tasks = [];
		var i = 0;
		kanbanCtrl.add = function(){
			kanbanCtrl.tasks.push({
				index: i,
				name: $scope.to2.name,
				desc: $scope.to2.desc,
				status: 1
			});
			$scope.to2 = {};
			i++;
		}
		kanbanCtrl.next = function(index){
			var task = kanbanCtrl.tasks[index];
			task.status++;

		}
		kanbanCtrl.previous = function(index){
			var task = kanbanCtrl.tasks[index];
			task.status--;
		}
	});