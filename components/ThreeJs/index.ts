import { useEffect } from 'react';
import THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function ThreeJs() {
	useEffect(() => {
		const loadModel = async () => {
		const GLTFLoader = (await import('three/examples/jsm/loaders/GLTFLoader.js')).GLTFLoader;
		const loader = new GLTFLoader();
		const scene = new THREE.Scene();
	
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
	
		const renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(renderer.domElement);
	
		
		loader.load( '../../assets/test3d.gltf', function ( gltf ) {
		const obj = gltf.scene;
		scene.add( gltf.scene );
	
		console.log(scene)
	
	}, undefined, function ( error ) {
	
		console.error( error );
	
	} );
		scene.background = new THREE.Color(0xffffff);
		const light = new THREE.DirectionalLight(0xffffff, 2);
		scene.add(light);
		camera.position.set(0, 0, 5);
		function animate() {
			requestAnimationFrame(animate);
			renderer.render(scene, camera);
		}
	
		animate();
	}
	loadModel();


});

	
}