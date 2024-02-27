# Parcel

- Dev build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written on C++
- Faster Builds because of Caching
- Image Optimization
- Minification of the files
- Bundle all files together
- Compressing your files
- Consitent Hashing
- Code Splitting
- Differential Bundling - For support on older browsers
- Diagnostic
- Error Handling
- HTTPs future
- Tree Shaking - remove unused code

# React hooks

Normal JS utility function

//Most important

- useState() --- Superpowerfull State Variable in React
- useEffect()

# Redux Toolkit

- Install Redux Toolkit (@reduxjs/toolkit)and react-redux
- Build our Store
- Connect our store to our app
- Slice (cardSlice)
- dispatch(action)
- Reading data with SELECTOR

# Type of testing

- Unit testing - testing in isolation
- Integration Testing - multiple components that comunicate together
- End to End Testing - e2e testing - testing an react app from user landing till user leaving site. Simulating the flow

# Setting up testing

- Installed React testing library (@testing-library/react)
- Installed Jest
- Intalled Babel dependency for jest
- Configured Babel config file - Follow parcel documentation on web
- Configure Parcel config file to disable default babel transpilation (.parcelrc) - Follow parcel documentation on web
- Jest configuration npx jest --init
- Install jsdom library npm install --save-dev jest-enviornment-jsdom
- Install @babel/preset-react to make jsx work in test cases
- Include @babel/preset-react inside my babel config
- Include @testing-library/jest-dom
