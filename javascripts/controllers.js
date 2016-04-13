var app = angular.module('reddit', ['angularMoment'])


app.controller('RedditController', function($scope) {
  $scope.search = ''
  $scope.posting = false
  $scope.submitPost = function() {
    $scope.posting = true
  }
  $scope.sortby = '-time'
  $scope.posts = [{'title': 'Scuba Diving', 'author': 'Dwayne', 'image': 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSNDPrHXIXWoPbN4fjiwgkHVHxlBMfAKgNGl5mhkUEBbLb-L_NU', 'description': 'Who wants to go diving with me?', 'time': new Date('2016, 3, 17, 3, 24, 0'), 'likes': 3, 'comments': ['Charlie: I do!'], 'id': 0, show: false, make: false}, {'title': 'I miss Calvin and Hobbes!', 'author': 'Luis', 'image': 'http://cmsimg.freep.com/apps/pbcsi.dll/bilde?Site=C4&Date=20130501&Category=COL36&ArtNo=305010081&Ref=AR&MaxW=640&Border=0&Cinetopia-film-fest-announces-its-Detroit-schedule-including-Calvin-Hobbes-doc', 'description': 'Remember waiting all week for the Sunday strip?', 'time': new Date('2016, 4, 7, 4, 30, 0'), 'likes': 2, 'comments': [], 'id': 1, show: false, make: false} ]
  $scope.newPost = function(title, author, image, description) {
    $scope.posts.push({'title': title, 'author': author, 'image': image, 'description': description, 'time': new Date(), 'likes': 0, 'comments': [], 'id': $scope.posts.length, show: false, make: false})
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
