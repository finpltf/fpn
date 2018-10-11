const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResults(values) {
  await sleep(5000); // simulate server latency
  window.alert(`Вы отправили:\n\n${JSON.stringify(values, null, 2)}`);
});
