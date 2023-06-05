const colors = [
  "bg-blue-700",
  "bg-pink-700",
  "bg-orange-700",
  "bg-teal-700",
  "bg-violet-700",
  "bg-fuchsia-700",
];

function getRandomColor() {
  let random = Math.floor((Math.random() * 10) % colors.length);
  return colors[random];
}

export default getRandomColor;
