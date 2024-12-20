<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>

	<header id="masthead" class="site-header">
		<nav id="site-navigation" class="main-navigation">
			<div class="nav-bar">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
				<button class="burger-menu" aria-controls="primary-menu" aria-expanded="false">
                	<img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/burger_open.png'; ?>" class="burger-menu-open-icon" alt="icône pour ouvrir et fermer le menu">
					<img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/burger_close.png'; ?>" class="burger-menu-close-icon hidden" alt="icône pour ouvrir et fermer le menu">
            	</button>
			</div>
			<div class="overlay-menu">
				<img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/logo.png'; ?>" alt="logo de fleurs d'oranger et chats errants">
				<ul class="nav-menu">
				<li class="nav-item"><a href="#story">Histoire</a></li>
                <li class="nav-item"><a href="#characters">Personnages</a></li>
                <li class="nav-item"><a href="#place">Lieu</a></li>
                <li class="nav-item"><a href="#studio">Studio Koukaki</a></li>
				</ul>
				<p>STUDIO KOUKAKI</p>
			</div>
		</nav><!-- #site-navigation -->
	</header><!-- #masthead -->
