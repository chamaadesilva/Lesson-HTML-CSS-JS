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

    let names = ['Chathura','Hashini','Kumara','Nihal','Senaka','Yohani','Janani']
    let marks =[92,73,78,100,12,38,59,62,-10]

    for(i=0;i<names.length;i++){
        getStudentGrade(names[i],marks[i],gradingLogic(marks[i]))
    }
