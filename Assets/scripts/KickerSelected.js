#pragma strict

var initialColor : Color;
var selected : boolean = false;

function Start () {
	initialColor = renderer.material.color;
}

function OnMouseDown():void
{ 
    var clickedTag:String = gameObject.tag;
 
    if(clickedTag == "Kicker") selected = !selected;
}

function Update () {
	
	if(selected)
	{
		renderer.material.color = Color.red;
		if(Input.GetKeyDown ("delete") || Input.GetButtonDown("Y"))
			Destroy(gameObject);
	}
	else
		renderer.material.color = initialColor;
}