function createSchedule(teamData, startDate, endDate) {
  // Define the required roles for each service
  const serviceRequirements = {
    '1st': { photography: 2, video: 2, livestream: 1, visionmixing: 1 },
    '2nd': { photography: 2, video: 2 }
  };

  let currentDate = new Date(startDate);
  let schedule = {};
  
  // Function to add days to a date
  function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  // Track the last time a member was scheduled to ensure rest
  let lastScheduled = {};

  while (currentDate <= endDate) {
    let dateKey = currentDate.toISOString().split('T')[0]; // YYYY-MM-DD format
    schedule[dateKey] = { '1st': [], '2nd': [] };

    Object.entries(serviceRequirements).forEach(([service, roles]) => {
      Object.entries(roles).forEach(([role, numNeeded]) => {
        let assigned = 0;

        // Sort team members by the last scheduled date to prioritize those who rested more
        let candidates = teamData.sort((a, b) => {
          let lastA = lastScheduled[a.name] || new Date(startDate);
          let lastB = lastScheduled[b.name] || new Date(startDate);
          return lastA - lastB;
        });

        for (let member of candidates) {
          if (assigned < numNeeded) {
            // Check if member can serve in this role and service, considering consecutive scheduling
            let canServe = (!lastScheduled[member.name] || addDays(lastScheduled[member.name], 7) <= currentDate || 
                            (Object.keys(lastScheduled).length / teamData.length) >= 2) && // Allow for consecutive scheduling if necessary
                            (member.talents.includes(role) && member.preferences.includes(service));

            if (canServe) {
              schedule[dateKey][service].push({ name: member.name, talent: role });
              lastScheduled[member.name] = currentDate; // Update last scheduled
              assigned++;
            }
          } else {
            break; // Break early if all needed roles are filled
          }
        }
      });
    });

    currentDate = addDays(currentDate, 7); // Move to the next Sunday
  }

  return schedule;
}


const teamData = [
  // {name:'Jose', talents: ['visionmixing', 'photography'], preferences: ['1st', '2nd'] },
  {name:'Chudu', talents: ['photography'], preferences: ['1st'] },
  // {name:'Chisha', talents: ['photography'], preferences: ['1st'] },
  {name:'Charity', talents: ['visionmixing'], preferences: ['1st', '2nd'] },
  {name:'Felix', talents: ['photography','video'], preferences: ['1st','2nd'] },
  // {name:'Nobu', talents: ['photography', 'livestream'], preferences: ['1st', '2nd'] },
  {name:'Thokozile', talents: ['photography', 'video', 'livestream'], preferences: ['1st','2nd'] },
  {name:'Prudence', talents: ['photography, livestream'], preferences: ['1st'] },
  // {name:'Clement', talents: ['visionmixing', 'video'], preferences: ['1st', '2nd'] },
  // {name:'Mara', talents: ['livestream'], preferences: ['1st','2nd'] },
  {name:'Kondwani', talents: ['livestream'], preferences: ['1st'] },
  {name:'Eneya', talents: ['visionmixing', 'video'], preferences: ['1st'] },
  {name:'Yande', talents: ['video','photography', 'visionmixing'], preferences: ['1st','2nd'] },
  {name:'Chanda', talents: ['photography','video'], preferences: ['2nd'] },
  {name:'Lombe', talents: ['visionmixing', 'video'], preferences: ['1st'] },
  {name:'Emmanuel Luks', talents: ['visionmixing','photography'], preferences: ['1st', '2nd'] },
  // {name:'Medelina', talents: ['photography', 'video'], preferences: ['1st', '2nd'] },
  {name:'Sarah', talents: ['visionmixing', 'video','photography'], preferences: ['1st'] },
  // {name:'Barnabas', talents: ['video'], preferences: ['2nd'] },
  // {name:'Lukundo', talents: ['photography'], preferences: ['2nd'] },
  // {name:'Bright', talents: ['photography', 'livestream'], preferences: ['1st', '2nd'] },
  {name:'Tabo', talents: ['photography','livestream'], preferences: ['1st'] },
  // {name:'Niza', talents: ['video', 'livestream'], preferences: ['1st', '2nd'] },
  {name:'Mukutwa', talents: ['photography'], preferences: ['2nd'] },
  // {name:'Mike', talents: ['photography'], preferences: ['2nd'] },
  {name:'David Michael', talents: ['video', 'photography'], preferences: ['1st', '2nd'] },
  // {name:'Chibwe', talents: ['photography'], preferences: ['1st'] },
  {name:'Kusibili', talents: ['photography', 'video'], preferences: ['1st','2nd'] }
  // 'Yombo': { talents: ['photography'], preferences: ['1st', '2nd'] },
   // 'Ossie': { talents: ['video', 'livestream'], preferences: ['1st'] }, //is travelling
];

const startDate = '2024-03-01';
const endDate = '2024-03-31';

const schedule = createSchedule(teamData, new Date(startDate), new Date(endDate));
// console.log(JSON.stringify(schedule, null, 2));

Object.entries(schedule).forEach(([date, services]) => {
  console.log(`Date: ${date}`);
  Object.entries(services).forEach(([service, assignments]) => {
    console.log(`  Service: ${service}`);
    assignments.forEach((assignment, index) => {
      console.log(`    ${index + 1}. Name: ${assignment.name}, Talent: ${assignment.talent}`);
    });
  });
});