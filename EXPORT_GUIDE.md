# Exporting Guide for WordPress and Wix Studio

## WordPress Export

### Prerequisites
1. Install WordPress on your server
2. Ensure you have administrative access to WordPress
3. Make sure you have FTP or direct file access to your WordPress installation

### Step 1: Prepare the React Application
1. Ensure all your routes and components are working correctly
2. Update any absolute paths to relative paths
3. Run the build command:
```bash
npm run build
```
4. The built files will be in the `dist` directory
5. Verify the build was successful by checking the dist folder contents

### Step 2: Create WordPress Theme Structure
1. Connect to your WordPress server via FTP or file manager
2. Navigate to `wp-content/themes/`
3. Create a new directory: `govt-college-lawan`
4. Create the following theme files:
   - `style.css` (required for theme identification)
   - `functions.php`
   - `index.php`
   - `header.php`
   - `footer.php`

### Step 3: Set Up Theme Files
1. Create `style.css` with theme information:
```css
/*
Theme Name: Govt College Lawan
Description: React-based theme for Govt College Lawan
Version: 1.0
Author: Your Name
*/
```

2. Create `functions.php` to enqueue React assets:
```php
<?php
function enqueue_react_app() {
    $assets_dir = get_template_directory_uri() . '/assets';
    
    // Enqueue main CSS file
    wp_enqueue_style('react-app-css', $assets_dir . '/index.css');
    
    // Enqueue main JS file
    wp_enqueue_script('react-app-js', $assets_dir . '/index.js', array(), '1.0', true);

    // Add support for React Router
    add_action('wp_head', function() {
        echo '<script>window.wpData = ' . json_encode(array(
            'siteUrl' => get_site_url(),
        )) . ';</script>';
    });
}
add_action('wp_enqueue_scripts', 'enqueue_react_app');

// Add theme support
function theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'theme_setup');
```

3. Create `header.php`:
```php
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
```

4. Create `footer.php`:
```php
<?php wp_footer(); ?>
</body>
</html>
```

5. Create `index.php`:
```php
<?php get_header(); ?>
<div id="root"></div>
<?php get_footer(); ?>
```

### Step 4: Deploy React Build
1. Copy all contents from your `dist` directory to the theme root
2. Ensure the following structure:
   ```
   govt-college-lawan/
   ├── assets/
   │   ├── index.css
   │   └── index.js
   ├── style.css
   ├── functions.php
   ├── index.php
   ├── header.php
   └── footer.php
   ```

### Step 5: WordPress Configuration
1. Log in to WordPress admin panel
2. Go to Appearance > Themes
3. Activate the "Govt College Lawan" theme
4. Go to Settings > Permalinks
5. Choose "Post name" option for URLs
6. Save changes to update permalink structure

### Step 6: Testing and Troubleshooting
1. Test all routes in your React application
2. Verify all assets are loading correctly
3. Check browser console for any errors
4. Test responsive design on different devices
5. Common issues to check:
   - Asset paths are correct
   - React Router works with WordPress URLs
   - Images and other media load properly
   - Forms and API calls function correctly

### Step 7: Performance Optimization
1. Enable WordPress caching
2. Configure server-side caching
3. Optimize images and assets
4. Enable GZIP compression
5. Set up a CDN if needed

## Wix Studio Export

### Step 1: Prepare Components
1. Break down the React components into Wix-compatible components:
   - Convert React Router routes to Wix pages
   - Adapt components to use Wix's design system
   - Move static assets to Wix media manager

### Step 2: Wix Studio Integration
1. Create a new site in Wix Studio
2. Import components:
   - Create equivalent pages for each route
   - Copy component logic to Wix components
   - Update styling using Wix's style system

### Step 3: Asset Migration
1. Upload all SVG files from `public` directory to Wix media manager
2. Update image references in components
3. Configure Wix routing to match current navigation structure

### Step 4: Testing
1. Test all interactive features
2. Verify responsive design
3. Check performance and loading times

## Notes
- Maintain backup of original React code
- Document any platform-specific modifications
- Test thoroughly on both platforms before going live