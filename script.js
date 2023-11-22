//your JS code here. If required.
// Check if the document is already loaded
if (document.readyState === 'loading') {
  // Wait for the DOMContentLoaded event to fire
  document.addEventListener('DOMContentLoaded', () => {
    // Check if the body is empty
    if (document.body.childNodes.length === 0) {
      const element = document.createElement('p');
      element.textContent = 'DOM load success';
      document.body.appendChild(element);
    }
  });
} else {
  // If the document is already loaded, check if the body is empty
  if (document.body.childNodes.length === 0) {
    const element = document.createElement('p');
    element.textContent = 'DOM load success';
    document.body.appendChild(element);
  }
}
