export const secretEmail = (email) => {
    if (!email.includes('@')) {
      throw new Error('Invalid email address');
    }
  
    const [username, domain] = email.split('@');
    if (!username || !domain) {
      throw new Error('Invalid email address');
    }
  
    const secretUser = username.substring(0, 2) + '*'.repeat(Math.max(0, username.length - 2));
    return `${secretUser}@${domain}`;
}

export const readTime = (desc) => {
  const averageReading = 225;

  const div = document.createElement("div");
  div.innerHTML = desc.__html;

  const textContext = div.textContent || div.innerHTML;
  const words = textContext.trim().split(/\s+/);
  return Math.ceil(words.length / averageReading);
};