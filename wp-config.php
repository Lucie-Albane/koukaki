<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'koukaki' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '1!?8amhd3pDlIeXgWR@jxoP:F{?YH^Isz-ic6eXi5<+m3Dz+bQ4ebe{dM_hK@/su' );
define( 'SECURE_AUTH_KEY',  'MgI}=k`146crz/CW~sV WYpb?Lmp1(h5QL[5h!`eC?A4yw$OZ:2E>G8u%EB3Z+W+' );
define( 'LOGGED_IN_KEY',    'N_XaCH{op*O7,oU7}UNc6qK?x{#f8PCi7xe_sH@#4Ry5X1 ^Fkqf.[eVRnE`A/<o' );
define( 'NONCE_KEY',        ',}|k%x|~AM^g0OugrCp_Fo.d/,LNS]{E)E(J[Xf}]}p8]~m;pyu1V_*j#Hux;F7m' );
define( 'AUTH_SALT',        '^Z<nGHLi.(d[8NaO.2T%#PS*V/-+Lf[LDb[zleTZ3&q{EBT|^wy?%Vi=-sUuC3-V' );
define( 'SECURE_AUTH_SALT', '-!C[3<Y-R]S+)XK}AP1,xy*}pfCVm!h~m$ #$Mu@F},Q}CYr5&1epYx_,9(qmkK@' );
define( 'LOGGED_IN_SALT',   'n.)*,OW4i:F7A)xP/`k*ug<k9gST)FEnO(wQ`8PHx9KJbu0HDd50{V@.@<{P^7!,' );
define( 'NONCE_SALT',       'GAWf%-q6_{{&4oJ>?j(To#~^NE*U!$7/DlCko+VBI[!,f~0&@}k3Ek}|:Ule5 !]' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
