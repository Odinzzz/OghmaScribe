export function isFolderExist(name, type, parent = null) {
    let folders = game.folders;

    if (folders) {
        for (let folder of folders) {
            if (folder.name === name && folder.type === type && folder.parent === parent) {
                console.log(`OghmaScribe | folder ${name} found`);
                return true;
            }
        }
    }

    console.log(`OghmaScribe | folder ${name} not found`);
    return false;
}



export async function createFolder(name, type="JournalEntry", parent = null) {
    // Check if folder already exists
    if (isFolderExist(name, type, parent)) {
        console.log(`OghmaScribe | Folder '${name}' of type '${type}' already exists.`);
        return;
    }

    // Create the folder
    try {
        await Folder.create({
            name: name,
            type: type,
            parent: parent, // You can specify a parent folder ID if needed
            permission: { default: 0 } // You can adjust permissions as needed
        });

        console.log(`OghmaScribe | Folder '${name}' of type '${type}' has been created.`);
    } catch (error) {
        console.error(`OghmaScribe | Failed to create folder: ${error.message}`);
    }
}


export function getFolderIdByNameType(name, type="JournalEntry") {
    let folders = game.folders;

    if (folders) {
        for (let folder of folders) {
            if (folder.name === name && folder.type === type) {
                return folder.id;
            }
        }
    }

    return undefined;
}

