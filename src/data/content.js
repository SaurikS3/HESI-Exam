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

HESI Hint: When adding or subtracting, always start from the right (ones place) and work your way left.`,
        practice: [
          { question: '1,283 + 188 = ?', answer: '1,471' },
          { question: '273 + 47 = ?', answer: '320' },
          { question: '1,644 + 357 = ?', answer: '2,001' },
          { question: '382 - 150 = ?', answer: '232' },
          { question: '246 - 47 = ?', answer: '199' },
          { question: '568 - 170 = ?', answer: '398' },
          { question: '17,444 - 923 = ?', answer: '16,521' },
          { question: 'Sam walks 2 blocks to Stacey\'s house. They both walk 5 blocks to the park. How far has Sam walked?', answer: '7 blocks' },
          { question: 'Lisa buys 12 eggs from the store and uses 4 for breakfast. How many eggs remain?', answer: '8 eggs' }
        ]
      },
      {
        title: 'Basic Multiplication',
        description: 'Multiplying whole numbers',
        content: `Basic Multiplication (Whole Numbers)

Multiplication is repeated addition. When multiplying multi-digit numbers:

Steps:
1. Multiply the multiplicand by each digit of the multiplier, starting from the right
2. For each subsequent digit, shift one place to the left (add a zero placeholder)
3. Add all partial products together

Example: 713 × 24
  713
×  24
-----
2852   (713 × 4)
14260  (713 × 2, shifted one place)
-----
17112

HESI Hint: When multiplying by a two-digit number, remember the second partial product shifts one place to the left.`,
        practice: [
          { question: '67 × 23 = ?', answer: '1,541' },
          { question: '211 × 42 = ?', answer: '8,862' },
          { question: '821 × 22 = ?', answer: '18,062' },
          { question: '529 × 47 = ?', answer: '24,863' },
          { question: '954 × 75 = ?', answer: '71,550' },
          { question: '262 × 94 = ?', answer: '24,628' },
          { question: '123 × 529 = ?', answer: '65,067' },
          { question: 'It takes 18 man-hours to build a car. How many man-hours for 92 cars?', answer: '1,656 man-hours' },
          { question: 'A bakery sells boxes with 13 donuts each. If they sell 52 boxes, how many donuts?', answer: '676 donuts' }
        ]
      },
      {
        title: 'Basic Division',
        description: 'Dividing whole numbers with remainders',
        content: `Basic Division (Whole Numbers)

Division is splitting a number into equal parts.

Steps:
1. Set up the division problem
2. Divide starting from the leftmost digit
3. Multiply the quotient by the divisor
4. Subtract from the dividend
5. Bring down the next digit
6. Repeat until complete
7. Handle remainders by adding a decimal point

Example: 163 ÷ 5 = 32.6
  32.6
5)163.0
  -15
   13
  -10
    30
   -30
     0

HESI Hint: When you get a remainder but need an exact answer, add a decimal point and zeros to continue dividing.`,
        practice: [
          { question: '135 ÷ 9 = ?', answer: '15' },
          { question: '8,400 ÷ 4 = ?', answer: '2,100' },
          { question: '3,732 ÷ 2 = ?', answer: '1,866' },
          { question: '357 ÷ 17 = ?', answer: '21' },
          { question: '4,725 ÷ 9 = ?', answer: '525' },
          { question: '2,925 ÷ 3 = ?', answer: '975' },
          { question: '787 ÷ 8 = ?', answer: '98.375' },
          { question: 'A factory produces 4,500 items in 5 hours. How many per hour?', answer: '900 items' }
        ]
      },
      {
        title: 'Decimals - Addition and Subtraction',
        description: 'Working with decimal numbers',
        content: `Addition and Subtraction of Decimals

The word "and" stands for the decimal point when writing numbers in words.
Example: 5.7 = "five and seven tenths"

Addition Steps:
1. Align the decimal points vertically
2. Add zeros if needed to make equal decimal places
3. Add as with whole numbers
4. Place the decimal point in the answer directly below the aligned decimal points

Subtraction Steps:
1. Align the decimal points
2. Add zeros if needed
3. Borrow if necessary
4. Subtract as with whole numbers
5. Bring down the decimal point

HESI Hint: Always line up decimal points before adding or subtracting decimals.`,
        practice: [
          { question: '1.3 + 7.2 = ?', answer: '8.5' },
          { question: '6 + 22.13 = ?', answer: '28.13' },
          { question: '3.14 + 8 = ?', answer: '11.14' },
          { question: '22 - 7.99 = ?', answer: '14.01' },
          { question: '15.775 + 30 = ?', answer: '45.775' },
          { question: '52.57 - 33.31 = ?', answer: '19.26' }
        ]
      },
      {
        title: 'Decimals - Multiplication and Division',
        description: 'Multiplying and dividing decimals',
        content: `Multiplication of Decimals

Steps:
1. Multiply as if the numbers were whole numbers
2. Count the total decimal places in both numbers
3. Place the decimal point in the answer, counting from right to left

Example: 81.2 × 4.2
  812 × 42 = 34,104
  1 decimal place + 1 decimal place = 2 decimal places
  Answer: 341.04

Division of Decimals

Steps:
1. Make the divisor a whole number by moving the decimal point
2. Move the decimal point in the dividend the same number of places
3. Divide as with whole numbers
4. Place the decimal in the quotient directly above

