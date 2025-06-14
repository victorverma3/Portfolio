import React, { useRef, useState } from "react";
import { useSnackbar } from "notistack";

import { Button } from "@mui/material";

import { supabase } from "../utils/Supabase";

const UploadPDF = () => {
    const { enqueueSnackbar } = useSnackbar();

    const [file, setFile] = useState<File | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputClick = async () => {
        inputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];

        if (selectedFile && selectedFile.type !== "application/pdf") {
            enqueueSnackbar("Only PDF files are allowed", {
                variant: "error",
            });
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
            enqueueSnackbar('"Resume" or "CV" must be included in the title"', {
                variant: "error",
            });
            return;
        }
        const { error: uploadError } = await supabase.storage
            .from("files")
            .upload(file.name, file, { upsert: true });

        if (uploadError) {
            enqueueSnackbar(`Failed to upload PDF: ${uploadError.message}`);
            return;
        } else {
            enqueueSnackbar(`Uploaded ${file.name} to Supabase`, {
                variant: "success",
            });
            setFile(null);
        }
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
