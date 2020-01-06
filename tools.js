function encode (inID, outID) {
    var inElm = document.getElementById(inID)
    var outElm = document.getElementById(outID);
    outElm.value = encodeURIComponent(inElm.value)
}
function decode (inID, outID) {
    var inElm = document.getElementById(inID)
    var outElm = document.getElementById(outID);
    outElm.value = decodeURIComponent(inElm.value)
}
function copy (elmID) {
    textarea = document.createElement('textarea')
    textarea.textContent =  document.getElementById(elmID).value;
    textarea.style.position = "fixed";
    document.body.appendChild(textarea);
    textarea.select();
    try {
        return document.execCommand("copy");
    }
    catch (ex) {
        console.warn("Copy to clipboard failed.", ex);
        return false;
    }
    finally {
        document.body.removeChild(textarea);
    }
}
 x = document.getElementById("btn encode")
