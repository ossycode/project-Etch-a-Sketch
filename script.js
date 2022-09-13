
let clear = document.querySelector("button");
let container = document.querySelector(".container"); // move container out here so can use everywhere

clear.addEventListener('click', ()=>{ // we only want to add this listener once
    resetSize()
})


function resetSize(){
        
        let number = prompt("What size would you like the grid to be? (1-100)");
        container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
        createGrid(number); // call the createGrid function here and pass the number they entered as the argument. 
}
        
        
//function to create a 16x16 grid
function createGrid(size){
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size*size; i++) {
        
        let square = document.createElement("div");
        // square.style.backgroundColor = "black";
        container.appendChild(square);

        //change background color of a square on hover
        square.addEventListener('mouseover', e =>{
            square.style.backgroundColor = "green";
        })


        //function to reset the grid
        function clearGrid(){
            clear.addEventListener('click', e=>{
                square.style.backgroundColor = "white "
           })
        }
        

        clearGrid();    
    }
}

createGrid(16);




// const container = document.querySelector('#container')

// const input = document.querySelector('.button')
// // const div = document.querySelector('div')
// input.addEventListener('click', () => {
//   input_numb =  prompt('Select number of squres you want to sketch: ')

// })

// //Creating 16 divs
// for (let i = 1; i < 257; i++){
//     const div = document.createElement('div')
//     div.classList.add('.mains')
//     div.style.cssText = "border: 1px solid gray; height: 25px; width: 25px;";
//     container.appendChild(div)

//     div.addEventListener('mouseover', function() {
//         div.style.cssText = "background-color: brown"  
//     });
// }


