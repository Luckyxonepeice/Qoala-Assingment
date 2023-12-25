# Thai ID OCR App Assignment

## Installation
## Usage 
## Parts
## Hosting
## Architecture Components

# FrontEnd GitHub Link
- https://github.com/Luckyxonepeice/qoala-frontend

# Hosting
- https://assingment-thai-id-ocr.netlify.app/  (Frontend+Backend)
- https://assingment-server.onrender.com  (Backend)
  
# Installation

Step1:First clone the Project to Local repository and then cd to the project and
Install The package required 

bash
-git clone https://github.com/yourusername/projectname.git
-cd projectname
-npm install


Replace Link With URL of the repository. Establisg connection with your own Database Connection Link and google vision API.

# Usage
1. Application utilizes Optical Character Recognition (OCR) to analyze thai id cards and extract relevant data. This app  integrate with Google Vision API for OCR processing and then parse the response to interpret the OCR results, returning the final data in JSON format.
2. Along with this Application save the results in the db. Provides a CRUD api to create the ocr data,  can modify some data, filter them or delete certain id cards.

# Parts
1.# User Interface
- Provide a UI to upload a thai id card image in the following format(png, jpeg and jpg).
- File size can not be bigger than 2MB
- Show the output JSON on the UI
- List all success and failed ocr operations
- Provide filter to query to the history of already generated ocr results

## Architecture Components

# The Architecture is Based on the MERN stack Development
- MongoDb: For storing Data
- Express and Node.js : For Backend and Creating the API
- React.js : For the UI/FrontEnd.
  
# User Interface (UI)
Frontend Application: 
1. A user-friendly interface allowing users to upload images and initiate OCR processing.
2. Backend Services
3. API Gateway: Acts as a single entry point for all client requests, routing them to appropriate microservices.

Image Preprocessing Service: Responsible for preprocessing uploaded images,and preparing them for OCR processing.

OCR Engine Service: Core component that integrates OCR algorithms to extract text from images.

Text Processing Service: Further processes extracted text, performs cleanup, formatting, and prepares it for storage or additional processing.

4. Storage and Database
Processed Data Storage: Stores extracted text, metadata, and other relevant information after OCR processing.
