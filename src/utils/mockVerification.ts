// This is a mock verification service that simulates ML model response
// Replace this with actual Java backend integration later

export async function verifyTransaction(image: File): Promise<{
  isValid: boolean;
  confidence: number;
}> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Mock verification logic
  const randomValue = Math.random();
  return {
    isValid: randomValue > 0.5,
    confidence: 0.7 + (Math.random() * 0.3), // Random confidence between 0.7 and 1.0
  };
}