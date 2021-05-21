# Video Upload React Preview

Preview uploaded videos in React

Given a file, a preview of a specified time will be shown.

## Installation

In the project directory, you can run:

```
git clone https://github.com/alvst/react-uploaded-video-preview.git
```

### Usage

```es6
import FileThumbnail from "react-uploaded-video-preview";
...
<FileThumbnail
    file={file}
    startTime={3000}
    canvasSize={900}
    startTimeFail={2}
    finalFail={"end"} //beginning end or e
    DefaultFailedOrientation={"Horizontal"}
    // CustomFailedFileImageHorizontal={CustomFailedHorizontal}
    // CustomFailedFileImageVertical={CustomFailedVertical}
    />
```


## Properties

| Prop Name | Type | Default | Description |
| --- | --- | --- | --- |
| **file** (Required) | **object** | | A single file (not link) |
| **canvasSize** | **int** | 200 | the width the thumbnail will be |
| **startTime** | **int** | 0 |The ability to set an arbitrary time for the preview timestamp to show |
| **startTimeFail** | **int** |  | If **startTime** specified is not available, because the file is too short, this is a secondary fall back. |
| **finalFail** | **string** | Beginning | If startTime and starTimeFail both are not available (because they are both too large), finalFail is the final fallback. You can specify beginning (default) or end (or e for end) and the last frame will be used. |
| **defaultFailedOrientation** | **string** | Horizontal | If the file cannot display (due to incompatable file type or a javascript error) and if no custom files are selected, a default file is included that will be displayed. One horizontal, one vertical file are included. Specifying **Horizontal** or **Vertical** will be used as a fallback. |
| **CustomFailedFileImageHorizontal** | **object** | | A custom Horizontal file that will be displayed if the file cannot be displayed|
| **CustomFailedFileImageVertical** | **object** | | A custom Horizontal file that will be displayed if the file cannot be displayed |

*Note: due to webpage memory constraints, you may want to limit the amount of times this is run on a single page. a maximum of 4 times is my recommendation as after it often reloads the page. Please file a pull request if you know how to fix this.

## Limitations:

This does not work for linking videos. For linking videos, check out other Github repositories [like](https://github.com/brothatru/react-video-thumbnail).

## Examples:

## Contributions:
This project was inspired by the [React Video Thumbnail](https://github.com/brothatru/react-video-thumbnail) as well as [this Stack Overflow answer](https://stackoverflow.com/a/63474748/10516042).