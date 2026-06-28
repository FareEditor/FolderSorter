(function () {
    'use strict';

    var path = require('path');
    var os = require('os');
    var fs = require('fs');

    function getSettingsPath() {
        var homeDir = os.homedir();
        var appDataDir;

        if (process.platform === 'win32') {
            appDataDir = path.join(homeDir, 'AppData', 'Roaming', 'FolderSorter');
        } else if (process.platform === 'darwin') {
            appDataDir = path.join(homeDir, 'Library', 'Application Support', 'FolderSorter');
        } else {
            appDataDir = path.join(homeDir, '.config', 'foldersorter');
        }

        if (!fs.existsSync(appDataDir)) {
            try {
                fs.mkdirSync(appDataDir, { recursive: true });
            } catch (e) {
                console.error("Folder Sorter: Failed to create config directory", e);
            }
        }

        return path.join(appDataDir, 'settings.json');
    }

    window.getFolderSorterSettingsPath = getSettingsPath;
}());