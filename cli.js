#!/usr/bin/env node
const [ms = 0] = process.argv.slice(2);

setTimeout(() => {}, Number(ms));
