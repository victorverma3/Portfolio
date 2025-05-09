import React from "react";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";

import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const backend = import.meta.env.VITE_BACKEND_URL;
const apiKey = import.meta.env.VITE_API_KEY;

interface DeleteModalProps {
    id: string;
    name: string;
    deleteItem: string;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ id, name, deleteItem }) => {
    const { enqueueSnackbar } = useSnackbar();
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setEnteredText("");
        setOpen(false);
    };
    const [enteredText, setEnteredText] = useState("");

    const handleSubmit = () => {
        if (enteredText === name) {
            axios
                .delete(
                    `${backend}/${deleteItem.toLowerCase()}-collection/${id}`,
                    {
                        headers: {
                            "x-api-key": apiKey,
                        },
                    }
                )
                .then(() => {
                    setOpen(false);
                    enqueueSnackbar(`${deleteItem} deleted successfully`, {
                        variant: "success",
                    });
                    window.location.reload();
                })
                .catch((error) => {
                    enqueueSnackbar("Error", { variant: "error" });
                    console.log(error);
                });
        } else {
            enqueueSnackbar(`${deleteItem} entered incorrectly`, {
                variant: "error",
            });
        }
        setEnteredText("");
    };

    return (
        <div>
            <Link onClick={() => handleOpen()} to="">
                <AiOutlineDelete className="mx-auto mt-2" size={24} />
            </Link>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="w-fit m-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-column justify-center shadow border-2 border-solid border-black bg-white">
                    <p className="px-4 pt-2">Type "{name}" in the box below</p>
                    <div className="w-fit m-auto">
                        <input
                            className="w-60 h-8 m-auto px-2 border-1 border-gray-200"
                            type="text"
                            value={enteredText}
                            onChange={(e) => setEnteredText(e.target.value)}
                        />
                    </div>
                    <Button
                        className="w-fit mx-auto my-2"
                        onClick={handleSubmit}
                    >
                        Confirm {deleteItem} Deletion
                    </Button>
                </div>
            </Modal>
        </div>
    );
};

export default DeleteModal;
