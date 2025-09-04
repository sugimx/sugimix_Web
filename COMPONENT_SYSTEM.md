# Component System Documentation

## Overview
This website now uses a modular component system that allows you to maintain header and footer content in separate files and load them dynamically across all pages.

## Components Available

### Header Component (`components/header.html`)
- Contains the main navigation header
- Includes logo, navigation links, and mobile menu toggle
- Automatically sets active navigation state based on current page

### Footer Component (`components/footer.html`)
- Contains the main footer with company information
- Includes social links, quick navigation, and contact details
- Consistent across all pages

## How to Use

### For Existing Pages
1. Replace the existing `<header>` section with:
   ```html
   <!-- Header Component Placeholder -->
   <div id="header-placeholder"></div>
   ```

2. Replace the existing `<footer>` section with:
   ```html
   <!-- Footer Component Placeholder -->
   <div id="footer-placeholder"></div>
   ```

3. Make sure `js/main.js` is included in your page:
   ```html
   <script src="js/main.js"></script>
   ```

### For New Pages
1. Use the provided `template.html` as a starting point
2. The template already includes the component placeholders
3. Just add your page-specific content between the header and footer placeholders

## How It Works

1. **Component Loading**: The `ComponentLoader` class in `main.js` automatically detects placeholder elements and loads the corresponding components
2. **Dual Loading Strategy**: 
   - First tries to load components from external HTML files via fetch API
   - Falls back to embedded components if external loading fails
   - Includes synchronous fallback for maximum compatibility
3. **Navigation State**: The system automatically sets the active navigation state based on the current page URL
4. **Mobile Menu**: Mobile navigation functionality is automatically initialized after components load
5. **Visual Feedback**: Components show a green border briefly when loaded successfully

## File Structure
```
├── components/
│   ├── header.html          # Header component
│   └── footer.html          # Footer component
├── js/
│   └── main.js             # Contains ComponentLoader class
├── template.html           # Template for new pages
└── [your-pages].html       # Pages using component system
```

## Benefits

1. **Maintainability**: Update header/footer content in one place
2. **Consistency**: Ensures all pages have identical header/footer
3. **Efficiency**: Reduces code duplication
4. **Flexibility**: Easy to add new components or modify existing ones

## Adding New Components

To add a new component:

1. Create a new HTML file in the `components/` directory
2. Add a placeholder element in your pages: `<div id="new-component-placeholder"></div>`
3. Update the `loadAllComponents()` method in `main.js` to load your new component

## Troubleshooting

- **Components not loading**: 
  - Check browser console for error messages
  - Look for green borders around header/footer areas (indicates successful loading)
  - Try opening `test-components.html` to verify the system works
- **Navigation not working**: Ensure `js/main.js` is loaded after the component placeholders
- **Active state not set**: Verify the page URL matches the navigation link href
- **External files not loading**: The system will automatically fall back to embedded components
- **Console errors**: Check for CORS issues if running from file:// protocol (use a local server)

## Browser Support

This system uses modern JavaScript features:
- Fetch API (supported in all modern browsers)
- ES6 Classes (supported in all modern browsers)
- Async/Await (supported in all modern browsers)

For older browser support, you may need to add polyfills.
