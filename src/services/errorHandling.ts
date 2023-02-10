export const handleApiError = (error: string) => {
  //log error remotely
  throw new Error(error);
};
