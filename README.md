# AI Safety Incident Dashboard

A responsive dashboard to **view**, **filter**, **sort**, and **report** AI Safety incidents.

---

## 🌐 Tech Stack
- **Frontend Language**: JavaScript (ES6+)
- **Framework**: React.js (with Vite)
- **Styling**: TailwindCSS

---

## ⚙ Installation Instructions

1. **Clone the repository**
bash
```
git clone https://github.com/your-username/ai-safety-dashboard.git
cd ai-safety-dashboard
cd frontend
```


3. **Install dependencies**
bash
```
npm install
```

5. **Run the app locally**
bash
```
npm run dev
```

7. **Open your browser and visit:**
bash
```
http://localhost:5173
```

---

## 💡 Design Decisions
- **Component-Based Structure**:
  - IncidentDisplay handles listing, filtering, and sorting incidents.
  - ReportIncident handles user inputs to report a new incident.
  
- **Filtering Logic**:
  - Users can filter incidents based on severity levels like Low, Medium, and High, ensuring they focus on relevant cases.

- **Sorting Logic**:
  - Incidents can be sorted by reported date (Newest First or Oldest First) to help users quickly access the most recent or earliest reports.

- **Incident Storage**:
  - Incidents are initially imported from an assets.js(frontend/src/assets/assets.js) file.
  - New incidents are added in-memory for demo purposes.

- **TailwindCSS**:
  - Used for rapid and consistent styling.
  - Focused on keeping the UI simple, accessible, and mobile-friendly.

- **State Management**:
  - React's useState is used for filters, form data, and dynamic list updates.

---

## ⚠ Note

- If you encounter this Error:
![image](/frontend/src/assets/error.png)

* Delete the `node_modules` folder.
* Then run 
bash
```
npm install
npm run dev
```
