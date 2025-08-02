"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { WebGPURenderer, SpriteNodeMaterial } from 'three/webgpu';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { color, cos, float, mix, range, sin, time, uniform, uv, vec3, vec4, PI2 } from 'three/tsl';
import GUI from 'lil-gui';

// Extend the THREE namespace to include node properties on SpriteMaterial
/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'three' {
    interface SpriteMaterial {
        scaleNode?: any;
        positionNode?: any;
        color?: any;
    }
}
/* eslint-enable @typescript-eslint/no-explicit-any */

interface ThreeSceneProps {
    className?: string;
}

const ThreeScene = ({ className = "" }: ThreeSceneProps) => {
    const mountRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<{
        camera?: THREE.PerspectiveCamera;
        scene?: THREE.Scene;
        renderer?: WebGPURenderer;
        controls?: OrbitControls;
        cleanup?: () => void;
    }>({});

    useEffect(() => {
        if (!mountRef.current) return;

        let isDestroyed = false;

        const init = async () => {
            if (isDestroyed) return;

            const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
            camera.position.set(7, 3, 2);

            const scene = new THREE.Scene();

            // Starfield background using standard WebGL
            const starGeometry = new THREE.BufferGeometry();
            const starCount = 3000;
            const starPositions = new Float32Array(starCount * 3);
            const starColors = new Float32Array(starCount * 3);

            for (let i = 0; i < starCount * 3; i += 3) {
                // Position
                starPositions[i] = (Math.random() - 0.5) * 200;
                starPositions[i + 1] = (Math.random() - 0.5) * 200;
                starPositions[i + 2] = (Math.random() - 0.5) * 200;

                // Purple color variations
                const intensity = Math.random() * 0.8 + 0.2;
                starColors[i] = 0.5 + intensity * 0.5;
                starColors[i + 1] = 0.2 + intensity * 0.3;
                starColors[i + 2] = 0.8 + intensity * 0.2;
            }

            starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
            starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

            const starMaterial = new THREE.PointsMaterial({
                size: 1.5,
                transparent: true,
                opacity: 0.6,
                sizeAttenuation: true,
                vertexColors: true,
                blending: THREE.AdditiveBlending
            });

            const stars = new THREE.Points(starGeometry, starMaterial);
            scene.add(stars);

            // Grid system for cosmic effect
            const gridSize = 50;
            const gridDivisions = 20;

            // Main horizontal grid
            const gridHelper1 = new THREE.GridHelper(gridSize, gridDivisions, 0x6d28d9, 0x4c1d95);
            gridHelper1.material.opacity = 0.15;
            gridHelper1.material.transparent = true;
            gridHelper1.position.y = -10;
            scene.add(gridHelper1);

            // Vertical grid (perpendicular)
            const gridHelper2 = new THREE.GridHelper(gridSize, gridDivisions, 0x6d28d9, 0x4c1d95);
            gridHelper2.material.opacity = 0.1;
            gridHelper2.material.transparent = true;
            gridHelper2.rotation.z = Math.PI / 2;
            gridHelper2.position.x = -10;
            scene.add(gridHelper2);

            // Original spiral galaxy using WebGPU and TSL
            const material = new SpriteNodeMaterial({
                depthWrite: false,
                blending: THREE.AdditiveBlending
            });

            const size = uniform(0.08);
            material.scaleNode = range(0, 1).mul(size);

            const radiusRatio = range(0, 1);
            const radius = radiusRatio.pow(1.5).mul(5).toVar();

            const branches = 3;
            const branchAngle = range(0, branches).floor().mul(PI2.div(branches));
            // Slower rotation by multiplying time by 0.1 (10% of original speed)
            const angle = branchAngle.add(time.mul(0.4).mul(radiusRatio.oneMinus()));

            const position = vec3(
                cos(angle),
                0,
                sin(angle)
            ).mul(radius);

            const randomOffset = range(vec3(-1), vec3(1)).pow(3).mul(radiusRatio).add(0.2);

            material.positionNode = position.add(randomOffset);

            // Purple theme colors for the galaxy
            const colorInside = uniform(color('#d3c7f0'));
            const colorOutside = uniform(color('#5d1599'));
            const colorFinal = mix(colorInside, colorOutside, radiusRatio.oneMinus().pow(2).oneMinus());
            const alpha = float(0.1).div(uv().sub(0.5).length()).sub(0.2);
            material.colorNode = vec4(colorFinal, alpha);

            const mesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1), material, 20000);
            scene.add(mesh);

            const gui = new GUI();
            gui.add(size, 'value', 0, 1, 0.001).name('size');
            gui.addColor({ color: colorInside.value.getHex(THREE.SRGBColorSpace) }, 'color')
                .name('colorInside')
                .onChange((value: string) => {
                    colorInside.value.set(value);
                });
            gui.addColor({ color: colorOutside.value.getHex(THREE.SRGBColorSpace) }, 'color')
                .name('colorOutside')
                .onChange((value: string) => {
                    colorOutside.value.set(value);
                });

            // Renderer
            const renderer = new WebGPURenderer({ antialias: true, alpha: true });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor(0x000000, 0);

            if (mountRef.current && !isDestroyed) {
                mountRef.current.appendChild(renderer.domElement);
            }

            // Add OrbitControls
            const controls = new OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.05;
            controls.enableZoom = false; // Disable zoom to prevent scroll conflicts
            controls.enablePan = false;  // Disable panning for better mobile experience
            controls.enableRotate = true;
            controls.autoRotate = true;
            controls.autoRotateSpeed = 0.5;

            // Prevent page scroll when interacting with the canvas
            renderer.domElement.style.touchAction = 'none';
            renderer.domElement.addEventListener('wheel', (e) => e.preventDefault(), { passive: false });

            // Store controls in ref for cleanup
            sceneRef.current.controls = controls;

            const onWindowResize = () => {
                if (isDestroyed) return;
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            };

            const animate = () => {
                if (isDestroyed) return;
                controls.update();

                // Animate stars slightly
                if (stars) {
                    stars.rotation.y += 0.0002;
                }

                // Subtle grid animation
                gridHelper1.rotation.y += 0.0001;
                gridHelper2.rotation.x += 0.0001;

                renderer.render(scene, camera);
            };

            window.addEventListener('resize', onWindowResize);

            // Store references for cleanup
            sceneRef.current = {
                camera,
                scene,
                renderer,
                controls,
                cleanup: () => {
                    window.removeEventListener('resize', onWindowResize);
                    if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
                        mountRef.current.removeChild(renderer.domElement);
                    }
                    // Clean up scene objects
                    scene.traverse((object) => {
                        // Type guard for objects with geometry (Mesh, Points, Line, etc.)
                        if ('geometry' in object && object.geometry) {
                            (object.geometry as THREE.BufferGeometry).dispose();
                        }
                        // Type guard for objects with material
                        if ('material' in object && object.material) {
                            const material = object.material as THREE.Material | THREE.Material[];
                            if (Array.isArray(material)) {
                                material.forEach(mat => mat.dispose());
                            } else {
                                material.dispose();
                            }
                        }
                    });
                    renderer.dispose();
                }
            };

            try {
                await renderer.init();
                if (!isDestroyed) {
                    renderer.setAnimationLoop(animate);
                }
            } catch (error) {
                console.error('WebGPU not available.', error);
                if (mountRef.current && !isDestroyed) {
                    const warning = document.createElement('div');
                    warning.style.position = 'absolute';
                    warning.style.top = '50%';
                    warning.style.left = '50%';
                    warning.style.transform = 'translate(-50%, -50%)';
                    warning.style.padding = '20px';
                    warning.style.backgroundColor = 'rgba(139, 92, 246, 0.1)';
                    warning.style.border = '1px solid rgba(139, 92, 246, 0.3)';
                    warning.style.borderRadius = '8px';
                    warning.style.color = '#a855f7';
                    warning.style.textAlign = 'center';
                    warning.style.fontSize = '14px';
                    warning.innerHTML = 'WebGPU not supported.<br>Upgrade your browser for the full experience.';
                    mountRef.current.appendChild(warning);
                }
                return;
            }
        };

        init();

        return () => {
            isDestroyed = true;
            if (sceneRef.current.cleanup) {
                sceneRef.current.cleanup();
            }
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className={`galaxy-canvas ${className}`}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'auto',
                zIndex: 1
            }}
        />
    );
};

export default ThreeScene;