num1 =float (input("Enter first number:"))
num2 =float (input("Enter second number:"))
operator = input("Input the desired operator: +, -, * or /")

if operator == "+":
    print(f"{num1} {operator} {num2} =  {num1 + num2}")
elif operator == "-":
    print(f"{num1} {operator} {num2} =  {num1 - num2}")
elif operator == "*":
    print(f"{num1} {operator} {num2} =  {num1 * num2}")
elif operator == "/":
    print(f"{num1} {operator} {num2} =  {num1 / num2}")
else:
    print("Choose among the provided operators: +, -, * or /")
