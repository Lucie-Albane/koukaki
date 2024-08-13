<?php
// Chargement des styles
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    
    wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/assets/css/style.css');
}

// Chargement des scripts
add_action('wp_enqueue_scripts', 'enqueue_custom_scripts');
function enqueue_custom_scripts() {
    wp_register_script('custom-script', get_stylesheet_directory_uri() . '/assets/js/customizer.js', array(), null, true);

    wp_enqueue_script('custom-script');
}

// Chargement de SwiperJS
function enqueue_swiper_scripts() {
    wp_enqueue_style('swiper-css', 'https://unpkg.com/swiper/swiper-bundle.min.css');
    wp_enqueue_script('swiper-js', 'https://unpkg.com/swiper/swiper-bundle.min.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'enqueue_swiper_scripts');

// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}