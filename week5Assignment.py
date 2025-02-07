# Parent class: Superhero
class Superhero:
    def __init__(self, name, power, universe):
        self.name = name
        self.power = power
        self.universe = universe

    def introduce(self):
        return f"I am {self.name} from {self.universe}. My power is {self.power}!"

    def use_power(self):
        return f"{self.name} uses {self.power}! 💥"

# Child class: Villain (Inheritance)
class Villain(Superhero):
    def __init__(self, name, power, universe, evil_plan):
        super().__init__(name, power, universe)
        self.evil_plan = evil_plan

    def use_power(self):
        return f"{self.name} unleashes {self.power} for evil! 😈"

    def reveal_plan(self):
        return f"{self.name}'s evil plan: {self.evil_plan}"

# Creating objects
hero = Superhero("Spider-Man", "Web-slinging", "Marvel")
villain = Villain("Green Goblin", "Explosive Pumpkins", "Marvel", "Destroy Spider-Man!")

# Testing methods
print(hero.introduce())
print(hero.use_power())

print(villain.introduce())
print(villain.use_power())
print(villain.reveal_plan())
