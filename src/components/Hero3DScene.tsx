import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Hero3DScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Skip mounting if reduced motion is preferred or on mobile viewport (< 768px)
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;
    if (reducedMotion || isMobile) {
      setWebGLSupported(false);
      return;
    }

    // Check WebGL support
    try {
      const testCanvas = document.createElement('canvas');
      const gl =
        testCanvas.getContext('webgl') ||
        testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLSupported(false);
        return;
      }
    } catch {
      setWebGLSupported(false);
      return;
    }

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 24);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    container.appendChild(renderer.domElement);

    // Group for subtle rotation
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // Studio Lighting - Soft and atmospheric
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.4);
    dirLight1.position.set(15, 20, 15);
    scene.add(dirLight1);

    // Subtle accent rim light
    const dirLight2 = new THREE.DirectionalLight(0xc7ff3d, 0.8);
    dirLight2.position.set(-15, -10, -10);
    scene.add(dirLight2);

    // Geometry: Elegant TorusKnot
    const geom = new THREE.TorusKnotGeometry(4.2, 1.1, 140, 36, 2, 3);
    const posAttribute = geom.attributes.position;
    const origPositions = new Float32Array(posAttribute.array);

    // Subtle, elegant material: graphite obsidian with soft metallic sheen
    const obsidianMat = new THREE.MeshPhysicalMaterial({
      color: 0x222222,
      metalness: 0.7,
      roughness: 0.35,
      clearcoat: 0.6,
      clearcoatRoughness: 0.3,
      reflectivity: 0.6,
      sheen: 0.15,
      sheenColor: 0xc7ff3d,
      transparent: true,
      opacity: 0.65,
    });

    const mesh = new THREE.Mesh(geom, obsidianMat);
    sculptureGroup.add(mesh);

    // Subtle ambient orbital ring
    const ringGeom = new THREE.TorusGeometry(7.5, 0.03, 16, 80);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x111111,
      transparent: true,
      opacity: 0.18,
    });
    const ringMesh = new THREE.Mesh(ringGeom, ringMat);
    ringMesh.rotation.x = Math.PI / 2.4;
    sculptureGroup.add(ringMesh);

    // Mouse & Scroll interaction variables
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;
    let scrollYOffset = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      targetMouseX = (x / rect.width - 0.5) * 2;
      targetMouseY = (y / rect.height - 0.5) * 2;
    };

    const onScroll = () => {
      scrollYOffset = window.scrollY * 0.0008;
    };

    const onResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    // Render loop
    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Damped interpolation for buttery-smooth mouse tracking
      currentMouseX += (targetMouseX - currentMouseX) * 0.03;
      currentMouseY += (targetMouseY - currentMouseY) * 0.03;

      // Gentle organic rotation
      sculptureGroup.rotation.x = t * 0.1 + currentMouseY * 0.35 + scrollYOffset;
      sculptureGroup.rotation.y = t * 0.15 + currentMouseX * 0.45;
      sculptureGroup.rotation.z = Math.sin(t * 0.08) * 0.08;

      // Soft lateral parallax
      sculptureGroup.position.x = currentMouseX * 0.4;
      sculptureGroup.position.y = -currentMouseY * 0.3;

      // Gentle vertex wave deformation
      const positions = posAttribute.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        const ox = origPositions[i];
        const oy = origPositions[i + 1];
        const oz = origPositions[i + 2];
        const wave = Math.sin(t * 1.2 + ox * 0.5 + oy * 0.5) * 0.09;
        positions[i] = ox + (ox / 6) * wave;
        positions[i + 1] = oy + (oy / 6) * wave;
        positions[i + 2] = oz + (oz / 6) * wave;
      }
      posAttribute.needsUpdate = true;
      geom.computeVertexNormals();

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animId);

      geom.dispose();
      obsidianMat.dispose();
      ringGeom.dispose();
      ringMat.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-15 md:opacity-20">
      {webGLSupported ? (
        <div ref={mountRef} className="w-full h-full" />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-64 h-64 rounded-full border border-[#111111]/10 flex items-center justify-center">
            <div className="w-40 h-40 rounded-full border border-[#c7ff3d]/30" />
          </div>
        </div>
      )}
    </div>
  );
}
