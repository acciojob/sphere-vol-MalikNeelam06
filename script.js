let radius = document.getElementById('radius');
let volume = document.getElementById('volume');
let vol;
function volume_sphere() {
    //Write your code here
	let r= radius.value;
	vol=(4*Math.pi*Math.pow(r,3))/3;
	volume.value=vol;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
