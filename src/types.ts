export interface Montre {
  bracelet?: string;
  boitier?: string;
  ecran?: string;
 
}
export const colors = {
  "#000000": "Noir",
  "#FFFFFF": "Blanc",
  "#FF0000": "Rouge",
  "#00FF00": "Vert",
  "#0000FF": "Bleu",
  "#FFFF00": "Jaune",
  "#FF00FF": "Magenta",
  "#00FFFF": "Cyan",
  "#C0C0C0": "Gris clair",
  "#808080": "Gris",
  "#800000": "Marron",
  "#808000": "Olive",
};

export const materiaux = [
  {
    value: "https://images.pexels.com/photos/207300/pexels-photo-207300.jpeg",
    label: "Plastique",
  },
  {
    value: "https://images.pexels.com/photos/6276019/pexels-photo-6276019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    label: "Tissu",
  },
  {
    value: "https://images.pexels.com/photos/7985819/pexels-photo-7985819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    label: "Marbre",
  },
];