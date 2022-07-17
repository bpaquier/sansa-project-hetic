# SANSA Application

The project is a complete responsive React Native application. It's designed for android and ios smartphone, and tablet.
But the homeless people experience will mainly be on 20 inches bornes in the street. So to have the full experience, you should start by follow the [borne installation](#installation-for-borne).

SUMMARY

- [How to start](#how-to-start)
- [Installation on your phone or tablet](#installation-on-your-own-phone-or-tablet)
- [Installation for phone on emulator](#installation-for-phone-on-emulator)
- [Installation for borne on emulator](#installation-for-borne-on-emulator)
  - [Install android studio](#install-android-studio)
  - [Setup android studio](#set-up-android-studio)
  - [Install a playstore on borne](#install-a-playstore-on-borne)

## How to start

- pull project
- `yarn`
- launch local server with
  - `yarn web` for your browser
  - `expo start` for ExpoGo app

# Installation on your own phone or tablet

Connect your computer and phone or tablet on the same wifi. Install expo go on your device (available in Play Store for android and App Store on ios).
Start the project on your terminal, and scan the QR code that the terminal shows you with the Expo application on your device.

# Installation for phone on emulator

If you are using android studio, you just need to create a device with the Playstore enabled, and launch the device. When it's launch, `expo start`
Once it's started, launch
`> Press a │ open Android`

# Installation for borne on emulator

## Install android studio

You can install android studio [here](https://developer.android.com/studio?hl=fr&gclid=CjwKCAjwt7SWBhAnEiwAx8ZLauM51PPjHIOn9TDCpCK5lJiIA0gqltwkFi0uifg7W90HB-beCyMwvBoCKfEQAvD_BwE&gclsrc=aw.ds).

## Set up android studio

Once android studio is installed, you click on the button `More Actions` and select `Virtual Device Manager`

![Capture d’écran 2022-07-12 à 17 53 56](https://user-images.githubusercontent.com/47388675/178543061-eabde661-3fa5-4861-8b9e-cd8bac93a7db.png)

On the device manager window, click on `Create device`

![Capture d’écran 2022-07-12 à 17 55 19](https://user-images.githubusercontent.com/47388675/178543094-3f4c2082-6426-46c8-ac26-732927953819.png)

Select `Import Hardware Profiles` and find SANSA_TABLETTE_CONFIGURATION.xml

(In the repo [device/SANSA_TABLETTE_CONFIGURATION.xml](https://github.com/bpaquier/sansa-project-hetic/blob/doc/addReadMeForBorne/devices/SANSA_TABLETTE_CONFIGURATION.xml) )

<img width="1006" alt="Capture d’écran 2022-07-12 à 17 57 25" src="https://user-images.githubusercontent.com/47388675/178543743-80453899-103b-41b7-b20a-5e9b037c8756.png">

Then, it should appear in the TV category. Select the good device, and next.

![Capture d’écran 2022-07-12 à 18 14 14](https://user-images.githubusercontent.com/47388675/178543521-fd9d4acd-72d8-4130-93b1-5c11a3d40f50.png)

Then, select a system image. We made our developpement on API32, but it should work perfectly fine on another one.
Click next.

On the `Verify Configuration` page, click on `Show Advanced Settings` and fill the form as in the picture below.

![Capture d’écran 2022-07-12 à 18 05 36](https://user-images.githubusercontent.com/47388675/178543909-4311fca4-c556-429b-a155-6f5a1bfea9bf.png)

Then, select `Finish`.

A loader should appear, and if there is no error, it should display the device in the device list.

In your terminal :

`$ cd ~/.android/avd/`

On this file, you will find the name of the device you just created. Open it, and you will find a `config.ini` file. Open it in your text editor and change this value :

`hw.lcd.density=240`

To make the google maps api works on tablet, you need to change some other values in this file; see below.

## Install a playstore on borne

Only a few android studio smartphones emulators has google play store installed. For the tablets, there is none. So you have to enable the playstore to be able to use google maps.

`PlayStore.enabled = true`

If it's an API32 android :
`image.sysdir.1 = system-images/android-32/google_apis_playstore/arm64-v8a/`

If it's an API30 android : `image.sysdir.1 = system-images/android-30/google_apis_playstore/arm64-v8a/`

ect...

`tag.display = Google Play`

`tag.id = google_apis_playstore`

[Source on stackoverflow](https://stackoverflow.com/a/62436883/14997648)

Save the changes, and launch the device. Once the device has fully started, launch expo.
