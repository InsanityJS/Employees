angular.module("employeesApp", ["ngMaterial"]).controller("AppCtrl", function ($scope, $mdDialog) {
    $scope.status = "  ";
    $scope.customFullscreen = false;
    $scope.currentView = "add";

    $scope.employees = [
        {
            id: 0,
            name: "Freddie Mercury",
            department: "Designer",
            textarea: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
            id: 1,
            name: "Roger Meddows Taylor",
            department: "Biologist",
            textarea: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
            id: 2,
            name: "John Deacon",
            department: "Electronic engineer",
            textarea: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
            id: 3,
            name: "Brian May",
            department: "Astrophysicist",
            textarea: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
            id: 4,
            name: "John Peel",
            department: "Journalist",
            textarea: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
    ];

    $scope.select = ["", "Designer", "Astrophysicist", "Biologist", "Electronic engineer", "Journalist"];
    $scope.selected = $scope.select[0];

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
