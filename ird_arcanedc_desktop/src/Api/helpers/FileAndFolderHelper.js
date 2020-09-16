const fs = require('fs');


//Check Wether the Application Folder Structure exist in the OS dependent APP data Directory
//If Not Initialize it 
function initializeAppFolderStructure() {
    
    if(isInitialized() !== true )
    {

    }
    else
    {

    }

}

function isInitialized(){


}

function readFolderStructure() {
    
}

function addDirectory(directoryName) {
    
}

function removeDirectory(directoryName) {
    
}

function createFile(file, relativePath)
{

}

function deleteFile(file, relativePath)
{

}

module.exports = {
    initializeAppFolderStructure,
    isInitialized,
    readFolderStructure,
    addDirectory, 
    removeDirectory, 
    createFile, 
    deleteFile
}