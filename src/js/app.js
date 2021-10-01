angular.module("employeesApp", ["ngMaterial"]).controller("AppCtrl", function ($scope, $mdDialog, ) {
    $scope.status = "  ";
    $scope.customFullscreen = false;
    $scope.currentView = "employees";

    //! Выбор департамента
    $scope.selectedDepartment = { id: 1, name: 'All' };
    $scope.departments = [
        { id: 1, name: 'All' },
        { id: 2, name: 'Designer' },
        { id: 3, name: 'Astrophysicist' },
        { id: 4, name: 'Biologist' },
        { id: 5, name: 'Electronic engineer' }
    ];
    
       


    // меркури - дизайнер
    // брайан мей - астрофизик
    // Roger Meddows Taylor - biologist
    // John Deacon - Electronic engineer

    //! Кнопка
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
