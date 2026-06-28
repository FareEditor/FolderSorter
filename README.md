# Folder Sorter for Adobe After Effects and Premiere Pro

This plugin sorts all files in Adobe After Effects and Premiere Pro projects into categories based on their extensions in the Project window.

# ⚠️ Warning
This plugin was written using vibe coding with Google's neural network "Gemini" and Anthropic's neural network "Claude." It was tested in real-world conditions, but I can't guarantee 100% stability.

# Settings

The plugin includes a settings window that lets you customize sorting rules without touching the source code. Open it via **Window → Extensions → Folder Sorter — Settings**.

**What you can configure:**
- Folder names for each category
- File extensions assigned to each folder
- Sub-folders with their own independent extension rules (sub-folder rules take priority over the parent folder)
- Template plugin source names — root-level folders that get merged into Templates on sort
- The name of the Templates folder itself

The Templates entry cannot be deleted, only renamed. All other category folders can be added, edited, or removed freely.

Changes are applied after clicking **Save**. Clicking **Cancel** discards all edits.

# Default folder structure categories

**Categories in Premiere Pro**
- Images
- Video
- Audio
- Data
- Dynamic Link
- Generic Layers
- Templates

**Categories in After Effects**
- Images
- Video Files
- Vector Files
- Audio Files
- 3D Models
- Dynamic Link
- Templates

# Installing:
- Download the source code in zip format
- Move the "com.fareeditor.foldersorter" folder to the "C:\Program Files (x86)\Common Files\Adobe\CEP\extensions" directory
- Enable csxs test mode via reg file
- Open the plugin window in the program by following the path "Window - Extensions - Folder Sorter"

# License:
The current license is described in the [license file](https://github.com/FareEditor/adobe-folder-sorter/blob/main/LICENSE)
