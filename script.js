function filter(){
  const value = document.getElementById('search').value.toLowerCase();
  const items = document.querySelectorAll('#list li');

  items.forEach(item=>{
    item.style.display =
      item.innerText.toLowerCase().includes(value)
      ? 'block' : 'none';
  });
}