HESI Hint: What is done to the divisor must be done to the dividend. Move both decimal points the same number of places.`,
        practice: [
          { question: '0.012 × 3.27 = ?', answer: '0.03924' },
          { question: '22.79 × 6 = ?', answer: '136.74' },
          { question: '4.867 × 12.5 = ?', answer: '60.8375' },
          { question: '1.5 ÷ 0.3 = ?', answer: '5' },
          { question: '48 ÷ 0.4 = ?', answer: '120' },
          { question: '5.202 ÷ 0.45 = ?', answer: '11.56' },
          { question: '912 ÷ 0.2 = ?', answer: '4,560' }
        ]
      },
      {
        title: 'Fractions - Basics',
        description: 'Understanding and reducing fractions',
        content: `Understanding Fractions

Numerator: The top number (how many parts you have)
Denominator: The bottom number (how many equal parts in the whole)

Types of Fractions:
• Proper fraction: numerator < denominator (e.g., 3/4)
• Improper fraction: numerator ≥ denominator (e.g., 5/4)
• Mixed number: whole number + fraction (e.g., 1 1/4)

Reducing Fractions (Lowest Terms):
Divide both numerator and denominator by their Greatest Common Factor (GCF)

Example: 15/20 = 15÷5 / 20÷5 = 3/4

Finding Least Common Denominator (LCD):
Find the smallest number that both denominators divide into evenly

HESI Hint: To reduce a fraction, find the largest number that divides evenly into both the numerator and denominator.`,
        practice: [
          { question: 'Reduce 12/16 to lowest terms', answer: '3/4' },
          { question: 'Reduce 15/25 to lowest terms', answer: '3/5' },
          { question: 'What is the LCD of 1/4 and 1/6?', answer: '12' },
          { question: 'Convert 11/4 to a mixed number', answer: '2 3/4' },
          { question: 'Convert 3 1/2 to an improper fraction', answer: '7/2' }
        ]
      },
      {
        title: 'Fractions - Addition and Subtraction',
        description: 'Adding and subtracting fractions',
        content: `Adding Fractions with Like Denominators:
Add the numerators, keep the denominator the same

Adding Fractions with Unlike Denominators:
1. Find the LCD
2. Convert each fraction to an equivalent fraction with the LCD
3. Add the numerators
4. Keep the common denominator
5. Reduce if needed

Subtracting Fractions:
Follow the same process, but subtract numerators

Example: 3/4 + 1/3
LCD = 12
3/4 = 9/12
1/3 = 4/12
9/12 + 4/12 = 13/12 = 1 1/12

HESI Hint: You can only add or subtract fractions when they have the same denominator.`,
        practice: [
          { question: '2/5 + 1/5 = ?', answer: '3/5' },
          { question: '3/4 + 1/3 = ?', answer: '13/12 or 1 1/12' },
          { question: '5/6 - 1/4 = ?', answer: '7/12' },
          { question: '7/8 - 1/2 = ?', answer: '3/8' },
          { question: '2 1/4 + 1 1/3 = ?', answer: '3 7/12' }
        ]
      },
      {
        title: 'Fractions - Multiplication and Division',
        description: 'Multiplying and dividing fractions',
        content: `Multiplying Fractions:
1. Multiply the numerators together
2. Multiply the denominators together
3. Reduce to lowest terms

Example: 2/3 × 5/8 = 10/24 = 5/12

Dividing Fractions:
1. Keep the first fraction
2. Change division to multiplication
3. Flip the second fraction (take reciprocal)
4. Multiply and reduce

Example: 1/3 ÷ 3/4 = 1/3 × 4/3 = 4/9

HESI Hint: "Keep, Change, Flip" - Keep the first fraction, Change ÷ to ×, Flip the second fraction.`,
        practice: [
          { question: '2/3 × 5/8 = ?', answer: '5/12' },
          { question: '3/4 × 2/5 = ?', answer: '3/10' },
          { question: '1/2 ÷ 1/4 = ?', answer: '2' },
          { question: '3/4 ÷ 1/2 = ?', answer: '3/2 or 1 1/2' },
          { question: '2 1/2 × 1/3 = ?', answer: '5/6' }
        ]
      },
      {
        title: 'Converting Fractions and Decimals',
        description: 'Converting between fractions and decimals',
        content: `Changing Fractions to Decimals:
Divide the numerator by the denominator

Example: 1/4 = 1 ÷ 4 = 0.25

Changing Decimals to Fractions:
1. Write the decimal over the appropriate place value
2. Reduce to lowest terms

Example: 0.75 = 75/100 = 3/4

Common Conversions:
1/2 = 0.5 = 50%
1/4 = 0.25 = 25%
3/4 = 0.75 = 75%
1/3 = 0.333... = 33.3%
1/5 = 0.2 = 20%

HESI Hint: Memorize common fraction-decimal-percent equivalents. They appear frequently on the exam!`,
        practice: [
          { question: 'Convert 3/4 to a decimal', answer: '0.75' },
          { question: 'Convert 2/5 to a decimal', answer: '0.4' },
          { question: 'Convert 0.6 to a fraction', answer: '3/5' },
          { question: 'Convert 0.125 to a fraction', answer: '1/8' },
          { question: 'Convert 1/8 to a decimal', answer: '0.125' }
        ]
      },
      {
        title: 'Ratios and Proportions',
        description: 'Working with ratios and solving proportions',
        content: `Ratios:
A ratio compares two quantities. It can be written as:
• a:b (colon form)
• a/b (fraction form)
• a to b (word form)

Proportions:
A proportion states that two ratios are equal.
a/b = c/d  OR  a:b :: c:d

Solving Proportions (Cross Multiplication):
If a/b = c/d, then a × d = b × c

Example: Solve for x: 3/4 = x/12
3 × 12 = 4 × x
36 = 4x
x = 9

