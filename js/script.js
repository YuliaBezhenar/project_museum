const btn = document.getElementById('controller-btn');
const dropdown = document.getElementById('controller-dropdown');

btn.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdown.classList.toggle('show');
  btn.classList.toggle('active');
});

document.addEventListener('click', () => {
  dropdown.classList.remove('show');
  btn.classList.remove('active');
});

// тут поки що заглушка
/*
dropdown.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', () => {
    console.log(item.textContent);
  });
});*/

dropdown.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', () => {
    console.log(item.textContent);
    
    const type = item.dataset.type;

    document.body.classList.remove("cursor-mode", "joystick-mode");
    document.body.classList.add(type + "-mode");

    dropdown.classList.remove("show");
    btn.classList.remove("active");
  });
});
