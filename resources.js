function Load() {
	CheckCompatibility();
	objs = new Array();

	objs.push(new Item("resources/10.png", "RoboPost", "A Final Project for Robotics. Featured in the BC Tech Summit 2018.", "RoboPost"));
	objs.push(new Item("resources/9.png", "MeetScribe", "The winning project for the Vancouver Global AI Hackathon. A smart assistant for your meetings.", "MeetScribe"));
	objs.push(new Item("resources/Corbin/logo.png", "Corbin Hale", "Musicalize your Dreams! A beautiful vintage website and logo.", "CorbinSite"));
	objs.push(new Item("resources/6.png", "Deck App", "Last year, I attempted to create a company with some friends, the Deck App.", "Deck-App"));
	objs.push(new Item("resources/2.png", "Daisy", "As a gift to another person, I decided to make an artistic gift. Instead of painting on canvas or strumming on a guitar, I decided to use the Web.", "Daisy-Art"));
	objs.push(new Item("resources/4.png", "Illustrations", "Although I don't consider myself to be an illustrator, I like to make some when I have free time.", "Illustrations"));
	objs.push(new Item("resources/1.png", "Logos", "Logos are unique and beautiful, they symbolize the values, the virtues of a product. Logo design is one of my favorite kinds of design. Here are some logo sketches I made in the past.", "Logo-Sketches"));
	objs.push(new Item("resources/8.png", "This Website", "Like what you see? I also hand made this website.", "My-Website"));
	//objs.push(new Item("resources/7.png", "X-Arch", "X-Arch is a Javascript framework that makes cross thread calls a breeze.", "Illustrations"));
	
	Articles = new Array();
	
	Articles["Tic-Tac-Tic"] = "articles/Tic-Tac-Tic/index.html";
	Articles["Share-a-Bar"] = "articles/Share-a-Bar/index.html";
	Articles["Logo-Sketches"] = "articles/Logo-Sketches/index.html";
	Articles["Illustrations"] = "articles/Illustrations/index.html";
	Articles["Daisy-Art"] = "articles/Daisy-Art/index.html";
	Articles["Deck-App"] = "articles/Deck-App/index.html";
	Articles["CorbinSite"] = "articles/CorbinSite/index.html";
	Articles["About-Me"] = "articles/About-Me/index.html";
	Articles["Contact-Me"] = "articles/Contact-Me/index.html";
	Articles["My-Website"] = "articles/My-Website/index.html";
	
	Articles["MeetScribe"] = "articles/MeetScribe/index.html";
	Articles["meetscribe"] = "articles/MeetScribe/index.html";
	Articles["Meetscribe"] = "articles/MeetScribe/index.html";
	Articles["meetScribe"] = "articles/MeetScribe/index.html";
	Articles["MEETSCRIBE"] = "articles/MeetScribe/index.html";
	
	Articles["RoboPost"] = "articles/RoboPost/index.html";
	Articles["robopost"] = "articles/RoboPost/index.html";
	Articles["Robopost"] = "articles/RoboPost/index.html";
	Articles["roboPost"] = "articles/RoboPost/index.html";
	Articles["ROBOPOST"] = "articles/RoboPost/index.html";
	
	Categories = new Object();
	
	//Remake Categories
	Categories["All"] = [objs[0], objs[1], objs[2], objs[3], objs[4], objs[5], objs[6], objs[7]];
	Categories["Design"] = [objs[1], objs[2], objs[3], objs[4], objs[5], objs[6], objs[7]];
	Categories["Entrepreneurship"] = [objs[3]];
	Categories["Development"] = [objs[0], objs[1], objs[2], objs[3], objs[7]];
	
	Resize();
	SortItems(objs);
	GoHash(location.hash);
}
