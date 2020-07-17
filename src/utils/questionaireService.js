function saveResult(result) {
  fetch("/api/questionaires/saveResult", {
    method: "POST",
  });
}

export default {
  saveResult,
};
