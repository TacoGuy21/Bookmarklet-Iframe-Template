javascript:(function() {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('src', 'YOUR SITE HERE');
  iframe.style.position = 'fixed';
  iframe.style.top = '50%';
  iframe.style.left = '50%';
  iframe.style.transform = 'translate(-50%, -50%)';
  iframe.style.border = '2px solid purple';
  iframe.style.width = '80%';
  iframe.style.height = '80%';
  iframe.style.zIndex = '9999';

  var closeButton = document.createElement('button');
  closeButton.style.position = 'fixed';
  closeButton.style.top = '5px';
  closeButton.style.right = '5px';
  closeButton.style.fontSize = '20px';
  closeButton.style.color = 'white';
  closeButton.style.backgroundColor = 'purple';
  closeButton.style.border = 'none';
  closeButton.style.borderRadius = '50%';
  closeButton.style.width = '30px';
  closeButton.style.height = '30px';
  closeButton.style.cursor = 'pointer';
  closeButton.style.zIndex = '10000';

  closeButton.addEventListener('click', function() {
    iframe.remove();
    closeButton.remove();
  });

  document.body.appendChild(iframe);
  document.body.appendChild(closeButton);
})();
