import React from "react";
import { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm, FieldErrors } from "react-hook-form";
import { useSnackbar } from "notistack";

import Modal from "@mui/material/Modal";
import Spinner from "./Spinner";

type FormValues = {
    title: string;
    image: string;
    description: string;
    link: string;
    url: string;
    sortOrder: string;
};

const backend = import.meta.env.VITE_BACKEND_URL;
const apiKey = import.meta.env.VITE_API_KEY;

interface EditAboutModalProps {
    id: string;
}

const EditAboutModal = ({ id }: EditAboutModalProps) => {
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const [open, setOpen] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>({
        defaultValues: {
            title: "",
            image: "",
            description: "",
            link: "",
            url: "",
            sortOrder: "",
        },
    });

    const onSubmit = (formData: FormValues) => {
        console.log(formData);
        const data = {
            ...formData,
            sortOrder: parseInt(formData.sortOrder, 10),
        };
        axios
            .put(`${backend}/about-collection/${id}`, data, {
                headers: {
                    "x-api-key": apiKey,
                },
            })
            .then(() => {
                setOpen(false);
                enqueueSnackbar("About edited successfully", {
                    variant: "success",
                });
                window.location.reload();
            })
            .catch((error) => {
                enqueueSnackbar("Error", { variant: "error" });
                console.log(error);
            });
        setOpen(false);
    };

    const onError = (errors: FieldErrors<FormValues>) => {
        console.log("form errors", errors);
    };

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${backend}/about-collection/${id}`)
            .then((response) => {
                reset({
                    title: response.data.title,
                    image: response.data.image,
                    description: response.data.description,
                    link: response.data.link,
                    url: response.data.url,
                    sortOrder: String(response.data.sortOrder),
                });
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar("Error", { variant: "error" });
                console.log(error);
            });
    }, [id]);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const mapFields = ["title", "image", "description", "link", "url"] as const;

    return (
        <div>
            <Link onClick={() => handleOpen()} to="">
                <AiOutlineEdit className="mx-auto mt-2" size={24} />
            </Link>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="w-fit m-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center shadow border-2 border-solid border-black bg-white">
                    <h1 className="w-fit mx-auto mt-2 text-3xl 2xl:text-4x">
                        Edit About
                    </h1>
                    {loading ? <Spinner /> : " "}
                    <div className="w-fit max-h-96 overflow-y-auto m-auto">
                        <form
                            className="w-fit mx-auto mt-2"
                            onSubmit={handleSubmit(onSubmit, onError)}
                            noValidate
                        >
                            {mapFields.map((field) => (
                                <div key={field} className="form-control">
                                    <div className="flex flex-col">
                                        <label
                                            className="text-center text-xl"
                                            htmlFor={field}
                                        >
                                            {field.charAt(0).toUpperCase() +
                                                field.slice(1)}
                                        </label>
                                        <input
                                            className="w-96 mt-2 px-2 text-center border-2 border-solid border-black"
                                            type="text"
                                            id={field}
                                            {...register(field, {
                                                required: {
                                                    value: true,
                                                    message: `${field} is required`,
                                                },
                                                validate: {
                                                    notEmpty: (fieldValue) => {
                                                        return (
                                                            fieldValue !== "" ||
                                                            `${field} cannot be empty`
                                                        );
                                                    },
                                                },
                                            })}
                                        />
                                        <p className="mx-auto mt-2 text-red-500">
                                            {errors[field]?.message}
                                        </p>
                                    </div>
                                </div>
                            ))}
                            <div className="form-control">
                                <div className="flex flex-col">
                                    <label
                                        className="text-center text-xl"
                                        htmlFor="sortOrder"
                                    >
                                        SortOrder
                                    </label>
                                    <input
                                        className="w-96 mt-2 px-2 text-center border-2 border-solid border-black"
                                        type="text"
                                        id="sortOrder"
                                        {...register("sortOrder", {
                                            required: {
                                                value: true,
                                                message:
                                                    "SortOrder is required",
                                            },
                                            validate: {
                                                notEmpty: (fieldValue) => {
                                                    return (
                                                        fieldValue !== "" ||
                                                        "SortOrder cannot be empty"
                                                    );
                                                },
                                                isInt: (fieldValue) => {
                                                    const num = parseInt(
                                                        fieldValue,
                                                        10
                                                    );
                                                    return (
                                                        (!isNaN(num) &&
                                                            num.toString() ===
                                                                fieldValue) ||
                                                        "SortOrder must be an integer"
                                                    );
                                                },
                                            },
                                        })}
                                    />
                                    <p className="mx-auto mt-2 text-red-500">
                                        {errors.sortOrder?.message}
                                    </p>
                                </div>
                            </div>
                            <button className="w-fit flex mx-auto my-2 px-2 text-xl text-green-500 hover:text-white border-2 border-solid border-green-500 hover:bg-green-500">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default EditAboutModal;
