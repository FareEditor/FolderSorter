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
The easiest way to install the plugin is using the official **aescripts + aeplugins ZXP/UXP Installer**. 

1. Download the latest `FolderSorter.zxp` from the [Releases](https://github.com/FareEditor/FolderSorter/releases/latest) section.
2. Download and install the free [aescripts ZXP/UXP Installer](https://aescripts.com/learn/post/zxp-installer).
3. Drag and drop the `FolderSorter.zxp` file into the installer window.
4. Click **Install** (if prompted with a "Direct Installation" warning due to no Creative Cloud desktop session, just click **Install Anyway**).
5. Open Premiere Pro or After Effects and find the plugin under:  
   `Window` -> `Extensions` -> `Folder Sorter`

# License:
The current license is described in the [license file](https://github.com/FareEditor/adobe-folder-sorter/blob/main/LICENSE)
