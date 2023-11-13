function myImg() {
    let elem = document.getElementById('FastAPI'); 
    let style = getComputedStyle(elem); 
    if (style.display === 'none') {
      document.getElementById('FastAPI').style.display='block';
      } else if (style.display !== 'none') {
      document.getElementById('FastAPI').style.display='none';
    }
  }