import { useState } from "react";

export const useLeadForm = () => {
    const [formData, setFormData] = useState({ email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Form submitted successfully!");
        setFormData({ email: "", message: "" });
    };

    return { formData, handleChange, handleSubmit };
};