var isChrome =
  /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome) {
  $("#iframeAudio").remove(); //Work-around sÃ¥ jeg kan tvinge Chrome til at spille musik mod brugerens vilje
}