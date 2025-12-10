import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ChatMessage, BusinessConfig } from '../types';

const getAiInstance = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateAiResponse = async (
  history: ChatMessage[],
  newMessage: string,
  businessConfig: BusinessConfig
): Promise<string> => {
  const ai = getAiInstance();
  if (!ai) return "I'm currently offline. Please contact us directly.";

  const context = `
    You are the Student Admissions Assistant for "${businessConfig.name}", a prestigious ${businessConfig.industry}.
    
    Here is our course curriculum and pricing:
    ${businessConfig.services.map(s => `- ${s.title}: ${s.price} (${s.duration}). ${s.description}`).join('\n')}
    
    About Us: ${businessConfig.about}
    
    Your goal is to answer questions about learning to cut hair, getting certified, and starting a career as a barber.
    Encourage potential students to "Apply Now" or "Book a Tour" using the form on the page.
    Keep your answers concise (under 50 words) and professional but edgy/cool.
    If asked about class schedules, mention that new cohorts start the first Monday of every month.
  `;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        { role: 'user', parts: [{ text: context }] }, // Pre-prompt context
        ...history.map(msg => ({
          role: msg.role,
          parts: [{ text: msg.text }]
        })),
        { role: 'user', parts: [{ text: newMessage }] }
      ],
      config: {
        systemInstruction: "You are a knowledgeable and encouraging admissions advisor for a barber academy.",
        temperature: 0.7,
      }
    });

    return response.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my brain right now. Please try again later.";
  }
};