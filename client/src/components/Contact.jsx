import React, { useState } from "react";
// import "./Contact.css";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const API_URL = "http://localhost:5000/api/contact";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const res = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        const data = await res.json();
        setLoading(false);

        if (data.success) {
            setStatus("Message sent successfully ✔");
            setForm({ name: "", email: "", message: "" });
        } else {
            setStatus("Something went wrong ❌");
        }
    };

    return (
        <section id="contact" className="py-5 section-dark fade-up">
            <div className="container">

                {/* Title */}
                <div className="text-center mb-4">
                    <h2 className="text-white fw-bold display-6">
                        Contact <span className="accent">Me</span>
                    </h2>
                </div>

                {/* Form */}
                <div className="row justify-content-center">
                    <div className="col-lg-6">

                        <form className="contact-form" onSubmit={handleSubmit}>

                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control input-dark"
                                    placeholder="Your Name"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control input-dark"
                                    placeholder="Your Email"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <textarea
                                    rows="4"
                                    className="form-control input-dark"
                                    placeholder="Your Message"
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-accent w-100 py-2">
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </form>

                        {/* Status Message */}
                        {status && <p className="text-center mt-3 status-text">{status}</p>}
                    </div>
                </div>

            </div>
        </section>
    );
}
