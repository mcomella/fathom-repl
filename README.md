#fathom-repl

WIP to produce a REPL environment to experiment with Mozilla's [fathom][], a
framework for extracting meaning from web pages.

## Try it
Build via:

    npm run build

Open the REPL:

    open public/repl.html

## How it works
Currently webpacks the `fathom-web` npm package, injects it into an HTML page,
and exposes a few fathom variables.

[fathom]: https://github.com/mozilla/fathom
