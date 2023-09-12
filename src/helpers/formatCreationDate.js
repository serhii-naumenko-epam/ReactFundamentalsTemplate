export const formatCreationDate = (date) => {
  
  const parts = date.split('/');
  if (parts.length !== 3) return null;
  
  return `${parts[1]}.${parts[0]}.${parts[2]}`;
}
