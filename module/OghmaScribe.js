// ./module/OghmaScrible.js
import { openEntry } from './makejournalentry.js';
import { isFolderExist, createFolder, getFolderIdByNameType } from './folder.js';

Hooks.once('init', () =>{

    console.log('OghmaScribe | Hello from OghmaScribe.js');

    

});

Hooks.on('getSceneControlButtons', (controls) => {
    controls.push({
        name: "OghmaScribe",
        title: "Oghma Scribe",
        icon: "fas fa-book",
        layer: "controls",
        tools: [
            {
                name: "openJournal",
                title: "Open Oghma Journal",
                icon: "fas fa-pen-fancy",
                onClick: () => {
                    openEntry();  // Ensure this function is correctly imported and available
                },
                toggle: false
            }
        ]
    });
});

Hooks.once('ready', () => {
    console.log('OghmaScribe | Checking journal folder graph');

    // Helper function to check and create folders
    const checkAndCreateFolder = (folderName, folderType, parentId) => {
        if (!isFolderExist(folderName, folderType, parentId)) {
            console.log(`OghmaScribe | Creating folder: ${folderName}`);
            try {
                createFolder(folderName, folderType, parentId);
            } catch (error) {
                console.error(`OghmaScribe | Error creating folder ${folderName}:`, error);
            }
        } else {
            console.log(`OghmaScribe | Folder ${folderName} already exists.`);
        }
    };

    // Check for top-level folder and create if necessary
    if (!isFolderExist("Journal", "JournalEntry")) {
        console.log("OghmaScribe | Creating top-level Journal folder");
        try {
            createFolder("Journal", "JournalEntry", null);
        } catch (error) {
            console.error("OghmaScribe | Error creating top-level Journal folder:", error);
        }
    } else {
        console.log("OghmaScribe | Top-level Journal folder already exists.");
    }

    // Get the ID of the Journal folder
    const parentId = getFolderIdByNameType("Journal", "JournalEntry");
    
    if (parentId !== undefined) {
        // Check and create subfolders
        checkAndCreateFolder("Entry", "JournalEntry", null);
        checkAndCreateFolder("Items", "JournalEntry", null);
        checkAndCreateFolder("Lieux", "JournalEntry", null);
        checkAndCreateFolder("Personnages", "JournalEntry", null);
    } else {
        console.error("OghmaScribe | Unable to find Journal folder ID.");
    }

    // Additional logic after initialization
});


  