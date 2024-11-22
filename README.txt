-npx create-expo-app@latest --template (expo CLI)
-Choose a template: » Blank
-What is your app named? ... {your project name}
-Install axios: npm i axios
-Install react navigation: npm i @react-navigation/native
-Install react stack: npx expo install @react-navigation/native-stack
-Install react screen: npx expo install react-native-screens react-native-safe-area-context
-type 'rnf' than tab to autocomplete setup screen
-Running apps: npx expo start

Build APK:
-npm install -g eas-cli
-eas login
-eas build:configure
-eas build --platform android (automatically upload to Google Play Store .aab)
-to create .apk, add this:
"preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      }
    },
    "preview2": {
      "android": {
        "gradleCommand": ":app:assembleRelease"
      }
    },
 then do this command:
 eas build -p android --profile previe