const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function weekday(name) {
  return WEEKDAYS.indexOf(name);
}

function findTeenthDay(day) {
  return day > 12;
}

function constrain(days, type) {
  switch (type) {
    case 'teenth':
      return days.find(findTeenthDay);
    case '1st':
      return days[0];
    case '2nd':
      return days[1];
    case '3rd':
      return days[2];
    case '4th':
      return days[3];
    case '5th':
      return days[4];
    case 'last':
      return days[days.length - 1];
    default:
      return null;
  }
}

function meetupDay(year, month, dayname, type) {
  const first = ((weekday(dayname) - new Date(year, month).getDay() + 7) % 7) + 1;

  const length = Math.floor((new Date(year, month + 1, 0).getDate() - first) / 7) + 1;

  const day = constrain(Array.from({ length }, (_, i) => first + i * 7), type);

  if (!day) {
    throw new Error('Invalid Day');
  }

  return new Date(year, month, day);
}

module.exports = {
  meetupDay,
};
