(function () {
    'use strict';

    var csInterface = new CSInterface();
    var sortBtn     = document.getElementById('sortBtn');

    function setSystemStatus(text, type) {
        sortBtn.setAttribute('title', text);
        sortBtn.classList.remove("status-process", "status-success", "status-error");
        if (type === "process") sortBtn.classList.add("status-process");
        else if (type === "success") sortBtn.classList.add("status-success");
        else if (type === "error") sortBtn.classList.add("status-error");
    }

    sortBtn.addEventListener('click', function () {
        setSystemStatus("Processing...", "process");

        var settingsPath = window.getFolderSorterSettingsPath ? window.getFolderSorterSettingsPath() : null;
        var fsResult = settingsPath ? window.cep.fs.readFile(settingsPath, 'UTF-8') : null;
        
        var settingsArg = (fsResult && fsResult.err === 0 && fsResult.data)
            ? JSON.stringify(fsResult.data)
            : 'null';

        csInterface.evalScript('runSorter(' + settingsArg + ')', function(result) {
            if (!result) {
                setSystemStatus("Unknown Error", "error");
                return;
            }

            if (result.indexOf("CRASH") !== -1 || result.indexOf("ERROR") !== -1) {
                setSystemStatus(result, "error");
            } else if (result.indexOf("No files") !== -1 || result.indexOf("Nothing") !== -1) {
                setSystemStatus("No files to sort", "error");
            } else {
                setSystemStatus(result, "success");
            }

            setTimeout(function() {
                setSystemStatus("Sort Files & Templates", null);
            }, 4000);
        });
    });

}());