function gradingLogic(mark){

if((mark <= 100) & (mark > 90)){
    return 'A+'
    }else if((mark <= 89) & (mark > 80)){
        return 'A-'
    } else if ((mark <= 79) & (mark > 75)){
        return 'A'
    } else if((mark <= 74) & (mark > 65)){
        return 'B'
    } else if((mark <= 64) & (mark > 55)){
        return 'C'
    } else if((mark <= 54) & (mark > 35)){
        return 'S'
    }else if ((mark <= 34) & (mark > 0)){
        return 'F'
    }else{
        return 'Invalid Mark'
    }
}

function getStudentGrade(name,mark,grade){
    console.log(name + '\'s Grade for ' + mark + ' marks => ' + grade)
}


getStudentGrade('kumara',92,gradingLogic(92))
getStudentGrade('chathur',73,gradingLogic(73))
getStudentGrade('nimesh',78,gradingLogic(78))
getStudentGrade('kamal',100,gradingLogic(100))
getStudentGrade('amal',12,gradingLogic(12))
getStudentGrade('nimal',38,gradingLogic(38))
getStudentGrade('sunimal',59,gradingLogic(59))
getStudentGrade('kasun',62,gradingLogic(62))
getStudentGrade('nihal',-10,gradingLogic(-10))
