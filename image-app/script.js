const imageData = [
  {
    id: 1,
    name: "Forest Path",
    link: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop&crop=center",
    size: "600x400 pixels",
    date: "2023-01-15",
    description: "A serene path winding through a dense forest.",
  },
  {
    id: 2,
    name: "Mountain View",
    link: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop&crop=center",
    size: "800x500 pixels",
    date: "2023-03-22",
    description: "Majestic mountains under a clear blue sky.",
  },
  {
    id: 3,
    name: "City Skyline",
    link: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=700&h=450&fit=crop&crop=center",
    size: "700x450 pixels",
    date: "2023-05-10",
    description: "The vibrant skyline of a bustling metropolitan area at dusk.",
  },
  {
    id: 4,
    name: "Desert Landscape",
    link: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=900&h=600&fit=crop&crop=center",
    size: "900x600 pixels",
    date: "2023-07-01",
    description: "Vast and arid desert with unique rock formations.",
  },
  {
    id: 5,
    name: "Ocean Sunset",
    link: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=750&h=480&fit=crop&crop=center",
    size: "750x480 pixels",
    date: "2023-09-05",
    description: "A breathtaking sunset over the calm ocean waters.",
  },
  {
    id: 6,
    name: "Tropical Beach",
    link: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=650&h=420&fit=crop&crop=center",
    size: "650x420 pixels",
    date: "2023-10-12",
    description: "Crystal clear waters and white sand on a tropical paradise.",
  },
  {
    id: 7,
    name: "Northern Lights",
    link: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=550&fit=crop&crop=center",
    size: "800x550 pixels",
    date: "2023-11-08",
    description: "Aurora borealis dancing across the night sky.",
  },
  {
    id: 8,
    name: "Cherry Blossoms",
    link: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&h=400&fit=crop&crop=center",
    size: "600x400 pixels",
    date: "2023-04-18",
    description: "Pink cherry blossoms in full bloom during spring.",
  },
  {
    id: 9,
    name: "Waterfall",
    link: "https://images.unsplash.com/photo-1439066615861-d150baec0494?w=700&h=500&fit=crop&crop=center",
    size: "700x500 pixels",
    date: "2023-06-25",
    description: "Powerful waterfall cascading down rocky cliffs.",
  },
  {
    id: 10,
    name: "Lavender Field",
    link: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=750&h=450&fit=crop&crop=center",
    size: "750x450 pixels",
    date: "2023-07-30",
    description: "Endless rows of purple lavender swaying in the breeze.",
  },
  {
    id: 11,
    name: "Snow Mountain",
    link: "https://images.unsplash.com/photo-1464822759844-d150baec0494?w=850&h=600&fit=crop&crop=center",
    size: "850x600 pixels",
    date: "2023-12-15",
    description: "Snow-capped peaks gleaming under winter sunlight.",
  },
  {
    id: 12,
    name: "Autumn Forest",
    link: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?w=600&h=450&fit=crop&crop=center",
    size: "600x450 pixels",
    date: "2023-10-28",
    description: "Golden and red leaves creating a colorful autumn canopy.",
  },
  {
    id: 13,
    name: "Lightning Storm",
    link: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop&crop=center",
    size: "800x500 pixels",
    date: "2023-08-14",
    description: "Dramatic lightning bolts illuminating storm clouds.",
  },
  {
    id: 14,
    name: "Cactus Garden",
    link: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=650&h=480&fit=crop&crop=center",
    size: "650x480 pixels",
    date: "2023-05-20",
    description: "Various species of cacti in a desert botanical garden.",
  },
  {
    id: 15,
    name: "Starry Night",
    link: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=900&h=600&fit=crop&crop=center",
    size: "900x600 pixels",
    date: "2023-09-22",
    description: "Milky Way galaxy visible in a clear night sky.",
  },
  {
    id: 16,
    name: "Coral Reef",
    link: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&h=450&fit=crop&crop=center",
    size: "700x450 pixels",
    date: "2023-11-30",
    description: "Vibrant coral reef teeming with marine life.",
  },
  {
    id: 17,
    name: "Sunflower Field",
    link: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=800&h=520&fit=crop&crop=center",
    size: "800x520 pixels",
    date: "2023-08-05",
    description: "Bright yellow sunflowers stretching to the horizon.",
  },
  {
    id: 18,
    name: "Ice Cave",
    link: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=750&h=500&fit=crop&crop=center",
    size: "750x500 pixels",
    date: "2023-01-28",
    description: "Blue ice formations inside a glacial cave.",
  },
  {
    id: 19,
    name: "Rainbow Valley",
    link: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=850&h=550&fit=crop&crop=center",
    size: "850x550 pixels",
    date: "2023-06-12",
    description: "A perfect rainbow arcing over a green valley.",
  },
  {
    id: 20,
    name: "Volcanic Landscape",
    link: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&h=650&fit=crop&crop=center",
    size: "900x650 pixels",
    date: "2023-03-08",
    description: "Dramatic volcanic terrain with lava rock formations.",
  },
]

let garlly =document.getElementById("gallery");
let detils= document.getElementById("details");

imageData.forEach(img =>{
    let imageE=document.createElement("img");
      imageE.src=img.link
      imageE.style.margin="10px"
      imageE.style.width="150px"
      imageE.style.cursor="pointer"

      imageE.addEventListener("click",()=>{
        detils.innerHTML=`
        <h2>${img.name}</h2>
        <img src="${img.link}" width="500px" style="border-radius:10px; margin-bottom:10px;" />
        <p> Date: ${img.date}</P>
        <P> Description: ${img.description}</P>
         `;
      });

      garlly.appendChild(imageE);
      
});

