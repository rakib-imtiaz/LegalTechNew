Below is the detailed **UI Documentation** in Markdown format for your **AI-based LegalTech Platform** (NomosAI), using the MERN stack. This includes specific aspects of the layout, component placement, button sizes, measurements, and UI practices based on industry standards.

---

# NomosAI - AI-based LegalTech Platform UI Documentation

## 1. **Overview**

This document outlines the front-end UI design specifications for **NomosAI**, an AI-powered legal tech platform. The design follows modern UI/UX principles, prioritizing a clean, intuitive, and professional interface. The design will utilize the **MERN stack** (MongoDB, Express.js, React.js, Node.js) for development.

## 2. **UI Structure**

### 2.1 **General Layout**

* **Page Layout**: The UI is designed with a **two-column** structure: a **collapsible side panel** on the left and the **main content area** on the right.
* **Header**: Fixed at the top, it contains the logo, navigation links (Home, Dashboard, Settings), and user profile dropdown.
* **Footer**: Contains legal disclaimers, privacy policy, terms of service, and contact info.

### 2.2 **Responsive Design**

* **Breakpoints**:

  * **Desktop**: Full layout with side panel and main content.
  * **Tablet**: Side panel collapses into a hamburger menu.
  * **Mobile**: Full-screen layout with a collapsible menu for navigation.

---

## 3. **UI Elements**

### 3.1 **Side Panel**

* **Width**: 250px for desktop view, collapsible to 50px (icon-only) when hidden.
* **Content**: Icons and labels for navigation (Dashboard, Case Glancer, Document Drafter, Legal Research Assistant, Settings).
* **Hover Effect**: The background color will change to **#1ABC9C** (Teal) on hover.
* **Transition**: 300ms ease-in-out for smooth sliding in and out.
* **Placement**:

  * Icons should be vertically aligned in the center of the panel.
  * The labels will appear on hover when the panel is in its full width.

**Example (for Desktop)**:

* **Collapsed**:

  * Width: 50px, only icons visible.
  * Height: 100% of screen height.
* **Expanded**:

  * Width: 250px, with labels visible next to icons.

### 3.2 **Header**

* **Height**: 70px.
* **Content**:

  * Left: **Logo** (100px width).
  * Center: **Navigation Links** (Home, Dashboard, etc.).
  * Right: **Profile Menu** (dropdown with user info and settings).

  **Design**:

  * **Logo**: 100px width, with a fixed height.
  * **Navigation Links**: Spaced 20px apart.
  * **Profile Dropdown**: 40px width icon (user profile) with a dropdown menu when clicked.

### 3.3 **Main Content Area**

* **Width**: Takes up 75% of the page width on desktop and full width on mobile.
* **Layout**: Cards or sections for Case Viewer, Document Drafter, Legal Research Assistant, etc.
* **Spacing**: 20px padding around each section. 40px spacing between rows.
* **Buttons**: Primary buttons should be **50px height**, **180px width**. Secondary buttons will be **40px height**, **150px width**.
* **Font**: The primary text font size will be 16px for body text, 24px for headings.

---

## 4. **Components Design**

### 4.1 **Case Viewer**

* **Upload Area**:

  * **File Drag-and-Drop Area**: 300px by 100px. This area will have a dotted border (#BDC3C7) and an upload icon in the center.
  * **File Selector Button**: 50px by 200px with text: "Upload File".
* **Summary Box**:

  * **Height**: 200px.
  * **Width**: 100% of the main content width.
  * **Text**: Display the 3-4 line case summary in **16px font size**.

### 4.2 **Document Drafter**

* **Rich Text Editor**:

  * **Width**: 100% of the screen width (on desktop). The editor should have a fixed height of **600px**.
  * **Toolbar**: Above the text editor, with buttons for bold, italics, underline, text alignment, and adding links.
* **Buttons**:

  * **Generate Draft Button**: 50px height, 180px width, teal-colored button with white text: "Generate Draft".
  * **Download Button**: 50px height, 180px width, gray-colored button with white text: "Download".

### 4.3 **Client Intake System**

* **Voice-to-Text Interface**:

  * **Recording Button**: Circular button with a **40px radius**. Hover effect turns the button red.
  * **Transcription Box**: Display the transcribed text as a scrolling container, 100% width, with **500px height**.
  * **Summary Generation**: After transcription, a **3-line summary** with the option to forward it to the lawyer. Each line will have a 16px font size.

### 4.4 **AI Chat Interface (Legal Research Assistant)**

* **Input Area**:

  * **Text Input Field**: 300px width, 50px height. The placeholder text will say, "Ask your legal question…".
  * **Send Button**: **40px height** and **120px width**, located on the right of the input field.
* **Message Display**: The chat messages will be displayed in bubbles, with alternating background colors (gray for the user, teal for AI).

  * **Message Bubble Width**: 80% of the screen width.
  * **Message Font Size**: 16px for normal text, 14px for timestamps.

---

## 5. **Button Design & Placement**

### 5.1 **Primary Buttons**

* **Size**:

  * **Height**: 50px.
  * **Width**: 180px.
  * **Color**: Teal background (#1ABC9C), white text.
  * **Hover**: Light Teal background.
* **Placement**: Place primary buttons towards the bottom of forms or sections to indicate the next action, e.g., "Generate Draft", "Submit Case".

### 5.2 **Secondary Buttons**

* **Size**:

  * **Height**: 40px.
  * **Width**: 150px.
  * **Color**: Light Gray background (#BDC3C7), white text.
  * **Hover**: Darker Gray background.
* **Placement**: Secondary buttons will be placed next to the primary button or in settings for optional actions, e.g., "Clear Fields", "Cancel".

### 5.3 **Floating Action Button**

* **Size**: 60px radius.
* **Color**: Teal (#1ABC9C).
* **Icon**: Use an icon like a plus sign ("+").
* **Placement**: Positioned at the bottom-right corner of the screen.

---

## 6. **Interaction Design**

### 6.1 **Transitions & Animations**

* **Panel Transitions**: Use a 300ms ease-in-out transition for the side panel’s collapse/expand animation.
* **Button Hover Effect**: Buttons should change color with a smooth 200ms transition on hover.
* **Text Field Focus**: Input fields will have a soft border glow on focus, lasting 150ms.

### 6.2 **Modal Windows**

* **Size**: 400px by 300px.
* **Background**: Semi-transparent overlay, with a light gray background for the modal.
* **Placement**: Center of the screen.

---

## 7. **Color Palette**

* **Primary Colors**:

  * **Teal**: #1ABC9C
  * **Navy Blue**: #0D1B2A
  * **Gold**: #F1C40F
  * **White**: #FFFFFF
  * **Gray**: #BDC3C7
* **Hover Effects**: Each button or link will have a slight color change (lighter shade of the primary color).

---

## 8. **Conclusion**

This document outlines the **detailed front-end UI design** for **NomosAI**. The design emphasizes **professionalism**, **clarity**, and **efficiency**. The button sizes, placement, and UI components are based on industry-standard best practices for **responsive**, **user-centered design**. This ensures an intuitive experience for all user types (lawyers, clients, and admins).
