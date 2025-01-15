import React, { useState } from "react";
import FileUploader from "./components/FileUploader";
import Dashboard from "./components/Dashboard";

const App = () => {
    const [data, setData] = useState([]);

    const handleFileUpload = (uploadedData) => {
        setData(uploadedData);
    };

    return (
        <div>
            <FileUploader onFileUpload={handleFileUpload} />
            {data.length > 0 ? <Dashboard data={data} /> : <p>Please upload a file to display the dashboard.</p>}
        </div>
    );
};

export default App;
