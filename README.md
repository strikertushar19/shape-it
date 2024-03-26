# Website link

Website : https://shape-it-one.vercel.app

## Set up the project
- 1. Make a folder in your local laptop with any name you like 
- 2. open it in visual studio code 
- 3. open vs code terminal if you are saying the last name of path as your above step 1 folder you are in right directory.
- 4. put below command which will clone the repository.
 ```bash
  git clone https://github.com/strikertushar19/shape-it.git
 ```

- 5. now open the folder shape it with command in terminal
```bash 
cd shapeit
```

- 6. Install dependencies make sure you have node js installed if required install latest version but(only if required may be it work with old one too)

Command to install 
```bash
npm install
```


## Getting Started Run server
Run server at localhost:8000
```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


Plan First-
In jee folder inside are three folders and we have to edit only page.js in the respective folder in
three folders inside jee folder which is inside the  app other setup is already done .

### Approach 1
We will search the chapter wise all previous year questions and add them suitably to the respective folder.

Right now i have just created the main subjects we will be required to make other chapters inside the folders for every chapter there is folder with that name inside the physics , chemistry and maths folder and in those folder every folder has only one file page.jsx which will act as a new page which will be going to create.



## Concept of links and pages folder structure
Unlike in html where we divide the content in different html files 
in the next js we create pages and how do we create them is the main folder in whcich our route components is 
present in that folder we create other folders which will act as links but catch is that in next js folder ahs only one page.js file
 in it which act as link for that particular page and if we want to create different pages inside that particular page we simply have to create folders inside that folder and in those respective folders the respective one page.js file.
 
shapeit/
├── app/
│   ├── components  // components folder
│   ├── jee/
│   │   └── chemistry
|   |   |   |___page.js
|   |   |
│   |   |── maths
|   |   |   |___page.js
|   |   |
│   |   |── physics
|   |   |   |___page.js
│   │   |___page.js // this is page.js of jee folder and inside this we will have it's own content also the routes for chem,math,phy
│   └── page.js  // app has it's own page.js so it is main that means it is root url which means content inside this page.js of app 
|                //folder will show to us on home url which is often "/" denoted by this and next js default port home url is 
|                //localhost:3000
├── public/        // Static assets (images, fonts, etc.)
└── ...            // Other project files (styles, configuration)

### How to contribute to code
Never contribute directly on main branch

Step -1:
Check which branch you are working on (it will shown in terminal as green by terminal means vscode terminal)

Enter command in terminal
```bash
git branch
```
By default you are  on branch main as you clone if not use step-2 to go to main and check by again 
entering step-1 command

Step -2
```bash
git checkout main
```
Now from main branach you will cut out your branch 

The below command will cut out a branch from main with all the content whcich main has right now whether commited or not

What does commit do is ?
It save all the cahnges you have done in files in the git repository of your folder which is attached to you.
But before doing commit you must always add the files those command i will show down

step-3
Cut you branch
```bash
git checkout -b your_branch_name
``` 
check with step -1 
```bash
git branch
```
so yeah you are on your branch now.
now do your changes you want to do in files on this branch and then 
after that

step-4
add files
```bash
git add .
```
step-5
```bash
git commit -m "my changed files and things i did"
```
keep the sentence inside commit not very long just maximum to 10 words

step-6
Next command
```bash
git push origin your_branch_name
```
After this a request to create pull request will be created on 
this repo https://github.com/strikertushar19/shape-it.git open it 
and click on the button which create pr after that add your details and there is create merge request green button which you have to click and create it when done i will review it and merge your pr and this way your contribution is done
You might think that this is complicated but one you do 2-3 times you can do in just couple of seconds raising pr and merging it .