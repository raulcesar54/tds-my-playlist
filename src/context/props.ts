export interface WeatherApiProps {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

export interface Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}

export interface Clouds {
    all: number;
}

export interface Wind {
    speed: number;
    deg: number;
}

export interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Coord {
    lon: number;
    lat: number;
}


export interface ShazamApiProps {
    tracks: Tracks
    artists: Artists
}

export interface Tracks {
    hits: Hit[]
}

export interface Hit {
    track: Track
}

export interface Track {
    layout: string
    type: string
    key: string
    title: string
    subtitle: string
    share: Share
    images: Images
    hub: Hub
    artists: Artist[]
    url: string
}

export interface Share {
    subject: string
    text: string
    href: string
    image: string
    twitter: string
    html: string
    avatar: string
    snapchat: string
}

export interface Images {
    background: string
    coverart: string
    coverarthq: string
    joecolor: string
}

export interface Hub {
    type: string
    image: string
    actions: Action[]
    options: Option[]
    providers: Provider[]
    explicit: boolean
    displayname: string
}

export interface Action {
    name: string
    type: string
    id?: string
    uri?: string
}

export interface Option {
    caption: string
    actions: Action2[]
    beacondata: Beacondata
    image: string
    type: string
    listcaption: string
    overflowimage: string
    colouroverflowimage: boolean
    providername: string
}

export interface Action2 {
    type: string
    uri: string
    name?: string
}

export interface Beacondata {
    type: string
    providername: string
}

export interface Provider {
    caption: string
    images: Images2
    actions: Action3[]
    type: string
}

export interface Images2 {
    overflow: string
    default: string
}

export interface Action3 {
    name: string
    type: string
    uri: string
}

export interface Artist {
    id: string
    adamid: string
}

export interface Artists {
    hits: Hit2[]
}

export interface Hit2 {
    artist: Artist2
}

export interface Artist2 {
    avatar?: string
    name: string
    verified: boolean
    weburl: string
    adamid: string
}
