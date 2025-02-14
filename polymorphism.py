# Activity 2: Polymorphism Challenge!

class Vehicle:
    def move(self):
        raise NotImplementedError("Subclasses must implement this method.")

class Car(Vehicle):
    def move(self):
        print("Driving 🚗")

class Plane(Vehicle):
    def move(self):
        print("Flying ✈️")

class Boat(Vehicle):
    def move(self):
        print("Sailing 🚢")

# A helper function that accepts any vehicle and calls its move() method.
def make_it_move(vehicle):
    vehicle.move()

# Demonstration of polymorphism:
vehicles = [Car(), Plane(), Boat()]

print("\n=== Vehicle Movements ===")
for v in vehicles:
    make_it_move(v)