HESI Hint: "Inside × Inside = Outside × Outside" or Cross multiply to solve proportions.`,
        practice: [
          { question: 'Solve: 2/5 = x/15', answer: 'x = 6' },
          { question: 'Solve: x/8 = 12/32', answer: 'x = 3' },
          { question: 'Solve: 4:5 :: 16:x', answer: 'x = 20' },
          { question: 'If 3 apples cost $1.50, how much for 7 apples?', answer: '$3.50' },
          { question: 'Express 15:25 in lowest terms', answer: '3:5' }
        ]
      },
      {
        title: 'Percentages',
        description: 'Converting and calculating percentages',
        content: `Percent means "per hundred"

Converting Decimals to Percents:
Move the decimal point 2 places to the right, add %
Example: 0.31 → 31%

Converting Percents to Decimals:
Move the decimal point 2 places to the left, remove %
Example: 75% → 0.75

Converting Fractions to Percents:
Convert to decimal, then to percent
Example: 3/4 = 0.75 = 75%

The Percent Formula:
Part/Whole = Percent/100

Finding Percent: (Part ÷ Whole) × 100
Finding Part: (Percent × Whole) ÷ 100
Finding Whole: (Part × 100) ÷ Percent

HESI Hint: "Is over Of equals Percent over 100" helps remember the percent formula.`,
        practice: [
          { question: 'What is 25% of 80?', answer: '20' },
          { question: '15 is what percent of 60?', answer: '25%' },
          { question: '30 is 20% of what number?', answer: '150' },
          { question: 'Convert 0.045 to a percent', answer: '4.5%' },
          { question: 'Convert 85% to a decimal', answer: '0.85' },
          { question: 'What is 14 out of 56 as a percent?', answer: '25%' }
        ]
      },
      {
        title: 'Military Time',
        description: '12-hour clock vs 24-hour military time',
        content: `Military Time (24-Hour Clock)

Military time uses a 24-hour clock instead of AM/PM:
• 0000 to 1159 = Midnight to 11:59 AM
• 1200 to 2359 = Noon to 11:59 PM

Converting to Military Time:
• AM times: Write as 4 digits (add leading zero if needed)
  - 8:30 AM = 0830 hours
• PM times: Add 12 to the hour
  - 3:45 PM = 1545 hours

Converting from Military Time:
• 0001-1159: Same (add AM)
• 1200-2359: Subtract 12 (add PM)

Notation:
Can be written as: 1426 hours OR 14:26 hours
With seconds: 1426:30 hours OR 14:26:30 hours

HESI Hint: For PM times, just add 12 to the hour. For military time after 1259, subtract 12 to get standard time.`,
        practice: [
          { question: 'Convert 12:01 AM to military time', answer: '0001 hours' },
          { question: 'Convert 5:30 PM to military time', answer: '1730 hours' },
          { question: 'Convert 6:10:17 AM to military time', answer: '0610:17 hours' },
          { question: 'Convert 1950 hours to standard time', answer: '7:50 PM' },
          { question: 'Convert 0830 hours to standard time', answer: '8:30 AM' }
        ]
      },
      {
        title: 'Algebra - Basics',
        description: 'Variables, expressions, and evaluating',
        content: `Algebra Basics

Variable: A letter representing an unknown number
Algebraic Expression: Combination of variables, numbers, and operations
Equation: Two expressions set equal to each other

Evaluating Expressions:
Substitute given values for variables and calculate

Order of Operations (PEMDAS):
1. Parentheses
2. Exponents
3. Multiplication and Division (left to right)
4. Addition and Subtraction (left to right)

Working with Negative Numbers:
• Adding positive: move right on number line
• Adding negative: move left
• Subtracting negative = Adding positive: 3 - (-1) = 3 + 1 = 4
• Negative × Negative = Positive
• Negative × Positive = Negative

HESI Hint: Remember "Please Excuse My Dear Aunt Sally" for order of operations.`,
        practice: [
          { question: 'Evaluate: 3x + 5 when x = 4', answer: '17' },
          { question: 'Evaluate: 2a - b when a = 5 and b = 3', answer: '7' },
          { question: 'Simplify: -3 - (-7)', answer: '4' },
          { question: 'Calculate: 5 × (-2) + 8', answer: '-2' },
          { question: 'Evaluate: (4 + 2)² ÷ 3', answer: '12' }
        ]
      },
      {
        title: 'Algebra - Solving Equations',
        description: 'Solving for unknown variables',
        content: `Solving Equations

Golden Rule: What you do to one side, you must do to the other side.

Steps to Solve:
1. Simplify each side if needed
2. Get all variable terms on one side
3. Get all constant terms on the other side
4. Divide by the coefficient of the variable

Example: 2x + 18 = -4
Step 1: 2x + 18 - 18 = -4 - 18
Step 2: 2x = -22
Step 3: x = -22 ÷ 2
Step 4: x = -11

Checking Your Answer:
Substitute your answer back into the original equation to verify.

HESI Hint: To isolate the variable, perform inverse operations. If something is added, subtract it. If multiplied, divide.`,
        practice: [
          { question: 'Solve: x + 7 = 15', answer: 'x = 8' },
          { question: 'Solve: 3x = 21', answer: 'x = 7' },
          { question: 'Solve: 2x + 18 = -4', answer: 'x = -11' },
          { question: 'Solve: -7 = 9a - 4', answer: 'a = -1/3' },
          { question: 'Solve: 5x - 3 = 2x + 9', answer: 'x = 4' }
        ]
      },
      {
        title: 'Roman Numerals',
        description: 'Reading and writing Roman numerals',
        content: `Roman Numerals

