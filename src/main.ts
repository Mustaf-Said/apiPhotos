import "./style.css";
const urlPhotos = "https://picsum.photos/v2/list?page=1&limit=200";
const ul = document.querySelector("ul") as HTMLElement;

interface Photo {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

const getImages = async (): Promise<void> => {
  const response = await fetch(urlPhotos);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data: Photo[] = await response.json();
  data.forEach((photo) => {
    let img = document.createElement("img");
    img.src = photo.download_url;
    ul.appendChild(img);
  });
};

getImages().catch((error) => {
  console.error("Ett fel uppstod:", error);
});
