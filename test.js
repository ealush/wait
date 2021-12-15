#!/usr/bin/env node

import wait from './wait.js'

const tests = [];

tests.push(async () => {
  let ran = false;
  const promise = wait().then(() => {
    ran = true;
  });
  if (ran !== false) {
    return 'Did not wait to execute promise resolve';
  }
  await promise;
  if (ran !== true) {
    return 'Did not execute promise resolve';
  }
});

tests.push(async () => {
  const start = Date.now();
  await wait(100);
  const duration = Date.now() - start;
  if (duration < 100 || duration > 111) {
    return `Waited ${duration} ms instead of 100 ms`;
  }
});

console.log(`Run ${tests.length} tests…`)
const messages = await Promise.all(
  tests.map(test => test())
).then(results => results.filter(Boolean));
console.log(messages.join('\n') || 'Everything is fine');
process.exit(messages.length);
