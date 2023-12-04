function bold() {
    document.execCommand('bold',true,null)
}
function underline() {
    document.execCommand('underline',true,null)
}
function italic() {
    document.execCommand('italic',true,null)
}
document.querySelectorAll('.fontColor').forEach(function(element) {
    element.addEventListener('click', function() {
        var selection = window.getSelection();
        var highlightedText = selection.toString();
        var span = document.createElement('span');
        span.style.color = 'red'; // Set color to red (can be any color)

        // Set the color to the highlighted text
        span.appendChild(document.createTextNode(highlightedText));

        var editor = document.getElementById('editor');
        var content = editor.innerHTML;

        // Replace the highlighted text with the styled span
        editor.innerHTML = content.replace(highlightedText, span.outerHTML)
    })
})
document.querySelectorAll('.alignLeft').forEach(function(element) {
    element.addEventListener('click', function() {
        document.getElementById('editor').style.textAlign = 'left'
    })
})
document.querySelectorAll('.alignRight').forEach(function(element) {
    element.addEventListener('click', function() {
        document.getElementById('editor').style.textAlign = 'right'
    })
})