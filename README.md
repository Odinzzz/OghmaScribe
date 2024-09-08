# Oghma Scribe

**Oghma Scribe** is a module for Foundry Virtual Tabletop that enhances journaling capabilities, inspired by Oghma, the god of knowledge.

## Description

This module adds a custom journal entry tool to Foundry VTT, allowing users to create and manage journal entries more effectively. It includes automatic folder creation and provides an interface to generate journal entries for targeted actors.

## Features

- Adds a new tool to the Foundry VTT control panel.
- Automatically creates and manages journal folders.
- Creates journal entries with customizable content for targeted actors.
- Provides a dialog to input aliases for actors.

## Installation

1. **Download the Module:**
   - Download the latest version from the [GitHub repository](https://github.com/Odinzzz/OghmaScribe/archive/refs/heads/main.zip).

2. **Upload to Foundry:**
   - Go to your Foundry VTT instance.
   - Navigate to the "Add-on Modules" section.
   - Click on "Install Module" and upload the downloaded ZIP file.

3. **Activate the Module:**
   - Once installed, go to the "Manage Modules" section.
   - Find **Oghma Scribe** in the list and activate it.

## Usage

1. **Open the Tool:**
   - Find the **Oghma Scribe** tool in the Foundry VTT control panel.
   - Click on the "Open Oghma Journal" button to initiate the tool.

2. **Create Journal Entries:**
   - Target an actor in your scene.
   - Click the tool button to create a journal entry for the targeted actor.
   - Follow the dialog to enter an alias for the actor if needed.

3. **View Journal Entries:**
   - After creating an entry, it will automatically open for viewing.

## Configuration

The module settings can be customized through the `flags` object in your module configuration. 

### Example Configuration

```json
"flags": {
    "OghmaScribe": {
        "someSetting": true
    }
}
```

## Files

- `scripts/hello.js`: Initializes the module and logs a message.
- `module/OghmaScribe.js`: Main module script that handles folder creation and toolbar integration.
- `module/makejournalentry.js`: Handles journal entry creation and alias prompts.
- `module/folder.js`: Contains helper functions for folder management.
- `styles/OghmaScribe.css`: Custom styles for the module.

## Documentation

For more details on the module's internals and API, please refer to the source code and comments within the module files.

## Changelog

See the [CHANGELOG.md](https://github.com/Odinzzz/OghmaScribe/blob/main/CHANGELOG.md) for updates and version history.

## License

This module is licensed under the [LICENSE](https://github.com/Odinzzz/OghmaScribe/blob/main/LICENSE).

## Support

For bug reports or feature requests, please visit the [GitHub Issues page](https://github.com/Odinzzz/OghmaScribe/issues).

---

Feel free to modify this template according to your needs or add any additional sections that you find necessary.
