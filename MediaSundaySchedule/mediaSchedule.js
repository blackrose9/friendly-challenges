function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function isServedOnPreviousSunday(member, date, schedule) {
  const previousSunday = new Date(date);
  previousSunday.setDate(previousSunday.getDate() - 7);

  if (schedule[previousSunday]) {
    return schedule[previousSunday].some(entry => entry.name === member);
  }

  return false;
}

function generateRandomSchedule(teamData, startDate, endDate) {
  const dates = [];
  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate = addDays(currentDate, 7);
  }

  const talentsNeeded = {
    photography: 4,
    video: 2,
    visionmixing: 1,
    livestream: 1,
  };

  const talentsLabels = {
    photography: 'Photography',
    video: 'Video',
    visionmixing: 'Vision Mixing',
    livestream: 'Livestream',
  };

  const shuffledTeamMembers = Object.keys(teamData).sort(() => 0.5 - Math.random());
  const schedule = {};

  for (const date of dates) {
    const selectedMembers = [];
    const talentCounts = { ...talentsNeeded }; // Make a copy of talentsNeeded
    const talentsAssigned = {}; // Keep track of talents already assigned to each member on the current date

    for (const talent of Object.keys(talentsNeeded)) {
      const talentMembers = shuffledTeamMembers.filter(
        member => teamData[member].talents.includes(talent) && teamData[member].preferences.includes(getServiceForDate(date))
      );

      if (talentMembers.length < talentsNeeded[talent]) {
        console.log('No valid schedule found.');
        return null;
      }

      talentCounts[talent] = talentsNeeded[talent];
      talentsAssigned[talent] = new Set(); // Initialize the set for each talent
    }

    const servedLastSunday = new Set();

    while (Object.values(talentCounts).some(count => count > 0)) {
      const talent = Object.keys(talentsNeeded).find(talent => talentCounts[talent] > 0);
      const talentMembers = shuffledTeamMembers.filter(
        member =>
          teamData[member].talents.includes(talent) &&
          teamData[member].preferences.includes(getServiceForDate(date)) &&
          !selectedMembers.some(selected => selected.name === member && selected.talent === talentsLabels[talent]) &&
          (!talentsAssigned[talent] || !talentsAssigned[talent].has(member)) && // Check if the member is already assigned to another talent on this date
          !servedLastSunday.has(member) // Check if the member served on the previous Sunday
      );

      if (talentMembers.length === 0) {
        console.log('No valid schedule found.');
        return null;
      }

      const randomIndex = Math.floor(Math.random() * talentMembers.length);
      const selectedMember = talentMembers[randomIndex];
      selectedMembers.push({ name: selectedMember, talent: talentsLabels[talent] });
      talentCounts[talent]--;
      talentsAssigned[talent] = talentsAssigned[talent] || new Set();
      talentsAssigned[talent].add(selectedMember); // Mark the member as assigned to the talent on this date

      servedLastSunday.add(selectedMember); // Mark the member as served on the current Sunday
    }

    schedule[date] = selectedMembers;
  }

  return schedule;
}

function getServiceForDate(date) {
  // Replace this logic with your actual method for determining 1st or 2nd service for a given date
  // For this example, we will alternate between 1st and 2nd services based on even/odd weeks
  return date.getDate() % 2 === 0 ? '1st' : '2nd';
}

  // Sample team data (you can replace this with the actual data)
  const teamData = {
    'Jose': { talents: ['visionmixing', 'photography'], preferences: ['1st', '2nd'] },
    'Chudu': { talents: ['photography'], preferences: ['1st'] },
    'Charity': { talents: ['visionmixing', 'photography'], preferences: ['1st', '2nd'] },
    'Nkama': { talents: ['photography', 'video'], preferences: ['1st'] },
    'Kusibili': { talents: ['photography', 'video'], preferences: ['1st'] },
    'Felix': { talents: ['photography','video'], preferences: ['1st'] },
    'Chomba': { talents: ['photography'], preferences: ['2nd'] },
    'Nobu': { talents: ['photography', 'livestream'], preferences: ['1st', '2nd'] },
    'Thokozile': { talents: ['photography', 'video'], preferences: ['2nd'] },
    'Prudence': { talents: ['photography'], preferences: ['1st'] },
    'Clement': { talents: ['visionmixing', 'video'], preferences: ['1st', '2nd'] },
    'Ossie': { talents: ['video', 'livestream'], preferences: ['1st'] },
    'Mara': { talents: ['photography', 'video'], preferences: ['2nd'] },
    'Eneya': { talents: ['visionmixing', 'video'], preferences: ['1st'] },
    'Yande': { talents: ['photography', 'visionmixing'], preferences: ['2nd'] },
    'Chanda': { talents: ['photography'], preferences: ['2nd'] },
    'Lombe': { talents: ['visionmixing', 'video'], preferences: ['1st'] },
    'Emmanuel Luks': { talents: ['photography', 'visionmixing'], preferences: ['1st', '2nd'] },
    'Yombo': { talents: ['photography'], preferences: ['1st', '2nd'] },
    'Medelina': { talents: ['photography', 'video'], preferences: ['1st', '2nd'] },
    'Sarah': { talents: ['visionmixing', 'video'], preferences: ['1st'] },
    'Barnabas': { talents: ['video'], preferences: ['2nd'] },
    'Lukundo': { talents: ['photography'], preferences: ['2nd'] },
    'Bright': { talents: ['photography', 'livestream'], preferences: ['1st', '2nd'] },
    'Tabo': { talents: ['photography', 'livestream'], preferences: ['1st', '2nd'] },
    'Niza': { talents: ['video', 'livestream'], preferences: ['1st', '2nd'] },
    'Mukutwa': { talents: ['photography'], preferences: ['2nd'] },
    'Mike': { talents: ['photography'], preferences: ['2nd'] },
    'David Michael': { talents: ['video', 'photography'], preferences: ['1st', '2nd'] },
    'Jerome': { talents: ['photography', 'video'], preferences: ['1st', '2nd'] },
    // Add more team members here
  };
  
  const startDate = new Date('2023-08-06'); // Start date for August 2023 (1st Sunday)
  const endDate = new Date('2023-08-27'); // End date for August 2023 (4th Sunday)
  
  const schedule = generateRandomSchedule(teamData, startDate, endDate);
  console.log(schedule);
  
  
  