Basic Symbols:
I = 1
V = 5
X = 10
L = 50
C = 100
D = 500
M = 1,000

Rules:
• When a smaller numeral appears BEFORE a larger one, subtract
• When a smaller numeral appears AFTER a larger one, add

Examples:
IV = 4 (5 - 1)
VI = 6 (5 + 1)
IX = 9 (10 - 1)
XL = 40 (50 - 10)
XC = 90 (100 - 10)

Common Values:
XX = 20, XXX = 30, XL = 40, L = 50
LX = 60, LXX = 70, LXXX = 80, XC = 90

HESI Hint: Medical professionals often use Roman numerals in prescriptions and documentation.`,
        practice: [
          { question: 'Convert IV to Arabic numerals', answer: '4' },
          { question: 'Convert XIV to Arabic numerals', answer: '14' },
          { question: 'Convert XC to Arabic numerals', answer: '90' },
          { question: 'Write 49 in Roman numerals', answer: 'XLIX' },
          { question: 'Write 2024 in Roman numerals', answer: 'MMXXIV' }
        ]
      }
    ]
  },
  vocabulary: {
    icon: '📚',
    title: 'Vocabulary',
    topics: [
      {
        title: 'Medical Terminology Basics',
        description: 'Common medical prefixes and suffixes',
        content: `Medical Terminology

Being able to use a wide range of vocabulary words correctly is considered by some experts to be the best predictor of success in the health care field.

Key Medical Prefixes:
• Anti- = against (antibiotic)
• Bi- = two (bilateral)
• Brady- = slow (bradycardia)
• Cardio- = heart (cardiovascular)
• Dys- = difficult, painful (dyspnea)
• Gastro- = stomach (gastrointestinal)
• Hemo/Hemato- = blood (hematology)
• Hyper- = excessive (hypertension)
• Hypo- = under, low (hypoglycemia)
• Neuro- = nerve (neurology)

Key Medical Suffixes:
• -itis = inflammation (arthritis)
• -ology = study of (cardiology)
• -ectomy = surgical removal (appendectomy)
• -osis = condition (diagnosis)
• -pathy = disease (neuropathy)

HESI Hint: Learning root words, prefixes, and suffixes helps you understand unfamiliar medical terms.`,
        practice: [
          { question: 'What does "bradycardia" mean?', answer: 'Slow heart rate' },
          { question: 'What does the suffix "-itis" indicate?', answer: 'Inflammation' },
          { question: 'What does "hypertension" mean?', answer: 'High blood pressure' },
          { question: 'What does "gastrointestinal" refer to?', answer: 'Stomach and intestines' }
        ]
      },
      {
        title: 'Health Profession Vocabulary',
        description: 'Terms used in healthcare settings',
        content: `Health Profession Vocabulary

Common Terms:

Acute: Sharp, severe; having a rapid onset
Example: The patient presented with acute abdominal pain.

Chronic: Lasting a long time; recurring
Example: The patient has chronic back pain for over two years.

Benign: Not harmful; not cancerous
Example: The tumor was found to be benign.

Malignant: Harmful; cancerous
Example: The biopsy revealed malignant cells.

Diagnosis: Identification of a disease
Example: The diagnosis was confirmed through blood tests.

Prognosis: Predicted outcome of a disease
Example: The prognosis for full recovery is excellent.

Symptom: Evidence of disease perceived by patient
Example: Fever is a common symptom of infection.

Sign: Objective evidence observed by healthcare provider
Example: Elevated blood pressure is a sign of hypertension.

HESI Hint: Understand the difference between "sign" (observed by provider) and "symptom" (reported by patient).`,
        practice: [
          { question: 'What is the difference between acute and chronic?', answer: 'Acute is sudden/severe; chronic is long-lasting' },
          { question: 'What does "benign" mean in medical terms?', answer: 'Not harmful or cancerous' },
          { question: 'What is a prognosis?', answer: 'Predicted outcome of a disease' }
        ]
      },
      {
        title: 'Body Systems Vocabulary',
        description: 'Terms related to body systems',
        content: `Body Systems Vocabulary

Cardiovascular:
• Cardiac = relating to the heart
• Vascular = relating to blood vessels
• Artery = vessel carrying blood away from heart
• Vein = vessel carrying blood toward heart

Respiratory:
• Pulmonary = relating to lungs
• Dyspnea = difficulty breathing
• Apnea = absence of breathing

Gastrointestinal:
• Gastric = relating to stomach
• Hepatic = relating to liver
• Renal = relating to kidneys

Musculoskeletal:
• Orthopedic = relating to bones/muscles
• Fracture = broken bone
• Sprain = stretched/torn ligament

Neurological:
• Cerebral = relating to brain
• Neural = relating to nerves
• Cognitive = relating to thinking/memory

Integumentary:
• Dermal = relating to skin
• Subcutaneous = beneath the skin

HESI Hint: The suffix "-al" often means "relating to" (renal = relating to kidneys).`,
        practice: [
          { question: 'What does "pulmonary" relate to?', answer: 'Lungs' },
          { question: 'What does "hepatic" mean?', answer: 'Relating to the liver' },
          { question: 'What is dyspnea?', answer: 'Difficulty breathing' },
          { question: 'What does "subcutaneous" mean?', answer: 'Beneath the skin' }
        ]
      }
    ]
  },
  grammar: {
    icon: '✍️',
    title: 'Grammar',
    topics: [
      {
        title: 'Parts of Speech',
        description: 'Nouns, verbs, adjectives, and more',
        content: `Parts of Speech

In the United States, the ability to speak and write the English language using proper grammar is a sign of an educated individual.

