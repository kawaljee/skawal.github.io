//let mod=angular.module('myMod',[]);
app.controller('cntl',($scope)=>{
    $scope.deptName='CSE',
    $scope.facultyName=[{
        'Name':'Ancy',
        'Sex':'Female',
        'Age':'45'
        },
        {
            'Name':'Rupa',
            'Sex':'Female',
            'Age':'40'
        },
        {
            'Name':'Rohit',
            'Sex':'Male',
            'Age':'45'
        }
    
    ]
})