(function () {
    'use strict';
    
    var csInterface = new CSInterface();
    
    var LINKS = {
        source: "https://github.com/Fare7731/adobe-folder-sorter"
    };

    var IS_DEBUG = true; 

    var sortBtn = document.getElementById('sortBtn');
    var codeBtn = document.getElementById('codeBtn');

    function setSystemStatus(text, type) {
        sortBtn.setAttribute('title', text);
        
        sortBtn.classList.remove("status-process", "status-success", "status-error");
        
        if (type === "process") sortBtn.classList.add("status-process");
        else if (type === "success") sortBin.classList.add("status-success"); // Фикс опечатки sortBin -> sortBtn ниже
        else if (type === "error") sortBtn.classList.add("status-error");
    }

    function setSystemStatusFixed(text, type) {
        sortBtn.setAttribute('title', text);
        sortBtn.classList.remove("status-process", "status-success", "status-error");
        if (type === "process") sortBtn.classList.add("status-process");
        else if (type === "success") sortBtn.classList.add("status-success");
        else if (type === "error") sortBtn.classList.add("status-error");
    }

    sortBtn.addEventListener('click', function () {
        setSystemStatusFixed("Processing...", "process");
        
        csInterface.evalScript('runSorter()', function(result) {
            if (IS_DEBUG) console.log("[UI] Result:", result);
            
            if (!result) {
                setSystemStatusFixed("Unknown Error", "error");
                return;
            }

            if (result.indexOf("CRASH") !== -1 || result.indexOf("ERROR") !== -1) {
                setSystemStatusFixed(result, "error");
            }
            else if (result.indexOf("No files") !== -1 || result.indexOf("Nothing") !== -1) {
                setSystemStatusFixed("No files to sort", "error");
            }
            else {
                setSystemStatusFixed(result, "success");
            }

            setTimeout(function() {
                setSystemStatusFixed("Sort Files & Templates", "ready");
            }, 4000);
        });
    });

    codeBtn.addEventListener('click', function() {
        csInterface.openURLInDefaultBrowser(LINKS.source);
    });
    
}());