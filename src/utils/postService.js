function saveResult(result) {
  fetch("/api/posts/saveResult", {
    method: "POST",
  });
}

export default {
  saveResult,
};
