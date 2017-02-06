angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.user = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form

})
    
.controller('LoginCtrl', function($scope, $ionicLoading, $ionicPopup, $state) {
    $scope.user = {};
    var user = {};
    $scope.doLogin = function() {

        /*Backendless.enablePromises();
        console.log('Doing login', $scope.user);
        $ionicLoading.show({
            template: 'Carregando...',
            duration: 3000
        }).then(function(){
            console.log("The loading indicator is now displayed");
        });
        function userLoggedIn(user) {
            console.log("USER: " + $scope.user.email + " SENHA: " + $scope.user.password);
            console.log("user has logged in");

            console.log('user: ' + user);
            console.log('usuario: ' + $scope.usuario);
            $scope.user = {};
            $ionicLoading.hide().then(function() {
                console.log("The loading indicator is now hidden");
            });
            $state.go('app.perfil');

        }

        function gotError(err) // see more on error handling
        {
            console.log("error message - " + err.message);
            console.log("error code - " + err.statusCode);
            $ionicLoading.hide().then(function() {
                console.log("The loading indicator is now hidden");
            });
            $ionicPopup.alert({
                title: 'Login falhou!',
                template: '' + err.message + ''
            });
            $scope.user = {};
        }

        Backendless.UserService.login($scope.user.email, $scope.user.password).then(userLoggedIn).catch(gotError);*/
        $state.go('app.perfil');
    };
})
.controller('PerfilCtrl', function($scope) {
    $scope.dados = {};
    $scope.dados.nome = "Nome: Mourais Mourelha";
    $scope.dados.email = "E-mail: teste@teste.com";
    $scope.dados.funcao = "Função: Atendente";
    $scope.dados.privilegio = "Privilégio: Adm";
})
.controller('PromoCtrl', function($scope, $state) {
    $scope.promos = {};
    function Promotion(args) {
        args = args || {};
        this.company = args.company || "";
        this.title = args.title || "";
        this.description = args.description || "";
    }
    var promosCollection = Backendless.Persistence.of( Promotion ).find();
    $scope.promos = promosCollection.data;
    console.log($scope.promos);

    $scope.edit = function () {
        $state.go('edit-promo');
    }
    $scope.delete = function () {

    }
    $scope.add = function () {
        $state.go('add-promo');

    }

})
    .controller('PromoAddCtrl', function($scope) {
        $scope.rewards = {};
        function Reward(args) {
            args = args || {};
            this.company = args.company || "";
            this.name = args.name || "";
            this.points = args.points || "";
        }
        var rewardsCollection = Backendless.Persistence.of( Reward ).find();
        $scope.rewards = rewardsCollection.data;
        console.log($scope.rewards);

        $scope.edit = function () {

        }
        $scope.delete = function () {

        }
        $scope.add = function () {

        }

    }).controller('RewardsCtrl', function($scope) {
    $scope.rewards = {};
    function Reward(args) {
        args = args || {};
        this.company = args.company || "";
        this.name = args.name || "";
        this.points = args.points || "";
    }
    var rewardsCollection = Backendless.Persistence.of( Reward ).find();
    $scope.rewards = rewardsCollection.data;
    console.log($scope.rewards);

    $scope.edit = function () {

    }
    $scope.delete = function () {

    }
    $scope.add = function () {

    }

})
.controller('MessageCtrl', function($scope) {
    $scope.messages = {};
    function Message(args) {
        args = args || {};
        this.company = args.company || "";
        this.text = args.text || "";
        this.title = args.title || "";
    }
    var messagesCollection = Backendless.Persistence.of( Message ).find();


    $scope.messages = messagesCollection.data;

    console.log(messagesCollection);

    console.log($scope.usuario);

})
.controller('LogoutCtrl', function ($scope, $state) {
    $scope.logout = function () {
        try {
            // now log out:
            var userLogged = Backendless.UserService.getCurrentUser();
            if( userLogged == null )
            {
                $state.go('login');
            }
            else {
                if (Backendless.UserService.logout())
                {
                    $state.go('login');
                }
            }

        }
        catch (err) // see more on error handling
        {
            // logout failed, to get the error code, call err.statusCode
            console.log("error message - " + err.message);
            console.log("error code - " + err.statusCode);
        }
    };

});
