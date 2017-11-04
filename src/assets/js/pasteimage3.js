/**
 * Adds a paste event handler to a contentEditable node
 * and calls the passed callback with an object that has
 * html and/or text properties along with any other mime
 * types that were pasted.
 *
 * @author Sam Clarke <samclarke.com>
 * @license MIT
 */
function detectPaste(editable, callback) {
  var IMAGE_MIME_REGEX = /^image\/(p?jpe?g|gif|png|bmp)$/i;
  var isIE = !!document.documentMode;
  var isEdge = '-ms-ime-align' in document.documentElement.style;
  var prePasteContent;

  function loadImage(file) {
    var reader = new FileReader();
    reader.onload = function (e) {
      callback({ html: '<img src="' + e.target.result + '" />' });
    };
    reader.readAsDataURL(file);
  };

  editable.addEventListener('paste', function (e) {
    var clipboard = e.clipboardData;

    // Modern browsers with clipboard API - everything other than
    // _very_ old android web views and UC browser which doesn't
    // support the paste event at all.
    // Need to also ignore IE as only has text and URL support
    if (clipboard && !(isIE || isEdge)) {
      var data = {};
      var types = clipboard.types;
      var items = clipboard.items;

      e.preventDefault();

      for (var i = 0; i < types.length; i++) {
        // Normalise image pasting to paste as a data-uri
        if (window.FileReader && items &&
          IMAGE_MIME_REGEX.test(items[i].type)) {
          return loadImage(clipboard.items[i].getAsFile());
        }

        data[types[i]] = clipboard.getData(types[i]);
      }

      data.text = data['text/plain'];
      data.html = data['text/html'];

      callback(data);
    // If fragment exists then we're already waiting for a
    // previous paste so let that handler for that handle this one
    } else if (!prePasteContent) {
      // Save the scroll position so can restore it with contents
      var scrollTop = editable.scrollTop;

      prePasteContent = document.createDocumentFragment();
      while (editable.firstChild) {
        prePasteContent.appendChild(editable.firstChild);
      }

      setTimeout(function () {
        var html = editable.innerHTML;

        editable.innerHTML = '';
        editable.appendChild(prePasteContent);
        editable.scrollTop = scrollTop;
        prePasteContent = false;

        callback({ html: html });
      }, 0);
    }
  });
}