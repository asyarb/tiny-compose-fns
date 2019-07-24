# Tiny Functions

Small, modern, and safe "lodash alternative" helpers that are `compose`-able.
Follows FP "data-last" practices.

This package is side-effect free and tree-shakeable. Uses _very_ new syntax
(ES2019), so it's recommended to use only in evergreen browsers.

### Why would I use this over `lodash` or `ramda`?

**You probably shouldn't**.

Unless you really need incredibly small bundlesizes for a project, `lodash` or
`ramda` with their respective `babel` plugins is likely a better idea. Both will
provide better browser support, small enough bundle sizes, and better test
coverage and safety for their utilities (not to mention your other packages are
probably already using them too).

This project exists as an exercise for myself in addition to being an easy to
reach for personal use in conjunction with something like `tiny-compose`.

## License

MIT.

## TODO

- More utilities
- Test suites
- Benchmarks
