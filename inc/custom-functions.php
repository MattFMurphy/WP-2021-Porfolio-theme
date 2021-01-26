<?php

/**
 * Enqueue custom stylesheets
 *
 */
function enqueue_stylesheets(){
    wp_enqueue_style( 'custom_css', get_template_directory_uri() . '/assets/css/custom.css', array(), time(), 'all' );

}
add_action('wp_enqueue_scripts', 'enqueue_stylesheets');

