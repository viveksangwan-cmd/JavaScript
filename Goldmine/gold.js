

var rows=6;
var cols=6;
const matrix=[[0 ,1 ,4 ,2 ,8 ,2],
[4 ,3 ,6 ,5 ,0 ,4],
[1 ,2 ,4 ,1 ,4 ,6],
[2 ,0 ,7 ,3 ,2 ,2],
[3 ,1 ,5 ,9 ,2 ,4],
[2 ,7 ,0 ,8 ,5 ,1]];


const Collected_Gold=[[0 ,1 ,4 ,2 ,8 ,2],
[4 ,3 ,6 ,5 ,0 ,4],
[1 ,2 ,4 ,1 ,4 ,6],
[2 ,0 ,7 ,3 ,2 ,2],
[3 ,1 ,5 ,9 ,2 ,4],
[2 ,7 ,0 ,8 ,5 ,1]];



var total_gold_profit=0;

window.MakeProfit = function(){
	console.log("starting calcuating");
	console.log(matrix);

	for(let i=4;i>=0;i--){
		for(let j=5;j>=0;j--){
			if(j==5){
				matrix[i][j]=Math.max(matrix[i+1][j],matrix[i+1][j-1]);
			}else if(j==0){
				matrix[i][j]=Math.max(matrix[i+1][j],matrix[i+1][j+1]);
			}else{
				matrix[i][j]=Math.max(matrix[i+1][j],Math.max(matrix[i+1][j-1],matrix[i+1][j+1]));
			}
		}
	}

	console.log(matrix);

}


window.collectGold = function(){

	var myArr = document.querySelectorAll('input[name^="field"]')
	console.log("Gold Collected",myArr.length);

	let count=0;
	for(let curent=0;curent<myArr.length;curent++){

		let i=Math.floor(curent/6);
		let j=Math.floor(curent%6);
		matrix[i][j]=myArr[curent].value;
	}
	console.log(matrix);
	console.log("Data received");
}


console.log("finitial setup done");
(function setup(){

	console.log("Inside setup() ");

}());