NOUN: A word that names a person, place, thing, or idea
• Common nouns: teacher, hospital, medicine
• Proper nouns: Dr. Smith, Memorial Hospital (capitalized)
• Collective nouns: team, staff, committee

VERB: A word that expresses action or state of being
• Action verbs: run, examine, administer
• Linking verbs: is, am, are, was, were
• Helping verbs: have, has, had, will, would

Verb Tenses:
• Present: Mary works
• Past: Mary worked
• Future: Mary will work

ADJECTIVE: A word that modifies a noun
Example: The careful nurse checked the patient's vital signs.

ADVERB: A word that modifies a verb, adjective, or other adverb
Example: The nurse carefully checked the vital signs.

HESI Hint: Adverbs often end in "-ly" and tell how, when, where, or to what extent.`,
        practice: [
          { question: 'Identify the noun: "The doctor examined the patient."', answer: 'doctor, patient' },
          { question: 'What is the verb tense: "She will administer the medication"?', answer: 'Future tense' },
          { question: 'Is "carefully" an adjective or adverb?', answer: 'Adverb' }
        ]
      },
      {
        title: 'Sentence Structure',
        description: 'Subjects, predicates, and sentence types',
        content: `Sentence Structure

SUBJECT: Who or what the sentence is about
The nurse administered the medication.
(nurse = subject)

PREDICATE: What the subject does or what is done to it
The nurse administered the medication.
(administered the medication = predicate)

Types of Sentences:
• Simple: One independent clause
  The patient rested.
• Compound: Two independent clauses joined by conjunction
  The patient rested, and the nurse monitored vital signs.
• Complex: Independent clause + dependent clause
  When the patient arrived, the nurse took vital signs.

Subject-Verb Agreement:
• Singular subjects take singular verbs
• Plural subjects take plural verbs
• The nurse works (singular)
• The nurses work (plural)

HESI Hint: "Everyone," "everybody," "someone," and "nobody" are singular and take singular verbs.`,
        practice: [
          { question: 'Identify the subject: "The medication was administered."', answer: 'medication' },
          { question: 'Complete correctly: "Everyone (is/are) present."', answer: 'is' },
          { question: 'Is this simple or compound: "The doctor called and left a message."', answer: 'Compound' }
        ]
      },
      {
        title: 'Pronouns',
        description: 'Using pronouns correctly',
        content: `Pronouns

A pronoun takes the place of a noun.

Subject Pronouns: I, you, he, she, it, we, they
Object Pronouns: me, you, him, her, it, us, them
Possessive Pronouns: my, your, his, her, its, our, their

Pronoun-Antecedent Agreement:
Pronouns must agree in number and gender with the noun they replace.

• The nurse finished her shift. (her = nurse)
• The doctors reviewed their notes. (their = doctors)

Common Errors:
Wrong: Everyone should bring their book.
Right: Everyone should bring his or her book.
(Or: All students should bring their books.)

Who vs. Whom:
• Who = subject (Who is calling?)
• Whom = object (To whom should I give this?)

HESI Hint: Do not confuse "its" (possessive) with "it's" (contraction of "it is").`,
        practice: [
          { question: 'Choose correctly: "(Who/Whom) is the patient?"', answer: 'Who' },
          { question: 'Choose correctly: "The desk belongs to (her/she)."', answer: 'her' },
          { question: 'Is "its" or "it\'s" correct: "___ time for medication."', answer: "It's (it is)" }
        ]
      },
      {
        title: 'Punctuation',
        description: 'Commas, semicolons, and apostrophes',
        content: `Punctuation

COMMA (,)
Use commas:
• To separate items in a list
• Before conjunctions in compound sentences
• After introductory phrases
• To set off nonessential information

SEMICOLON (;)
Use semicolons:
• To join two related independent clauses without a conjunction
• Before conjunctive adverbs (however, therefore)

APOSTROPHE (')
Use apostrophes:
• To show possession: patient's chart, nurses' station
• In contractions: don't, it's, can't

Singular Possessive: Add 's
• The nurse's scrubs (one nurse)

Plural Possessive: Add ' after the s
• The nurses' lounge (multiple nurses)

COLON (:)
Use colons:
• Before a list
• To introduce an explanation

HESI Hint: Do not use an apostrophe for plural nouns that are not possessive.`,
        practice: [
          { question: 'Punctuate: "The patient however refused treatment."', answer: 'The patient, however, refused treatment.' },
          { question: 'Make possessive: "The chart belonging to the patient"', answer: "The patient's chart" },
          { question: 'Is this correct: "The doctor\'s are here"?', answer: 'No, should be "doctors" (plural, not possessive)' }
        ]
      },
      {
        title: 'Common Grammar Errors',
        description: 'Avoiding common mistakes',
        content: `Common Grammar Errors

THERE, THEIR, THEY'RE
• There = place (Put it there)
• Their = possessive (Their medications)
• They're = they are (They're discharged today)

YOUR, YOU'RE
• Your = possessive (Your appointment)
• You're = you are (You're scheduled for 3pm)

AFFECT vs. EFFECT
• Affect = verb (The medication will affect you)
• Effect = noun (The effect was immediate)

THEN vs. THAN
• Then = time (First eat, then take medicine)
• Than = comparison (Better than before)

FEWER vs. LESS
• Fewer = countable items (fewer patients)
• Less = uncountable quantities (less time)

WHICH vs. THAT
• Which = nonessential clauses, use commas
• That = essential clauses, no commas

Example:
The medication, which is expensive, works well. (nonessential)
The medication that was prescribed works well. (essential)

