const img = document.getElementById("frame") as HTMLImageElement;
const stats = document.getElementById("stats") as HTMLParagraphElement;

function loadImage() {
  img.src = ""C:\Users\MOUNIKA KANULLA.LAPTOP-RPCA3R32\Desktop\dp.jpg""; // use your saved processed image
  stats.innerText = "Resolution: 640x480 | Filter: Canny Edge Detection";
}

window.onload = loadImage;
