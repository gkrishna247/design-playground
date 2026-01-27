/**
 * ============================================
 * DESIGNS DATA - designs.js
 * Array of design experiment entries
 * ============================================
 */

(function () {
    'use strict';

    // Initialize global namespace
    window.DesignPlayground = window.DesignPlayground || {};

    /**
     * Design data schema:
     * {
     *   id: string,          // Unique identifier
     *   name: string,        // Display name
     *   description: string, // Brief description
     *   techStack: string[], // Technologies used
     *   folderPath: string,  // Relative path to folder
     *   accentHue: number    // Optional HSL hue for accent
     * }
     */

    var designs = [
        {
            id: 'gradient-cards',
            name: 'Gradient Cards',
            description: 'Beautiful gradient hover cards with smooth color transitions and subtle shadow effects. Features pure CSS gradients with lift animations on hover.',
            techStack: ['HTML', 'CSS'],
            folderPath: './gradient-cards/',
            accentHue: 280
        },
        {
            id: 'glassmorphism-ui',
            name: 'Glassmorphism UI',
            description: 'Frosted glass effect components with backdrop blur and translucent layers. Includes animated floating blobs and modern glass card design.',
            techStack: ['HTML', 'CSS'],
            folderPath: './glassmorphism-ui/',
            accentHue: 200
        },
        {
            id: '3d-parallax-portfolio',
            name: '3D Parallax Portfolio',
            description: 'Immersive 3D parallax portfolio with depth-based scroll navigation, animated neural network canvas, and glassmorphism cards with 3D tilt effects.',
            techStack: ['HTML', 'CSS', 'JavaScript', 'Canvas API'],
            folderPath: './3d-parallax-portfolio/',
            accentHue: 188
        }
    ];

    // Export to namespace
    window.DesignPlayground.designs = designs;

})();
