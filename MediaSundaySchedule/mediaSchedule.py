from datetime import datetime, timedelta
from constraint import Problem, AllDifferentConstraint, InSetConstraint

def generate_schedule(team_data, start_date, end_date):
    # Create a list of dates from start_date to end_date
    dates = [start_date + timedelta(7 * i) for i in range((end_date - start_date).days // 7 + 1)]

    talents_needed = {
        "photography": 4,
        "video": 2,
        "visionmixing": 1,
        "livestream": 1
    }

    talents_combinations = [["photography", "video", "visionmixing", "livestream"]] * len(dates)

    # Create a problem instance
    problem = Problem()

    # Add variables for each date with the possible talents combinations
    for i, date in enumerate(dates):
        problem.addVariable(f"date_{i}", talents_combinations[i])

    # Add constraint: each date's talents must be unique
    problem.addConstraint(AllDifferentConstraint(), [f"date_{i}" for i in range(len(dates))])

    # Add constraint: the count of each talent must be as required
    for talent, required_count in talents_needed.items():
        problem.addConstraint(lambda *args: sum(1 for arg in args if arg == talent) == required_count, [f"date_{i}" for i in range(len(dates))])

    # Add constraint: members cannot be scheduled for two talents on the same date
    for member in team_data.keys():
        talents_available = team_data[member]["talents"]
        for i in range(len(dates)):
            problem.addConstraint(InSetConstraint([talents_available]), [f"date_{i}"])

    # Add constraint: members cannot be scheduled for consecutive Sundays
    for member in team_data.keys():
        for i in range(len(dates) - 1):
            problem.addConstraint(lambda d1, d2, member=member: abs((d2 - d1).days) != 7 or d2 == None, (f"date_{i}", f"date_{i+1}", member))

    # Solve the problem and get the solution
    solution = problem.getSolution()

    if solution is None:
        print("No valid schedule found.")
        return None

    # Convert solution keys to datetime objects
    schedule = {datetime.strptime(key.split('_')[1], "%Y-%m-%d"): value for key, value in solution.items()}

    return schedule

# Sample team data (you can replace this with the actual data)
team_data = {
    "Member 1": {"talents": ["visionmixing", "video"], "preferences": ["1st", "2nd"]},
    "Member 2": {"talents": ["photography", "livestream"], "preferences": ["1st"]},
    "Member 3": {"talents": ["video"], "preferences": ["2nd"]},
    # Add more team members here
}

start_date = datetime(2023, 8, 6)  # Start date for August 2023 (1st Sunday)
end_date = datetime(2023, 8, 27)  # End date for August 2023 (4th Sunday)

schedule = generate_schedule(team_data, start_date, end_date)
print(schedule)



# # Sample team data (you can replace this with the actual data)
# team_data = {
#     "Member 1": {"talents": ["visionmixing", "video"], "preferences": ["1st", "2nd"]},
#     "Member 2": {"talents": ["photography", "livestream"], "preferences": ["1st"]},
#     "Member 3": {"talents": ["video"], "preferences": ["2nd"]},
#     "Member 4": {"talents": ["visionmixing", "video"], "preferences": ["1st", "2nd"]},
#     "Member 5": {"talents": ["photography", "livestream"], "preferences": ["2nd"]},
#     "Member 6": {"talents": ["visionmixing", "photography"], "preferences": ["1st", "2nd"]},
#     "Member 7": {"talents": ["photography"], "preferences": ["1st", "2nd"]},
#     "Member 8": {"talents": ["visionmixing", "livestream"], "preferences": ["1st", "2nd"]},
#     # Add more team members here
# }