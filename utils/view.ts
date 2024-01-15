export const scrollToTop = (document: Document) => {
    const bodyElement = document.getElementById("body");
    bodyElement?.scrollIntoView({ behavior: "smooth" });
};
