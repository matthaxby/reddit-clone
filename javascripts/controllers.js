app.controller('RedditController', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  var firedata = new Firebase('https://mh-reddit-clone.firebaseio.com/posts')
  $scope.posts = $firebaseArray(firedata)
  $scope.search = ''
  $scope.posting = false
  $scope.submitPost = function() {
    $scope.posting = true
  }
  $scope.sortby = '-time'
  $scope.newPost = function(title, author, image, description) {
    var now = new Date()
    $scope.posts.$add({'title': title, 'author': author, 'image': image, 'description': description, 'time': now.toString(), 'likes': 0, 'comments': [], 'id': $scope.posts.length, show: false})
    $scope.posting = false
  }
  $scope.upVote = function(post) {
    post.likes++
    $scope.posts.$save(post)
  }
  $scope.downVote = function(post) {
    post.likes--
    $scope.posts.$save(post)
  }
  $scope.showComments = function(post) {
    post.show = !post.show
    $scope.posts.$save(post)
  }
  $scope.makeComment = function(post, name, content) {
    if (post.comments === undefined) {
      post.comments = []
    }
    post.comments.push(name + ': ' + content)
    $scope.posts.$save(post)
  }
  $scope.close = function() {
    $scope.posting = false
  }
}])
