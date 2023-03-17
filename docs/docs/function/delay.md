---
title: delay
definition: delay(fn, timer, [args])
description: Invokes a function only after a certain amount of time has passed since the last time it was called.
---


#### Arguments


```bash
{Function} fn - The function to debounce.
{number} timer - The number of milliseconds to wait before invoking the function.
{...any} args - Additional arguments to pass to the function.
```


#### Returns


```bash
{number} - A timer ID that can be used to cancel the debounce with `clearTimeout`.
```


#### Example


```ts
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const fetchResults = async (query) => {
  const results = await searchAPI(query);
  searchResults.innerHTML = results;
};
const debounceFetchResults = debounce(fetchResults, 500);
searchInput.addEventListener('input', (event) => {
  debounceFetchResults(event.target.value);
});
```