# wait - Awaitable Delay

Wait is a promise wrapped setTimeout. That's it.
Use it for a nicer delay interface.

```js
import wait from 'wait';

async function myAsyncFunction() {
  await wait(300);

  // do some stuff here
}
```

You can also use it as a simple sleep for your cli apps:

```sh
echo Hi
npx wait 2000 # Will pause execution for 2 seconds.
echo Bye
```