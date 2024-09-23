for (let i = 0; i < 250; i++) {
  const blob = document.createElement("div");
  blob.className = "blob";
  blob.style.left = `${Math.random() * 100}vw`;
  blob.style.top = `${Math.random() * 100}vh`;

  setInterval(() => {
    blob.style.left = `${Math.random() * 100}vw`;
    blob.style.top = `${Math.random() * 100}vh`;

    document.body.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
  }, 1000);
  
  document.body.appendChild(blob);
}