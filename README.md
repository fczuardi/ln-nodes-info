# ln-nodes-info

A simple webapp to visualize information about Lightning Network nodes using data from mempool.space

## Developing (Steps to run)

Once you've installed dependencies with `bun install`, start a development server:

```bash
bun run dev

# or start the server and open the app in a new browser tab
bun run dev -- --open
```

## Building

To create a production version of your app:

```bash
bun run build
```

You can preview the production build with `bun run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## References

- [SvelteKit Documentation](https://svelte.dev/docs/kit/introduction)
- [mempool.space REST API Documentation](https://mempool.space/docs/api/rest)
