from itertools import product


def large_power(base,exponent):
    result = base ** exponent
    return result

"main function"
b = int(input("Enter the base"))
e = int(input("Enter the exponent"))
be = large_power(b,e)

if be > 5000:
    print("true")
    print(be)
else:
    print("false")