(function () {

  function applyPlaceholders() {
    // מחפשים רק בתוך step-content כדי לא לשבור דברים אחרים
    var containers = document.querySelectorAll('.step-content');

    containers.forEach(function (container) {

      var labels = container.querySelectorAll('label');

      labels.forEach(function (label) {
        var text = label.textContent.trim();
        if (!text) return;

        // מחפשים input / textarea / select ליד ה-label
        var field =
          label.nextElementSibling ||
          label.parentElement.querySelector('input, textarea, select');

        if (!field) return;

        // אם כבר יש placeholder – לא נוגעים
        if (field.getAttribute('placeholder')) return;

        // מזריקים placeholder
        field.setAttribute('placeholder', text);
      });

    });
  }

  // מריצים אחרי טעינה
  document.addEventListener('DOMContentLoaded', applyPlaceholders);

  // וגם אחרי מעבר STEP (Angular / SPA)
  setTimeout(applyPlaceholders, 500);
  setTimeout(applyPlaceholders, 1500);

})();
