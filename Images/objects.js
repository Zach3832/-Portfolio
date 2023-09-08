console.log('Hello.JS')

// Initial setup object
const setup = {
    screens: 2,
    hasMouse: true,
    chairType: "ergonomic",
    laptopSize: "15-inch",
  };
  
  // Upgrading the setup
  setup.screens += 1;
  
  // Array of random items on the desk
  const clutterItems = ["notepad", "coffee cup", "sticky notes"];
  
  // Adding clutter array to the setup
  setup.clutter = clutterItems;
  
  // Listing clutter items
  console.log("Clutter on the desk:");
  for (const item of setup.clutter) {
    console.log("- " + item);
  }
  
  // Adding computer object
  setup.computer = {
    screenSize: "27-inch",
    OS: "Windows 11",
  };
  
  // Adding files array to computer object
  setup.computer.files = ["document.txt", "image.png", "presentation.pptx"];
  
  // Printing computer object details
  console.log("Computer Details:");
  console.log("Screen Size: " + setup.computer.screenSize);
  console.log("Operating System: " + setup.computer.OS);
  
  // Listing computer files
  console.log("Computer Files:");
  for (const file of setup.computer.files) {
    console.log("- " + file);
  }
  
  // Looping over computer files within the setup object
  console.log("Computer Files within Setup:");
  for (const file of setup.computer.files) {
    console.log("- " + file);
  }
  const books = [
    { title: 'Pragmatic Programmer', author: 'David Thomas + Andrew Hunt' },
    { title: 'Clean Code', author: 'Robert Martin' },
    { title: 'You Don\'t Know JS', author: 'Kyle Simpson' }
  ];
  
  for (const book of books) {
    console.log(`Title: ${book.title}, Author: ${book.author}`);
  }
    
  // Hero object
const hero = {
    name: "Hero",
    hitPoints: 50,
    attack: 10,
    attackEnemy: function(enemy) {
      enemy.hitPoints -= this.attack;
    }
  };
  

  // Goblin object
  const goblin = {
    name: "Goblin",
    hitPoints: 20,
    attack: 5,
    attackEnemy: function(enemy) {
      enemy.hitPoints -= this.attack;
    }
  };
  
  // Goblin's sneak attack on the hero
  goblin.attackEnemy(hero);
  console.log(`${goblin.name} sneaks up and hits ${hero.name}! ${hero.name}'s HP: ${hero.hitPoints}`);
  
  // Hero's counter-attack on the goblin
  hero.attackEnemy(goblin);
  console.log(`${hero.name} retaliates and strikes ${goblin.name}! ${goblin.name}'s HP: ${goblin.hitPoints}`);
  
  // Battle loop
  while (hero.hitPoints > 0 && goblin.hitPoints > 0) {
    hero.attackEnemy(goblin);
    console.log(`${hero.name} attacks ${goblin.name}. ${goblin.name}'s HP: ${goblin.hitPoints}`);
  
    if (goblin.hitPoints <= 0) {
      console.log(`${goblin.name} has been defeated! ${hero.name} is victorious!`);
      break;
    }
  
    goblin.attackEnemy(hero);
    console.log(`${goblin.name} counters and attacks ${hero.name}. ${hero.name}'s HP: ${hero.hitPoints}`);
  
    if (hero.hitPoints <= 0) {
      console.log(`${hero.name} has been defeated! ${goblin.name} is victorious!`);
      break;
    }
  }
  
  let heroHealth = 100; // Initial health of the hero
let goblinCount = 10; // Total number of goblins

function battleWithGoblin() {
  if (goblinCount === 0) {
    console.log("YOU WON!");
    return;
  }

  const goblinAttackPower = Math.floor(Math.random() * 20) + 1; // Random goblin attack power between 1 and 20
  const heroAttackPower = Math.floor(Math.random() * 25) + 1; // Random hero attack power between 1 and 25

  // Hero attacks goblin
  heroHealth -= goblinAttackPower;

  if (heroHealth <= 0) {
    console.log("YOU LOST");
    return;
  }

  console.log(`Hero health: ${heroHealth}`);

  // Goblin defeated
  goblinCount--;

  // Proceed to the next goblin
  battleWithGoblin();
}

// Start the battle with the first goblin
battleWithGoblin();

