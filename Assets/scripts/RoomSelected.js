#pragma strict

var selected : boolean = false;
var initialColor : Color;

function Start()
{
	initialColor = renderer.material.color;
}

function OnMouseDown():void
{ 
    var clickedTag:String = gameObject.tag;
 
    if(clickedTag == "Room") selected = !selected;
    
}

function Update()
{
	if(selected)
	{
		if (Input.GetKeyDown ("g") || Input.GetButtonDown("A"))
		{
			renderer.material.color = Color.green;
		}
		
		if (Input.GetKeyDown ("b") || Input.GetButtonDown("X"))
		{
			renderer.material.color = Color.blue;
		}
		
		if (Input.GetKeyDown ("l") || Input.GetButtonDown("B"))
		{
			renderer.material.color = initialColor;
		}
	}
}

function OnGUI(){
	if(selected)
	{
	    GUI.Label(Rect(Screen.width/4 - 110/2,Screen.height / 2 + 10,Screen.width,Screen.height),"Room Selected");
		GUI.Label(Rect((Screen.width - Screen.width/4) - 110/2,Screen.height / 2 + 10,Screen.width,Screen.height),"Room Selected");
	}
}
