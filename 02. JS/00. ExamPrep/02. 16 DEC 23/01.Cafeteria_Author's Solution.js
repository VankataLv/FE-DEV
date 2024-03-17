function cafeteria(input) {
  let baristas = [];

  let currentIndex = 1;
  const n = Number(input[0]);

  while (currentIndex <= n) {
    const [name, shift, coffeeTypes] = input[currentIndex].split(' ');
    baristas.push({ name, shift, coffeeTypes: coffeeTypes.split(',') });
    currentIndex++;
  }

  function findBarista(name) {
    return baristas.find(barista => barista.name === name);
  }



  while (input[currentIndex] !== 'Closed') {
    const [action, baristaName, parameter1, parameter2] = input[currentIndex].split(' / ');

    if (action === 'Prepare') {
      const shift = parameter1;
      const coffeeType = parameter2;
      const barista = findBarista(baristaName);
      if (barista && barista.shift === shift && barista.coffeeTypes.includes(coffeeType)) {
        console.log(`${barista.name} has prepared a ${coffeeType} for you!`);
      } else {
        console.log(`${baristaName} is not available to prepare a ${coffeeType}.`);
      }
    } else if (action === 'Change Shift') {
      const newShift = parameter1;
      const baristaToUpdate = findBarista(baristaName);
      if (baristaToUpdate) {
        baristaToUpdate.shift = newShift;
        console.log(`${baristaName} has updated his shift to: ${newShift}`);
      }
    } else if (action === 'Learn') {
      const newCoffeeType = parameter1;
      const baristaToUpgrade = findBarista(baristaName);
      if (baristaToUpgrade) {
        if (baristaToUpgrade.coffeeTypes.includes(newCoffeeType)) {
          console.log(`${baristaName} knows how to make ${newCoffeeType}.`);
        } else {
          baristaToUpgrade.coffeeTypes.push(newCoffeeType);
          console.log(`${baristaName} has learned a new coffee type: ${newCoffeeType}.`);
        }
      }
    }

    currentIndex++;
  }

  // Print the final list of baristas
  baristas.forEach(barista => {
    console.log(`Barista: ${barista.name}, Shift: ${barista.shift}, Drinks: ${barista.coffeeTypes.join(', ')}`);
  });
}

// Example usage
const input =['4',
'Alice day Espresso,Cappuccino',
'Bob night Latte,Mocha',
'Carol day Americano,Mocha',
'David night Espresso',
'Prepare / Alice / day / Espresso',
'Change Shift / Bob / day',
'Learn / Carol / Latte',
'Prepare / Bob / night / Latte',
'Learn / David / Cappuccino',
'Prepare / Carol / day / Cappuccino',
'Change Shift / Alice / night',
 'Learn / Bob / Mocha',
'Prepare / David / night / Espresso',
'Closed'];

  ;

cafeteria(input);
