// HESI Exam Study Content - Extracted from HESI Admission Assessment Exam Review

export const subjectData = {
  math: {
    icon: '🔢',
    title: 'Mathematics',
    topics: [
      {
        title: 'Basic Addition and Subtraction',
        description: 'Whole number operations and place value',
        content: `Basic Addition and Subtraction

Digit: Any number 1 through 9 and 0 (e.g., the number 7 is a digit)

Place Value: The value of a digit based on its position in a number. From right to left: ones, tens, hundreds, thousands, ten-thousands, hundred-thousands, millions.

Addition Steps:
1. Line up the digits according to place value
2. Add starting from the ones place
3. If the sum is 10 or more, carry the tens digit to the next place value
4. Continue adding each place value

Subtraction Steps:
1. Line up the digits according to place value
2. Subtract starting from the ones place
3. If you cannot subtract, borrow from the next place value
4. Continue subtracting each place value

HESI Hint: When adding or subtracting, always start from the right (ones place) and work your way left.`
      },
      // ... (other math topics unchanged)
    ]
  },
  vocabulary: {
    icon: '📚',
    title: 'Vocabulary',
    topics: [
      // ... (vocabulary topics unchanged)
    ]
  },
  grammar: {
    icon: '✍️',
    title: 'Grammar',
    topics: [
      // ... (grammar topics unchanged)
    ]
  },
  reading: {
    icon: '📖',
    title: 'Reading Comprehension',
    topics: [
      // ... (reading topics unchanged)
    ]
  }
}

// Comprehensive Quiz Question Bank - Extracted from HESI Admission Assessment Exam Review

import extractedQuestions from './extracted_questions.json'

export const quizData = {
  math: extractedQuestions.math,
  vocabulary: extractedQuestions.vocabulary,
  grammar: extractedQuestions.grammar,
  reading: extractedQuestions.reading
}

// Function to shuffle array (Fisher-Yates algorithm)
export function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Function to get randomized quiz questions
export function getRandomizedQuiz(subject, count = 10) {
  const questions = quizData[subject] || []
  const shuffled = shuffleArray(questions)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
