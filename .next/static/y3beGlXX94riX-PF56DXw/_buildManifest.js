self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/api/home",
        "destination": "/api/v1/anime/home"
      },
      {
        "source": "/api/anime-list",
        "destination": "/api/v1/anime/list"
      },
      {
        "source": "/api/genre",
        "destination": "/api/v1/anime/genres"
      },
      {
        "source": "/api/genre/:slug",
        "destination": "/api/v1/anime/genres/:slug"
      },
      {
        "source": "/api/schedule",
        "destination": "/api/v1/anime/schedule"
      },
      {
        "source": "/api/search/:keyword",
        "destination": "/api/v1/anime/search/:keyword"
      },
      {
        "source": "/api/ongoing-anime",
        "destination": "/api/v1/anime/ongoing/1"
      },
      {
        "source": "/api/ongoing-anime/:page",
        "destination": "/api/v1/anime/ongoing/:page"
      },
      {
        "source": "/api/complete-anime",
        "destination": "/api/v1/anime/complete/1"
      },
      {
        "source": "/api/complete-anime/:page",
        "destination": "/api/v1/anime/complete/:page"
      },
      {
        "source": "/api/episode/:slug",
        "destination": "/api/v1/anime/episode/:slug"
      },
      {
        "source": "/api/batch/:slug",
        "destination": "/api/v1/anime/batch/:slug"
      },
      {
        "source": "/api/movie/:slug",
        "destination": "/api/v1/anime/movie/:slug"
      },
      {
        "source": "/api/anime/:slug/episodes/:episode",
        "destination": "/api/v1/anime/detail/:slug/episodes/:episode"
      },
      {
        "source": "/api/anime/:slug/episodes",
        "destination": "/api/v1/anime/detail/:slug/episodes"
      },
      {
        "source": "/api/anime/:slug",
        "destination": "/api/v1/anime/detail/:slug"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()