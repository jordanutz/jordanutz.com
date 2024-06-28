export const scrollIntoView = (key: string) => {
  const ref = contentRefs[key];

  ref.current.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
};
