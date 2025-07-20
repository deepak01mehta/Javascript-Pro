let darkbtn = document.getElementById("change-color");

let arr = [
  "red", "blue", "green", "black", "orange", "purple", "yellow", "white", "pink", "brown",
  "gray", "cyan", "magenta", "lime", "maroon", "navy", "olive", "teal", "aqua", "fuchsia",
  "silver", "gold", "indigo", "violet", "turquoise", "lavender", "beige", "mint", "coral", "plum",
  "khaki", "salmon", "chartreuse", "crimson", "darkblue", "darkgreen", "darkred", "darkcyan", "darkmagenta", "darkorange",
  "darkviolet", "darkturquoise", "darkgoldenrod", "firebrick", "forestgreen", "hotpink", "indianred", "lightcoral", "lightblue", "lightcyan",
  "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightsteelblue", "lightyellow", "mediumaquamarine", "mediumblue",
  "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mistyrose", "moccasin",
  "navajowhite", "olivedrab", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff",
  "peru", "powderblue", "rosybrown", "royalblue", "saddlebrown", "sandybrown", "seagreen", "sienna", "skyblue", "slateblue",
  "slategray", "snow", "springgreen", "steelblue", "tan", "thistle", "tomato", "wheat", "whitesmoke", "yellowgreen"
];
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const getColor = () => {
  let color = getRandom(arr);
  darkbtn.innerHTML = color;
  document.body.style.backgroundColor = color;
  darkbtn.style.color = color;
};
window.onload=getColor;
darkbtn.addEventListener("click", getColor);
setInterval(getColor,10000)