HESI Hint: If the clause can be removed without changing the meaning, use "which" and commas.`,
        practice: [
          { question: 'Choose correctly: "(There/Their/They\'re) charts are ready."', answer: 'Their' },
          { question: 'Choose correctly: "The drug will (affect/effect) the patient."', answer: 'affect' },
          { question: 'Choose correctly: "We have (fewer/less) appointments today."', answer: 'fewer' }
        ]
      },
      {
        title: 'Writing Style',
        description: 'Professional and clear communication',
        content: `Professional Writing Style

Clear and Concise:
• Avoid unnecessary words
• Use active voice when possible
• Be specific

Active vs. Passive Voice:
• Active: The nurse administered the medication. (clearer)
• Passive: The medication was administered by the nurse.

Avoiding Bias:
Language should be respectful and inclusive.
• Use "person with diabetes" not "diabetic"
• Use "patient" or specific terms, not stereotypes

Parallel Structure:
Keep similar elements in the same grammatical form.

Wrong: She likes reading, to swim, and hiking.
Right: She likes reading, swimming, and hiking.

Double Negatives:
Avoid using two negative words together.
Wrong: She doesn't have no symptoms.
Right: She doesn't have any symptoms.

HESI Hint: In healthcare writing, clarity and precision are essential. When in doubt, choose the simpler, more direct expression.`,
        practice: [
          { question: 'Rewrite in active voice: "The chart was reviewed by the doctor."', answer: 'The doctor reviewed the chart.' },
          { question: 'Fix the parallel structure: "He enjoys running, to bike, and swimming."', answer: 'He enjoys running, biking, and swimming.' },
          { question: 'Fix the double negative: "She can\'t find nothing."', answer: "She can't find anything." }
        ]
      }
    ]
  },
  reading: {
    icon: '📖',
    title: 'Reading Comprehension',
    topics: [
      {
        title: 'Identifying the Main Idea',
        description: 'Finding the central point of a passage',
        content: `Identifying the Main Idea

The main idea is the key to understanding what has been read and what needs to be remembered.

Steps to Find the Main Idea:
1. Identify the topic by asking "What is this about?"
2. Ask "What point is the author making about this topic?"
3. Look for a topic sentence (often first or last sentence)
4. Consider what all the details support

Topic vs. Main Idea:
• Topic = What the passage is about (one or two words)
• Main Idea = What the author says about the topic (complete thought)

Example:
Topic: Hand washing
Main Idea: Proper hand washing is essential for preventing the spread of infection in healthcare settings.

HESI Hint: The main idea should be broad enough to cover all the details but specific enough to give the author's point.`,
        practice: [
          { question: 'If a passage discusses various symptoms of diabetes, what is the topic?', answer: 'Diabetes symptoms' },
          { question: 'Where is the main idea most commonly found?', answer: 'First or last sentence of a paragraph' }
        ]
      },
      {
        title: 'Supporting Details and Inferences',
        description: 'Finding evidence and reading between the lines',
        content: `Supporting Details and Inferences

Supporting Details:
Facts, examples, and explanations that develop the main idea.

Types of Supporting Details:
• Examples and illustrations
• Facts and statistics
• Reasons and explanations
• Steps in a process

Making Inferences:
Drawing conclusions based on evidence, not directly stated.

Steps for Making Inferences:
1. Identify what is directly stated
2. Consider your background knowledge
3. Combine text evidence with what you know
4. Draw a logical conclusion

Example:
Text: "The patient's temperature was 103°F, and she was shivering."
Inference: The patient likely has a fever and infection.

HESI Hint: Inferences must be supported by evidence in the text, not just personal opinion.`,
        practice: [
          { question: 'What is the purpose of supporting details?', answer: 'To develop and support the main idea' },
          { question: 'How is an inference different from a stated fact?', answer: 'An inference is a conclusion drawn from evidence; facts are directly stated' }
        ]
      },
      {
        title: 'Fact vs. Opinion and Author\'s Purpose',
        description: 'Distinguishing facts from opinions',
        content: `Fact vs. Opinion

Fact: A statement that can be proven true or false
• "The heart pumps blood throughout the body."
• "Normal body temperature is 98.6°F."

Opinion: A statement of belief, judgment, or preference
• "This medication is the best option."
• "The patient should feel better soon."

Signal Words for Opinions:
• believe, think, feel, seem
• best, worst, should, probably
• beautiful, terrible, important

Author's Purpose:
• To inform: Present facts and information
• To persuade: Convince the reader of something
• To entertain: Amuse or engage the reader
• To explain: Describe how or why something works

Author's Tone:
The attitude conveyed through word choice
• Objective, formal, concerned, optimistic, critical, etc.

HESI Hint: Be a critical reader. Question whether statements can be verified or are expressions of judgment.`,
        practice: [
          { question: 'Is this fact or opinion: "Aspirin reduces fever."', answer: 'Fact' },
          { question: 'Is this fact or opinion: "Exercise is the best way to lose weight."', answer: 'Opinion (due to "best")' },
          { question: 'What is the purpose of a medical journal article?', answer: 'To inform' }
        ]
      }
    ]
  }
}

