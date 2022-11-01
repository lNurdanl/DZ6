//Task 1
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let [el1, el2, ...arr] = numbers;
alert(el1 + ','+ el2 + ',' +arr);

//Task 2
let fruits = ["яблоко","банан",'апельсин','мандарин','клубника']
fruits.reverse();
let [elem1, elem2] = fruits;
alert(elem1 + ','+ elem2);

//Task 3
function buttonClick(a = 'Аноним') {
    var input = document.getElementById("input")
    alert("Привет," + input.value + '!')
}


