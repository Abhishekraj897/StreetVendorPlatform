const ai = require("../config/gemini");
const groq = require("../config/groq");
const Vendor = require("../models/Vendor");

const askAI = async (req, res) => {
    try {
        const { question } = req.body;

        const vendors = await Vendor.find();

        const vendorData = vendors.map((vendor) => ({
            name: vendor.name,
            category: vendor.category,
            location: vendor.location,
            rating: vendor.rating,
            description: vendor.description,
            openingHours: vendor.openingHours,
            image: vendor.image,
            phone: vendor.phone,
            googleMapsLink: vendor.googleMapsLink,
        }));

        const prompt = `
You are an AI assistant for a Street Vendor Discovery Platform.

Vendor Database:
${JSON.stringify(vendorData, null, 2)}

User Question:
${question}

Return ONLY valid JSON in this format.

{
    "vendorName": "",
  "category": "",
  "location": "",
  "rating": "",
  "openingHours": "",
  "description": "",
  "image": "",
  "phone": "",
  "googleMapsLink": "",
  "reason": ""
}

Do not add markdown.
Do not add explanation outside JSON.
If no vendor matches, return:

{
  "vendorName": "Not Found",
  "reason": "No suitable vendor found."
}
`;

        let aiText = "";

        try {
            console.log("Using Gemini...");
            console.log("1. Sending request to Gemini...");

            const geminiPromise = ai.models.generateContent({
                model: "gemini-3.5-flash",
                contents: prompt,
            });

            console.log("2. Promise created");

            const timeoutPromise = new Promise((_, reject) =>
                setTimeout(() => reject(new Error("Gemini Timeout")), 10000)
            );

            console.log("3. Timeout created");

            const result = await Promise.race([
                geminiPromise,
                timeoutPromise,
            ]);

            console.log("4. Gemini responded");

            aiText = result.text.trim();

            console.log("5. Response parsed");

        } catch (error) {

            console.log("Gemini Error:", error.message);
            console.log("Switching to Groq...");

            const completion = await groq.chat.completions.create({
                model: "llama-3.3-70b-versatile",
                messages: [
                    {
                        role: "user",
                        content: prompt,
                    },
                ],
                temperature: 0.5,
            });

            aiText = completion.choices[0].message.content.trim();
        }

        const aiResponse = JSON.parse(aiText);

        res.json(aiResponse);

    } catch (error) {
        console.error(error);

        if (error.status === 503) {
            return res.status(503).json({
                message: "Gemini AI is currently busy. Please try again in a few seconds.",
            });
        }

        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = { askAI };