my_list = []
my_list.extend([10,20,30,40])
my_list[1] = 15
list2 = [50,60,70]

my_list.extend(list2)
del my_list[-1]
my_list.sort()

print(my_list)