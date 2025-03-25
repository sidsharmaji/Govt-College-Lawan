<?php
/** Ensure WordPress core is loaded */
if (!defined('ABSPATH')) {
    define('WP_USE_THEMES', false);
    require_once(dirname(dirname(dirname(dirname(__FILE__)))) . '/wp-load.php');
}

function enqueue_react_app() {
    $assets_dir = get_template_directory_uri() . '/assets';
    
    // Enqueue main CSS file
    wp_enqueue_style('react-app-css', $assets_dir . '/index-CEYmyKgN.css');
    
    // Enqueue chunk files first
    wp_enqueue_script('react-chunk-1', $assets_dir . '/chunks/chunk-3TPGMM4D.js', array(), '1.0', true);
    wp_enqueue_script('react-chunk-2', $assets_dir . '/chunks/chunk-FBRNPY5B.js', array(), '1.0', true);
    
    // Enqueue main JS file
    wp_enqueue_script('react-app-js', $assets_dir . '/index-CiaH6ipe.js', array('react-chunk-1', 'react-chunk-2'), '1.0', true);

    // Add support for React Router and base URL
    add_action('wp_head', function() {
        echo '<script>window.wpData = ' . json_encode(array(
            'siteUrl' => get_site_url(),
            'baseUrl' => get_template_directory_uri(),
        )) . ';</script>';
    });

    // Remove default WordPress styles that might conflict
    wp_dequeue_style('wp-block-library');
    wp_dequeue_style('wp-block-library-theme');
    wp_dequeue_style('wc-block-style');
}
add_action('wp_enqueue_scripts', 'enqueue_react_app');

// Add theme support
function theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'theme_setup');