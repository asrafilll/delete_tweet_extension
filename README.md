# Twitter Tweet Deletion Extension

A Chrome/Edge browser extension that helps automate the process of deleting your tweets. This extension simulates manual deletion by automatically clicking through Twitter's UI to delete tweets one by one.

## Features

- Automatically scrolls through your Twitter profile
- Deletes tweets one by one
- Includes start/stop functionality
- Works on both twitter.com and x.com domains

## Installation

1. Clone or download this repository
2. Open Chrome/Edge and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked"
5. Select the folder containing the extension files

## Usage

1. Go to your Twitter profile page
2. Click the extension icon in your browser toolbar
3. Click "Start Deleting Tweets"
4. Click "Stop Deletion" at any time to pause the process

## Limitations and Known Issues

1. Tab-specific limitations:

   - The tab must remain open while the deletion process is running
   - Avoid navigating away from your profile page during deletion
   - Don't interact with the page while the deletion is in progress

2. Rate limitations:

   - Twitter may temporarily limit actions if too many deletions occur too quickly
   - The extension includes built-in delays to minimize this risk

3. Technical limitations:

   - Only works with tweets visible in your profile view
   - Cannot delete tweets that require scrolling to load
   - May need multiple runs to delete all tweets due to Twitter's infinite scroll behavior

4. Browser-specific:
   - Only works on Chromium-based browsers (Chrome, Edge)
   - Must be manually installed on each device (not synced via Chrome Web Store)
   - Requires developer mode to be enabled

## Customization

You can modify the deletion speed by adjusting these values in `content.js`:

```javascript
const DELAY_BETWEEN_DELETIONS = 1000; // 1 second between deletions
const SCROLL_DELAY = 2000; // 2 second delay after scrolling
```

## Troubleshooting

If the extension stops working:

1. Check if you're still on your Twitter profile page
2. Refresh the page and restart the deletion process
3. If Twitter shows any rate limit warnings, wait a few minutes before continuing

## Safety Notes

- This extension only works on your own profile when you're logged in
- All deletions still go through Twitter's normal deletion confirmation process
- Consider backing up your tweets before mass deletion

## Development

This extension is open source and can be modified. The main components are:

- `manifest.json`: Extension configuration
- `popup.html/js`: Extension UI and control
- `content.js`: Core deletion logic

## License

MIT License - feel free to modify and use as needed.

## Disclaimer

This is an unofficial tool not affiliated with Twitter/X. Use at your own risk. Twitter's interface may change over time, which could break this extension's functionality.
