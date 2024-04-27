// javascript control flows

//===== 1. if/else/else if =====

let  number = -9;

if(number < 0){
    console.log(number + ' is an Negative Number')
} else if( number > 0){
    console.log(number + ' is an Positive Number')
}else{
    console.log(number + ' is an 0')
}

// ===== 2.switch =====
     let dayOfWeek = 5

     switch(dayOfWeek){
        case 1:
            console.log('Monday')
            break

            case 1:
                console.log('Monday')
                break

                case 2:
                    console.log('Tuesday')
                    break

                    case 3:
                        console.log('Wednesday')
                        break

                        case 4:
                            console.log('Thursday')
                            break

                            case 5:
                                console.log('Friday')
                                break

                                case 6:
                                    console.log('Saturday')
                                    break

                                    case 7:
                                    console.log('Sunday')
                                    break

                                    default:
                                    console.log('Invalid Day')
     }


     // loops
     //1. for Loop
        for(let i =0;i<10;i++){
            console.log('i :', i)
        }

        //int wenuwata let danawa witharai..echcharai wenasa.

        //2. while Loop

        let i =0;
        while(i<5){
            console.log('While :' , i)
            i++;
        }

        //3.do -while loop
            let j =0;
        do{
            console.log('Do while : ',j)
            j++
        }while(j<5)


        // ======== 4. break ========

        for(let k =0;k<=5;k++){
           if(k === 4){
            break
           }
           console.log('Break :',k)
    }


    // ======== 5. Continue ========

    for(let k =0;k<=5;k++){
        if(k === 4){
         continue
        }
        console.log('Continue :',k)
 }

 console.log('=================== IMPORTANT ===================')
 // 6. == Vs ===
 // == wldi eyata values wla data type balanne nae.values deka equal nm eya true denawa.

 // === gaththoth values deka witharak newei ewala data types dekath check karanawa.

 let num = 2
 if(num == 2){
    console.log('num 2 == 2 ')
 }

 if(num === 2){
    console.log('num 2 === 2 ')
 }
 let numb = "5"
 if(numb === 5){
    console.log('numb "5" === 5 ')
 }