// Quiz questions for each subject
export const quizData = {
  math: [
    {
      question: "What is 1,283 + 188?",
      options: ["1,461", "1,471", "1,481", "1,371"],
      correctAnswer: 1,
      explanation: "Line up the digits by place value and add: 1,283 + 188 = 1,471"
    },
    {
      question: "What is 713 × 24?",
      options: ["17,012", "17,112", "16,112", "17,212"],
      correctAnswer: 1,
      explanation: "713 × 4 = 2,852; 713 × 20 = 14,260; 2,852 + 14,260 = 17,112"
    },
    {
      question: "Convert 3/4 to a decimal.",
      options: ["0.25", "0.5", "0.75", "0.34"],
      correctAnswer: 2,
      explanation: "Divide the numerator by the denominator: 3 ÷ 4 = 0.75"
    },
    {
      question: "What is 25% of 80?",
      options: ["15", "20", "25", "30"],
      correctAnswer: 1,
      explanation: "25% × 80 = 0.25 × 80 = 20"
    },
    {
      question: "Solve for x: 2x + 6 = 14",
      options: ["x = 3", "x = 4", "x = 5", "x = 6"],
      correctAnswer: 1,
      explanation: "2x + 6 = 14 → 2x = 8 → x = 4"
    },
    {
      question: "What is 8,400 ÷ 4?",
      options: ["2,000", "2,100", "2,200", "2,400"],
      correctAnswer: 1,
      explanation: "8,400 ÷ 4 = 2,100"
    },
    {
      question: "Convert 5:30 PM to military time.",
      options: ["0530 hours", "1530 hours", "1730 hours", "1930 hours"],
      correctAnswer: 2,
      explanation: "Add 12 to PM hours: 5 + 12 = 17, so 5:30 PM = 1730 hours"
    },
    {
      question: "Reduce 15/20 to lowest terms.",
      options: ["3/5", "3/4", "5/6", "2/3"],
      correctAnswer: 1,
      explanation: "Divide both by 5: 15÷5 = 3, 20÷5 = 4, so 15/20 = 3/4"
    },
    {
      question: "What is XIV in Arabic numerals?",
      options: ["16", "15", "14", "11"],
      correctAnswer: 2,
      explanation: "X = 10, IV = 4, so XIV = 10 + 4 = 14"
    },
    {
      question: "What is 3/4 + 1/2?",
      options: ["4/6", "5/4", "1", "5/6"],
      correctAnswer: 1,
      explanation: "Convert 1/2 to 2/4, then 3/4 + 2/4 = 5/4 or 1 1/4"
    }
  ],
  vocabulary: [
    {
      question: "What does 'bradycardia' mean?",
      options: ["Fast heart rate", "Slow heart rate", "Irregular heart rate", "Normal heart rate"],
      correctAnswer: 1,
      explanation: "Brady- means slow, and -cardia relates to the heart. Bradycardia = slow heart rate."
    },
    {
      question: "What does the suffix '-itis' indicate?",
      options: ["Disease", "Inflammation", "Removal", "Study of"],
      correctAnswer: 1,
      explanation: "-itis indicates inflammation (e.g., arthritis = inflammation of joints)"
    },
    {
      question: "What does 'acute' mean in medical terms?",
      options: ["Chronic condition", "Sharp, severe, rapid onset", "Mild symptoms", "Recurring"],
      correctAnswer: 1,
      explanation: "Acute refers to conditions with sharp, severe symptoms and rapid onset."
    },
    {
      question: "What is the difference between a 'sign' and a 'symptom'?",
      options: [
        "They mean the same thing",
        "Sign is observed by provider; symptom is reported by patient",
        "Symptom is observed by provider; sign is reported by patient",
        "Signs are more serious than symptoms"
      ],
      correctAnswer: 1,
      explanation: "Signs are objective findings observed by healthcare providers; symptoms are subjective experiences reported by patients."
    },
    {
      question: "What does 'pulmonary' relate to?",
      options: ["Heart", "Lungs", "Liver", "Kidneys"],
      correctAnswer: 1,
      explanation: "Pulmonary relates to the lungs (e.g., pulmonary function test)."
    },
    {
      question: "What does 'renal' mean?",
      options: ["Relating to the stomach", "Relating to the brain", "Relating to the kidneys", "Relating to the heart"],
      correctAnswer: 2,
      explanation: "Renal relates to the kidneys (e.g., renal failure = kidney failure)."
    },
    {
      question: "What does 'benign' mean?",
      options: ["Cancerous", "Harmful", "Not harmful/not cancerous", "Severe"],
      correctAnswer: 2,
      explanation: "Benign means not harmful or not cancerous. A benign tumor is non-cancerous."
    },
    {
      question: "What does 'hypertension' mean?",
      options: ["Low blood pressure", "High blood pressure", "Normal blood pressure", "No blood pressure"],
      correctAnswer: 1,
      explanation: "Hyper- means excessive/high, tension refers to pressure. Hypertension = high blood pressure."
    },
    {
      question: "What does the prefix 'dys-' mean?",
      options: ["Normal", "Excessive", "Difficult/painful", "Without"],
      correctAnswer: 2,
      explanation: "Dys- means difficult or painful (e.g., dyspnea = difficulty breathing)."
    },
    {
      question: "What does 'prognosis' mean?",
      options: ["The cause of a disease", "The identification of a disease", "The predicted outcome of a disease", "The treatment of a disease"],
      correctAnswer: 2,
      explanation: "Prognosis is the predicted outcome or course of a disease."
    }
  ],
  grammar: [
    {
      question: "Choose the correct word: '(There/Their/They're) patient charts are on the desk.'",
      options: ["There", "Their", "They're", "Theyre"],
      correctAnswer: 1,
      explanation: "'Their' is the possessive pronoun showing ownership of the charts."
    },
    {
      question: "Which sentence uses correct subject-verb agreement?",
      options: [
        "Everyone are welcome.",
        "Everyone is welcome.",
        "Everyone were welcome.",
        "Everyone be welcome."
      ],
      correctAnswer: 1,
      explanation: "'Everyone' is singular and requires the singular verb 'is'."
    },
    {
      question: "Choose the correct word: 'The medication will (affect/effect) the patient's sleep.'",
      options: ["affect", "effect", "affects", "effected"],
      correctAnswer: 0,
      explanation: "'Affect' is a verb meaning to influence. 'Effect' is usually a noun."
    },
    {
      question: "Which sentence is written in active voice?",
      options: [
        "The medication was administered by the nurse.",
        "The patient was examined.",
        "The nurse administered the medication.",
        "The chart was reviewed."
      ],
      correctAnswer: 2,
      explanation: "In active voice, the subject performs the action: 'The nurse administered...'"
    },
    {
      question: "Choose the correct possessive form: 'The (patient's/patients') room is ready.'",
      options: ["patient's (one patient)", "patients' (multiple patients)", "patients (no apostrophe)", "patientes"],
      correctAnswer: 0,
      explanation: "'Patient's' with the apostrophe before 's' indicates one patient owns the room."
    },
    {
      question: "Which is correct: '(Who/Whom) is the attending physician?'",
      options: ["Who", "Whom", "Whose", "Who's"],
      correctAnswer: 0,
      explanation: "'Who' is the subject pronoun used for the subject of a question or clause."
    },
    {
      question: "Identify the error: 'She don't have no symptoms.'",
      options: [
        "Double negative",
        "Subject-verb disagreement",
        "Both A and B",
        "No error"
      ],
      correctAnswer: 2,
      explanation: "The sentence has both errors: 'don't' should be 'doesn't' (agreement) and 'no' creates a double negative."
    },
    {
      question: "Choose correctly: 'We have (fewer/less) patients today.'",
      options: ["fewer", "less", "lesser", "few"],
      correctAnswer: 0,
      explanation: "'Fewer' is used for countable items (patients). 'Less' is for uncountable quantities."
    },
    {
      question: "Which sentence shows correct parallel structure?",
      options: [
        "She likes reading, to swim, and hiking.",
        "She likes reading, swimming, and hiking.",
        "She likes to read, swimming, and to hike.",
        "She likes read, swim, and hike."
      ],
      correctAnswer: 1,
      explanation: "Parallel structure requires similar grammatical forms: all '-ing' words in this case."
    },
    {
      question: "When should you use a semicolon?",
      options: [
        "To separate items in a simple list",
        "To join two related independent clauses",
        "To show possession",
        "After a greeting"
      ],
      correctAnswer: 1,
      explanation: "A semicolon joins two related independent clauses without a conjunction."
    }
  ],
  reading: [
    {
      question: "What is the main idea of a passage?",
      options: [
        "The first sentence",
        "The topic of the passage",
        "The central point the author makes about the topic",
        "The last sentence"
      ],
      correctAnswer: 2,
      explanation: "The main idea is the central point or argument the author makes about the topic."
    },
    {
      question: "Which is a FACT rather than an opinion?",
      options: [
        "Exercise is the best way to stay healthy.",
        "The heart pumps blood through the body.",
        "Everyone should get 8 hours of sleep.",
        "This hospital provides excellent care."
      ],
      correctAnswer: 1,
      explanation: "A fact can be proven true or false. The heart's function is a verifiable fact."
    },
    {
      question: "What is an inference?",
      options: [
        "A statement directly from the text",
        "A conclusion drawn from evidence",
        "The topic of a passage",
        "A direct quote"
      ],
      correctAnswer: 1,
      explanation: "An inference is a logical conclusion based on evidence in the text and prior knowledge."
    },
    {
      question: "What is the purpose of supporting details?",
      options: [
        "To confuse the reader",
        "To introduce new topics",
        "To develop and support the main idea",
        "To summarize the passage"
      ],
      correctAnswer: 2,
      explanation: "Supporting details provide evidence, examples, and explanations for the main idea."
    },
    {
      question: "Which word signals an OPINION?",
      options: ["According to research", "Studies show", "Scientists believe", "The data indicates"],
      correctAnswer: 2,
      explanation: "'Believe' signals opinion because it indicates a personal viewpoint rather than proven fact."
    },
    {
      question: "What is the author's purpose when writing to 'persuade'?",
      options: [
        "To present neutral information",
        "To entertain the reader",
        "To convince the reader of something",
        "To explain a process"
      ],
      correctAnswer: 2,
      explanation: "When persuading, the author tries to convince readers to accept a viewpoint or take action."
    },
    {
      question: "Where is the main idea most commonly found?",
      options: [
        "Only in the title",
        "In the middle paragraph",
        "In the first or last sentence of a paragraph",
        "Never stated directly"
      ],
      correctAnswer: 2,
      explanation: "The topic sentence containing the main idea is typically at the beginning or end of a paragraph."
    },
    {
      question: "What does 'context clue' mean?",
      options: [
        "A dictionary definition",
        "Information surrounding a word that helps determine its meaning",
        "The main idea",
        "A synonym"
      ],
      correctAnswer: 1,
      explanation: "Context clues are hints in the surrounding text that help readers understand unfamiliar words."
    },
    {
      question: "How do you identify the author's tone?",
      options: [
        "By counting the words",
        "By looking at the font",
        "By analyzing word choice and style",
        "By reading the title only"
      ],
      correctAnswer: 2,
      explanation: "The author's tone is revealed through word choice, style, and the attitude conveyed in the writing."
    },
    {
      question: "Which is the best strategy for finding the main idea?",
      options: [
        "Read only the first paragraph",
        "Look for repeated words or themes",
        "Skip to the conclusion",
        "Read every other sentence"
      ],
      correctAnswer: 1,
      explanation: "Repeated words and themes throughout a passage often point to the main idea."
    }
  ]
}
