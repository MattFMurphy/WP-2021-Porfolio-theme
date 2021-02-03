<?php

/**
 * Enqueue custom stylesheets
 *
 */
function enqueue_custom(){
    if(is_front_page(  )){
        wp_enqueue_style( 'custom_css', get_template_directory_uri() . '/assets/css/custom.css', array(), time(), 'all' );
        wp_enqueue_script( 'font_awesome', 'https://kit.fontawesome.com/7d5773289a.js', array(), time(), 'all' );
        wp_enqueue_script( 'particles', get_template_directory_uri() . '/assets/js/modules/particles.js', array(), time(), 'all' );
        wp_enqueue_script( 'custom_js', get_template_directory_uri() . '/assets/js/modules/custom.js', array(), time(), 'all' );
    } 
}

add_action('wp_enqueue_scripts', 'enqueue_custom');