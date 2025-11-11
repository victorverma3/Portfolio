import React, { useRef, useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { Button } from "@mui/material";

const backend = import.meta.env.VITE_BACKEND_URL;

const UploadPDF = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [file, setFile] = useState<File | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputClick = () => inputRef.current?.click();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile && selectedFile.type !== "application/pdf") {
            enqueueSnackbar("Only PDF files are allowed", { variant: "error" });
            return;
        }
        setFile(selectedFile ?? null);
    };

    const handleUpload = async () => {
        if (!file) {
            enqueueSnackbar("Select PDF to upload", { variant: "error" });
            return;
        }

        if (!(file.name.includes("Resume") || file.name.includes("CV"))) {
            enqueueSnackbar('"Resume" or "CV" must be included in the title', {
                variant: "error",
            });
            return;
        }

        const data = new FormData();
        data.append("file", file);

        await axios
            .post(`${backend}/file/upload-resume-cv`, data, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem(
                        "authToken"
                    )}`,
                },
            })
            .then(() => {
                enqueueSnackbar(`Uploaded ${file.name}`, {
                    variant: "success",
                });
                setFile(null);
            })
            .catch((error) => {
                enqueueSnackbar("Upload failed", { variant: "error" });
                console.log(error);
            });
    };

    return (
        <div>
            <input
                type="file"
                accept="application/pdf"
                ref={inputRef}
                onChange={handleFileChange}
                className="hidden"
            />

            <Button className="mx-auto mt-4" onClick={handleInputClick}>
                Upload Document
            </Button>

            {file && (
                <Button className="mx-auto mt-4" onClick={handleUpload}>
                    Complete Upload
                </Button>
            )}
        </div>
    );
};

export default UploadPDF;
