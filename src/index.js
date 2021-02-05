import onLoad from "./onLoad";
import slideshow from "./components/slideshow";

let images = [
  "https://cdn.vox-cdn.com/thumbor/e4KRzS--UsuixA2G8TOCwJ-O024=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/6839749/pokemon.0.png",
  "https://cdn.images.express.co.uk/img/dynamic/143/590x/Pokemon-Sword-and-Shield-celebration-1230942.jpg?r=1579540256528",
  "https://assets.pokemon.com/assets/cms2/img/video-games/_tiles/pokemon-sword-shield/distributions/pikachu/pikachu-08-169.jpg",
  "https://o.aolcdn.com/images/dims?quality=95&image_uri=https%3A%2F%2Fs.yimg.com%2Fuu%2Fapi%2Fres%2F1.2%2Ft_lP6tcQ0CJbJTeV8mrV2g--%7EB%2FaD00OTA7dz05ODA7YXBwaWQ9eXRhY2h5b24-%2Fhttps%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F6623d5a6ae583f81ee3515b6b3615c7f%2F204855766%2Flandscape-1456483171-pokemon2.jpg&client=amp-blogside-v2&signature=174e15e69478ef59a7371b8f5adf5727a4c321e6",
];

onLoad();
slideshow(images);
