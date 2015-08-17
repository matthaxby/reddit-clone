var app = angular.module('reddit', ['angularMoment'])


app.controller('RedditController', function($scope) {
  $scope.search = ''
  $scope.posting = false
  $scope.submitPost = function() {
    $scope.posting = true
  }
  $scope.sortby = '-time'
  $scope.posts = []
  $scope.newPost = function(title, author, image, description) {
    $scope.posts.push({'title': title, 'author': author, 'image': image, 'description': description, 'time': new Date(), 'likes': 0, 'comments': [], 'id': $scope.posts.length, show: false})
    $scope.posting = false
  }
  $scope.upVote = function(id) {
    $scope.posts[id].likes++
  }
  $scope.downVote = function(id) {
    $scope.posts[id].likes--
  }
  $scope.showComments = function(id) {
    $scope.posts[id].show = !$scope.posts[id].show
  }
  $scope.makeComment = function(id, name, content) {
    $scope.posts[id].comments.push(name + ': ' + content)
  }
  $scope.close = function() {
    $scope.posting = false
  }
})
