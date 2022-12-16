function addingEventListener() {
    const input = document.getElementById('message');
    input.addEventListener('click', function() {
      alert('I was clicked!');
    }); 
}

addingEventListener();
