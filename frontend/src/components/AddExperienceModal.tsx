import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm, useFieldArray, FieldErrors } from "react-hook-form";
import { useSnackbar } from "notistack";

import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";

type FormValues = {
    role: string;
    employer: string;
    dates: string;
    location: string;
    description: { bullet: string }[];
    icon: string;
    sortOrder: string;
};

const backend = import.meta.env.VITE_BACKEND_URL;

const AddExperienceModal = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [open, setOpen] = useState(false);
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues: {
            role: "",
            employer: "",
            dates: "",
            location: "",
            description: [{ bullet: "" }],
            icon: "",
            sortOrder: "",
        },
    });

    const { fields, append, remove } = useFieldArray({
        name: "description",
        control,
    });

    const onSubmit = (formData: FormValues) => {
        console.log(formData);
        const data = {
            ...formData,
            description: formData.description.map((item) => item.bullet),
            sortOrder: parseInt(formData.sortOrder, 10),
        };
        axios
            .post(`${backend}/experience-collection/`, data, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem(
                        "authToken"
                    )}`,
                },
            })
            .then(() => {
                setOpen(false);
                enqueueSnackbar("Experience added successfully", {
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

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const mapFields = [
        "role",
        "employer",
        "dates",
        "location",
        "icon",
    ] as const;

    return (
        <div>
            <Link onClick={() => handleOpen()} to="">
                <Button className="mx-auto mt-4">Add Experience</Button>
            </Link>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="w-fit m-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center shadow border-2 border-solid border-black bg-white">
                    <h1 className="w-fit mx-auto mt-2 text-3xl 2xl:text-4x">
                        Add Experience
                    </h1>
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
                                <label
                                    className="text-center text-xl"
                                    htmlFor="description"
                                >
                                    Description
                                </label>
                                {fields.map((field, index) => (
                                    <div
                                        key={field.id}
                                        className="flex flex-row justify-between"
                                    >
                                        <input
                                            className="w-4/6 h-fit my-auto px-2 text-center border-2 border-solid border-black"
                                            type="text"
                                            {...register(
                                                `description.${index}.bullet` as const,
                                                {
                                                    required:
                                                        "Description is required",
                                                }
                                            )}
                                        />
                                        <button
                                            type="button"
                                            className="w-fit block my-2 px-2 text-red-500 hover:text-white border-2 border-solid border-red-500 hover:border-red-500 hover:bg-red-500"
                                            onClick={() => remove(index)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    className="w-fit block mx-auto my-2 px-2 text-green-500 hover:text-white border-2 border-solid border-green-500 hover:bg-green-500"
                                    onClick={() => append({ bullet: "" })}
                                >
                                    Add Bullet
                                </button>
                            </div>
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

export default AddExperienceModal;
