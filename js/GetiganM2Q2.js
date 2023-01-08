const scene = new THREE.Scene();
// scene.background = new THREE.Color("#00000");
const camera = new THREE.OrthographicCamera();

let xSpeed = 0.0030;
let ySpeed = 0.0030;
let dvdBounce = 7;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( 800, 800);
document.body.appendChild(renderer.domElement);

const planeGeometry = new THREE.PlaneGeometry(0.35, 0.2);
const planeMaterial = new THREE.MeshBasicMaterial( {color: 0x00ff00, side:  THREE.DoubleSide} );
const dvd = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(dvd);

camera.position.z = 1;
console.log("Position of x: " + dvd.position.x);

function dvdBounceLeft() {
    dvdBounce -=1;
    console.log("BOUNCES LEFT: " +dvdBounce);
}
function stop() {
    xSpeed = 0;
    ySpeed = 0;
}

function animate() {
    requestAnimationFrame(animate);

    dvd.position.x += xSpeed;
    if (dvd.position.x > 0.85) {
        xSpeed = -0.0030;
        dvd.material.color.set("#31ACB2");
        dvd.scale.x -= 0.15;
        dvd.scale.y -= 0.15;
        dvdBounceLeft();
    }
    if (dvd.position.x < -0.90) {
        xSpeed = 0.0030;
        dvd.material.color.set("#D54127");
        dvd.scale.x -= 0.15;
        dvd.scale.y -= 0.17;
        dvdBounceLeft();
    }
    dvd.position.y += ySpeed;
    if (dvd.position.y < -0.82) {
        ySpeed = 0.0030;
        dvd.material.color.set("#CD27D5");
        dvd.scale.x -= 0.15;
        dvd.scale.y -= 0.15;
        dvdBounceLeft();
    }
    dvd.position.y += ySpeed;
    if (dvd.position.y > 0.90) {
        ySpeed = -0.0030;
        dvd.material.color.set("#EFFB2B");
        dvd.scale.x -= 0.15;
        dvd.scale.y -= 0.16;
        dvdBounceLeft();
    } else if (dvdBounce <=0) {
        dvd.visible = false; stop();
    }
    // let x = 0;
    // let y = 0;
    // labelCancelLoops: while (true) {
    //     console.log('Outer loops: ', x);
    //     x += 1;
    //     y = 1;
    //     while (true) {
    //       console.log('Inner loops: ', y);
    //       y += 1;
    //       if (y === 6 && x === 6) {
    //         break labelCancelLoops;
    //       }
    // else if (y===6) {break;}
    //     }
    // }
    renderer.render(scene, camera);
}
animate();
