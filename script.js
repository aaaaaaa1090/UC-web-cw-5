alert("مرحباً بك في موقعي! أنا (عبدالله)، وسوف أحسب درجتك")

let grade = prompt( "ادخل درجتك")

console.log(grade)

if  ( grade>= 90 && grade <= 100) {
    console.log("لقد حصلت على امتياز 🥳")
}  else if  ( grade>= 80 && grade <= 89) { 
    console.log("لقد حصلت على جيد جداً🤩")
}  else if (grade>= 70 && grade <= 79) {
    console.log("لقد حصلت على جيد🙂")
}  else if (grade>= 69 && grade <= 60) {
    console.log("لقد حصلت على مقبول😕")
}  else if (grade>= 59 && grade <= 50) {
    console.log("لقد حصلت على ضعيف☹️")
}  else{
    console.log("راسب💔")
} 
// جافاسكربت ليست جافا*/