function select(x) {
    var tabCount = 4;
    for (var i = 1; i <= tabCount; i++) {
        if (i != x) {
            document.getElementById("text" + i).className = "text";
            document.getElementById("link" + i).className = "";
        } else {
            document.getElementById("text" + i).className = "text currentText";
            document.getElementById("link" + i).className = "currentTab";
        }
    }
}