import React from "react";
import { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm, FieldErrors, useFieldArray } from "react-hook-form";
import { useSnackbar } from "notistack";

import Modal from "@mui/material/Modal";
import Spinner from "./Spinner";

type FormValues = {
    title: string;
    image: string;
    description: string;
    technologies: string[];
    technologiesObj: { tech: string }[];
    linkTitles: string[];
    linkTitlesObj: { linkTitle: string }[];
    linkURLs: string[];
    linkURLsObj: { linkURL: string }[];
    sortOrder: string;
};

const backend = import.meta.env.VITE_BACKEND_URL;

interface EditProjectModalProps {
    id: string;
}

const EditProjectModal = ({ id }: EditProjectModalProps) => {
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
            title: "",
            image: "",
            description: "",
            technologies: [""],
            technologiesObj: [{ tech: "" }],
            linkTitles: [""],
            linkTitlesObj: [{ linkTitle: "" }],
            linkURLs: [""],
            linkURLsObj: [{ linkURL: "" }],
            sortOrder: "",
        },
    });

    const onSubmit = (formData: FormValues) => {
        console.log(formData);
        const data = {
            ...formData,
            technologies: formData.technologiesObj.map((item) => item.tech),
            linkTitles: formData.linkTitlesObj.map((item) => item.linkTitle),
            linkURLs: formData.linkURLsObj.map((item) => item.linkURL),
            sortOrder: parseInt(formData.sortOrder, 10),
        };
        axios
            .put(`${backend}/project-collection/${id}`, data)
            .then(() => {
                setOpen(false);
                enqueueSnackbar("Project edited successfully", {
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

    const {
        fields: technologyFields,
        append: appendTechnology,
        remove: removeTechnology,
    } = useFieldArray({
        name: "technologiesObj",
        control,
    });

    const {
        fields: linkTitlesFields,
        append: appendLinkTitle,
        remove: removeLinkTitle,
    } = useFieldArray({
        name: "linkTitlesObj",
        control,
    });

    const {
        fields: linkURLsFields,
        append: appendLinkURL,
        remove: removeLinkURL,
    } = useFieldArray({
        name: "linkURLsObj",
        control,
    });

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${backend}/project-collection/${id}`)
            .then((response) => {
                console.log(response.data);
                reset({
                    title: response.data.title,
                    image: response.data.image,
                    description: response.data.description,
                    technologies: response.data.technologies,
                    technologiesObj: response.data.technologies.map(
                        (item: string) => ({ tech: item })
                    ),
                    linkTitles: response.data.linkTitles,
                    linkTitlesObj: response.data.linkTitles.map(
                        (item: string) => ({ linkTitle: item })
                    ),
                    linkURLs: response.data.linkURLs,
                    linkURLsObj: response.data.linkURLs.map((item: string) => ({
                        linkURL: item,
                    })),
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

    const mapFields = ["title", "image", "description"] as const;

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
                        Edit Skill
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
                            <div className="mx-auto border-1 rounded-lg">
                                <label
                                    className="w-fit block mx-auto my-2 text-center text-xl"
                                    htmlFor="technologies"
                                >
                                    Technologies
                                </label>
                                <div>
                                    {technologyFields.map((field, index) => {
                                        return (
                                            <div
                                                className="form-control"
                                                key={field.id}
                                            >
                                                <div className="flex flex-row justify-between">
                                                    <input
                                                        type="text"
                                                        className="h-fit my-auto px-2 text-center border-2 border-solid border-black"
                                                        {...register(
                                                            `technologiesObj.${index}.tech` as const
                                                        )}
                                                    />
                                                    {index > 0 && (
                                                        <button
                                                            type="button"
                                                            className="w-fit block my-2 px-2 text-xl border-2 hover:border-red-500"
                                                            onClick={() =>
                                                                removeTechnology(
                                                                    index
                                                                )
                                                            }
                                                        >
                                                            Remove
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                    <button
                                        type="button"
                                        className="w-fit block mx-auto my-2 px-2 text-xl border-2 hover:border-green-500"
                                        onClick={() =>
                                            appendTechnology({ tech: "" })
                                        }
                                    >
                                        Add technology
                                    </button>
                                </div>
                            </div>
                            <div className="mx-auto border-1 rounded-lg">
                                <label
                                    className="w-fit block mx-auto my-2 text-center text-xl"
                                    htmlFor="linkTitles"
                                >
                                    Link Titles
                                </label>
                                <div>
                                    {linkTitlesFields.map((field, index) => {
                                        return (
                                            <div
                                                className="form-control"
                                                key={field.id}
                                            >
                                                <div className="flex flex-row justify-between">
                                                    <input
                                                        type="text"
                                                        className="h-fit my-auto px-2 text-center border-2 border-solid border-black"
                                                        {...register(
                                                            `linkTitlesObj.${index}.linkTitle` as const
                                                        )}
                                                    />
                                                    {index > 0 && (
                                                        <button
                                                            type="button"
                                                            className="w-fit block my-2 px-2 text-xl border-2 hover:border-red-500"
                                                            onClick={() =>
                                                                removeLinkTitle(
                                                                    index
                                                                )
                                                            }
                                                        >
                                                            Remove
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                    <button
                                        type="button"
                                        className="w-fit block mx-auto my-2 px-2 text-xl border-2 hover:border-green-500"
                                        onClick={() =>
                                            appendLinkTitle({ linkTitle: "" })
                                        }
                                    >
                                        Add link title
                                    </button>
                                </div>
                            </div>
                            <div className="mx-auto border-1 rounded-lg">
                                <label
                                    className="w-fit block mx-auto my-2 text-center text-xl"
                                    htmlFor="linkURLs"
                                >
                                    Link URLs
                                </label>
                                <div>
                                    {linkURLsFields.map((field, index) => {
                                        return (
                                            <div
                                                className="form-control"
                                                key={field.id}
                                            >
                                                <div className="flex flex-row justify-between">
                                                    <input
                                                        type="text"
                                                        className="h-fit my-auto px-2 text-center border-2 border-solid border-black"
                                                        {...register(
                                                            `linkURLsObj.${index}.linkURL` as const
                                                        )}
                                                    />
                                                    {index > 0 && (
                                                        <button
                                                            type="button"
                                                            className="w-fit block my-2 px-2 text-xl border-2 hover:border-red-500"
                                                            onClick={() =>
                                                                removeLinkURL(
                                                                    index
                                                                )
                                                            }
                                                        >
                                                            Remove
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                    <button
                                        type="button"
                                        className="w-fit block mx-auto my-2 px-2 text-xl border-2 hover:border-green-500"
                                        onClick={() =>
                                            appendLinkURL({ linkURL: "" })
                                        }
                                    >
                                        Add link title
                                    </button>
                                </div>
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

export default EditProjectModal;
