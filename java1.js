function doctor () {
    var specialty = prompt("Please enter the specialty of the doctor you want");
    var name ;
    if (specialty ==='pediatrion') {
        name = '<img src="https://www.windsor.edu/wp-content/uploads/2018/10/considering-pediatrics-1109x675.jpg">';


    } else if (specialty === 'dermatologist') {
        name = '<img src="https://i1.wp.com/localemagazine.com/wp-content/uploads/2017/10/Dermatologist.jpg?resize=750%2C400&ssl=1">';


    } else if (specialty === 'dentist') {
        name = '<img src="https://education.ket.org/wp-content/uploads/2016/06/id1671-717x376.jpg">' ;
    }
    return name ;
}

var h = prompt("Please enter number less than 10");

while(h < 10){
    
    if(m < 5){
        alert("your number less than 5");
    }else if(m>5 && m<10){
        alert("your number less than 10 more than 5");
    }
    m=80;
}

var n = prompt("Please enter number 10");

while(n != 10){
    var n = prompt("Please enter number 10");
}

if( n === "10"){
    confirm("good job you entered number 10");
}


