const baseUrl = "http://numbersapi.com";

export const getFunFact = async (n: number) => {
  const res = await fetch(`${baseUrl}/${n}/math`);

  if (!res.ok) {
    const error = await res.text();

    const match = error.match(/<pre>(.*?)<\/pre>/);
    const errorMessage = match
      ? match[1]
      : "Unexpected error occurred while fetching facts";
    throw new Error(errorMessage);
  }

  return res.text();
};
