const getSleepHours = day => {
  day = day.toLowerCase();

  switch (day) {
    case 'monday': return 8;
    break;

    case 'tuesday': return 6;
    break;

    case 'wednesday': return 7;
    break;

    case 'thursday': return 5;
    break;

    case 'friday': return 3;
    break;

    case 'saturday': return 9;
    break;

    case 'sunday': return 11;
    break;
  }
}

const getActualSleepHours = () => {
  const totalSleepHours = 
  getSleepHours('monday') + 
  getSleepHours('tuesday') + 
  getSleepHours('wednesday') + 
  getSleepHours('thursday') + 
  getSleepHours('friday') + 
  getSleepHours('saturday') + 
  getSleepHours('sunday');

  return totalSleepHours
}

const getIdealSleepHours = (idealHours) => {
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(3);

  const overslept = actualSleepHours - idealSleepHours;
  const underslept = idealSleepHours - actualSleepHours;

  if (actualSleepHours === idealSleepHours) {
    console.log('Ideal Sleep');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('Sleep less - ' + overslept);
  } else {
    console.log('Sleep more - ' + underslept);
  }

}


calculateSleepDebt();




