import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getVendorById, updateVendor } from "../services/vendorService";

function EditVendor() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        category: "",
        location: "",
        rating: "",
        image: "",
        description: "",
        phone: "",
        openingHours: "",
    });

    useEffect(() => {
        const loadVendor = async () => {
            const data = await getVendorById(id);

            setFormData({
                name: data.name,
                category: data.category,
                location: data.location,
                rating: data.rating,
                image: data.image,
                description: data.description,
                phone: data.phone,
                openingHours: data.openingHours,
            });
        };

        loadVendor();
    }, [id]);
    const handleSubmit = async (e) => {
        e.preventDefault();

        await updateVendor(id, formData);

        alert("Vendor updated successfully!");

        navigate("/my-vendors");
    };

    if (!formData.name) {
        return <h2 className="text-center mt-10">Loading...</h2>;
    }

    return (
        <div className="max-w-4xl mx-auto p-10">
            <h1 className="text-4xl font-bold mb-6">
                Edit Vendor
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">

                <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full border p-3 rounded"
                    placeholder="Vendor Name"
                />

                <input
                    type="text"
                    value={formData.category}
                    onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                    }
                    className="w-full border p-3 rounded"
                    placeholder="Category"
                />

                <input
                    type="text"
                    value={formData.location}
                    onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                    }
                    className="w-full border p-3 rounded"
                    placeholder="Location"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
                >
                    Update Vendor
                </button>

            </form>
        </div>

    );
}

export default EditVendor;