import random

# Define the list of people with their talents
people = [
    {'name': 'Lombe', 'talents': ['video', 'photography']},
    {'name': 'Eneya', 'talents': ['video', 'livestream', 'visionmixing']},
    {'name': 'Bright', 'talents': ['video','photography', 'livestream', 'visionmixing']},
    {'name': 'Niza', 'talents': ['video','photography', 'livestream', 'visionmixing']},
    {'name': 'Sarah', 'talents': ['video','photography', 'livestream', 'visionmixing']},
    {'name': 'Jerome', 'talents': ['video','photography']},
    {'name': 'Chanda', 'talents': ['photography']},
    {'name': 'Yombo', 'talents': ['photography', 'video']},
    {'name': 'Chudu', 'talents': ['photography']},
    {'name': 'Charity', 'talents': ['photography']},
    {'name': 'Chomba', 'talents': ['photography']},
    {'name': 'Yande', 'talents': ['photography']}
]

# Create a list to store the schedule
schedule = []

# Define the number of people needed for each task
video_count = 2
photography_count = 2
livestream_count = 1
visionmixing_count = 1

# Randomly select people for each task, ensuring that each person is scheduled only once
for task, count in [('video', video_count), ('photography', photography_count), ('livestream', livestream_count), ('visionmixing', visionmixing_count)]:
    available_people = [person for person in people if task in person['talents']]
    random.shuffle(available_people)
    for i in range(count):
        person = available_people[i]
        schedule.append({'person': person['name'], 'task': task})
        people.remove(person)

# Print the schedule
for item in schedule:
    print(f"{item['person']} will do {item['task']}")
