var light1:Light;
var green:Color=Color.green;
var blue:Color=Color.blue;

var maxIntensity: float = 10; //max
var minIntensity: float = 1; //min
var changeSpeed: int = 5;

private var lightOn : boolean = false;


function Update () {

	if (Input.GetKeyDown ("y") || Input.GetButtonDown("Select"))	
	{
		lightOn = !lightOn;
	
		light1.enabled = lightOn;
		
	}
	
	light1.intensity = Mathf.Clamp(light1.intensity + Input.GetAxis("Mouse ScrollWheel")*changeSpeed, minIntensity, maxIntensity);
}
