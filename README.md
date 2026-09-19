# Otakudesu API

**Browse the reference at `/docs`, or grab the OpenAPI 3.1 spec at `/api/openapi.json`.**

## Quick start

```bash
bun install
cp .env.example .env      # fill in the values you need
bun run dev               # http://localhost:3000
```

Only `ANIME_BASE_URL` is strictly required. Each domain degrades independently — a missing
`TMDB_ACCESS_TOKEN` makes the movie endpoints return empty results rather than breaking the service.

### Environment

| Variable                | Required | Default                              | Purpose                                                              |
| ----------------------- | -------- | ------------------------------------ | -------------------------------------------------------------------- |
| `ANIME_BASE_URL`        | ✅       | —                                    | Upstream anime site origin (`BASEURL` still works as a legacy alias) |
| `COMIC_BASE_URL`        |          | `https://kiryuuid.net`               | Upstream comic site origin                                           |
| `TMDB_ACCESS_TOKEN`     |          | —                                    | TMDB **v4 API Read Access Token** — themoviedb.org → Settings → API  |
| `TMDB_LANGUAGE`         |          | `id-ID`                              | Metadata language                                                    |
| `MOVIE_EMBED_PROVIDERS` |          | `2embed,videasy,vidsrc`              | Ordered list of enabled embed players                                |
| `IPTV_API_URL`          |          | `https://iptv-org.github.io/api`     | Live TV index                                                        |
| `RADIO_API_URL`         |          | `https://de1.api.radio-browser.info` | Radio station index                                                  |
| `NEWS_FEED_URL`         |          | ANN weekly feed                      | RSS source for the news endpoint                                     |
| `SITE_URL`              |          | `https://otakudesu.natee.my.id`      | Used to build absolute links, e.g. the schedule `.ics` feed          |
| `ANIMECHAN_API_URL`     |          | `https://api.animechan.io/v1`        | Quote source                                                         |
| `TRACEMOE_API_URL`      |          | `https://api.trace.moe`              | Reverse image search source                                          |
| `ANIMETHEMES_API_URL`   |          | `https://api.animethemes.moe`        | Theme song source                                                    |
| `TV_COUNTRY`            |          | `ID`                                 | ISO country filter for live TV                                       |
| `MOVIEBOX_API_URL`      |          | —                                    | Optional extra adapter; disabled when empty                          |
| `RATE_LIMIT_PER_MINUTE` |          | `120`                                | Per-IP request budget                                                |
| `HLS_PROXY_SECRET`      |          | random per process                   | Set this only when running multiple replicas                         |

## Page

/api
/api/health
/api/v1/anime/home
/api/v1/anime/list
/api/v1/anime/genres
/api/v1/anime/genres/{slug}
/api/v1/anime/schedule
/api/v1/anime/search/{keyword}
/api/v1/anime/ongoing/{page}
/api/v1/anime/complete/{page}
/api/v1/anime/detail/{slug}
/api/v1/anime/detail/{slug}/episodes
/api/v1/anime/detail/{slug}/episodes/{episode}
/api/v1/anime/episode/{slug}
/api/v1/anime/batch/{slug}
/api/v1/anime/movie/{slug}
/api/v1/anime/muse
/api/v1/comic/home
/api/v1/comic/{slug}
/api/v1/comic/{slug}/chapter/{chapter}
/api/v1/movie/home
/api/v1/movie/search
/api/v1/movie/genres
/api/v1/movie/genres/{id}
/api/v1/movie/{id}
/api/v1/movie/{id}/sources
/api/v1/movie/tv/{id}
/api/v1/movie/tv/{id}/season/{season}
/api/v1/movie/tv/{id}/sources
/api/v1/tv/channels
/api/v1/tv/categories
/api/v1/tv/channels/{id}
/api/v1/tv/channels/{id}/stream
/api/v1/radio/stations
/api/v1/radio/tags
/api/v1/radio/stations/{id}
/api/v1/radio/stations/{id}/stream
/api/v1/news
/api/v1/news/{id}
/api/v1/comic/shinigami
/api/v1/search
/api/v1/anime/schedule.ics
/api/v1/anime/quotes
/api/v1/anime/identify
/api/v1/anime/themes

## Scripts

```bash
bun run dev         # dev server
bun run build       # production build (standalone output)
bun run start       # run the build
bun run lint        # eslint (flat config)
bun run typecheck   # tsc --noEmit
bun test            # unit tests — fixture-based, no network
bun run test:live   # opt-in suite that hits the real upstreams
```
