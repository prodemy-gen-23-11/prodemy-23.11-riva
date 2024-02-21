const prompt = require("prompt-sync")();

const smartphones = [
    { id: 1, brand: 'Samsung', model: 'Galaxy S21', storage: '128GB', color: 'Phantom Black' },
    { id: 2, brand: 'Apple', model: 'iPhone 13', storage: '256GB', color: 'Midnight' },
    { id: 3, brand: 'Google', model: 'Pixel 6', storage: '128GB', color: 'Stormy Black' },
    { id: 4, brand: 'OnePlus', model: '9 Pro', storage: '256GB', color: 'Morning Mist' },
    { id: 5, brand: 'Xiaomi', model: 'Mi 11', storage: '128GB', color: 'Ocean Blue' }
];

function displaySmartphones() {
    console.log(" ")
    console.log("-----------------------------------------------------------------------------")
    console.log("                                List of Smartphones:                         ");
    console.log("-----------------------------------------------------------------------------")
    smartphones.forEach(phone => {
        console.log(`ID: ${phone.id}, Brand: ${phone.brand}, Model: ${phone.model}, Storage: ${phone.storage}, Color: ${phone.color}`);
    });
    console.log("-----------------------------------------------------------------------------")
    console.log(" ")
}

function addSmartphone(brand, model, storage, color) {
    const id = smartphones.length > 0 ? smartphones[smartphones.length - 1].id + 1 : 1;
    smartphones.push({ id, brand, model, storage, color });
    console.log(" ")
    console.log("Added successfully!");
    console.log(" ")
    displaySmartphones();
}

function updateSmartphone(id, newBrand, newModel, newStorage, newColor) {
    let phone = smartphones.find(phone => phone.id === id);
    if (phone) {
        if (newBrand) phone.brand = newBrand;
        if (newModel) phone.model = newModel;
        if (newStorage) phone.storage = newStorage;
        if (newColor) phone.color = newColor;
        console.log(" ")
        console.log("Updated successfully!");
        console.log(" ")
        displaySmartphones();
    } else {
        console.log("Smartphone not found!");
    }
}

function deleteSmartphone(id) {
    let index = smartphones.findIndex(phone => phone.id === id);
    if (index !== -1) {
        smartphones.splice(index, 1);
        console.log("");
        console.log("Deleted successfully!");
        displaySmartphones();
    } else {
        console.log("Smartphone not found!");
    }
}

function handleUserInput() {
    console.log(" ")
    console.log("-----------------------------------------------------------------------------")
    console.log("                             Manipulate the data                             ")
    console.log(" ")
    const manipulation = prompt("Select manipulation (add/update/delete/display):").toLowerCase();
    switch (manipulation) {
        case 'add':
            const brand = prompt("Input smartphone brand:");
            const model = prompt("Input smartphone model:");
            const storage = prompt("Input smartphone storage:");
            const color = prompt("Input smartphone color:");
            addSmartphone(brand, model, storage, color);
            break;
        case 'update':
            displaySmartphones();
            const idToUpdate = parseInt(prompt("Input smartphone ID to update:"));
            const updateOption = prompt("Select update (brand/model/storage/color/all):").toLowerCase();
            switch (updateOption) {
                case 'brand':
                    const newBrand = prompt("Input new brand:");
                    updateSmartphone(idToUpdate, newBrand);
                    break;
                case 'model':
                    const newModel = prompt("Input new model:");
                    updateSmartphone(idToUpdate, undefined, newModel);
                    break;
                case 'storage':
                    const newStorage = prompt("Input new storage:");
                    updateSmartphone(idToUpdate, undefined, undefined, newStorage);
                    break;
                case 'color':
                    const newColor = prompt("Input new color:");
                    updateSmartphone(idToUpdate, undefined, undefined, undefined, newColor);
                    break;
                case 'all':
                    const newBrandPhone = prompt("Input new brand:");
                    const newModelPhone = prompt("Input new model:");
                    const newStoragePhone = prompt("Input new storage:");
                    const newColorPhone = prompt("Input new color:");
                    updateSmartphone(idToUpdate, newBrandPhone, newModelPhone, newStoragePhone, newColorPhone);
                    break;
                default:
                    console.log("Invalid update option!");
            }
            break;
        case 'delete':
            displaySmartphones();
            let idToDelete = parseInt(prompt("Enter smartphone ID to delete:"));
            deleteSmartphone(idToDelete);
            break;
        case 'display':
            displaySmartphones();
            break;
        default:
            console.log("Invalid operation!");
    }
}

handleUserInput();
