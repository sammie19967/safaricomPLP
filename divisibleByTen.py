def divisible_by_ten(num):
    if num % 10 == 0:
        return f"{num} is divisible by 10"
    else:
        return f"{num} is not divisible by 10"


try:
    number = int(input("Enter your desired number: "))
    result = divisible_by_ten(number)
    print(result)
except ValueError:
    print("Please enter a valid integer.")

