export const useArt = () => {
  const progress = useState<number>("progress", () => 0);
  const mode = useState<string>("mode", () => "");

  return {
    progress,
    mode,
  };
};
