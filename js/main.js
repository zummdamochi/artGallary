'use strict';

{
  const img1 = document.getElementById('img1');
  const img2 = document.getElementById('img2');
  const img3 = document.getElementById('img3');
  const image1 = document.querySelector('.image1');
  const image2 = document.querySelector('.image2');
  const image3 = document.querySelector('.image3');

  const overlay = document.querySelector('.overlay');
  const close1 = document.getElementById('close1');
  const close2 = document.getElementById('close2');
  const close3 = document.getElementById('close3');
  
  img1.addEventListener('click', () => {
    image1.classList.add('show');
    overlay.classList.add('show');
    close1.classList.add('show');
  });
  
  img2.addEventListener('click', () => {
    image2.classList.add('show');
    overlay.classList.add('show');
    close2.classList.add('show');
  });
  
  img3.addEventListener('click', () => {
    image3.classList.add('show');
    overlay.classList.add('show');
    close3.classList.add('show');
  });

  close1.addEventListener('click', () => {
    image1.classList.remove('show');
    overlay.classList.remove('show');
    close1.classList.remove('show');
  })

  close2.addEventListener('click', () => {
    image2.classList.remove('show');
    overlay.classList.remove('show');
    close2.classList.remove('show');
  })

  close3.addEventListener('click', () => {
    image3.classList.remove('show');
    overlay.classList.remove('show');
    close3.classList.remove('show');
  })

}