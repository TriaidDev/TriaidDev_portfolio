
import { toast } from '@/components/ui/use-toast';

// In a real production environment, these functions would 
// connect to a real backend server. For now, we'll simulate 
// the API behavior for demonstration.

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Function to handle form submission
export const submitContactForm = async (formData: FormData): Promise<{ success: boolean; message: string }> => {
  // Log the form data for demonstration
  console.info("Form submitted:", formData);
  
  // Simulate API request delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simulate successful submission
  // In a real app, this would be an actual API call to your backend
  
  try {
    // Example of how you would send this to a real backend:
    // const response = await fetch('https://your-backend-api.com/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
    // const data = await response.json();
    // return data;
    
    // For now, we'll simulate a successful response
    return {
      success: true,
      message: "Thank you for your message! We'll get back to you soon."
    };
  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      success: false,
      message: "There was an error submitting your message. Please try again later."
    };
  }
};

// Function to validate email format
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
