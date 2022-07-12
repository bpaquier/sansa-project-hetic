# SANSA Application

The project is a complete responsive React Native application. It's designed for android and ios smartphone, and tablet.
But the homeless people experience will mainly be on 20 inches bornes in the street. So to have the full experience, you should start by follow the [borne installation](#installation-for-borne).

### How to start

- pull project
- `yarn`
- launch local server with
  - `yarn web` for your browser
  - `expo start` for ExpoGo app

### Installation for borne

#### Install android studio

You can install android studio [here](https://developer.android.com/studio?hl=fr&gclid=CjwKCAjwt7SWBhAnEiwAx8ZLauM51PPjHIOn9TDCpCK5lJiIA0gqltwkFi0uifg7W90HB-beCyMwvBoCKfEQAvD_BwE&gclsrc=aw.ds).

#### Set up android studio

Once android studio is installed, you click on the button `More Actions` and select `Virtual Device Manager`

// PHOTO

On the device manager window, click on `Create device`

// PHOTO

Select `Import Hardware Profiles` and find SANSA_TABLETTE_CONFIGURATION.xml

(In the repo `device/SANSA_TABLETTE_CONFIGURATION.xml`)

Then, it should appear in the TV category. Select the good device, and next.

// PHOTO

Then, select a system image. We made our developpement on API32, but it should work perfectly fine on another one.
Click next.

On the `Verify Configuration` page, click on `Show Advanced Settings` and fill the form as in the picture below.

// PHOTO

Then, select `Finish`.

A loader should appear, and if there is no error, it should display the device in the device list.
But there is a few more still a few more step to follow.
