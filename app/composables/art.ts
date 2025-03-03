export const useArt = () => {
  const canvas = ref<HTMLCanvasElement>();
  const progress = useState<number>("progress", () => 0);

  return {
    canvas,
    progress,
  };
};
