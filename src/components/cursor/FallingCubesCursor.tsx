import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const FallingCubesCursor = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    //Весь мир театр, а люди в нём актёры
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = 'fixed';
    renderer.domElement.style.pointerEvents = 'none';
    renderer.domElement.style.zIndex = '9999';
    mountRef.current.appendChild(renderer.domElement);

    //Освещение
    const light = new THREE.DirectionalLight(0xffffff, 0.6);
    light.position.set(0.5, 0.5, 1);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    const cubes: THREE.Mesh[] = [];
    const cubeGeometry = new THREE.BoxGeometry(0.08, 0.08, 0.08); // Очень масенький
    const colors = [0x7f5af0, 0x2cb67d, 0x72757e];
    
    for (let i = 0; i < 3; i++) {
      const material = new THREE.MeshPhongMaterial({
        color: colors[i],
        shininess: 30,
        transparent: true,
        opacity: 0.9
      });
      
      const cube = new THREE.Mesh(cubeGeometry, material);
      cube.visible = false;
      cube.position.z = -i * 0.5; // Немного разносим по глубине
      scene.add(cube);
      cubes.push(cube);
    }

    // 4. Анимация и физика
    const mouse = new THREE.Vector2();
    const gravity = -0.002; // Ну капец, как очень медленно падает
    let lastDropTime = 0;
    const dropInterval = 300; 

    const handleMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      
      // Кубик сияет!(нет)
      cubes.forEach(cube => cube.visible = true);
    };

    window.addEventListener('mousemove', handleMove);

    //Анимацию дэпаем дэпаем ребята
    const animate = (time: number) => {
      requestAnimationFrame(animate);
      
      cubes.forEach((cube, index) => {
        // Плавное следование за курсором X и Y
        if (cube.userData.falling === undefined) {
          cube.position.x += (mouse.x * 3 - cube.position.x) * 0.1;
          cube.position.y += (-mouse.y * 3 - cube.position.y) * 0.1;
          
          if (time - lastDropTime > dropInterval && index === 0) {
            cube.userData.falling = true;
            cube.userData.fallSpeed = 0;
            lastDropTime = time;
          }
        } 
        // Падение Z
        else {
          cube.userData.fallSpeed += gravity;
          cube.position.z += cube.userData.fallSpeed;
          
          if (cube.position.z < -5) {
            cube.position.z = -index * 0.5;
            delete cube.userData.falling;
          }
        }
        
        cube.rotation.x += 0.003;
        cube.rotation.y += 0.004;
      });
      
      renderer.render(scene, camera);
    };

    //Настройка камеры
    camera.position.z = 5;
    animate(0);

    //Очистка
    return () => {
      window.removeEventListener('mousemove', handleMove);
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" />;
};

export default FallingCubesCursor;