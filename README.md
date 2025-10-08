# 🧪 Edge Detection Viewer — Android + OpenCV + C++ + OpenGL + Web (TypeScript)

This project implements a **real-time edge detection viewer** for Android using **OpenCV (C++)**, **OpenGL ES 2.0**, and **JNI (NDK)** for native processing.  
It also includes a simple **TypeScript-based web viewer** to display a processed image frame for debugging or demonstration.

---

## 📸 Overview

The Android app:
- Captures live camera frames using the **Camera2 API**.
- Sends each frame to native C++ code via **JNI**.
- Performs **Canny Edge Detection** using **OpenCV**.
- Displays the processed frames using **OpenGL ES 2.0**.

The web viewer (in the `/web` folder) simply displays a sample processed image (static) to demonstrate integration of native results with a web-based layer.

---

## 🧩 Tech Stack

### Android Side
- **Kotlin** — for Camera2, UI, and OpenGL setup  
- **OpenCV (C++)** — for edge detection and image processing  
- **JNI (NDK)** — for Java ↔ C++ communication  
- **OpenGL ES 2.0** — for rendering processed textures  
- **CMake** — for native build configuration  

### Web Side
- **TypeScript**  
- **HTML + CSS**  
- **tsc (TypeScript Compiler)** for compiling `main.ts` → `main.js`

---

## ⚙️ Features

✅ Live Camera Feed (via `TextureView`)  
✅ Real-Time Frame Processing (via `JNI` + `OpenCV`)  
✅ Edge Detection (Canny Algorithm)  
✅ OpenGL Rendering of Processed Frames  
✅ Lightweight TypeScript Web Viewer  
✅ Modular Project Architecture  

---

## 🧠 Architecture

**Flow of Frame Data:**
Camera2 API (Kotlin)
↓
Captured Frame (YUV)
↓
JNI Bridge (MainActivity → native-lib.cpp)
↓
C++ (OpenCV) — Edge Detection
↓
Processed Frame (JPG buffer)
↓
OpenGL Renderer — Displays Output


---

## 🧩 Folder Structure

EdgeDetectionViewer/
│
├── app/
│ ├── src/
│ │ ├── main/
│ │ │ ├── cpp/ # Native OpenCV + JNI code
│ │ │ │ ├── native-lib.cpp
│ │ │ │ ├── edge_processor.cpp
│ │ │ │ └── CMakeLists.txt
│ │ │ ├── java/com/example/edgeviewer/ # Android Kotlin source
│ │ │ │ ├── MainActivity.kt
│ │ │ │ ├── CameraHelper.kt
│ │ │ │ └── OpenGLRenderer.kt
│ │ │ └── res/layout/activity_main.xml
│ └── build.gradle
│
├── web/
│ ├── index.html
│ ├── main.ts
│ └── tsconfig.json
│
├── build.gradle
├── settings.gradle
└── README.md


---

## 🔧 Setup Instructions

### 🧱 Android Project

1. **Clone or download** this repository.  
2. Open the project in **Android Studio**.  
3. Make sure the following dependency is added in `app/build.gradle`:

   ```gradle
   implementation 'org.opencv:opencv-android:4.9.0'

