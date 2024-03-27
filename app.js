// Q1
/* let arr = [

  [      ],

  [       ],

  [       ],
	
  [       ]

]*/

// Q2
let arr2 = [

	[0,1,2,3],
	[1,0,1,2],
	[2,1,0,1],
	

]




document.write("<table >")

for (let m = 0; m <= 3; m++) {
	document.write("<tr>")
	for(let n = 0;n<=3;n++){
		document.write(" <th> " + arr2[m][n]+ " " +  " </th> " )
	}
	
	document.write("</tr>")
}

document.write("</table>" )


// Q3

/*for (let i = 1;i<=10;i++){
	document.write(i +"<br>")
}*/

//Q
/*let number = prompt("Enter a number to show its multiplication table");
let end = prompt("Enter lenght multiplication table")

for(let i = 1; i<=end;i++){
	document.write(number +" x " +i + " = " + i*number +"<br>"  )
}*/


//Q5
/*let fruits = [ "apple", "banana", "mango","orange","strawbery"];


for (let i = 0;i<fruits.length;i++){
document.write(fruits [i]  +"<br>")
}


document.write("<br>")

let a = fruits.indexOf("apple" ,0)

document.write("Element at index ",a ," is "+ "apple" + "<br>")

let b = fruits.indexOf("banana",0)
document.write("Element at index ",b ," is " +"banana" +"<br>")


let m = fruits.indexOf("mango",0)
document.write("Element at index ",m ," is " +"mango" +"<br>")

let o = fruits.indexOf("orange",0)
document.write("Element at index ",o," is " +"orange" +"<br>")

let s = fruits.indexOf("strawbery",0)
document.write("Element at index ",s ," is " +"strawbery" +"<br>")*/

//Q6


/*document.write("<h2>" + "Counting:" +"</h2>"   )
for (let count = 1;count <=15;count++){
	document.write( count+","  )
}
document.write("<h2>"+ "Reverse counting:"   +"</h2>")

for (let reverse =1;reverse<=10; reverse++ ){
	document.write(  11-reverse + "," )
}


document.write( "<h2>" +"Even:"  +"</h2>")

for(let even = 0;even<=20; even=even+2){
	document.write(even  +",")
}

document.write("<h2>"+ "Odd:" +"</h2>")

for ( let odd = 1;odd<=20;odd= odd+2){
	document.write(odd +",")
}

document.write("<h2>" +"Series:" +"</h2>")

for (let series = 2;series<=20;series=series+2){
	document.write(series  +"k" +",")
}*/

//Q8


/*let arr = [24,53,78,91,12];
let info = [0];
document.write(info)

for(let check = 0;check<arr.length;check++){

	if( arr [check] > info){
		info = arr[check]
	}
}
document.write("<h1>" + "Array items:"+ arr +"</h1>" +"<h1>" +"The largest number is " +info +"</h1>") */


//Q9
/*let small = [24,53,78,91,12];
let info = small[0];

for (let s = 0 ; s<small.length;s++){
	if (small[s]< info ){
		info = small[s];
	}
}
document.write("<h1>" +"Array items:" +small +"<h1>" +"The smallest number is:"+ info +"</h1>")*/


//Q10


/*let multiplication = prompt("Enter any number for display table")

for (let table=1; table<=20;table++){
	document.write(table*multiplication +",")
}*/



























































