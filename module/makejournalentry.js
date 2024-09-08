// makejournalentry.js


import { getFolderIdByNameType } from "./folder.js";




async function is_journal_entry(name) {
    return game.journal.getName(name) !== undefined;
}

function get_target_name() {
    const targets = game.user.targets;

    if (targets.size === 0) {
        ui.notifications.warn("No actor targeted.");
        return undefined;
    } else if (targets.size > 1) {
        ui.notifications.warn("Too many actors.");
        return undefined;
    } else {
        let target = targets.values().next().value;
        return target.actor;
    }
}

async function create_journal_entry(actor, alias) {

    const folderid = getFolderIdByNameType("Personnages");

    await JournalEntry.create({
        name: actor.name,
        content: `<img width="650" src="${actor.img}"></img>
        

        <hr>
        <h3><strong>Important ne pas modifier cette section</strong></h3>
        <hr>

        <p>Journal Reff: @JournalEntry[${actor.name}]{${alias}}</p>
        
        <p>Character Sheet: @Actor[${actor.name}]{${alias}}</p>`,
        folder: folderid,
        permission: {
            default: 0
        }
    });

    ui.notifications.warn(`Created a journal entry for ${actor.name}`);
}

function ask_for_alias(actor) {
    return new Promise((resolve) => {
        new Dialog({
            title: `Alias for ${actor.name}`,
            content: `
                <form>
                
                <input type="text" autofocus name="alias" placeholder="Enter alias">
                
                </form>
            `,
            buttons: {
                ok: {
                    label: "Submit",
                    callback: (html) => {
                        let alias = html.find("[name='alias']").val();
                        ui.notifications.info(`Alias set to ${alias}`);
                        resolve(alias);
                    }
                },
                cancel: {
                    label: "Cancel",
                    callback: () => {
                        resolve(null);
                    }
                }
            },
            default: "ok"
        }).render(true);
    });
}

export async function openEntry() {
    let actor = get_target_name();

    if (actor === undefined) {
        ui.notifications.warn("Cannot proceed.");
        return;
    }

    ui.notifications.info(`Actor name is: ${actor.name}`);

    if (await is_journal_entry(actor.name)) {
        ui.notifications.warn(`${actor.name} already has a journal entry.`);
    } else {
        ui.notifications.info(`${actor.name} does not have a journal entry.`);

        // Wait for the user to provide an alias
        let alias = await ask_for_alias(actor);

        // If the alias is provided, create the journal entry
        if (alias) {
            await create_journal_entry(actor, alias);
        } else {
            ui.notifications.warn("Alias input canceled.");
            return;
        }
    }

    // Open the journal entry after it's confirmed to exist
    let journalEntry = game.journal.getName(actor.name);
    if (journalEntry) {
        journalEntry.sheet.render(true);
    }
}

