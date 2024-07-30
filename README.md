# Excel to MongoDB Importer

This project reads data from an Excel file and imports it into a MongoDB collection. It utilizes Node.js, `read-excel-file` for reading Excel files, and `@inquirer/prompts` for user interaction.

## Features

- Connects to a MongoDB database.
- Reads data from an Excel file.
- Displays the data in a tabular format in the console.
- Prompts the user for confirmation before inserting the data into the database.
- Inserts the data into a MongoDB collection if confirmed by the user.

## Technologies Used

- Node.js
- MongoDB
- `read-excel-file` for reading Excel files.
- `@inquirer/prompts` for user prompts.

## Prerequisites

- Node.js and npm installed on your machine.
- MongoDB server running locally or remotely.
- An Excel file with the data to be imported.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/excel-to-mongodb-importer.git
cd excel-to-mongodb-importer
```

2. Install the required packages:

```bash
npm install
```

3. Ensure MongoDB is running and adjust the `mongodbURL` variable in the code if necessary.

## Usage

1. Place your Excel file in the project directory. Update the `filePath` and `sheetName` variables in the code to match your file and sheet name.

2. Run the script:

```bash
node index.js
```

3. The script will read the data from the Excel file and display it in a table format in the console. You will be prompted to confirm whether you want to insert the data into the MongoDB collection.

4. If you confirm, the data will be inserted into the `UserInfos` collection in the MongoDB database. If not, the insertion will be canceled.

## Code Structure

- `index.js`: Main script that connects to the database, reads data from the Excel file, displays the data, and inserts it into the database based on user confirmation.

## Example

Here is an example of the expected output:

```
┌─────────┬─────────────┬─────┬───────┐
│ (index) │     Name     │ Age │ Grade │
├─────────┼─────────────┼─────┼───────┤
│    0    │ 'John Doe'   │ 25  │ 'A'   │
│    1    │ 'Jane Smith' │ 30  │ 'B'   │
└─────────┴─────────────┴─────┴───────┘
? Do you want to insert the data into the database? (yes/no)
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.
```

Replace `yourusername` in the clone URL with your actual GitHub username if you plan to host this repository on GitHub. Also, ensure to create a `LICENSE` file if you intend to include licensing information.
