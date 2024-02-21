const prompt = require("prompt-sync")();

// Initialize an array of objects
const cats = [
    { id: 1, name: 'Momo', breed: 'Persian', age: 3, color: 'black' },
    { id: 2, name: 'Kiki', breed: 'Angora', age: 2, color: 'white' },
    { id: 3, name: 'Coco', breed: 'Maine Coon', age: 5, color: 'gray' },
    { id: 4, name: 'Simba', breed: 'Mixdom', age: 4, color: 'brown' },
    { id: 5, name: 'Oreo', breed: 'Domestic', age: 2, color: 'black-and-white' }
];

// Function to display all cats
function displayCats() {
    console.log("List of Cats:");
    cats.forEach(cat => {
        console.log(`ID: ${cat.id}, Name: ${cat.name}, Breed: ${cat.breed}, Age: ${cat.age}, Color: ${cat.color}`);
    });
}

// Function to add a new cat
function addCat(name, breed, age, color) {
    const id = cats.length > 0 ? cats[cats.length - 1].id + 1 : 1;
    cats.push({ id, name, breed, age, color });
    console.log("Added successfully!");
    displayCats();
}

// Function to update a cat
function updateCat(id, newName, newBreed, newAge, newColor) {
    let cat = cats.find(cat => cat.id === id);
    if (cat) {
        if (newName) cat.name = newName;
        if (newBreed) cat.breed = newBreed;
        if (newAge) cat.age = newAge;
        if (newColor) cat.color = newColor;
        console.log("Updated successfully!");
        displayCats();
    } else {
        console.log("Cat not found!");
    }
}

// Function to delete a cat
function deleteCat(id) {
    let index = cats.findIndex(cat => cat.id === id);
    if (index !== -1) {
        cats.splice(index, 1);
        console.log("Deleted successfully!");
        displayCats();
    } else {
        console.log("Cat not found!");
    }
}

// Function to handle user input
function handleUserInput() {
    console.log("_______________Manipulate the data________________")
    const manipulation = prompt("Select manipulation (add/update/delete/display):").toLowerCase();
    switch (manipulation) {
        case 'add':
            const name = prompt("Input cat name:");
            const breed = prompt("Input cat breed:");
            const age = parseInt(prompt("Input cat age:"));
            const color = prompt("Input cat color:");
            addCat(name, breed, age, color);
            break;
        case 'update':
            const idToUpdate = parseInt(prompt("Input cat ID to update:"));
            const updateOption = prompt("Select update (name/breed/age/color/all):").toLowerCase();
            switch (updateOption) {
                case 'name':
                    const newName = prompt("Input new name:");
                    updateCat(idToUpdate, newName);
                    break;
                case 'breed':
                    const newBreed = prompt("Enter new breed:");
                    updateCat(idToUpdate, undefined, newBreed);
                    break;
                case 'age':
                    const newAge = parseInt(prompt("Enter new age:"));
                    updateCat(idToUpdate, undefined, undefined, newAge);
                    break;
                case 'color':
                    const newColor = prompt("Enter new color:");
                    updateCat(idToUpdate, undefined, undefined, undefined, newColor);
                    break;
                case 'all':
                    const newNameCat = prompt("Enter new name:");
                    const newBreedCat = prompt("Enter new breed:");
                    const newAgeCat = parseInt(prompt("Enter new age:"));
                    const newColorCat = prompt("Enter new color:");
                    updateCat(idToUpdate, newNameCat, newBreedCat, newAgeCat, newColorCat);
                    break;
                default:
                    console.log("Invalid update option!");
            }
            break;
        case 'delete':
            let idToDelete = parseInt(prompt("Enter cat ID to delete:"));
            deleteCat(idToDelete);
            break;
        case 'display':
            displayCats();
            break;
        default:
            console.log("Invalid operation!");
    }
}

// Call the function to handle user input
handleUserInput();
