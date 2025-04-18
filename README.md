# ln-nodes-info

A simple webapp to visualize information about Lightning Network nodes using data from mempool.space

## Screenshots

![Image](https://github.com/user-attachments/assets/9297dabf-69d9-41af-b62e-2a740afc2f0b)

![Image](https://github.com/user-attachments/assets/9f5f0e43-b8f7-4c2e-9add-1942ba45801b)

## Developing (Steps to run)

Once you've installed dependencies with `bun install`, and created an env file with
`cp .env.example .env`, start a development server:

```bash
bun run dev
```

## Run Tests

```bash
bun run test:unit # watch mode
```

or

```bash
bun run test # one time
```

## Other checkers, linters and formatters

```bash
bun run lint # code style and lint checks
bun run check # type-check
bun run format # auto-format code
```

## Tech Stack (Libraries & frameworks used)

- Svelte 5: UI framework
  - SvelteKit: Web App framework
  - Tailwind CSS: utility-classes-based CSS framework
- mempool.space: Lightning Network and Bitcoin data REST API
- Vitest: Unit Tests
  - testing-library, js-dom: component render
  - mws: API mockup
- Prettier, Eslint, Typescript: code linting, formatting, type check
- Svelte CLI: scaffolding
- Bun: Package manager / Javascript runtime
- Github: Code Hosting + CI
- Jujutsu VCS: Git-compatible version control system
- personal setup (bluefin-dx, neovim, atuin, homebrew, etc..)

## Building

To create a production version of your app:

```bash
bun run build
```

You can preview the production build with `bun run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## License

AGPL v3

## References

- [SvelteKit Documentation](https://svelte.dev/docs/kit/introduction)
- [mempool.space REST API Documentation](https://mempool.space/docs/api/rest)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Acknowledgements

- [Bipa](https://bipa.app)

---

## Questions after 3 days

### What areas of the web app did you focus on?

In order:

0. Learn a new framework (ok, that's not really an area of the web app, but I had fun doing it)
1. Responsivity
2. UI/UX
3. Unit tests
4. CI

### What was the reason for your focus? What problems were you trying to solve?

Personal growth, the learning part, and excitement for new knowlege. That was my main reasons.

App-wise, I can say I choose to focus on responsivity and UX, for the same reason, also for
personal growth :)... I like to craft, and tweaking interfaces is something I enjoy.

The problem I am trying to solve is the challenge of presenting information in a clean and
pleasant / simple to use user interface. There is a delicate balance between pure-utility (think
Excel spreadsheet) and beauty. I am not super versed in the visual arts field, my background is of
a coder, but I am happy with the current state of this demo in this short period. I know it was
suppose to be a throw away dirty take home exercise, but why not use those opportunities to be a
try-harder and start some serious open-source project as a side-quest bonus.

### How long did you spend on this project?

Oh my... Let's just say "less than 3 days". The commit history and it's timestamps have a precise
account of the hours and the amount of work done, but honestly, who is counting?

A rough estimate, including the hours I spent configuring a new laptop, learning Svelte from scratch
and doing the actual assignment would be something between 10-15 hours.

### Did you make any trade-offs for this project? What would you have done differently with more time?

Yes, I think I made some trade-offs in order to have a deliverable in time. For example: I used
some good-enough-for-demo sats conversion to BTC that does not take into account possible floating
point problems, it's marked in the code as a `TODO` for later. Another tradeoff, was the use of a
simple auto refresh using meta tags for this first version, instead of a proper button or
pull-to-refresh mechanism. Another area that I would like to explore with more time are the
build and deployment possibilities in the Svelte ecossystem, as well as all sorts of other
optimizations.

### What do you think is the weakest part of your project?

The reliance on a 3rd-party API for the main purpose of this app, that is to display information
about participant nodes of the Lightning Network. Ideally we could have at least some redundancy
between data providers, by consuming multiple APIs. Or, even better, gather the data ourselves,
using on premises machines that we'd setup to be part of thes network.

"Don't trust, verify" is one of the mantras in the Bitcoin community, and it has some wisdom in it,
I know that pragmatically we cannot always have the most verifiable/robust solution, trade-offs
are a reality in our daily lifes, and all things considered, mempool.space is kinda of a good
provider. Some trust is OK, but this is a weak part of the project still.

### Is there any other information you’d like us to know?

I had a blast, learning a new framework and getting back to frontend coding after some time in
the python dungeons is a breath of fresh air. I am grateful for the excuse/reason Bipa hiring
proccess gave me to build and read and learn new things, and I hope to have more opportunities to
exchange moments, work and stories in the future.

Also, the restriction on not using AI for this task was a good incentive to get my hands dirty,
I am oldschool and I am able to get around without clever autocompleters. In my day-to-day life
I use chatgpt for some tasks and I try the agents and tools at my disposal. But I also like to
force my own brain and the feeling of achievement when we encounter and pass a barrier only with the help
of good documentation and our own persistence is unbeatable! We can "vibe" with manuals, just ask
OpenBSD folks ;)

THANK YOU!!
