document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const detectButton = document.getElementById('detectButton');
    const detectionResult = document.getElementById('detectionResult');
    const wordCountSpan = document.getElementById('wordCount');

    // Update word count dynamically
    textInput.addEventListener('input', () => {
        const text = textInput.value;
        const words = text.trim().split(/\s+/).filter(word => word.length > 0);
        wordCountSpan.textContent = `Word Count: ${words.length}`;
    });

    detectButton.addEventListener('click', () => {
        const text = textInput.value.trim();
        const words = text.split(/\s+/).filter(word => word.length > 0);
        const wordCount = words.length;

        detectionResult.textContent = 'Analyzing...'; // Provide feedback
        detectionResult.className = 'result-info'; // Reset class

        if (wordCount === 0) {
            detectionResult.textContent = 'Please enter some text to analyze.';
            detectionResult.className = 'result-error';
            return;
        }

        // --- THIS IS THE PLACEHOLDER LOGIC ---
        // In a real application, you would send 'text' to a server/API here.
        // The following is a *highly simplified and unreliable* example
        // just to demonstrate UI update. It DOES NOT detect AI.

        console.log(`Simulating analysis for ${wordCount} words.`);

        // Simulate network delay and basic "analysis"
        setTimeout(() => {
            let resultText = '';
            let resultClass = 'result-info';

            // Example: Very basic, unreliable check (e.g., based on length)
            // DO NOT RELY ON THIS FOR ACTUAL DETECTION
            if (wordCount > 50 && wordCount < 500) {
                // Purely arbitrary example
                 const likelyHumanPercentage = Math.round(Math.random() * 30 + 70); // Mostly likely human
                 resultText = `Based on placeholder analysis, the text is likely ${likelyHumanPercentage}% Human-Generated. (This is NOT a real AI detection score).`;
                 resultClass = 'result-human';

            } else if (wordCount >= 500) {
                // Purely arbitrary example
                const likelyAiPercentage = Math.round(Math.random() * 40 + 60); // Mostly likely AI
                resultText = `Based on placeholder analysis, the text is potentially ${likelyAiPercentage}% AI-Generated. (This is NOT a real AI detection score).`;
                resultClass = 'result-ai';
            }
             else {
                resultText = 'Text is too short for meaningful placeholder analysis.';
                 resultClass = 'result-info';
            }

            // Add a final disclaimer again
            resultText += "<br><br><strong>Remember:</strong> True AI detection requires advanced server-side analysis.";

            detectionResult.innerHTML = resultText; // Use innerHTML to allow the <br> tag
            detectionResult.className = resultClass;

        }, 1500); // Simulate a 1.5 second analysis time
        // --- END OF PLACEHOLDER LOGIC ---
    });
});
