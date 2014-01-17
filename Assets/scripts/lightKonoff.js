var light1:Light;

var maxIntensity: float = 10; //max
var minIntensity: float = 1; //min
var changeSpeed: int = 5;

private var lightOn : boolean = true;
private var pScript : KickerSelected;

function Start()
{
	pScript = transform.parent.GetComponent(KickerSelected);
}
function Update () {
	
	if ((Input.GetKeyDown ("p")|| Input.GetButtonDown("A")) && pScript.selected)
	{
		lightOn = !lightOn;
		
		light1.enabled = lightOn;
		
	}
	
	if(pScript.selected && lightOn)
	{
		if (Input.GetKey ("left")|| Input.GetButton("LeftBumper") )
			light1.spotAngle -= 2;
		if (Input.GetKey ("right")|| Input.GetButton("RightBumper"))
			light1.spotAngle += 2;
		light1.intensity = Mathf.Clamp(light1.intensity + Input.GetAxis("Mouse ScrollWheel")*changeSpeed, minIntensity, maxIntensity);
	}
}