import { confirm } from "@inquirer/prompts";
import { MongoClient } from "mongodb";
import readXlsxFile from "read-excel-file/node";

const mongodbURL = "mongodb://127.0.0.1:27017";
const dbName = "TestDB";
const filePath = "./test.xlsx";
const sheetName = "Sheet2";
let db = null;

const schema = {
    Name: {
        prop: "Name",
        type: String,
    },
    Age: {
        prop: "Age",
        type: Number,
    },
    Grade: {
        prop: "Grade",
        type: String,
    },
};

async function connectToDatabase() {
    const client = new MongoClient(mongodbURL);
    try {
        await client.connect();
        db = client.db(dbName);
        console.log("Connected to database successfully");
    } catch (err) {
        console.error("Failed to connect to the database", err);
    }
}

async function insertDataToDatabase(data) {
    try {
        const collection = db.collection("UserInfos");
        const result = await collection.insertMany(data);
        console.log(
            `${result.insertedCount} documents were inserted successfully.`
        );
    } catch (err) {
        console.error("Failed to insert data into database", err);
        throw err;
    }
}

async function readDataFromFile() {
    try {
        const { rows } = await readXlsxFile(filePath, {
            schema: schema,
            sheet: sheetName,
        });
        console.table(rows);
        return rows;
    } catch (err) {
        console.error("Failed to read data from file", err);
        throw err;
    }
}

async function main() {
    await connectToDatabase();
    const fileData = await readDataFromFile();

    const confirmInsert = await confirm({
        message: "Do you want to insert the data into the database?",
    });

    if (confirmInsert) {
        await insertDataToDatabase(fileData);
    } else {
        console.log("Data insertion canceled.");
    }
}

main().catch((err) => {
    console.error("An error occurred during execution", err);
});
