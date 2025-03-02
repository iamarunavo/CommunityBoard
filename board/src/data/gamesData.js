const games = [
  {
    title: 'Grand Theft Auto V',
    image: 'https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png',
    genre: 'Action-Adventure',
    onButtonClick: () => window.open('https://www.rockstargames.com/gta-v', '_blank'),
  },
  {
    title: 'Ghost of Yotei',
    image: 'https://m.media-amazon.com/images/M/MV5BODA2YzRkODktNTIwYi00ZDk1LThlMTAtYzE4MGEyODM4NzZlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 
    genre: 'Action-Adventure',
    onButtonClick: () => window.open('https://www.playstation.com/en-us/games/ghost-of-yotei/', '_blank'),
  },
  {
    title: 'Metal Gear Solid 3: Snake Eater Remake',
    image: 'https://m.media-amazon.com/images/M/MV5BMjBiN2JkMzYtZjdmNC00ZTcyLWIxZjItNGU1ZDNiODI3NGE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    genre: 'Action-Adventure',
    onButtonClick: () => window.open('https://store.steampowered.com/agecheck/app/2131650/', '_blank'),
  },
  {
    title: 'The Legend of Zelda: Tears of the Kingdom',
    image: 'https://upload.wikimedia.org/wikipedia/en/f/fb/The_Legend_of_Zelda_Tears_of_the_Kingdom_cover.jpg',
    genre: 'Action-Adventure',
    onButtonClick: () => window.open('https://www.zelda.com/tears-of-the-kingdom/', '_blank'),
  },
  {
    title: "Baldur's Gate 3",
    image: 'https://store-images.s-microsoft.com/image/apps.11593.13550459053619040.9c555c73-a698-4992-b0f3-c5084cf18b5e.82a9ea41-c628-4d02-8a0f-d0304eba31c7',
    genre: 'Role-Playing',
    onButtonClick: () => window.open('https://store.steampowered.com/app/1086940/Baldurs_Gate_3/', '_blank'),
  },
  {
    title: 'God of War Ragnarök',
    image: 'https://upload.wikimedia.org/wikipedia/en/e/ee/God_of_War_Ragnar%C3%B6k_cover.jpg',
    genre: 'Action-Adventure',
    onButtonClick: () => window.open('https://www.playstation.com/en-us/games/god-of-war-ragnarok/', '_blank'),
  },
  {
    title: 'Elden Ring',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Elden_Ring_Box_art.jpg/220px-Elden_Ring_Box_art.jpg',
    genre: 'Action Role-Playing',
    onButtonClick: () => window.open('https://store.steampowered.com/app/1245620/ELDEN_RING/', '_blank'),
  },
  {
    title: 'Cyberpunk 2077',
    image: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg',
    genre: 'Action RPG',
    onButtonClick: () => window.open('https://store.steampowered.com/app/1091500/Cyberpunk_2077/', '_blank'),
  },
  {
    title: 'Fortnite',
    image: 'https://m.media-amazon.com/images/M/MV5BMTZlMmIxM2EtN2Y4Zi00M2ZhLTk3NzgtNjJmZTU0MTQ3YjcwXkEyXkFqcGc@._V1_.jpg',
    genre: 'Battle Royale',
    onButtonClick: () => window.open('https://store.epicgames.com/en-US/p/fortnite', '_blank'),
  },
  {
    title: 'Starfield',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTikjJ1n6qu3IkaM5So9_Up1Ttaoac1c0qWkw&s',
    genre: 'Action RPG',
    onButtonClick: () => window.open('https://store.steampowered.com/app/1716740/Starfield/', '_blank'),
  }
];

export default games;
