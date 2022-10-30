//comment
// let x = 12;

// console.log(typeof x);
// document.write("Hello "+x);
let ss = "asasasa";

let a =[[1,2],
[4,5]];

for(let i = 0; i < a.length ;i++){

for(let j =0; j<a[0].length; j++){
    process.stdout.write("hello: ");

}
console.log("\n");
}


for(let i = 0; i< ss.length;i++){

console.log(ss[i]);

}


console.log(ss.split("a"));

let person = {
name : 'anik',
id : '11'
};
console.log(person.name);

let arr = [1,1,0,3,3,4,54];
arr.sort();
console.log(arr);

let h = window.prompt();
great(h);

function great (name){

document.write("Hello "+name+" ");


}

//add with func

let x = window.prompt();
let y = window.prompt();
//document.write(typeof x)
let ans  = add(+x,+y); // casting string to int

// casting
//String(x)
//Number(x)

document.write(ans);

function add (x,y){


return (x+y);

}

