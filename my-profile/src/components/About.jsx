import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import myPhoto from './mani.jpg'

const About = () => {
    const [keywords, setKeywords] = useState('');
    const [bio, setBio] = useState("I'm an engineering student at Rajastahn Technical University with a passion for building user-friendly web applications using the MERN stack.I'm now looking to apply my technical skills to real-world challenges.I enjoy coding solutions that are both functional and easy for people to use.");
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerateBio = async () => {
        if (!keywords) {
            alert('Please enter some keywords to generate a bio.');
            return;
        }

        setIsLoading(true);
        const originalBio = bio;
        setBio('Generate New Bio...');

        const prompt = `Generate a short, professional, and creative bio for a web developer's portfolio. The bio should be around 50-70 words and incorporate these keywords: "${keywords}". The tone should be enthusiastic and confident.`;
        
        try {
            const generatedText = await callGemini(prompt);
            setBio(generatedText);
        } catch (error) {
            console.error("Error generating bio:", error);
            setBio(originalBio); // Restore original bio on error
            alert("Sorry, something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    async function callGemini(prompt, maxRetries = 3) {
        const payload = { contents: [{ role: "user", parts: [{ text: prompt }] }] };
       const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

        for (let i = 0; i < maxRetries; i++) {
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                
                const result = await response.json();

                if (result.candidates?.[0]?.content?.parts?.[0]?.text) {
                    return result.candidates[0].content.parts[0].text;
                } else {
                    throw new Error('Invalid response structure from Gemini API');
                }
            } catch (error) {
                console.error(`Attempt ${i + 1} failed. Retrying in ${2 ** i} seconds...`, error);
                if (i === maxRetries - 1) throw error;
                await new Promise(resolve => setTimeout(resolve, (2 ** i) * 1000));
            }
        }
        throw new Error('Failed to get a response from Gemini API after multiple retries.');
    }

    return (
        <section id="about" className="bg-[#282828] py-20">
            <div className="container mx-auto px-4">
                <SectionTitle>About Me</SectionTitle>
                
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-shrink-0">
                        <img 
                            src={myPhoto} 
                            alt="A professional photo of Prashant Shringi"
                            className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover border-4 border-[#1DB954] shadow-lg"
                        />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-4 text-white">I'm a Software Developer</h3>
                        <p id="bio-text" className="text-gray-300 mb-6">{bio}</p>
                        
                        <div className="bg-gray-700 p-6 rounded-lg shadow-md text-left">
                            <label htmlFor="bio-keywords" className="font-semibold block mb-2 text-white">Want a different bio? Enter keywords!</label>
                            <input 
                                type="text" 
                                id="bio-keywords" 
                                value={keywords}
                                onChange={(e) => setKeywords(e.target.value)}
                                placeholder="e.g., React expert, problem-solver"
                                className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded-md mb-4"
                            />
                            <button 
                                onClick={handleGenerateBio}
                                disabled={isLoading}
                                className="bg-[#1DB954] text-white font-bold py-2 px-6 rounded-full hover:bg-[#1AA34A] transition-all disabled:bg-gray-500 disabled:cursor-not-allowed"
                            >
                                {isLoading ? 'Thinking...' : 'Generate  Bio'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;