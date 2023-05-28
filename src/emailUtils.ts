/* 
  VALID EMAIL ADDRESS:
  1. Recipient name: Can be any combination of letters, numbers, and special characters (excluding the @ symbol), between 1 and 64 characters long.
  2. @ symbol: Must be present.
  3. Domain name: Can be any combination of letters, numbers, and hyphens, between 1 and 253 characters long.
  4. Top-level domain: May contain between 2 and 3 letters only, for example: com, org, net, gov, edu, etc.
*/

const emailRegex = /^[^@]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]{2,3}$/;

export function isValidEmail(email: string): boolean {
  if (typeof email !== 'string') {
    throw new Error('Email must be a string');
  }

  if (!email) {
    return false;
  }

  return emailRegex.test(email);
}
