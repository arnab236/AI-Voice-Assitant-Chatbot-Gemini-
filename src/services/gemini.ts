import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyC3220hbQ5K05SVfjOaAj6YG1n3Gd1j3Kg'; // Add your Gemini API key here
const genAI = new GoogleGenerativeAI(API_KEY);

export async function getChatResponse(message: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error getting chat response:', error);
    return 'Sorry, I encountered an error. Please try again.';
  }
}