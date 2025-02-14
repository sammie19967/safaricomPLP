# Assignment 1: Design Your Own Class!

class Superhero:
    def __init__(self, name, alias, power, health=100):
        self.name = name          # Real name of the superhero
        self.alias = alias        # Superhero name
        self.power = power        # Special power/ability
        self.health = health      # Health points

    def use_power(self, target):
        print(f"{self.alias} uses {self.power} on {target}!")

    def display_stats(self):
        print(f"Name: {self.name}\nAlias: {self.alias}\nPower: {self.power}\nHealth: {self.health}\n")

# Inheritance and Polymorphism: A flying superhero who can override the power use behavior.
class FlyingSuperhero(Superhero):
    def __init__(self, name, alias, power, flight_speed, health=100):
        super().__init__(name, alias, power, health)
        self.flight_speed = flight_speed  # Additional attribute for flying speed

    def fly(self):
        print(f"{self.alias} is flying at {self.flight_speed} mph!")

    # Overriding the use_power() method to reflect the aerial advantage.
    def use_power(self, target):
        print(f"{self.alias} soars into the sky and uses {self.power} on {target}!")

# Demonstration of Assignment 1:
hero1 = Superhero("Peter Parker", "Spider-Man", "Spider-Sense")
hero2 = FlyingSuperhero("Clark Kent", "Superman", "Heat Vision", flight_speed=600)

print("=== Superhero Stats ===")
hero1.display_stats()
hero1.use_power("the enemy")

print("\n=== Flying Superhero Stats ===")
hero2.display_stats()
hero2.fly()
hero2.use_power("a villain")
