"""File Read & Write Challenge 🖋️: Create a program that reads a file and writes a modified version to a new file.
Error Handling Lab 🧪: Ask the user for a filename and handle errors if it doesn’t exist or can’t be read."""


def read_and_modify_file(input_filename, output_filename, modify_function):
    try:
        with open(input_filename, 'r') as file:
            content = file.readlines()

        # Example modification: Convert content to uppercase
        modified_content = [modify_function(line) for line in content]

        with open(output_filename, 'w') as file:
            file.writelines(modified_content)

        print(f"Modified content has been written to {output_filename}")

    except FileNotFoundError:
        print(f"Error: {input_filename} does not exist.")
    except IOError:
        print("Error: Could not read the file.")


def get_user_input():
    input_filename = input("Enter the name of the file to read from: ")
    output_filename = input("Enter the name of the file to write to: ")
    return input_filename, output_filename


input_filename, output_filename = get_user_input()

# Modify function example: convert to uppercase
modify_function = lambda line: line.upper()

read_and_modify_file(input_filename, output_filename, modify_function)
