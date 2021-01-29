<?php

/**
 * Enqueue custom stylesheets
 *
 */
function enqueue_custom(){
    wp_enqueue_style( 'custom_css', get_template_directory_uri() . '/assets/css/custom.css', array(), time(), 'all' );
    wp_enqueue_script( 'font_awesome', 'https://kit.fontawesome.com/7d5773289a.js', array(), time(), 'all' );
}
add_action('wp_enqueue_scripts', 'enqueue_custom');

