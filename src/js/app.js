angular.module("employeesApp", ["ngMaterial"]).controller("AppCtrl", function ($scope, $mdDialog) {
    $scope.status = "  ";
    $scope.customFullscreen = false;

    $scope.showConfirm = function (ev) {
        var confirm = $mdDialog
            .confirm()
            .title("Would you like to delete your debt?")
            .textContent("All of the banks have agreed to forgive you your debts.")
            .ariaLabel("Lucky day")
            .targetEvent(ev)
            .ok("Please do it!")
            .cancel("Sounds like a scam");

        $mdDialog.show(confirm).then(
            function () {
                $scope.status = "You decided to get rid of your debt.";
            },
            function () {
                $scope.status = "You decided to keep your debt.";
            }
        );
    };
});
