import React from "react";
import { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm, useFieldArray, FieldErrors } from "react-hook-form";
import { useSnackbar } from "notistack";

import Modal from "@mui/material/Modal";
import Spinner from "./Spinner";

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

interface EditExperienceModalProps {
    id: string;
}

const EditExperienceModal = ({ id }: EditExperienceModalProps) => {
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const [open, setOpen] = useState(false);
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
        reset,
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
            .put(`${backend}/experience-collection/${id}`, data)
            .then(() => {
                setOpen(false);
                enqueueSnackbar("Experience edited successfully", {
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
            .get(`${backend}/experience-collection/${id}`)
            .then((response) => {
                console.log(response.data);
                reset({
                    role: response.data.role,
                    employer: response.data.employer,
                    dates: response.data.dates,
                    location: response.data.location,
                    description: response.data.description.map(
                        (item: string) => ({ bullet: item })
                    ),
                    icon: response.data.icon,
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
                        Edit Experience
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
                                <label
                                    className="text-center text-xl"
                                    htmlFor="description"
                                >
                                    Description
                                </label>
                                {fields.map((field, index) => (
                                    <div
                                        key={field.id}
                                        className="flex items-center"
                                    >
                                        <input
                                            className="w-96 mt-2 px-2 text-center border-2 border-solid border-black"
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
                                            className="ml-2 px-2 border-2 border-solid border-red-500 hover:bg-red-500 text-red-500 hover:text-white"
                                            onClick={() => remove(index)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    className="w-fit mt-2 px-2 border-2 border-solid border-green-500 hover:bg-green-500 text-green-500 hover:text-white"
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
                            <button className="w-fit flex mx-auto my-2 px-2 text-xl border-2 hover:border-green-500">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default EditExperienceModal;
