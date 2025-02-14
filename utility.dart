import 'dart:io';

void main() async {
  // ********* User Input *********
  stdout.write('Enter a string: ');
  String? userInput = stdin.readLineSync();
  if (userInput == null || userInput.isEmpty) {
    print('No input provided. Exiting.');
    return;
  }

  // ********* String Manipulation *********
  // 1. Concatenation
  String concatenated = 'Hello, ' + userInput + '!';
  // 2. Reversing the string
  String reversed = concatenated.split('').reversed.join('');
  // 3. Changing cases
  String upperCase = concatenated.toUpperCase();
  String lowerCase = concatenated.toLowerCase();

  // Display the manipulated strings
  print('\n--- String Manipulation Results ---');
  print('Concatenated: $concatenated');
  print('Reversed: $reversed');
  print('UpperCase: $upperCase');
  print('LowerCase: $lowerCase');

  // ********* Collections *********
  // Using a list to store all manipulated strings
  List<String> stringList = [concatenated, reversed, upperCase, lowerCase];
  // Using a set to remove any duplicates (if they exist)
  Set<String> stringSet = stringList.toSet();
  // Using a map to associate labels with the manipulated results
  Map<String, String> stringMap = {
    'Concatenated': concatenated,
    'Reversed': reversed,
    'UpperCase': upperCase,
    'LowerCase': lowerCase,
  };

  print('\n--- Collections ---');
  print('List: $stringList');
  print('Set: $stringSet');
  print('Map: $stringMap');

  // ********* Date and Time *********
  DateTime now = DateTime.now();
  String formattedDate = now.toIso8601String(); // ISO 8601 format
  print('\nCurrent Date and Time: $formattedDate');

  // ********* File Handling *********
  // Define file paths
  String outputFilePath = 'output.txt';
  String inputFilePath = 'input.txt';

  // Prepare a log entry that includes the user input, results, and date/time
  String logEntry = '''
[$formattedDate] User Input: "$userInput"
Concatenated: "$concatenated"
Reversed: "$reversed"
UpperCase: "$upperCase"
LowerCase: "$lowerCase"

''';

  // Write (append) the log entry to the output file
  try {
    File outputFile = File(outputFilePath);
    await outputFile.writeAsString(logEntry, mode: FileMode.append);
    print('\nLog entry successfully written to $outputFilePath.');
  } catch (e) {
    print('\nError writing to file: $e');
  }

  // Attempt to read from an input file (if it exists)
  try {
    File inputFile = File(inputFilePath);
    if (await inputFile.exists()) {
      String fileContent = await inputFile.readAsString();
      print('\n--- Content of $inputFilePath ---');
      print(fileContent);
    } else {
      print('\n$inputFilePath does not exist. No file to read.');
    }
  } catch (e) {
    print('\nError reading from file: $e');
  }
}
