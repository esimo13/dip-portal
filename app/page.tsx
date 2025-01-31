"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { useState } from "react";

// Sample project data - in a real app, this would come from an API or database
const projects = [
  {
    id: 1,
    name: "Group 1",
    title: "color sense using python",
    description: "Roll: 2025, 2051, 2072",
    image: "/images/Group1.jpg",
    category: "AI",
    detailedDescription:
      "Color Sense is an interactive Python-based application that lets users upload images, pick colors by clicking on pixels, and view their RGB and HSV values. Built with Tkinter, OpenCV, and NumPy, it serves as a practical tool for designers and an educational resource for understanding color spaces and image processing.",
    technologies: ["OpenCV", "NumPy", "Tkinter", "Python"],
    projectUrl: "https://youtu.be/lcI60198BHs",
  },
  {
    id: 2,
    name: "Group 2",
    title: "Image encryption ",
    description: "Roll: 2207, 2205, 2074",
    image: "/images/Group2.jpg",
    category: "Encryption",
    detailedDescription:
      "In this project, I built an image encryption system using Python to protect images from unauthorized access. The core idea is to convert an image into an unreadable format using encryption algorithms like AES or XOR. Only those with the correct decryption key can recover the original image, making it ideal for secure sharing or storage of sensitive visual data. The project leverages Python libraries such as OpenCV for handling images and PyCryptodome for implementing encryption algorithms, ensuring confidentiality and privacy in digital images.",
    technologies: ["Python", "React Native", "TensorFlow", "AWS"],
    projectUrl: "https://youtu.be/l3xTn3-z6JU",
  },
  {
    id: 3,
    name: "Group 3",
    title: "visualize and manipulate 3D medical images",
    description: "Roll: 2026, 2038, 2078",
    image: "/images/Group3.png",
    category: "ML",
    detailedDescription:
      "An accessible web-based tool for viewing and analyzing 3D medical images, specifically MRI and PET scans. The user-friendly interface allows for seamless navigation and interaction with images, including slicing, rotating, and applying filters. Supporting various image formats, this tool empowers researchers and clinicians with powerful visualization and analysis capabilities.",
    technologies: ["Python", "Streamlit", "Scikit-image", "Matplotlib"],
    projectUrl: "https://youtu.be/rnE_48SIs3w",
  },
  {
    id: 4,
    name: "Group 4",
    title: "Traffic signs detection and classification in real time",
    description: "Roll: 2029 , 2030 , 2049",
    image: "/images/Group4.jpg",
    category: "ML",
    detailedDescription:
      "The goal of the Real-Time Traffic Sign Detection and Classification project is to create an intelligent system that successfully detects and categorizes traffic signs from live video streams using Python, Convolutional Neural Networks (CNNs), and OpenCV. The system analyses video frames from a webcam or other visual input, finds traffic signs in the area, and groups them into predefined types including warning signs, stop signs, and speed limits.The system seeks to offer a dependable solution for applications in driver assistance systems, autonomous driving, and traffic monitoring by fusing the capabilities of CNNs for feature extraction with OpenCV for effective real-time video processing.",
    technologies: ["Python", "CNN", "OpenCV"],
    projectUrl: "https://youtu.be/wpM2kg75uN4",
  },
  ,
  {
    id: 5,
    name: "Group 5",
    title: "Secure Data Hiding Using Image Steganography",
    description: "Roll: 2027, 2062, 2085",
    image: "/images/Group5.png",
    category: "Steganography",
    detailedDescription:
      "This project aims to create a Python-based system that can securely hide sensitive information within digital images using the Least Significant Bit (LSB) technique. The goal is to embed data in a way that keeps the image looking unchanged, ensuring the hidden messages remain invisible and can only be accessed with the right key or algorithm. By focusing on simplicity and effectiveness, the project seeks to improve data security and privacy while testing how well this method works in different scenarios.",
    technologies: ["Python", "Python Pillow", " Python Tkinter"],
    projectUrl: "https://youtu.be/-F45qZkTmPU",
  },
  ,
  {
    id: 6,
    name: "Group 6",
    title: "Cryptographic Secure Image Messaging",
    description: "Roll: 2070, 2071, 2082",
    image: "/images/Group6.png",
    category: "ML",
    detailedDescription:
      "The project aims to develop a secure image messaging system that addresses concerns about privacy and security in digital communication. The system will employ robust cryptographic techniques like AES or RSA to encrypt images before transmission, ensuring only authorized recipients can decrypt and view them. By implementing user authentication and secure transmission protocols, the system will safeguard images from interception and tampering. The project will be rigorously tested to evaluate its robustness, encryption speed, and overall security level, contributing to a more secure and private digital communication environment.",
    technologies: ["Next.js", "Ethereum", "IPFS", "Three.js"],
    projectUrl: "https://youtu.be/fc0tIFGe9dQ",
  },
  ,
  {
    id: 7,
    name: "Group 7",
    title: "Pneumonia Detection from X-ray Images",
    description: "Roll: 2034, 2053, 2083",
    image: "/images/Group7.png",
    category: "ML",
    detailedDescription:
      "This project focuses on developing a web-based application for detecting pneumonia from chest X-ray images. The application processes X-ray scans to classify them as either normal or pneumonia-affected using a deep learning-based convolutional neural network (CNN). Builds a web-based pneumonia detection system using chest X-ray images. A CNN model with confidence-aware anomaly detection classifies scans as normal or pneumonia-affected. Developed with Python (TensorFlow) for the backend and Streamlit for the frontend, it ensures efficient processing and an interactive user experience for real-time diagnosis. The system leverages data augmentation techniques to enhance model robustness and accuracy. Its user-friendly interface allows easy image uploads, providing quick and reliable results to assist in early medical intervention.",
    technologies: ["Next.js", "Ethereum", "IPFS", "Three.js"],
    projectUrl: "https://youtu.be/49EbtKCQ-cw",
  },
  ,
  {
    id: 8,
    name: "Group 8",
    title: "Zphotoeditor:Advanced Image Enhancement & Manipulation",
    description: "Roll: 2036, 2037, 2052",
    image: "/images/Group8.png",
    category: "AI",
    detailedDescription:
      "Zphotoeditor is an AI-powered photo editing application designed for Android, combining the capabilities of Java and Python. It offers advanced editing tools like cropping, filters, frames, stickers, and text, alongside adjustments for exposure, contrast, sharpness, and more. Powered by Python libraries like OpenCV, Pillow, and TensorFlow, it features AI-driven enhancements such as style transfer, object removal. Using Chaquopy, the app integrates Python for advanced image processing while maintaining seamless performance. Users can edit images dynamically and save them to the gallery, providing a robust, efficient, and feature-rich photo editing experience for all.",
    technologies: ["Python", "OpenCV", "Pillow", "TensorFlow"],
    projectUrl: "https://youtu.be/G4CLYF7YSTI",
  },
  ,
  {
    id: 9,
    name: "Group 9",
    title: "Dynamic Edge Detection Using Real-Time Video Processing.",
    description: "Roll: 2023, 2065, 2066",
    image: "/images/Group9.png",
    category: "ML",
    detailedDescription:
      "The Dynamic Edge Detection Using Real-Time Video Processing project focuses on creating a responsive edge detection system that processes live video streams. The project dynamically identifies and visualizes edges in real time using a webcam or other video sources.At its core, the system utilizes the Canny Edge Detection algorithm, a robust method for detecting object boundaries and structural details within frames. This algorithm is implemented with the help of OpenCV, a powerful library for computer vision and image processing tasks.",
    technologies: ["Python", "Matplotlib", "OpenCV"],
    projectUrl: "https://youtu.be/IwllD1cRAIg",
  },
  {
    id: 10,
    name: "Group 10",
    title: "Finger Counting Using Camera",
    description: "Roll: 2031, 2033, 2067",
    image: "/images/Group10.jpg",
    category: "AI",
    detailedDescription:
      "This project utilizes a computer's camera and the Mediapipe library to count the number of fingers a user is holding up in real time. It employs hand-tracking technology to detect hand landmarks, identify which fingers are open or closed, and display the total count. The project also overlays dynamic visuals, such as images representing the count, on the video feed, making it interactive and visually appealing. Ideal for learning computer vision concepts, the project highlights real-time image processing, OpenCV integration, and gesture recognition.",
    technologies: ["Python", "OpenCV", "Mediapipe", "PyCharm"],
    projectUrl: "https://youtu.be/hjsMrB7X6jM",
  },
  {
    id: 11,
    name: "Group 11",
    title: "Colorizing Black and white images",
    description: "Roll: 2028, 2032,  2054",
    image: "/images/Group11.png",
    category: "ML",
    detailedDescription:
      "This project leverages advanced algorithms and Python libraries to automate the colorization process, enabling the restoration of historical photos and enhancing the visual appeal of black-and-white images. In this project, we aim to create a system that accurately predicts and applies colors based on contextual cues within the image.",
    technologies: ["Python", "OpenCV", "Sublime Text Editor"],
    projectUrl: "https://youtu.be/7Mf_dDbN53M",
  },
  {
    id: 12,
    name: "Group 12",
    title: "Flower Color Predictor Using Resnet50",
    description: "Roll: 2044, 2081",
    image: "/images/JU_logo.png",
    category: "ML",
    detailedDescription:
      "The Flower Color Predictor is a machine learning tool that uses uploaded photos to categorize flower hues. Fundamentally, it makes use of the potent ResNet50 model, which has been refined on a unique collection of flower photos to accurately detect colors like orange, pink, and white. Using cutting-edge deep learning techniques, the model was trained in Google Colab before being exported as a `.h5` file for deployment. To load the model, preprocess user-uploaded photos, and produce predictions via an effective API, a Flask-based backend was created. In addition, the user-friendly frontend was constructed using ReactJS, providing an easy-to-use interface that allows users to upload photographs of flowers and get forecasts right away.The interface guarantees a seamless and aesthetically pleasing experience with its high-resolution background and contemporary design features. This project offers a solid solution for flower color classification by combining web development, Python, and machine learning in a smooth manner.",
    technologies: [
      "Deep learning model(resnet50)",
      "python",
      "Flask",
      "ReactJS",
    ],
    projectUrl: "https://youtu.be/yXoRUZTVxuc",
  },
  {
    id: 13,
    name: "Group 13",
    title: "Face Detection and Recognition System",
    description: "Roll: 2035, 2061, 2064",
    image: "/images/Group13.png",
    category: "AI",
    detailedDescription:
      "This project is a face detection and recognition system built using Python and machine learning. It leverages OpenCV for real-time face detection, Pillow and Imutils for image processing, and features a Tkinter-based GUI for ease of use. The system detects faces from images or video streams and validates them against stored facial data for recognition. It's designed for applications like authentication, access control, and security systems.",
    technologies: ["python", "opencv", "tkinter(gui)", "imutils"],
    projectUrl: "https://youtu.be/Oyb76-ih9ig",
  },
  {
    id: 14,
    name: "Group 14",
    title: "Object classification using Deep Learning on CIFAR-10 Dataset",
    description: "Roll: 2058, 2063, 2075",
    image: "/images/JU_logo.png",
    category: "ML",
    detailedDescription:
      "The project proposes developing an object classification system using deep learning on the CIFAR-10 dataset. It involves designing and training a Convolutional Neural Network (CNN) to classify images into 10 categories, optimizing for high accuracy. Techniques like data preprocessing, augmentation, and hyperparameter tuning will be used. Expected outcomes include a robust model achieving above 85% accuracy.",
    technologies: ["python", "opencv", "pillow", " tkinter(gui)"],
    projectUrl: "https://youtu.be/0hDhduxWNfQ",
  },
  {
    id: 15,
    name: "Group 15",
    title: "Attendance Management system using face recognition",
    description: "Roll: 2040 , 2060 , 2076",
    image: "/images/Group15.png",
    category: "AI",
    detailedDescription:
      "The project is a Face Recognition-based Attendance System designed to automate attendance management. It captures and trains images of students to recognize their faces. Users can mark attendance by selecting a subject, ensuring accurate record-keeping. An admin-only feature allows access to view the list of registered students, secured with a password. This system eliminates manual errors, enhances efficiency, and provides a user-friendly solution for attendance tracking.",
    technologies: ["Python", "Tkinter", "Pillow", "SQLite"],
    projectUrl: "https://youtu.be/SRTar1ssUP0",
  },
  {
    id: 16,
    name: "Group 16",
    title: "MoodLens: Captures emotions through a lens.",
    description: "Roll: 2042, 2043, 2046",
    image: "/images/Group16.png",
    category: "AI",
    detailedDescription:
      "This project uses AI to detect emotions from faces in images. It analyzes facial expressions to identify feelings like happiness, sadness, anger, and more. Users can upload an image, and the system quickly detects and displays the dominant emotion. The project is easy to use and works fast, making it useful for applications like improving user experience, understanding emotions, and mental health support. With a clean and simple interface, this project combines technology with human emotion analysis, helping bridge the gap between computers and human interaction.",
    technologies: ["Python", "DeepFace", "Pillow", "Tkinter"],
    projectUrl: "https://youtu.be/x0Tl8UvYhcc",
  },
  {
    id: 17,
    name: "Group 17",
    title: "Brain Tumor Classification",
    description: "Roll: 2055 , 2056,  2057",
    image: "/images/Group17.png",
    category: "Classification",
    detailedDescription:
      "This project focuses on creating a web-based application for detecting brain tumors using MRI images. The application analyzes MRI scans to classify tumors into four categories: glioma, meningioma, pituitary, and no tumor. It leverages deep learning models such as ResNet152, EfficientNetB7, and Xception for accurate image processing and tumor classification. The backend is developed using Python with Flask, ensuring efficient processing and seamless integration. React is utilized for the frontend to deliver a dynamic, responsive user interface. This combination of advanced technologies provides an intuitive and efficient platform for automated brain tumor detection, aiding in early diagnosis and treatment planning.",
    technologies: ["Python", "Flask", "REACT"],
    projectUrl: "https://youtu.be/79BD3DIxz9k",
  },
  {
    id: 18,
    name: "Group 18",
    title: "Plant Leaf Disease Detection",
    description: "Roll: 2194,  2198,  2204",
    image: "/images/JU_logo.png",
    category: "ML",
    detailedDescription:
      "The plant disease detection is to identify and diagnose plant diseases accurately and quickly. This is important to prevent the spread of the disease and to minimize crop loss. Early detection of plant diseases is crucial to prevent the spread of the disease and to minimize crop damage. Disease detection using Machine Learning Algorithms should be reliable and produce consistent results. ",
    technologies: ["Python", "Pandas", "NumPy", ",Scikit-learn"],
    projectUrl: "https://youtu.be/Bd6uQjINvz4",
  },
  {
    id: 19,
    name: "Group 19",
    title: "Image Enhancement Using CLAHE",
    description: "Roll: 2045, 2059, 2069",
    image: "/images/Group19.png",
    category: "ML",
    detailedDescription:
      "An interactive image processing tool with effects like Mosaic, Spanish Castle, and CLAHE. Users can upload images, select desired effects, and view processed results seamlessly.",
    technologies: ["Python", "Flask", "React"],
    projectUrl: "https://youtu.be/ZQm9A1ogaHg",
  },
  {
    id: 20,
    name: "Group 20",
    title: "Skin Cancer Classification Using Capsule Network",
    description: "Roll: 2039, 2047, 2068",
    image: "/images/Group20.png",
    category: "ML",
    detailedDescription:
      "This project is a Skin Cancer Classifiction using Capsule Netwrok designed to classify seven types of skin cancer ( Melanocyticnevi (NV), Melanoma (MEL), Benign keratosis-like lesions (BKL), Basal cell carcinoma (BCC), Actinic keratoses (AKIEC), Vascular lesions (VASC), and Dermatofibroma (DF) ) using dermoscopic images. It employs a Capsule Network model, known for its ability to capture spatial hierarchies in data, ensuring high accuracy in diagnosis. The system features a user-friendly interface built with Gradio, allowing users to easily upload dermoscopic images for analysis. The uploaded image is preprocessed and fed into the trained model, which predicts the cancer type along with a confidence score. This tool aims to assist dermatologists and healthcare professionals in early detection and diagnosis, improving patient outcomes through timely intervention.",
    technologies: ["Python", "TensorFlow", "Keras", "Pillow"],
    projectUrl: "https://youtu.be/6hxJ0megsxk",
  },
  {
    id: 21,
    name: "Group 21",
    title: "Face Emotion Detection Using Python",
    description: "Roll: 2024, 2191, 2206",
    image: "/images/JU_logo.png",
    category: "ML",
    detailedDescription:
      "Recognizing facial expressions would help systems to detect if people were happy or sad as a human being can. This project aims to develop a Face Emotion Detection System using Python. The system captures real-time facial expressions from a webcam or an image and classifies them into different emotions such as happy, sad, angry, surprised, neutral, etc.Real-time Emotion Detection: Uses Python to capture live photo and detect facial expressions.",
    technologies: ["Python", "Numpy", "texteditor", "colabs"],
    projectUrl: "https://youtu.be/fJAXOuhtMD8",
  },
  {
    id: 22,
    name: "Group 22",
    title: "Hand gesture volume control",
    description: "Roll: 2050, 2080, 2084",
    image: "/images/Group22.png",
    category: "AI",
    detailedDescription:
      "This project demonstrates a gesture-based volume control system using OpenCV and Python. It leverages a webcam to capture real-time video and uses computer vision techniques to detect hand gestures. By tracking specific hand landmarks, such as the thumb and index finger, the system calculates the distance between them to adjust the device's volume dynamically. The project integrates OpenCV for image processing and real-time hand tracking, enabling a touch-free, intuitive interface for controlling audio levels.",
    technologies: ["OpenCV", "Pycaw", "Numpy", "MediaPipe"],
    projectUrl: "https://youtu.be/vfbVn0_oL-I",
  },
  {
    id: 23,
    name: "Group 23",
    title: "Face Detection and Recognition System",
    description: "Roll: 2041,2048 ,2077",
    image: "/images/Group23.jpg",
    category: "ML",
    detailedDescription:
      "Using Python and libraries like Cmake, OpenCV,dlib and face-recognition,the project seeks to create a real-time face detection and recognition system. It offers a scalable and effective solution for security, access control, and surveillance by detecting and identifying faces in images or video streams by comparing them with a database of known people. In order to ensure accuracy, speed, and safe data storage using SQLite or JSON, the system is made to handle a variety of situations (lighting, angles, occlusions), as well as big datasets.",
    technologies: ["Python", "Cmake ", "face-recognition"],
    projectUrl: "https://youtu.be/RuqKYmfWQo4",
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    if (!project) return false;
    return (
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-purple-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-purple-800 dark:text-purple-300 mb-4">
            DIP Project Showcase
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Innovative DIP projects from IIT49 students
          </p>
        </div>

        <div className="relative max-w-md mx-auto mb-12">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search projects by name, description, or category..."
            className="pl-10 bg-white dark:bg-gray-800 border-purple-200 dark:border-purple-700 focus:ring-purple-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))} */}
          {/* {filteredProjects
            .filter((project) => project !== undefined) // Ensure project is defined
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))} */}
          {filteredProjects.map((project) =>
            project ? <ProjectCard key={project?.id} project={project} /> : null
          )}
        </div>
      </div>
    </div>
  );
}
