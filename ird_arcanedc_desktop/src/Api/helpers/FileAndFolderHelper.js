const fs = require('fs');
 
//Initialize App Data Folder with Structure 
function initializeAppFolderStructure(baseFolderName) {
    
    const appFolderName = baseFolderName + `/ArcaneDC`;

    if(isInitialized(appFolderName) !== true )
    {
        //console.log("Directory Doesnt Exist", appFolderName)
        fs.mkdirSync(appFolderName)
        fs.mkdirSync(appFolderName + '/Preferences')
        fs.mkdirSync(appFolderName + '/Users')
        fs.mkdirSync(appFolderName + '/Projects')
        fs.mkdirSync(appFolderName + '/ReasearchData')
        fs.mkdirSync(appFolderName + '/AppData')  
    }
    else
    {
        //console.log("Directory Exist")
    }

}



//Check Wether the Application Folder Structure exist in the OS dependent APP data Directory
function isInitialized(dir){
    
    if (fs.existsSync(dir)) {
        return true;
    } else {
        return false;
    }

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
    addDirectory, 
    removeDirectory, 
    createFile, 
    deleteFile,
}