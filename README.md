# deno-js-demo

install deno cli tool from https://deno.land/

## run index.js as script

```
deno run index.js
```

## run index.js in a browser

### use any file server you already have or

install deno's file_server, serve local folder and open it in a browser

```
deno install --allow-net --allow-read https://deno.land/std@0.83.0/http/file_server.ts
file_server .
```
