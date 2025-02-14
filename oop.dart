// Abstract class (Abstraction)
abstract class Animal {
  // Encapsulation: Private variables
  String _name;
  int _age;

  // Constructor
  Animal(this._name, this._age);

  // Getter & Setter (Encapsulation)
  String get name => _name;
  int get age => _age;

  set name(String newName) {
    _name = newName;
  }

  set age(int newAge) {
    if (newAge > 0) {
      _age = newAge;
    } else {
      print("Age must be positive.");
    }
  }

  // Abstract method (must be implemented by subclasses)
  void makeSound();

  // Concrete method (shared behavior)
  void eat() {
    print("$name is eating...");
  }
}

// Inheritance: Mammal class extends Animal
class Mammal extends Animal {
  String furColor;

  // Constructor
  Mammal(String name, int age, this.furColor) : super(name, age);

  // Overriding makeSound() (Polymorphism)
  @override
  void makeSound() {
    print("$name makes a mammal sound!");
  }
}

// Inheritance: Bird class extends Animal
class Bird extends Animal {
  bool canFly;

  // Constructor
  Bird(String name, int age, this.canFly) : super(name, age);

  // Overriding makeSound() (Polymorphism)
  @override
  void makeSound() {
    print("$name chirps melodiously!");
  }

  // Additional method for birds
  void fly() {
    if (canFly) {
      print("$name is flying high! 🕊️");
    } else {
      print("$name cannot fly but loves to walk around.");
    }
  }
}

void main() {
  // Creating objects
  Mammal lion = Mammal("Leo", 5, "Golden");
  Bird parrot = Bird("Polly", 2, true);

  // Accessing encapsulated data
  print("Animal: ${lion.name}, Age: ${lion.age}, Fur Color: ${lion.furColor}");
  print("Animal: ${parrot.name}, Age: ${parrot.age}, Can Fly: ${parrot.canFly}");

  // Calling overridden methods (Polymorphism)
  lion.makeSound();
  parrot.makeSound();

  // Using methods from the parent class
  lion.eat();
  parrot.eat();

  // Calling unique methods
  parrot.fly();
}
