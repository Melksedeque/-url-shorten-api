function copyText() {
    const item = document.querySelector('ul.links-list li span');
  
    item.select();
    item.setSelectionRange(0, 99999);
  
    navigator.clipboard.writeText(item.innerText);
  
    console.log("Texto copiado: " + item.innerText);
} 

