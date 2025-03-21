# 🎮 Tic-Tac-Toe Game

## 📝 Overview
This is a simple **Tic-Tac-Toe** game built using **HTML, CSS, and JavaScript**. The project focuses on **JavaScript event handling** and UI functionality. 

-  The game allows 1 User to take turns with the Computer marking their spots on a **3x3 grid**.  
-  The winner is determined based on the classic Tic-Tac-Toe rules.  
-  The UI is kept simple, with plans to enhance the design in the future.  

---

## 🎯 Features
✅ **AI Player Mode** – A single-player mode with computer opponent.  
✅ **Dynamic UI Updates** – Board updates automatically after each move.  
✅ **Win Detection** – The game checks for a winner or a draw after every move.  
✅ **Restart Button** – Reset the game anytime with a single click.  
✅ **Interactive Animations** – Smooth UI transitions for an engaging experience.

---

## 📂 Project Folder Structure
Below is the project structure:

```
Tic-Tac-Toe-Game/
│── index.html         # Main HTML file
│── style.css          # CSS styles
│── script.js          # JavaScript logic
│── images/            # Contains images used in the project
│   ├── tic-tac-toe-logo.png
│── README.md          # Project documentation
```


## 🚀 Installation Instructions  

### 1️⃣ Clone this repository:  
```sh
git clone <[repository](https://github.com/28Avantika/TicTacToe.git)>
```  

### 2️⃣ Navigate to the project folder:  
```sh
cd Tic-Tac-Toe-Game
```

### 3️⃣ Open `index.html` in a web browser:  
```sh
start index.html   # Windows
open index.html    # macOS
xdg-open index.html # Linux
```

Alternatively, you can open it using **VS Code Live Server**:
1. Install the **Live Server** extension in VS Code.
2. Open the project folder in VS Code.
3. Right-click on `index.html` and select **"Open with Live Server"**.

---

## 🔄 Game Flow Diagram

```mermaid
graph TD;
    A[Game Start] --> B[Player X Turn]
    B --> C[Check Win/Draw]
    C -->|Winner Found| D[Display Winner]
    C -->|Draw| E[Display Draw Message]
    C -->|No Winner| F[Switch Turn to Player O]
    F --> G[Player O Turn]
    G --> H[Check Win/Draw]
    H -->|Winner Found| D
    H -->|Draw| E
    H -->|No Winner| B
```

---

## 🖼️ UI Preview
Below are some screenshots of the project:

### 🎮 Game Board  
![TicTacToe](screenshots/ss1.png)

### 🏆 Winning Screen & New Game Button  
![TicTacToe](screenshots/ss2.png)

### View
![TicTacToe](screenshots/ss4.png)

---

## 🎨 JavaScript Features
🔹 **Event Handling** – Click events are used for marking the grid.  
🔹 **Win Checking Algorithm** – Checks rows, columns, and diagonals for a win.  
🔹 **Dynamic Class Updates** – CSS classes change based on the player's turn.  
🔹 **DOM Manipulation** – Updates game status messages dynamically.  

---
## 🔮 Future Improvements
🚀 **Enhance UI** – Improve design and add animations.    
🚀 **Leaderboard** – Track game history and player scores.  
🚀 **Dark Mode** – Add a toggle for light/dark theme support.  

---
## 👩‍💻 Author
**Avantika Shende**
---
## 📜 License
This project is for educational purposes only and can be freely used and modified.  
