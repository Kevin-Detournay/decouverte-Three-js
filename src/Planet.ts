import * as THREE from "three";

    interface PARAMS{
        size:number,
        color:string|number,
        speed:number,


    }

class Planet {
    scene:THREE.Scene;
    camera:THREE.PerspectiveCamera;
    renderer:THREE.WebGL1Renderer;
    geometry:THREE.SphereGeometry;
    material:THREE.MeshLambertMaterial;
    sphere:THREE.Mesh;
    light:THREE.PointLight;
    size:number
    color:string|number
    speed:number
    map:THREE.TextureLoader;
    constructor(params:PARAMS){
        this.size=params.size;
        this.color=params.color
        this.speed=params.speed
        console.log('Nouvelle planet')
        this.handleResizeWindow=this.handleResizeWindow.bind(this)
        this.animate=this.animate.bind(this)
        this.init()
        
    }
    init(){
        this.scene=new THREE.Scene()
        this.camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1000);
        this.camera.position.z=15
        this.scene.add(this.camera)
        this.geometry = new THREE.SphereGeometry( this.size, 32, 32 );
        this.light=new THREE.PointLight()
        this.light.position.set(50,50,50)
        this.scene.add(this.light)
        this.material = new THREE.MeshLambertMaterial({
            
            map:new THREE.TextureLoader().load('../image/terre.jpg')
        });
        this.sphere = new THREE.Mesh( this.geometry, this.material );
        this.scene.add( this.sphere )
        

        this.renderer=new THREE.WebGL1Renderer()
        this.renderer.setSize(window.innerWidth,window.innerHeight)
        document.body.appendChild(this.renderer.domElement)

        this.renderer.render(this.scene,this.camera),

        window.addEventListener('resize',this.handleResizeWindow)
        this.animate()
    }

    handleResizeWindow(){
       console.log('handleresizewindow')
       this.renderer.setSize(window.innerWidth,window.innerHeight);
       this.renderer.render(this.scene,this.camera);
       this.camera.aspect=window.innerWidth/window.innerHeight;
       this.camera.updateProjectionMatrix();
       
       
    }

    animate(){
        const time =this.getTime()
        this.camera.position.x=Math.cos(time)*15,
        this.camera.position.z=Math.sin(time)*15,
        this.camera.lookAt(this.sphere.position)
        this.renderer.render(this.scene,this.camera);
        requestAnimationFrame(this.animate)

       

    }
    getTime():number{
        return Date.now()/1000*this.speed
    }
}
export default Planet 

