This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios
```

# Project Structure

📦 src  
┣ 📂 components  
┃ ┣ 📂 SomeComponent  
┃ ┃ ┣ 📜 index.tsx # Component main file  
┃ ┃ ┗ 📜 styles.ts # Component styles  
┣ 📂 hooks  
┃ ┣ 📜 useSomeHook.ts # Custom React hooks  
┃ ┗ 📜 index.ts # Hooks barrel file for exports  
┣ 📂 interfaces # TypeScript interfaces and types  
┣ 📂 lib # Third-party libraries configurations and utilities  
┣ 📂 redux  
┃ ┣ 📂 slice-name  
┃ ┃ ┣ 📜 index.ts # Slice exports  
┃ ┃ ┣ 📜 slice.ts # Redux slice definition  
┃ ┃ ┗ 📜 thunks.ts # Async actions (thunks)  
┃ ┣ 📜 index.ts # Redux root exports  
┃ ┗ 📜 store.ts # Redux store configuration  
┣ 📂 screens  
┃ ┣ 📂 SomeScreen  
┃ ┃ ┣ 📜 index.tsx # Screen component  
┃ ┃ ┗ 📜 styles.ts # Screen-specific styles  
┗ 📜 App.tsx # Root application component

## Directory Structure Overview

- **components**: Reusable UI components, each in its own directory with component logic and styles
- **hooks**: Custom React hooks for shared logic across components
- **interfaces**: TypeScript type definitions and interfaces
- **lib**: Library configurations and third-party integrations
- **redux**: State management using Redux Toolkit
  - Individual feature slices with their actions and reducers
  - Async operations (thunks)
  - Store configuration
- **screens**: Main application views/pages
  - Each screen in its own directory
  - Contains screen-specific components and styles

# Project Dependencies

### Navigation

- **@react-navigation/bottom-tabs** (v7.2.0): Bottom tab navigation implementation
- **@react-navigation/native** (v7.0.14): Core navigation library for React Native

### State Management

- **@reduxjs/toolkit** (v2.5.1): Official Redux toolset for efficient Redux development
- **react-redux** (v9.2.0): Official React bindings for Redux
- **redux-persist** (v6.0.0): Persist and rehydrate Redux stores
- **@react-native-async-storage/async-storage** (v2.1.0): Asynchronous storage system

### Networking

- **axios** (v1.7.9): Promise-based HTTP client for API requests

### Forms and Validation

- **formik** (v2.4.6): Form management library
- **yup** (v1.6.1): Schema validation library
