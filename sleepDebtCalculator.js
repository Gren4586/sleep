const getSleepHours = (day) => {
  day = day.toLowerCase();
  switch (day) {
    case 'monday':
      return 8;
    case 'tuesday':
      return 4;
    case 'wednesday':
      return 5;
    case 'thursday':
      return 2;
    case 'friday':
      return 6;
    case 'saturday':
      return 1;
    case 'sunday':
      return 7;
  }
}

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
  const idealHours = 6;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You slept a bit more than you\'d like to.');
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hours more than you wanted to.')
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You slept a bit too little for your liking.');
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' less hours than you wanted to.')
  }
}

calculateSleepDebt();






