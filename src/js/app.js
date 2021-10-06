angular.module("employeesApp", ["ngMaterial"]).controller("AppCtrl", function ($scope, $mdDialog) {
    $scope.status = "  ";
    $scope.customFullscreen = false;
    $scope.page = "login";
    $scope.saved = localStorage.getItem('employees');
    $scope.employees = (localStorage.getItem('employees')!==null) ? JSON.parse($scope.saved) : [ 
        {
            $$hashKey: "001",
            id: 1,
            username: "Freddie Mercury",
            department: "Designer",                                                                                                           
            textarea:
                "Freddie Mercury (born Farrokh Bulsara; 5 September 1946 – 24 November 1991)[2] was a British singer, songwriter, record producer, and lead vocalist of the rock band Queen. Regarded as one of the greatest singers in the history of rock music, he was known for his flamboyant stage persona and four-octave vocal range. Mercury defied the conventions of a rock frontman, with his highly theatrical style influencing the artistic direction of Queen.",
        },
        {
            $$hashKey: "002",
            id: 2,
            username: "Roger Meddows Taylor",
            department: "Biologist",
            textarea:
                "Roger Meddows Taylor OBE (born 26 July 1949) is an English musician, singer-songwriter and multi-instrumentalist, best known as the drummer for the rock band Queen.[1] As a drummer, Taylor was recognised early in his career for his unique sound.[2] He was voted by radio listeners as the eighth-greatest drummer in classic rock music history in a poll conducted by Planet Rock in 2005.[3]",
        },
        {
            $$hashKey: "003",
            id: 3,
            username: "John Deacon",
            department: "Electronic engineer",
            textarea:
                "John Richard Deacon (born 19 August 1951) is an English retired musician, best known for being the bassist for the rock band Queen. He composed several songs for the group, including Top 10' hits 'You're My Best Friend', 'Another One Bites the Dust', and 'I Want to Break Free' co-wrote 'Under Pressure', 'Friends Will Be Friends' and 'One Vision', and he was involved in the bands financial management",
        },
        {
            $$hashKey: "004",
            id: 4,
            username: "Brian May",
            department: "Astrophysicist",
            textarea:
                "Brian Harold May CBE (born 19 July 1947) is an English musician, singer, songwriter, record producer, author, astrophysicist, and university administrator. He is the lead guitarist of the rock band Queen. May is widely regarded as one of the greatest guitarists of all time.",
        },
        {
            $$hashKey: "005",
            id: 5,
            username: "John Peel",
            department: "Journalist",
            textarea:
                "John Robert Parker Ravenscroft OBE (30 August 1939 – 25 October 2004), known professionally as John Peel, was an English disc jockey, radio presenter, record producer and journalist. He was the longest-serving of the original BBC Radio 1 DJs, broadcasting regularly from 1967 until his death in 2004.",
        }, ];
    localStorage.setItem('employees', JSON.stringify($scope.employees));
   
    $scope.select = ["", "Designer", "Astrophysicist", "Biologist", "Electronic engineer", "Journalist"];
    $scope.selected = $scope.select[0];

    $scope.addEmployee = function (item) {
        $scope.data = item ? angular.create(item) : {};
        $scope.page = "add";
    };
    $scope.edit = function (item) {
        $scope.data = item ? angular.copy(item) : {};
        $scope.page = "add";
    };

    $scope.view = function (item) {
        $scope.data = item ? angular.copy(item) : {};
        $scope.page = "view";
    };

    $scope.cancel = function () {
        $scope.data = {};
        $scope.page = "employees";
    };

    $scope.pushData = function (item) {
        if (angular.isDefined(item.id)) {
            for (var i = 0; i <= $scope.employees.length; i++) {
                if ($scope.employees[i].id == item.id) {
                    $scope.employees[i] = item;
                    console.log(item);
                    break;
                }
            }
            $scope.page = "employees";
        } else {
            $scope.employees.push(item);
            item.id = $scope.employees.length + 1;
            item.$$hashKey = Math.random();
            localStorage.setItem('employees', JSON.stringify($scope.employees));
            $scope.page = "employees";
            console.log(item);
        }
    };

    $scope.signIn = function () {
            if($scope.username == undefined && $scope.userpassword == undefined) {
                $scope.page = "employees";
            } 
    }
    $scope.showConfirm = function (item) {
        var confirm = $mdDialog
            .confirm()
            .title("Do you want to delete an employee?")
            .textContent("This an employee will be delete from database")
            .ok("Delete!")
            .cancel("Cancel");

            $mdDialog.show(confirm).then(
                function () {
                    localStorage.removeItem('employees', JSON.stringify($scope.employees.splice($scope.employees.indexOf(item), 1)));
                    localStorage.setItem('employees', JSON.stringify($scope.employees));
                },
            );
        }
});
