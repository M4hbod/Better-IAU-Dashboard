# Better-IAU-Dashboard

Tampermonkey scripts to improve and enhance the dashboard experience at Islamic Azad University (IAU).

## Features

- **Course Registration Cleaner**: Automatically filters out classes that are:
  - Fully booked (zero remaining capacity)
  - Exclusively for members of the opposite sex
- **Evaluation Autofill**: Adds a panel to select an option (like "خیلی خوب") and apply it to all evaluation questions with one click.

## Installation

1. First, install the Tampermonkey browser extension:
   - [Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)

2. Click the script link below to install:
   - [Course Registration Cleaner](https://raw.githubusercontent.com/M4hbod/Better-IAU-Dashboard/main/Tampermonkey/course-registration-cleaner.user.js)
   - [Evaluation Autofill](https://raw.githubusercontent.com/M4hbod/Better-IAU-Dashboard/main/Tampermonkey/iau-evaluation-autofill.user.js)

## Usage

### Course Registration Cleaner
1. After installing the script, visit the IAU course registration page
2. Click on the Tampermonkey icon in your browser
3. Select "Set User Sex" from the menu
4. Enter your sex (زن or مرد) in the prompt
5. The script will automatically filter the course list based on your settings

### Evaluation Autofill
1. After installing the script, go to the **استاد ارزشيابي** (Professor Evaluation) page.
2. A small control panel will appear on the top-left of the screen.
3. Choose your desired option (e.g. "خیلی خوب") and click "اعمال به همه".
4. All radio buttons will be automatically filled.

## Video Tutorial

https://github.com/user-attachments/assets/22fb7edb-5926-46fd-8abf-7ce6d3b74e3c

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[GNU GPLv3](./LICENSE) - See LICENSE file for details
