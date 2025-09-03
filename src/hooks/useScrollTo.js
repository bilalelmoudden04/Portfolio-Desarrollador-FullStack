export default function useScrollTo(offset = 80) {
  return function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
}
