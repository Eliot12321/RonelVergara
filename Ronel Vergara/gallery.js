let magicGrid = new MagicGrid({
    container: '.container',
    animate: false,
    gutter: 10,
    static: true,
    useMin: true
  });
  
  magicGrid.listen();
  
  
 
  var modal = document.getElementById("myModal");
  var imageBox = document.getElementById("img01");


    for (var i = 0; i < 8; i++)
    {
        let img = document.getElementById("item" + (i + 1).toString());
        img.onclick = function()
        {
            modal.style.display = "block";

            
            var _url =  getComputedStyle(img).getPropertyValue('background-image');

            
            imageBox.src = _url.match(/url\(["']?([^"']*)["']?\)/)[1];
        }
    }
  

  var span = document.getElementsByClassName("close")[0];
  
  
  span.onclick = function() { modal.style.display = "none"; }