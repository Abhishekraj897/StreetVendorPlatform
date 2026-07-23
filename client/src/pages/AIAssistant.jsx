import { useEffect, useRef, useState } from "react";
import {
    FiSend,
    FiMapPin,
    FiPhone,
    FiStar,
    FiClock,
    FiSearch,
} from "react-icons/fi";
import { askAI } from "../services/aiService";
import { toast } from "react-toastify";

function AIAssistant() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState(null);
    const chatEndRef = useRef(null);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const suggestions = [
        "Best Momos in Patna",
        "Budget Street Food",
        "Best Chai Stall",
        "Best Biryani",
        "Late Night Food",
        "Family Restaurant",
    ];

    const handleAsk = async () => {
        if (!question.trim()) return;

        const userQuestion = question;

        setMessages((prev) => [
            ...prev,
            {
                type: "user",
                text: userQuestion,
            },
        ]);

        setQuestion("");
        setLoading(true);

        try {
            const data = await askAI(userQuestion);

            setAnswer(data);

            setMessages((prev) => [
                ...prev,
                {
                    type: "ai",
                    data,
                },
            ]);
        } catch (error) {
            console.error(error);
            toast.error("AI is currently unavailable. Please try again.");

            const errorData = {
                vendorName: "Error",
                reason: "Something went wrong.",
            };

            setAnswer(errorData);

            setMessages((prev) => [
                ...prev,
                {
                    type: "ai",
                    data: errorData,
                },
            ]);
        }

        setLoading(false);
    };
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages, loading]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

                {/* Hero */}
                <div className="text-center">

                    <div className="inline-flex items-center gap-3 bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-semibold">
                        🤖 AI Powered
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-6 text-gray-800">
                        AI Vendor Assistant
                    </h1>

                    <p className="mt-4 text-gray-600 text-base sm:text-lg">
                        Ask anything and let AI recommend the perfect street vendor for you.
                    </p>

                </div>

                {/* Search Card */}
                <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 mt-10">

                    <div className="flex items-center gap-3 mb-5">

                        <FiSearch className="text-orange-500 text-2xl" />

                        <h2 className="text-2xl font-bold">
                            Ask AI
                        </h2>

                    </div>

                    <textarea
                        rows="4"
                        className="w-full border-2 border-gray-200 focus:border-orange-500 outline-none rounded-2xl p-5 resize-none"
                        placeholder="Example: Best Momos near Patna Junction"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                handleAsk();
                            }
                        }}
                    />

                    <div className="flex flex-wrap gap-3 mt-5">

                        {suggestions.map((item) => (
                            <button
                                key={item}
                                onClick={() => setQuestion(item)}
                                className="bg-orange-100 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-full transition-all duration-300"
                            >
                                {item}
                            </button>
                        ))}

                    </div>

                    <button
                        onClick={handleAsk}
                        disabled={loading}
                        className={`mt-8 w-full sm:w-auto px-8 py-4 rounded-2xl flex items-center gap-3 transition-all duration-300
${loading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-orange-500 hover:bg-orange-600 hover:scale-105"
                            } text-white`}
                    >
                        <FiSend />

                        {loading ? "Thinking..." : "Ask AI"}
                    </button>

                </div>
                <div className="mt-10 space-y-6">

                        {/* Welcome Screen */}
                        {messages.length === 0 && !loading && (

                            <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-10 text-center">

                                <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center text-5xl mx-auto mb-6 shadow-lg">
                                    🤖
                                </div>

                                <h2 className="text-3xl font-bold text-gray-800">
                                    Welcome to AI Vendor Assistant
                                </h2>

                                <p className="mt-4 text-gray-500">
                                    Ask me anything about food, vendors, locations, or recommendations.
                                </p>

                            </div>

                        )}

                        {/* Chat Messages */}
                        {messages.map((msg, index) => (

                            <div key={index}>

                                {msg.type === "user" ? (

                                    <div className="flex justify-end items-end gap-3">

                                        <div className="bg-orange-500 text-white px-5 py-3 rounded-3xl rounded-br-lg max-w-[85%] sm:max-w-xl shadow-lg">
                                            {msg.text}
                                        </div>

                                        <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold shadow-lg">
                                            U
                                        </div>

                                    </div>

                                ) : (

                                    <div className="flex items-start gap-3">

                                        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-lg">
                                            🤖
                                        </div>

                                        <div className="bg-white border shadow-lg rounded-3xl rounded-tl-lg p-5 sm:p-6 max-w-[85%] sm:max-w-2xl hover:shadow-xl transition-all duration-300">

                                            <div className="text-orange-600 font-bold text-lg mb-2">
                                                AI Recommendation
                                            </div>

                                            <h3 className="text-xl font-bold text-gray-800">
                                                {msg.data.vendorName}
                                            </h3>

                                            <p className="mt-3 text-gray-600 leading-7">
                                                {msg.data.reason}
                                            </p>

                                        </div>

                                    </div>

                                )}

                            </div>

                        ))}

                        {/* Typing Indicator */}
                        {loading && (

                            <div className="flex justify-start">

                                <div className="bg-white shadow-lg border rounded-2xl rounded-bl-md px-5 sm:px-6 py-4 max-w-[85%] sm:max-w-md">

                                    <div className="font-bold text-orange-600 mb-3">
                                        🤖 AI is thinking...
                                    </div>

                                    <div className="flex gap-2">

                                        <span className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"></span>

                                        <span
                                            className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"
                                            style={{ animationDelay: "0.15s" }}
                                        ></span>

                                        <span
                                            className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"
                                            style={{ animationDelay: "0.3s" }}
                                        ></span>

                                    </div>

                                </div>

                            </div>

                        )}

                        {/* Auto Scroll Target */}
                        <div ref={chatEndRef}></div>

                    </div>

                    {/* Paste the premium result card here */}

                    {answer && (

                        <div className="mt-10">

                            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">

                                {/* Vendor Image */}
                                {answer.image && (
                                    <div className="overflow-hidden">
                                        <img
                                            src={answer.image}
                                            alt={answer.vendorName}
                                            className="w-full h-72 object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                )}

                                <div className="p-6 sm:p-8">

                                    {/* Header */}
                                    <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5">

                                        <div>

                                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-600">
                                                {answer.vendorName}
                                            </h2>

                                            <div className="flex flex-wrap gap-3 mt-4">

                                                <span className="flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full">
                                                    🍽️ {answer.category}
                                                </span>

                                                <span className="flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full">
                                                    <FiMapPin />
                                                    {answer.location}
                                                </span>

                                                <span className="flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full">
                                                    <FiStar />
                                                    {answer.rating}
                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                    {/* Details */}
                                    <div className="grid md:grid-cols-2 gap-6 mt-8">

                                        <div className="bg-gray-50 rounded-2xl p-5">

                                            <div className="flex items-center gap-3 mb-3">
                                                <FiClock className="text-orange-500" />
                                                <h3 className="font-bold">
                                                    Opening Hours
                                                </h3>
                                            </div>

                                            <p className="text-gray-600">
                                                {answer.openingHours}
                                            </p>

                                        </div>

                                        <div className="bg-gray-50 rounded-2xl p-5">

                                            <h3 className="font-bold mb-3">
                                                Description
                                            </h3>

                                            <p className="text-gray-600">
                                                {answer.description || "No description available."}
                                            </p>

                                        </div>

                                    </div>

                                    {/* AI Recommendation */}
                                    <div className="mt-8 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200">

                                        <h3 className="text-xl font-bold text-orange-700 mb-3">
                                            🤖 AI Recommendation
                                        </h3>

                                        <p className="text-gray-700 leading-7">
                                            {answer.reason}
                                        </p>

                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-4 mt-8">

                                        {answer.phone && (
                                            <a
                                                href={`tel:${answer.phone}`}
                                                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                                            >
                                                <FiPhone />
                                                Call Vendor
                                            </a>
                                        )}

                                        {answer.googleMapsLink && (
                                            <a
                                                href={answer.googleMapsLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                                            >
                                                <FiMapPin />
                                                Open in Google Maps
                                            </a>
                                        )}

                                    </div>

                                </div>

                            </div>

                        </div>

                    )}

                </div>

            </div>
            );
}

            export default AIAssistant;