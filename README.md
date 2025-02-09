# Teachable-Machine-Object-Detection-with-MongoDB-Counter
This project is a **web application** that integrates a custom object detection model from [Teachable Machine]



This project is a **web application** that integrates a custom object detection model from [Teachable Machine](https://teachablemachine.withgoogle.com/). The app detects objects via a webcam and updates a **MongoDB database** with a detection counter, which is displayed on a webpage. A **reset button** allows you to reset the detection counter.

---

## 🎯 Features

- **Teachable Machine Integration**: Use a custom image model to detect objects.
- **MongoDB Integration**: Count detections and store the count in MongoDB.
- **Real-Time Display**: View the updated detection count live on the webpage.
- **Reset Counter**: Reset the counter with the click of a button.

---

## 🛠️ Technologies Used

- **Teachable Machine**: For training the object detection model.
- **Node.js**: Backend server handling MongoDB interactions.
- **Express.js**: Framework to build the web server.
- **MongoDB**: NoSQL database used to store detection count.
- **JavaScript**: To interact with the Teachable Machine model and handle the counter.

---

## 🚀 Installation

### Prerequisites

Before setting up, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (Version 14 or higher recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (or use MongoDB Atlas for cloud storage)
- A **web browser** (to test the app)

### Steps to Set Up the Project

1. **Download the project**:
   - Go to the GitHub repository of this project: `[https://github.com/your-username/teachable-machine-object-detection](https://github.com/RehamAlhmaidi/Teachable-Machine-Object-Detection-with-MongoDB-Counter.git)`
   - Click on the **"Code"** button and select **"Download ZIP"**.
   - Extract the ZIP file to your desired location on your computer.

2. **Install dependencies**:
   Install the required Node.js packages:
   ```bash
   npm install

---

## Setup

### 3. Set up MongoDB:

#### Locally:
- Ensure MongoDB is running on your machine.
  - You can check if MongoDB is running by opening a terminal and typing:  
    ```bash
    mongo
    ```
  - If MongoDB is not running, start it with:
    ```bash
    sudo service mongod start
    ```

#### MongoDB Atlas:
- Set up a MongoDB Atlas cloud database.
- Copy the MongoDB Atlas connection string and update the `server.js` file with the new URI.

---

### 4. Run the Backend Server:

- In the project folder, run the following command:
  ```bash
  node server.js
  ```
  This will start the server at `http://localhost:3000`.

---

### 5. Open the Webpage:
- Open `index.html` in your web browser. The webpage will interact with the Teachable Machine model and display the detection counter.

  
- image of the webpage:
![Image](https://github.com/user-attachments/assets/e618f2a5-2949-47a0-981a-a3187eb74377)



  
---

## 🧑‍💻 Usage

### Interacting with the Detection Counter:
- The counter updates automatically as objects are detected via the webcam.
- The counter is stored in MongoDB and will persist between page reloads.
- You can reset the counter by clicking the "Reset Counter" button.

### API Endpoints:

- **GET /getCounter**: Retrieve the current detection count from the database.
- **POST /updateCounter**: Update the detection count in the database.
- **POST /resetCounter**: Reset the detection count to 0 in the database.

---

### Example of Using the API:

1. **Get the current counter:**

   ```bash
   curl http://localhost:3000/getCounter
   ```

2. **Update the counter:**

   ```bash
   curl -X POST http://localhost:3000/updateCounter -H "Content-Type: application/json" -d '{"count": 5}'
   ```

3. **Reset the counter:**

   ```bash
   curl -X POST http://localhost:3000/resetCounter
   ```
---

## 🔧 Troubleshooting

### MongoDB Connection Issues:
- If you are using MongoDB locally, ensure MongoDB is running.
- For MongoDB Atlas, verify that the connection string in `server.js` is correct.

### Webcam Issues:
- Ensure that your browser has permission to access the webcam.
- Try reloading the page if the webcam feed isn't showing.


---

## Example of the Project in Action:
**Teachable Machine:**
![Image](https://github.com/user-attachments/assets/01672ceb-d4c2-4466-8133-3741d70af2a2)






**Webpage:**

![Image](https://github.com/user-attachments/assets/5183d735-0112-4b95-8802-65bdb3da0bab)


---

### Steps for Testing:
1. Train your Teachable Machine model for object detection.
2. Open the `index.html` in your browser.
3. Upload images that the model can detect and verify if the counter increases.
4. Check the MongoDB database to ensure the count is updated and persisted across page reloads.
5. Use the "Reset Counter" button to reset the count and verify it works as expected.

---


## 🎯 Conclusion

This project demonstrates the power of combining Teachable Machine for object detection with MongoDB to create a real-time detection counter that persists across page reloads. By utilizing a web interface, users can interact with the detection counter and even reset it when needed. This setup provides a solid foundation for building interactive applications using machine learning and databases.


Happy coding! 👩‍💻👨‍💻

