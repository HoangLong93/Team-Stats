app.controller('MainController', ['$scope', function($scope) {
    $scope.teams = [
        {
            name: 'FC Temmi',
            played: 4,
            win: 4,
            draw: 0,
            lose: 0,
            goal_score: 20,
            goal_conceded: 4,
            dif: +16,
            points: 12
        },
        {
            name: 'Ankkalammen Pallo',
            played: 4,
            win: 3,
            draw: 0,
            lose: 1,
            goal_score: 12,
            goal_conceded: 5,
            dif: +7,
            points: 9
        },
        {
            name: 'The Avengers Plus',
            played: 4,
            win: 1,
            draw: 1,
            lose: 2,
            goal_score: 12,
            goal_conceded: 7,
            dif: +5,
            points: 4
        },
        {
            name: 'Schindlerin Salamat',
            played: 4,
            win: 1,
            draw: 0,
            lose: 3,
            goal_score: 10,
            goal_conceded: 18,
            dif: -8,
            points: 3
        },
        {
            name: 'Tikka A-boys',
            played: 4,
            win: 0,
            draw: 1,
            lose: 3,
            goal_score: 6,
            goal_conceded: 26,
            dif: -10,
            points: 1
        },
    ];
    $scope.players = [
        {
            Name: "Player1",
            Position:[1],
        },
        {
            Name: "Player2",
            Position:[2,5],
        },
        {
            Name: "Player3",
            Position:[3,6],
        },
        {
            Name: "Player4",
            Position:[4,7],
        },
        {
            Name: "Player5",
            Position:[5,7],
        },
        {
            Name: "Player6",
            Position:[6,8],
        },
        {
            Name: "Player7",
            Position:[5,7],
        },
        {
            Name: "Player8",
            Position:[8],
        },
        {
            Name: "Player9",
            Position:[6,8],
        },
        {
            Name: "Player10",
            Position:[6],
        },
        {
            Name: "Player11",
            Position:[5,7],
        },
        {
            Name: "Player12",
            Position:[2,5],
        },
        {
            Name: "Player13",
            Position:[4,7],
        },
        {
            Name: "Player14",
            Position:[3],
        },
    ];
    $scope.results = [
        {
            opponent: 'Ankkalammen Pallo',
            result: '0-1',
            date: '08-12-2016',
            league: 'Jalkapallon EA-talvisarja'
        },
        {
            opponent: 'Tikka A-boys',
            result: '3-3',
            date: '06-12-2016',
            league: 'Jalkapallon EA-talvisarja'
        },
        {
            opponent: 'FC Temmi',
            result: '1-2',
            date: '24-11-2016',
            league: 'Jalkapallon EA-talvisarja'
        },
        {
            opponent: 'Schindlerin Salamat',
            result: '8-1',
            date: '03-11-2016',
            league: 'Jalkapallon EA-talvisarja'
        },
    ];
  
}]);