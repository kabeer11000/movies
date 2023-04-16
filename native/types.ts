type IIMDBCODE = string;
type IYTSID = string;
type IYOUTUBEID = string;

// Title: [Short, Long Part] basically, slice short part from long
export interface ITorrent {
    "3pa": {
        download: string, // torrent.url maps to this
    },
    "hash": string, // torrent hex
    "quality": string, // Quality String e.g 720p
    "type": string, // Type e.g bluray.toUpperCase
    "seeds": number,
    "peers": number,
    "size": string, // Size String e.g 420mb.toUpperCase
    "size_bytes": number,
    "date_uploaded_unix": number
}

export interface IYTSResponse {
    "status": string,
    "status_message": string,
    "data": {
        "movie_count": string,
        "limit": number,
        "page_number": number,
        "movies": Array<IYTSRawMovie>
    },
    "@meta": {
        "server_time": number,
        "server_timezone": string,
        "api_version": number | string,
        "execution_time": string
    }
}

export interface IYTSRawMovie {
    "id": number,
    "url": string,
    "imdb_code": IIMDBCODE,
    "title": string,
    "title_english": string,
    "title_long": string,
    "slug": string,
    "year": number,
    "rating": number,
    "runtime": number,
    "genres": Array<string>,
    "summary": string,
    "description_full": string,
    "synopsis": string,
    "yt_trailer_code": IYOUTUBEID,
    "language": string,
    "mpa_rating": string,
    "background_image": string,
    "background_image_original": string,
    "small_cover_image": string,
    "medium_cover_image": string,
    "large_cover_image": string,
    "state": string,
    "torrents": Array<{
        "url": string,
        "hash": string,
        "quality": string,
        "type": string, // web, bluray idk how many more
        "seeds": number,
        "peers": number,
        "size": string,
        "size_bytes": number,
        "date_uploaded": string,
        "date_uploaded_unix": number
    }>,
    "date_uploaded": string,
    "date_uploaded_unix": number
}

export interface IMovie {
    "id": string,
    title: { text: [string, string], english: string },
    "3pa": {
        yts_id: IYTSID,
        imdb_code: IIMDBCODE,
        yts_preview_page: string,
        yt_trailer_code: IYOUTUBEID,
        "slug": string,
    },
    meta: {
        release_year: number,
        rating: number,
        runtime: {
            formatted: string, // E.g. 1 Hour 30 Minutes
            minutes: number,
        },
        "date_uploaded_unix": number,
        "language": string, // language, e.g. en
    },
    descriptions: {
        "summary": string,
        "description_full": string,
        "synopsis": string,
    },
    "genres": Array<string>,
    posters: {
        background: {
            "resized": string,
            "original": string,
        },
        cover: {
            "small": string,
            "medium": string,
            "large": string,
        }
    },
    "torrents": Array<ITorrent>,
}