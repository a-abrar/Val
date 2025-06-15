document.getElementById("noBtn").addEventListener("click", function() {
    var bodyWidth = document.body.clientWidth;
    var bodyHeight = document.body.clientHeight;
    var buttonWidth = document.getElementById("noBtn").offsetWidth;
    var buttonHeight = document.getElementById("noBtn").offsetHeight;
    
    var randomX = Math.random() * (bodyWidth - buttonWidth);
    var randomY = Math.random() * (bodyHeight - buttonHeight);
  
    document.getElementById("noBtn").style.position = "absolute";
    document.getElementById("noBtn").style.left = randomX + "px";
    document.getElementById("noBtn").style.top = randomY + "px";
  });
  
  
  document.getElementById("yesBtn").addEventListener("click", function() {
    window.location.href = "pyaari.html";
  });
  