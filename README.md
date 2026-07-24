# Otenki Girl — Weathering with You Fan Website

English | [日本語](README.ja.md) | [简体中文](README.zh-CN.md)

![Weathering with You themed home page](assets/cover.png)

A front-end fan website inspired by *Weathering with You*. It presents story and character content through themed pages, video backgrounds, images, music, navigation, and interactive overlays.

## Screenshots

| Themed page | Content section |
| --- | --- |
| ![Themed page](assets/screenshot-01.png) | ![Content section](assets/screenshot-02.png) |

## Features

- Full-page looping video backgrounds
- Story and character presentation pages
- Responsive navigation with a Makoto Shinkai series page
- Background-music play and pause controls
- Image panels and animated visual content
- “About us” modal
- A bundled `OtenkiGirl-master` subproject for the sunshine-service concept

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Static images, GIFs, MP4 video, and MP3 audio
- GUN is used by the bundled `OtenkiGirl-master` implementation as described by the original project documentation

## Project Structure

```text
.
├── assets/                 # README screenshots
├── css/                    # Main site styles
├── img/                    # Images and video
├── js/                     # Main site scripts
├── music/                  # Background music
├── OtenkiGirl-master/      # Bundled sunshine-service subproject
├── index.html              # Main entry page
├── 2.html
├── 3.html
├── 5.html
└── 6.html
```

## Run Locally

No build step is required.

1. Clone the repository:

   ```bash
   git clone https://github.com/1xiaohuozi/Otenki-Girl-tenkinoko.git
   cd Otenki-Girl-tenkinoko
   ```

2. Open `index.html` in a modern browser.

You can also serve the directory with any static HTTP server. For example:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000/`.

## Usage

- Use the navigation menu to move between the themed pages.
- Use the music button to start or pause the background track.
- Open the Makoto Shinkai series page to browse the visual panels.
- Select “About us” to open the team-information modal.

Modern browsers may block automatic audio playback, so background music starts after user interaction.

## Attribution

The original Chinese documentation states that the bundled sunshine-service implementation uses work integrated by [IvanLuLyf/OtenkiGirl](https://github.com/IvanLuLyf/OtenkiGirl). Keep the upstream attribution when redistributing or modifying that portion.

## Disclaimer

This is a fan-made educational project. Names, images, video, audio, and other media associated with *Weathering with You* belong to their respective rights holders. The repository does not include a standalone license file.
