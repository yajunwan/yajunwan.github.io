class link{
  constructor(title,URL,author){
    this.title = title;
    if (!(URL.startsWith("https://"))){
        URL = "https://".concat(URL);
    }
    this.URL = URL;
    this.author = author;
  }
  describe(){
    return `${this.title}, ${this.URL},published by ${this.author}`;
  }
}
let startMenu = "Please enter the index of the following activities you want to perform \n1: Show the list of links. \n2: Add a new link.\n3.Remove an existing link.\n   Type 'q' to terminate the program.";
let inputIndex = prompt(startMenu);
let link_list = [];
while(inputIndex != "q"){
  switch(inputIndex){
    case "1":
      let str = ``;
      for (let link of link_list){
        str+=link.describe();
        str+=`\n`;
      }
      alert(str)
      break;
    case "2":
      let inputTitle = prompt("Please enter the title of the website");
      let inputURL = prompt("Please enter the URL of the website");
      let inputAuthor = prompt("Please enter the author of the website, enter 'Unknown' if you don't know the publisher");
      var newLink = new link(inputTitle,inputURL,inputAuthor);
      link_list.push(newLink);
      break;
    case "3":
      let link_str = ``;
      let i=1;
      for (let link of link_list){
        link_str+=`${i}: `
        link_str+=link.describe();
        link_str+=`\n`;
        i++;
      }
      link_str.slice(0,-1);
      let removeIndex = Number(prompt("Please enter the index of the link you want to remove\n"+link_str));
      link_list.splice(removeIndex-1,1);
      break;
  }
  inputIndex = prompt(startMenu);
  
}