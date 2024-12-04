def calculate_discount(price,discount_percent):
    if discount_percent >= 20:
        price = price - (price * (discount_percent/100))
        return price
    else:
        return price

p = float(input("Enter the price of the product : "))
discount = int(input("Enter the discount percentage : "))

selling_price = calculate_discount(p,discount)
print(f"The selling price of the product is: {selling_price}")