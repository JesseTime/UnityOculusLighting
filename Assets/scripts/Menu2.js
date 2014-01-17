private var menuOn : boolean = false;
var kicker : GameObject;
var head : GameObject;
var arrilight : GameObject;
var player : GameObject;
var female : GameObject;
var male : GameObject;
private var x : int;
private var y : int;
var scale : int;
function Update(){
	if (Input.GetKeyDown ("m") || Input.GetButtonDown("Start"))
		menuOn = !menuOn;
}

function OnGUI () {
	if(menuOn)
	{
		x = (Screen.width - Screen.width/4) - 110/2;
		y = Screen.height/4;
		// Make a background box
		
		GUI.Box (Rect (x,y,110,210), "Loader Menu");

		var yy : int = y + scale;
		// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
		if (GUI.Button (Rect (x+10,yy,90,20), "Place Head")) {
			var headclone : GameObject;
			headclone = Instantiate(head, Vector3(-20,-23,5), head.transform.rotation);
			headclone.transform.parent = transform;
			headclone.transform.localScale = Vector3(0.2975042,0.2975042,0.2975042);
		}
		yy += scale;
		// Make the second button.
		if (GUI.Button (Rect (x+10,yy,90,20), "Place Male")) {
			var maleclone : GameObject;
			maleclone = Instantiate(male, Vector3(-20,-23,5), male.transform.rotation);
			maleclone.transform.parent = transform;
			maleclone.transform.localScale = Vector3(7,7,7);			
		}
		yy += scale;
		if (GUI.Button (Rect (x+10,yy,90,20), "Place Female")) {
			var femaleclone : GameObject;
			femaleclone = Instantiate(female, Vector3(-20,-23,5), female.transform.rotation);
			femaleclone.transform.parent = transform;
			femaleclone.transform.localScale = Vector3(7,7,7);		
		}
		yy += scale;
		if (GUI.Button (Rect (x+10,yy,90,20), "Place ARRI")) {
			var arrilightclone : GameObject;
			arrilightclone = Instantiate(arrilight, Vector3(-20,-23,5), player.transform.rotation);
			arrilightclone.transform.parent = transform;
			arrilightclone.transform.localScale = Vector3(0.1037911,0.1037911,0.1037912);
		}
		
		yy += scale;
		if (GUI.Button (Rect (x+10,yy,90,20), "Place Kicker")) {
			var kickerclone : GameObject;
			kickerclone = Instantiate(kicker, Vector3(-20,-23,5), player.transform.rotation);
			kickerclone.transform.parent = transform;
			kickerclone.transform.localScale = Vector3(0.117504,0.117504,0.117504);
		}
		
		yy += scale;
		if (GUI.Button (Rect (x+10,yy,90,20), "Quit")) {
			Application.Quit();
		}
	}
}