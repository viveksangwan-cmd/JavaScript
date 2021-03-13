const canvas=document.getElementById('canvas');
const ctx=canvas.getContext("2d");

console.log("Complete 1");



const matrix=[[3 ,0 ,6 ,5 ,0 ,8 ,4 ,0 ,0],
[5 ,2 ,0 ,0 ,0 ,0 ,0 ,0 ,0],
[0 ,8 ,7 ,0 ,0 ,0 ,0 ,3 ,1],
[0 ,0 ,3 ,0 ,1 ,0 ,0 ,8 ,0],
[9 ,0 ,0 ,8 ,6 ,3 ,0 ,0 ,5],
[0 ,5 ,0 ,0 ,9 ,0 ,6 ,0 ,0],
[1 ,3 ,0 ,0 ,0 ,0 ,2 ,5 ,0],
[0 ,0 ,0 ,0 ,0 ,0 ,0 ,7 ,4],
[0 ,0 ,5 ,2 ,0 ,6 ,3 ,0 ,0]]

console.log(matrix)

const scale=60;
const rows=canvas.width/scale;
const colms=canvas.height/scale;

var sd;


(function setup(){

  sd=new Sudoku();
  console.log("Complete 1");
  sd.draw(matrix);
  console.log("Complete2");

}());
