import React, { useState } from "react";
import * as XLSX from "xlsx";
import Dashboard from "./Dashboard";

const FileUploader = () => {
    const [data, setData] = useState(null);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const binaryStr = e.target.result;
                const workbook = XLSX.read(binaryStr, { type: "binary" });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const parsedData = XLSX.utils.sheet_to_json(sheet);
                setData(parsedData);
            };
            reader.readAsBinaryString(file);
        }
    };

    return (
        <div>
            <div className="file-uploader">
                <h2>Upload Student Expense Data</h2>
                <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
            </div>
            {data ? (
                <Dashboard data={data} />
            ) : (
                <p>Please upload an Excel file to display the dashboard.</p>
            )}
        </div>
    );
};

export default FileUploader;
